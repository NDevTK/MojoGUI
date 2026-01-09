// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/mirroring_service.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


// Interface: MirroringService
mirroring.mojom.MirroringServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mirroring.mojom.MirroringService';
  }

  start(params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel) {
    // Method: Start
    // Call: Start(params, max_resolution, observer, resource_provider, outbound_channel, inbound_channel)
  }

  switchMirroringSourceTab() {
    // Method: SwitchMirroringSourceTab
    // Call: SwitchMirroringSourceTab()
  }

  getMirroringStats() {
    // Method: GetMirroringStats
    return new Promise((resolve) => {
      // Call: GetMirroringStats()
      resolve({});
    });
  }

};

mirroring.mojom.MirroringServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
