// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety_service.mojom
// Module: ash.cros_safety.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.mojom = ash.cros_safety.mojom || {};


// Enum: GetCloudSafetySessionResult
ash.cros_safety.mojom.GetCloudSafetySessionResult = {
};

// Enum: GetOnDeviceSafetySessionResult
ash.cros_safety.mojom.GetOnDeviceSafetySessionResult = {
};

// Interface: CrosSafetyService
ash.cros_safety.mojom.CrosSafetyServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_safety.mojom.CrosSafetyService';
  }

};

ash.cros_safety.mojom.CrosSafetyServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
