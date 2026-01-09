// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/vibration_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: VibrationManager
device.mojom.VibrationManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.VibrationManager';
  }

  vibrate(milliseconds) {
    // Method: Vibrate
    // Call: Vibrate(milliseconds)
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

};

device.mojom.VibrationManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VibrationManagerListener
device.mojom.VibrationManagerListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.VibrationManagerListener';
  }

  onVibrate() {
    // Method: OnVibrate
    // Call: OnVibrate()
  }

};

device.mojom.VibrationManagerListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
