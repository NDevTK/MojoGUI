// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: WakeLockType
device.mojom.WakeLockType = {
};

// Enum: WakeLockReason
device.mojom.WakeLockReason = {
};

// Interface: WakeLock
device.mojom.WakeLockPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.WakeLock';
  }

  requestWakeLock() {
    // Method: RequestWakeLock
    // Call: RequestWakeLock()
  }

  cancelWakeLock() {
    // Method: CancelWakeLock
    // Call: CancelWakeLock()
  }

  addClient(wake_lock) {
    // Method: AddClient
    // Call: AddClient(wake_lock)
  }

  changeType(type) {
    // Method: ChangeType
    return new Promise((resolve) => {
      // Call: ChangeType(type)
      resolve({});
    });
  }

  hasWakeLockForTests() {
    // Method: HasWakeLockForTests
    return new Promise((resolve) => {
      // Call: HasWakeLockForTests()
      resolve({});
    });
  }

};

device.mojom.WakeLockRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
