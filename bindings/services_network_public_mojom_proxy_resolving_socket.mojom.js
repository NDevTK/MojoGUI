// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_resolving_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: ProxyResolvingSocketOptions
network.mojom.ProxyResolvingSocketOptions = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Interface: ProxyResolvingSocket
network.mojom.ProxyResolvingSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ProxyResolvingSocket';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  upgradeToTLS(host_port_pair, traffic_annotation, receiver, observer) {
    // Method: UpgradeToTLS
    return new Promise((resolve) => {
      // Call: UpgradeToTLS(host_port_pair, traffic_annotation, receiver, observer)
      resolve({});
    });
  }

};

network.mojom.ProxyResolvingSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProxyResolvingSocketFactory
network.mojom.ProxyResolvingSocketFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ProxyResolvingSocketFactory';
  }

  createProxyResolvingSocket(url, network_anonymization_key, options, traffic_annotation, socket, observer) {
    // Method: CreateProxyResolvingSocket
    return new Promise((resolve) => {
      // Call: CreateProxyResolvingSocket(url, network_anonymization_key, options, traffic_annotation, socket, observer)
      resolve({});
    });
  }

};

network.mojom.ProxyResolvingSocketFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
