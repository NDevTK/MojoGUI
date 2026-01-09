// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/util_win/public/mojom/util_read_icon.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: IconSize
chrome.mojom.IconSize = {
  kSmall: 0,
  kNormal: 1,
  kLarge: 2,
};

// Interface: UtilReadIcon
chrome.mojom.UtilReadIconPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.UtilReadIcon';
  }

  readIcon(file, size, scale) {
    // Method: ReadIcon
    return new Promise((resolve) => {
      // Call: ReadIcon(file, size, scale)
      resolve({});
    });
  }

};

chrome.mojom.UtilReadIconRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
