// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_broker.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: SocketBroker
network.mojom.SocketBrokerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SocketBroker';
  }

  createTcpSocket(address_family) {
    // Method: CreateTcpSocket
    return new Promise((resolve) => {
      // Call: CreateTcpSocket(address_family)
      resolve({});
    });
  }

  createUdpSocket(address_family) {
    // Method: CreateUdpSocket
    return new Promise((resolve) => {
      // Call: CreateUdpSocket(address_family)
      resolve({});
    });
  }

};

network.mojom.SocketBrokerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
