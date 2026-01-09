// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: WakeLockContext
device.mojom.WakeLockContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.WakeLockContext';
  }

  getWakeLock(type, reason, description, wake_lock) {
    // Method: GetWakeLock
    // Call: GetWakeLock(type, reason, description, wake_lock)
  }

};

device.mojom.WakeLockContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
