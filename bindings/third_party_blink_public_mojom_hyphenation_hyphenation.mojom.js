// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hyphenation/hyphenation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: Hyphenation
blink.mojom.HyphenationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.Hyphenation';
  }

  openDictionary(locale) {
    // Method: OpenDictionary
    return new Promise((resolve) => {
      // Call: OpenDictionary(locale)
      resolve({});
    });
  }

};

blink.mojom.HyphenationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
