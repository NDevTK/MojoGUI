// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/document_metadata/document_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WebPage
blink.mojom.WebPage = class {
  constructor(values = {}) {
    this.entities = values.entities !== undefined ? values.entities : "";
  }
};

// Interface: DocumentMetadata
blink.mojom.DocumentMetadataPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DocumentMetadata';
  }

  getEntities() {
    // Method: GetEntities
    return new Promise((resolve) => {
      // Call: GetEntities()
      resolve({});
    });
  }

};

blink.mojom.DocumentMetadataRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
