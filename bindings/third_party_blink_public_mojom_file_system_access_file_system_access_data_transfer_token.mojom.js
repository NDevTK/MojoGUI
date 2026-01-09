// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_data_transfer_token.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessDataTransferToken
blink.mojom.FileSystemAccessDataTransferTokenPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessDataTransferToken';
  }

  getInternalId() {
    // Method: GetInternalId
    return new Promise((resolve) => {
      // Call: GetInternalId()
      resolve({});
    });
  }

  clone(token_clone) {
    // Method: Clone
    // Call: Clone(token_clone)
  }

};

blink.mojom.FileSystemAccessDataTransferTokenRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
