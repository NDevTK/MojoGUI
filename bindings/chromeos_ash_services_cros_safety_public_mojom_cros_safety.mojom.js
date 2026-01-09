// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety.mojom
// Module: ash.cros_safety.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.mojom = ash.cros_safety.mojom || {};


// Enum: SafetyClassifierVerdict
ash.cros_safety.mojom.SafetyClassifierVerdict = {
};

// Enum: SafetyRuleset
ash.cros_safety.mojom.SafetyRuleset = {
  kMantis: 0,
};

// Interface: CloudSafetySession
ash.cros_safety.mojom.CloudSafetySessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_safety.mojom.CloudSafetySession';
  }

};

ash.cros_safety.mojom.CloudSafetySessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OnDeviceSafetySession
ash.cros_safety.mojom.OnDeviceSafetySessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_safety.mojom.OnDeviceSafetySession';
  }

};

ash.cros_safety.mojom.OnDeviceSafetySessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
