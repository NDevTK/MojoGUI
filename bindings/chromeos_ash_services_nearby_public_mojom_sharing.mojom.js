// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/sharing.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Struct: WifiLanDependencies
sharing.mojom.WifiLanDependencies = class {
  constructor(values = {}) {
    this.firewall_hole_factory = values.firewall_hole_factory !== undefined ? values.firewall_hole_factory : null;
    this.mdns_manager = values.mdns_manager !== undefined ? values.mdns_manager : null;
  }
};

// Struct: WifiDirectDependencies
sharing.mojom.WifiDirectDependencies = class {
  constructor(values = {}) {
    this.firewall_hole_factory = values.firewall_hole_factory !== undefined ? values.firewall_hole_factory : null;
  }
};

// Struct: NearbyDependencies
sharing.mojom.NearbyDependencies = class {
  constructor(values = {}) {
  }
};

// Interface: Sharing
sharing.mojom.SharingPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.Sharing';
  }

  connect(deps, nearby_connections, nearby_presence, decoder, quick_start_decoder) {
    // Method: Connect
    // Call: Connect(deps, nearby_connections, nearby_presence, decoder, quick_start_decoder)
  }

  shutDown() {
    // Method: ShutDown
    // Call: ShutDown()
  }

};

sharing.mojom.SharingRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
