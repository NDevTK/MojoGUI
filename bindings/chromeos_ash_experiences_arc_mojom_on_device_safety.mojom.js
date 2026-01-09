// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/on_device_safety.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: GetArcSafetySessionResult
arc.mojom.GetArcSafetySessionResult = {
  kOk: 0,
  kSafetyServiceNotFound: 1,
  kBindSafetyServiceError: 2,
};

// Interface: OnDeviceSafetyHost
arc.mojom.OnDeviceSafetyHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.OnDeviceSafetyHost';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

};

arc.mojom.OnDeviceSafetyHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OnDeviceSafetyInstance
arc.mojom.OnDeviceSafetyInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.OnDeviceSafetyInstance';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  0(session) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(session)
      resolve({});
    });
  }

  1(host_remote) {
    // Method: 1
    // Call: 1(host_remote)
  }

};

arc.mojom.OnDeviceSafetyInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
