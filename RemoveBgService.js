export default class RemoveBgService {
    static async handle(imageUrl) {
        try {
            const blob = await this.removeBg(imageUrl);
            const reader = new FileReader();

            reader.onloadend = function () {
                const base64Data = reader.result.split(",")[1];
                const url = "data:image/png;base64," + base64Data;

                let filename = "photo_no_bg.png";
                try {
                    const urlObj = new URL(imageUrl);
                    let name = urlObj.pathname.substring(urlObj.pathname.lastIndexOf("/") + 1);
                    if (name) {
                        if (!/\.[a-zA-Z0-9]{2,5}$/.test(name)) {
                            name += ".png";
                        }
                        filename = name;
                    }
                } catch {}

                chrome.downloads.download({
                    url: url,
                    filename: filename,
                    saveAs: true
                });
            };

            reader.readAsDataURL(blob);
        } catch (err) {
            console.error(err);
        }
    }

    static removeBg(imageUrl) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get('removebgApiKey', async (result) => {
                const apiKey = result.removebgApiKey;
                if (!apiKey) return reject(new Error("API ключ не найден"));

                const formData = new FormData();
                formData.append("image_url", imageUrl);
                formData.append("size", "auto");

                try {
                    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
                        method: "POST",
                        headers: { "X-Api-Key": apiKey },
                        body: formData
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        return reject(new Error(`Ошибка Remove.bg: ${errorText}`));
                    }

                    const blob = await response.blob();
                    resolve(blob);
                } catch (err) {
                    reject(err);
                }
            });
        });
    }
}
