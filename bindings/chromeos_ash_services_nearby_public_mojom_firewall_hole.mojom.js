// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/firewall_hole.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: FirewallHole
sharing.mojom.FirewallHolePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.FirewallHole';
  }

};

sharing.mojom.FirewallHoleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FirewallHoleFactory
sharing.mojom.FirewallHoleFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.FirewallHoleFactory';
  }

  openFirewallHole(port) {
    // Method: OpenFirewallHole
    return new Promise((resolve) => {
      // Call: OpenFirewallHole(port)
      resolve({});
    });
  }

};

sharing.mojom.FirewallHoleFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
