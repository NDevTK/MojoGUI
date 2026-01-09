// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/lock_screen/lock_screen.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: LockScreenServiceStatus
blink.mojom.LockScreenServiceStatus = {
};

// Interface: LockScreenService
blink.mojom.LockScreenServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LockScreenService';
  }

  getKeys() {
    // Method: GetKeys
    return new Promise((resolve) => {
      // Call: GetKeys()
      resolve({});
    });
  }

  setData(key, data) {
    // Method: SetData
    return new Promise((resolve) => {
      // Call: SetData(key, data)
      resolve({});
    });
  }

};

blink.mojom.LockScreenServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
