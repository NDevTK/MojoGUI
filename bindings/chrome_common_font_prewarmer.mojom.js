// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/font_prewarmer.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: FontPrewarmer
chrome.mojom.FontPrewarmerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.FontPrewarmer';
  }

  prewarmFonts(font_names) {
    // Method: PrewarmFonts
    // Call: PrewarmFonts(font_names)
  }

};

chrome.mojom.FontPrewarmerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RenderFrameFontFamilyAccessor
chrome.mojom.RenderFrameFontFamilyAccessorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.RenderFrameFontFamilyAccessor';
  }

  getFontFamilyNames() {
    // Method: GetFontFamilyNames
    return new Promise((resolve) => {
      // Call: GetFontFamilyNames()
      resolve({});
    });
  }

};

chrome.mojom.RenderFrameFontFamilyAccessorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
