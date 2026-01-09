// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/dhcp_wpad_url_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: DhcpWpadUrlClient
network.mojom.DhcpWpadUrlClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.DhcpWpadUrlClient';
  }

  getPacUrl() {
    // Method: GetPacUrl
    return new Promise((resolve) => {
      // Call: GetPacUrl()
      resolve({});
    });
  }

};

network.mojom.DhcpWpadUrlClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
