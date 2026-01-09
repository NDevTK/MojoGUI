// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_lookup_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: ProxyLookupClient
network.mojom.ProxyLookupClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ProxyLookupClient';
  }

  onProxyLookupComplete(net_error, proxy_info) {
    // Method: OnProxyLookupComplete
    // Call: OnProxyLookupComplete(net_error, proxy_info)
  }

};

network.mojom.ProxyLookupClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
