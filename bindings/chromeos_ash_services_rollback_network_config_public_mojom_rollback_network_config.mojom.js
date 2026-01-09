// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/rollback_network_config/public/mojom/rollback_network_config.mojom
// Module: ash.rollback_network_config.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.rollback_network_config = ash.rollback_network_config || {};
ash.rollback_network_config.mojom = ash.rollback_network_config.mojom || {};


// Interface: RollbackNetworkConfig
ash.rollback_network_config.mojom.RollbackNetworkConfigPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.rollback_network_config.mojom.RollbackNetworkConfig';
  }

  rollbackConfigImport(config) {
    // Method: RollbackConfigImport
    return new Promise((resolve) => {
      // Call: RollbackConfigImport(config)
      resolve({});
    });
  }

  rollbackConfigExport() {
    // Method: RollbackConfigExport
    return new Promise((resolve) => {
      // Call: RollbackConfigExport()
      resolve({});
    });
  }

};

ash.rollback_network_config.mojom.RollbackNetworkConfigRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
