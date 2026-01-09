// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/tcp_socket_factory.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: TcpSocketFactory
sharing.mojom.TcpSocketFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sharing.mojom.TcpSocketFactory';
  }

  createTCPServerSocket(local_addr, port, backlog, traffic_annotation, socket) {
    // Method: CreateTCPServerSocket
    return new Promise((resolve) => {
      // Call: CreateTCPServerSocket(local_addr, port, backlog, traffic_annotation, socket)
      resolve({});
    });
  }

  practice(minutes) {
    // Method: practice
    // Call: practice(minutes)
  }

  createTCPConnectedSocket(timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Method: CreateTCPConnectedSocket
    return new Promise((resolve) => {
      // Call: CreateTCPConnectedSocket(timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer)
      resolve({});
    });
  }

};

sharing.mojom.TcpSocketFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
