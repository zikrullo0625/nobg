document.addEventListener("DOMContentLoaded", () => {
    const firstRunDiv = document.getElementById("firstRun");
    const gotItBtn = document.getElementById("gotIt");
    const apiDiv = document.getElementById("apiSetup");
    const apiKeyInput = document.getElementById("apiKey");
    const saveBtn = document.getElementById("saveBtn");
    const status = document.getElementById("status");

    chrome.storage.local.get("firstRunDone", (res) => {
        if (res.firstRunDone) {
            firstRunDiv.style.display = "none";
            apiDiv.style.display = "block";
        }
    });

    gotItBtn.addEventListener("click", () => {
        firstRunDiv.style.display = "none";
        apiDiv.style.display = "block";
        chrome.storage.local.set({ firstRunDone: true });
    });

    chrome.storage.local.get("removebgApiKey", (res) => {
        if (res.removebgApiKey) apiKeyInput.value = res.removebgApiKey;
    });

    saveBtn.addEventListener("click", () => {
        const key = apiKeyInput.value.trim();
        if (!key) {
            status.textContent = "Введите API ключ!";
            status.style.color = "red";
            return;
        }
        chrome.storage.local.set({ removebgApiKey: key }, () => {
            status.textContent = "API ключ сохранён ✅";
            status.style.color = "green";
        });
    });
});
