// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: WakeLockType
device.mojom.WakeLockType = {
  apps: 0,
  and: 1,
  playing: 2,
  but: 3,
  but: 4,
  this: 5,
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

  cancelWakeLock() {
    // Method: CancelWakeLock
    // Call: CancelWakeLock()
  }

  requestWakeLock() {
    // Method: RequestWakeLock
    // Call: RequestWakeLock()
  }

  lock() {
    // Method: lock
    // Call: lock()
  }

  cancelWakeLock() {
    // Method: CancelWakeLock
    // Call: CancelWakeLock()
  }

  requestWakelock() {
    // Method: RequestWakelock
    // Call: RequestWakelock()
  }

  addClient(wake_lock) {
    // Method: AddClient
    // Call: AddClient(wake_lock)
  }

  client(AddClient() {
    // Method: client
    // Call: client(AddClient()
  }

  state(RequestWakeLock() {
    // Method: state
    // Call: state(RequestWakeLock()
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
