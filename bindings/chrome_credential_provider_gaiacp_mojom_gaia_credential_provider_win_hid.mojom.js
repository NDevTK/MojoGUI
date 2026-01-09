// Auto-generated MojoJS binding
// Source: chromium_src/chrome/credential_provider/gaiacp/mojom/gaia_credential_provider_win_hid.mojom
// Module: gcpw_hid.mojom

'use strict';

// Module namespace
var gcpw_hid = gcpw_hid || {};
gcpw_hid.mojom = gcpw_hid.mojom || {};


// Interface: GaiaCredentialProviderHidBroker
gcpw_hid.mojom.GaiaCredentialProviderHidBrokerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gcpw_hid.mojom.GaiaCredentialProviderHidBroker';
  }

  openDevice(device_path) {
    // Method: OpenDevice
    return new Promise((resolve) => {
      // Call: OpenDevice(device_path)
      resolve({});
    });
  }

};

gcpw_hid.mojom.GaiaCredentialProviderHidBrokerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
