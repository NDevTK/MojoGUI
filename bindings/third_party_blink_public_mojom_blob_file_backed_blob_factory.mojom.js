// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/file_backed_blob_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileBackedBlobFactory
blink.mojom.FileBackedBlobFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileBackedBlobFactory';
  }

  registerBlob(blob, uuid, content_type, file) {
    // Method: RegisterBlob
    // Call: RegisterBlob(blob, uuid, content_type, file)
  }

};

blink.mojom.FileBackedBlobFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
