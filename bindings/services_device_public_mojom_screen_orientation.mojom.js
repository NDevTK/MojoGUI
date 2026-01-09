// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/screen_orientation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: ScreenOrientation
device.mojom.ScreenOrientationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.ScreenOrientation';
  }

  lockOrientation(orientation) {
    // Method: LockOrientation
    return new Promise((resolve) => {
      // Call: LockOrientation(orientation)
      resolve({});
    });
  }

  unlockOrientation() {
    // Method: UnlockOrientation
    // Call: UnlockOrientation()
  }

};

device.mojom.ScreenOrientationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScreenOrientationListener
device.mojom.ScreenOrientationListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.ScreenOrientationListener';
  }

  isAutoRotateEnabledByUser() {
    // Method: IsAutoRotateEnabledByUser
    return new Promise((resolve) => {
      // Call: IsAutoRotateEnabledByUser()
      resolve({});
    });
  }

};

device.mojom.ScreenOrientationListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
