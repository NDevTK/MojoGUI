// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/wake_lock/wake_lock.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WakeLockService
blink.mojom.WakeLockServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WakeLockService';
  }

  getWakeLock(type, reason, description, wake_lock) {
    // Method: GetWakeLock
    // Call: GetWakeLock(type, reason, description, wake_lock)
  }

};

blink.mojom.WakeLockServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
