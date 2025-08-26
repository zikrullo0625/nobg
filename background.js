import RemoveBgService from "./RemoveBgService.js";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "downloadNoBg",
        title: "Download image without background",
        contexts: ["image"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "downloadNoBg") {
        RemoveBgService.handle(info.srcUrl);
    }
});