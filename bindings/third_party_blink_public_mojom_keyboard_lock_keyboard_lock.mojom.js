// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/keyboard_lock/keyboard_lock.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: KeyboardLockRequestResult
blink.mojom.KeyboardLockRequestResult = {
};

// Enum: GetKeyboardLayoutMapStatus
blink.mojom.GetKeyboardLayoutMapStatus = {
};

// Struct: GetKeyboardLayoutMapResult
blink.mojom.GetKeyboardLayoutMapResult = class {
  constructor(values = {}) {
    this.layout_map = values.layout_map !== undefined ? values.layout_map : "";
  }
};

// Interface: KeyboardLockService
blink.mojom.KeyboardLockServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.KeyboardLockService';
  }

  requestKeyboardLock(key_codes) {
    // Method: RequestKeyboardLock
    return new Promise((resolve) => {
      // Call: RequestKeyboardLock(key_codes)
      resolve({});
    });
  }

  cancelKeyboardLock() {
    // Method: CancelKeyboardLock
    // Call: CancelKeyboardLock()
  }

  getKeyboardLayoutMap() {
    // Method: GetKeyboardLayoutMap
    return new Promise((resolve) => {
      // Call: GetKeyboardLayoutMap()
      resolve({});
    });
  }

};

blink.mojom.KeyboardLockServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
