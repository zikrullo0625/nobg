# Remove.bg Browser Extension

This Chrome extension allows you to quickly download photos without backgrounds directly from your browser.

## Features

- Right-click on any image and remove the background via **Remove.bg API**.  
- Works on most websites (except Google Images previews – you need to click on the actual image).  
- Easy setup: specify your free **Remove.bg API key** in the extension pop-up window.  
- Automatically saves the result as PNG with a transparent background.  
- Smart naming: if the original link does not have a file extension, `.png` will be added.  

Perfect for designers, content creators, and anyone who wants to process images quickly without manually uploading them.

## Installation

1. Clone or download this repository.  
2. Open Chrome and navigate to `chrome://extensions/`.  
3. Enable **Developer mode** (toggle in the top right).  
4. Click **Load unpacked** and select the folder with the built extension (`dist/bex-chrome--prod` or your build output).  
5. Click the extension icon and enter your **Remove.bg API key**.

## Usage

1. Navigate to any website with images.  
2. Right-click on the image you want to remove the background from.  
3. Select **“Download image without background”** from the context menu.  
4. The processed image will automatically download as a PNG file with a transparent background.  

## Notes

- Make sure you use the actual image URL; previews on Google Images may not work.  
- Free **Remove.bg API keys** have limited monthly usage. Check [Remove.bg](https://www.remove.bg/api) for details.  

## License

MIT License
