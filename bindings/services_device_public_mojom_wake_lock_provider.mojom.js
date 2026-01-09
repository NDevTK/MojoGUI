// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: WakeLockProvider
device.mojom.WakeLockProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.WakeLockProvider';
  }

  android(WakeLockContextCallback) {
    // Method: Android
    // Call: Android(WakeLockContextCallback)
  }

  getWakeLockContextForID(context_id, context) {
    // Method: GetWakeLockContextForID
    // Call: GetWakeLockContextForID(context_id, context)
  }

  available(not) {
    // Method: available
    // Call: available(not)
  }

  getWakeLockWithoutContext(type, reason, description, wake_lock) {
    // Method: GetWakeLockWithoutContext
    // Call: GetWakeLockWithoutContext(type, reason, description, wake_lock)
  }

  notifyOnWakeLockDeactivation(type, observer) {
    // Method: NotifyOnWakeLockDeactivation
    // Call: NotifyOnWakeLockDeactivation(type, observer)
  }

  getActiveWakeLocksForTests(type) {
    // Method: GetActiveWakeLocksForTests
    return new Promise((resolve) => {
      // Call: GetActiveWakeLocksForTests(type)
      resolve({});
    });
  }

};

device.mojom.WakeLockProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WakeLockObserver
device.mojom.WakeLockObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.WakeLockObserver';
  }

  onWakeLockDeactivated(type) {
    // Method: OnWakeLockDeactivated
    // Call: OnWakeLockDeactivated(type)
  }

};

device.mojom.WakeLockObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
