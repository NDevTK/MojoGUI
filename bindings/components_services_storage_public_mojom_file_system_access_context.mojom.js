// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/file_system_access_context.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: FileSystemAccessContext
storage.mojom.FileSystemAccessContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.FileSystemAccessContext';
  }

  serializeHandle(token) {
    // Method: SerializeHandle
    return new Promise((resolve) => {
      // Call: SerializeHandle(token)
      resolve({});
    });
  }

  deserializeHandle(storage_key, bits, token) {
    // Method: DeserializeHandle
    // Call: DeserializeHandle(storage_key, bits, token)
  }

  clone(receiever) {
    // Method: Clone
    // Call: Clone(receiever)
  }

};

storage.mojom.FileSystemAccessContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
