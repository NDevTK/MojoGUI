// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/pointer_lock_context.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: PointerLockContext
blink.mojom.PointerLockContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PointerLockContext';
  }

  requestMouseLockChange(unadjusted_movement) {
    // Method: RequestMouseLockChange
    return new Promise((resolve) => {
      // Call: RequestMouseLockChange(unadjusted_movement)
      resolve({});
    });
  }

};

blink.mojom.PointerLockContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
