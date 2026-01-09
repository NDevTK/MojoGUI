// Auto-generated MojoJS binding
// Source: chromium_src/components/network_hints/common/network_hints.mojom
// Module: network_hints.mojom

'use strict';

// Module namespace
var network_hints = network_hints || {};
network_hints.mojom = network_hints.mojom || {};


// Interface: NetworkHintsHandler
network_hints.mojom.NetworkHintsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network_hints.mojom.NetworkHintsHandler';
  }

  prefetchDNS(url_list) {
    // Method: PrefetchDNS
    // Call: PrefetchDNS(url_list)
  }

  preconnect(url, allow_credentials) {
    // Method: Preconnect
    // Call: Preconnect(url, allow_credentials)
  }

};

network_hints.mojom.NetworkHintsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
