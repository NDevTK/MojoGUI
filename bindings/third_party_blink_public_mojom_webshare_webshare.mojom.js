// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webshare/webshare.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SharedFile
blink.mojom.SharedFile = class {
  constructor(values = {}) {
    this.blob = values.blob !== undefined ? values.blob : null;
  }
};

// Interface: ShareService
blink.mojom.ShareServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ShareService';
  }

  share(title, text, url, files) {
    // Method: Share
    return new Promise((resolve) => {
      // Call: Share(title, text, url, files)
      resolve({});
    });
  }

};

blink.mojom.ShareServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
