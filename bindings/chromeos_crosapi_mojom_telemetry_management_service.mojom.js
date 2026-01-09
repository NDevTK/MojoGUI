// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_management_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: TelemetryManagementService
crosapi.mojom.TelemetryManagementServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryManagementService';
  }

  0(node_id, gain) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(node_id, gain)
      resolve({});
    });
  }

  1(node_id, volume, is_muted) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(node_id, volume, is_muted)
      resolve({});
    });
  }

};

crosapi.mojom.TelemetryManagementServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
