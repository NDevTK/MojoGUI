// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file/file_utilities.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileUtilitiesHost
blink.mojom.FileUtilitiesHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileUtilitiesHost';
  }

  getFileInfo(path) {
    // Method: GetFileInfo
    return new Promise((resolve) => {
      // Call: GetFileInfo(path)
      resolve({});
    });
  }

};

blink.mojom.FileUtilitiesHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
