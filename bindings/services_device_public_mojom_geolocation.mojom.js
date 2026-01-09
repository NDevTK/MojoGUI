// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: Geolocation
device.mojom.GeolocationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.Geolocation';
  }

  setHighAccuracyHint(high_accuracy) {
    // Method: SetHighAccuracyHint
    // Call: SetHighAccuracyHint(high_accuracy)
  }

  discretion(is) {
    // Method: discretion
    // Call: discretion(is)
  }

  queryNextPosition() {
    // Method: QueryNextPosition
    return new Promise((resolve) => {
      // Call: QueryNextPosition()
      resolve({});
    });
  }

};

device.mojom.GeolocationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
