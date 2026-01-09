// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/system_dns_resolution.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: SystemDnsResolver
network.mojom.SystemDnsResolverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SystemDnsResolver';
  }

  resolve(hostname, addr_family, flags, network) {
    // Method: Resolve
    return new Promise((resolve) => {
      // Call: Resolve(hostname, addr_family, flags, network)
      resolve({});
    });
  }

};

network.mojom.SystemDnsResolverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
