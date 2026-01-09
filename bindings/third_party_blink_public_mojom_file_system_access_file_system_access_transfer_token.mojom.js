// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_transfer_token.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessTransferToken
blink.mojom.FileSystemAccessTransferTokenPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessTransferToken';
  }

  getInternalID() {
    // Method: GetInternalID
    return new Promise((resolve) => {
      // Call: GetInternalID()
      resolve({});
    });
  }

  clone(token_clone) {
    // Method: Clone
    // Call: Clone(token_clone)
  }

};

blink.mojom.FileSystemAccessTransferTokenRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
