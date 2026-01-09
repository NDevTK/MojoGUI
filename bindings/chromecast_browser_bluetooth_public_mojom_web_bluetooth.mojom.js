// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/bluetooth/public/mojom/web_bluetooth.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: BluetoothDeviceAccessProvider
chromecast.mojom.BluetoothDeviceAccessProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.BluetoothDeviceAccessProvider';
  }

  requestDeviceAccess(client) {
    // Method: RequestDeviceAccess
    // Call: RequestDeviceAccess(client)
  }

};

chromecast.mojom.BluetoothDeviceAccessProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothDeviceAccessProviderClient
chromecast.mojom.BluetoothDeviceAccessProviderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.BluetoothDeviceAccessProviderClient';
  }

  grantAccess(address) {
    // Method: GrantAccess
    // Call: GrantAccess(address)
  }

  grantAccessToAllDevices() {
    // Method: GrantAccessToAllDevices
    // Call: GrantAccessToAllDevices()
  }

};

chromecast.mojom.BluetoothDeviceAccessProviderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
