// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/public_ip_address_geolocation_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: PublicIpAddressGeolocationProvider
device.mojom.PublicIpAddressGeolocationProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.PublicIpAddressGeolocationProvider';
  }

  createGeolocation(tag, receiver, client_id) {
    // Method: CreateGeolocation
    // Call: CreateGeolocation(tag, receiver, client_id)
  }

};

device.mojom.PublicIpAddressGeolocationProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
