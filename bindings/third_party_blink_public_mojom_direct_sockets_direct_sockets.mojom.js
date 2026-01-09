// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/direct_sockets/direct_sockets.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DirectTCPSocketOptions
blink.mojom.DirectTCPSocketOptions = class {
  constructor(values = {}) {
    this.remote_addr = values.remote_addr !== undefined ? values.remote_addr : null;
    this.send_buffer_size = values.send_buffer_size !== undefined ? values.send_buffer_size : 0;
    this.dns_query_type = values.dns_query_type !== undefined ? values.dns_query_type : 0;
  }
};

// Struct: DirectConnectedUDPSocketOptions
blink.mojom.DirectConnectedUDPSocketOptions = class {
  constructor(values = {}) {
    this.remote_addr = values.remote_addr !== undefined ? values.remote_addr : null;
    this.send_buffer_size = values.send_buffer_size !== undefined ? values.send_buffer_size : 0;
    this.dns_query_type = values.dns_query_type !== undefined ? values.dns_query_type : 0;
    this.multicast_time_to_live = values.multicast_time_to_live !== undefined ? values.multicast_time_to_live : 0;
    this.multicast_loopback = values.multicast_loopback !== undefined ? values.multicast_loopback : false;
  }
};

// Struct: DirectBoundUDPSocketOptions
blink.mojom.DirectBoundUDPSocketOptions = class {
  constructor(values = {}) {
    this.local_addr = values.local_addr !== undefined ? values.local_addr : 0;
    this.send_buffer_size = values.send_buffer_size !== undefined ? values.send_buffer_size : 0;
    this.ipv6_only = values.ipv6_only !== undefined ? values.ipv6_only : 0;
    this.multicast_allow_address_sharing = values.multicast_allow_address_sharing !== undefined ? values.multicast_allow_address_sharing : false;
    this.multicast_time_to_live = values.multicast_time_to_live !== undefined ? values.multicast_time_to_live : 0;
    this.multicast_loopback = values.multicast_loopback !== undefined ? values.multicast_loopback : false;
  }
};

// Struct: DirectTCPServerSocketOptions
blink.mojom.DirectTCPServerSocketOptions = class {
  constructor(values = {}) {
    this.ipv6_only = values.ipv6_only !== undefined ? values.ipv6_only : 0;
    this.backlog = values.backlog !== undefined ? values.backlog : 0;
  }
};

// Interface: DirectSocketsService
blink.mojom.DirectSocketsServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DirectSocketsService';
  }

  openTCPSocket(options, receiver, observer) {
    // Method: OpenTCPSocket
    return new Promise((resolve) => {
      // Call: OpenTCPSocket(options, receiver, observer)
      resolve({});
    });
  }

  openConnectedUDPSocket(options, receiver, listener) {
    // Method: OpenConnectedUDPSocket
    return new Promise((resolve) => {
      // Call: OpenConnectedUDPSocket(options, receiver, listener)
      resolve({});
    });
  }

  openBoundUDPSocket(options, receiver, listener) {
    // Method: OpenBoundUDPSocket
    return new Promise((resolve) => {
      // Call: OpenBoundUDPSocket(options, receiver, listener)
      resolve({});
    });
  }

  openTCPServerSocket(options, receiver) {
    // Method: OpenTCPServerSocket
    return new Promise((resolve) => {
      // Call: OpenTCPServerSocket(options, receiver)
      resolve({});
    });
  }

};

blink.mojom.DirectSocketsServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
