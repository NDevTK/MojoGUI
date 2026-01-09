// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/blob_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ProgressClient
blink.mojom.ProgressClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ProgressClient';
  }

  onProgress(delta) {
    // Method: OnProgress
    // Call: OnProgress(delta)
  }

};

blink.mojom.ProgressClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BlobRegistry
blink.mojom.BlobRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BlobRegistry';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  register(blob, uuid, content_type, content_disposition, elements) {
    // Method: Register
    // Call: Register(blob, uuid, content_type, content_disposition, elements)
  }

  wrong(enough) {
    // Method: wrong
    // Call: wrong(enough)
  }

  registerFromStream(content_type, content_disposition, length_hint, data, progress_client) {
    // Method: RegisterFromStream
    return new Promise((resolve) => {
      // Call: RegisterFromStream(content_type, content_disposition, length_hint, data, progress_client)
      resolve({});
    });
  }

};

blink.mojom.BlobRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
