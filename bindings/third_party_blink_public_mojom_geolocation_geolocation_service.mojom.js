// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/geolocation/geolocation_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: GeolocationService
blink.mojom.GeolocationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.GeolocationService';
  }

  createGeolocation(receiver, user_gesture) {
    // Method: CreateGeolocation
    return new Promise((resolve) => {
      // Call: CreateGeolocation(receiver, user_gesture)
      resolve({});
    });
  }

};

blink.mojom.GeolocationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
