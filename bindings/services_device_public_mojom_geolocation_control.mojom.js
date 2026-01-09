// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_control.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: GeolocationControl
device.mojom.GeolocationControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.GeolocationControl';
  }

  userDidOptIntoLocationServices() {
    // Method: UserDidOptIntoLocationServices
    // Call: UserDidOptIntoLocationServices()
  }

};

device.mojom.GeolocationControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
