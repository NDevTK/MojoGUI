// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/device_posture/device_posture_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DevicePostureType
blink.mojom.DevicePostureType = {
  kContinuous: 0,
  kFolded: 1,
};

// Interface: DevicePostureProvider
blink.mojom.DevicePostureProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DevicePostureProvider';
  }

  addListenerAndGetCurrentPosture(client) {
    // Method: AddListenerAndGetCurrentPosture
    return new Promise((resolve) => {
      // Call: AddListenerAndGetCurrentPosture(client)
      resolve({});
    });
  }

  overrideDevicePostureForEmulation(posture) {
    // Method: OverrideDevicePostureForEmulation
    // Call: OverrideDevicePostureForEmulation(posture)
  }

  disableDevicePostureOverrideForEmulation() {
    // Method: DisableDevicePostureOverrideForEmulation
    // Call: DisableDevicePostureOverrideForEmulation()
  }

};

blink.mojom.DevicePostureProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevicePostureClient
blink.mojom.DevicePostureClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DevicePostureClient';
  }

  onPostureChanged(posture) {
    // Method: OnPostureChanged
    // Call: OnPostureChanged(posture)
  }

};

blink.mojom.DevicePostureClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
