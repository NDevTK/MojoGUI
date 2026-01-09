// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/disk_allocator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DiskAllocator
blink.mojom.DiskAllocatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DiskAllocator';
  }

  provideTemporaryFile(file) {
    // Method: ProvideTemporaryFile
    // Call: ProvideTemporaryFile(file)
  }

};

blink.mojom.DiskAllocatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
