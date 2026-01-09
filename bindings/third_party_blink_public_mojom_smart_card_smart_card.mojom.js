// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/smart_card/smart_card.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SmartCardService
blink.mojom.SmartCardServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SmartCardService';
  }

  createContext() {
    // Method: CreateContext
    return new Promise((resolve) => {
      // Call: CreateContext()
      resolve({});
    });
  }

};

blink.mojom.SmartCardServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
