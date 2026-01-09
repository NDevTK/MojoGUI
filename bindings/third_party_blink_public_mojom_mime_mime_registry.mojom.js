// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mime/mime_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: MimeRegistry
blink.mojom.MimeRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MimeRegistry';
  }

  getMimeTypeFromExtension(extension) {
    // Method: GetMimeTypeFromExtension
    return new Promise((resolve) => {
      // Call: GetMimeTypeFromExtension(extension)
      resolve({});
    });
  }

};

blink.mojom.MimeRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
