// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_access_handle_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessAccessHandleHost
blink.mojom.FileSystemAccessAccessHandleHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessAccessHandleHost';
  }

  openAccessHandle() {
    // Method: OpenAccessHandle
    // Call: OpenAccessHandle()
  }

  same() {
    // Method: same
    // Call: same()
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

blink.mojom.FileSystemAccessAccessHandleHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
