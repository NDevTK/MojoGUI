// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_modification_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessFileModificationHost
blink.mojom.FileSystemAccessFileModificationHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessFileModificationHost';
  }

  requestCapacityChange(capacity_delta) {
    // Method: RequestCapacityChange
    return new Promise((resolve) => {
      // Call: RequestCapacityChange(capacity_delta)
      resolve({});
    });
  }

  onContentsModified() {
    // Method: OnContentsModified
    // Call: OnContentsModified()
  }

};

blink.mojom.FileSystemAccessFileModificationHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
