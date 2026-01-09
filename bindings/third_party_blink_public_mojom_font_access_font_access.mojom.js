// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_access/font_access.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FontEnumerationStatus
blink.mojom.FontEnumerationStatus = {
  kOk: 0,
};

// Struct: FontData
blink.mojom.FontData = class {
  constructor(values = {}) {
    this.style = values.style !== undefined ? values.style : "";
  }
};

// Interface: FontAccessManager
blink.mojom.FontAccessManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FontAccessManager';
  }

  enumerateLocalFonts() {
    // Method: EnumerateLocalFonts
    return new Promise((resolve) => {
      // Call: EnumerateLocalFonts()
      resolve({});
    });
  }

};

blink.mojom.FontAccessManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
