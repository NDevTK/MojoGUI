// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/restricted_udp_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: RestrictedUDPSocketMode
network.mojom.RestrictedUDPSocketMode = {
  CONNECTED: 0,
  BOUND: 1,
};

// Struct: RestrictedUDPSocketParams
network.mojom.RestrictedUDPSocketParams = class {
  constructor(values = {}) {
    this.connection_tracker = values.connection_tracker !== undefined ? values.connection_tracker : null;
  }
};

// Interface: RestrictedUDPSocket
network.mojom.RestrictedUDPSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.RestrictedUDPSocket';
  }

  joinGroup(group_address) {
    // Method: JoinGroup
    return new Promise((resolve) => {
      // Call: JoinGroup(group_address)
      resolve({});
    });
  }

  leaveGroup(group_address) {
    // Method: LeaveGroup
    return new Promise((resolve) => {
      // Call: LeaveGroup(group_address)
      resolve({});
    });
  }

  receiveMore(num_additional_datagrams) {
    // Method: ReceiveMore
    // Call: ReceiveMore(num_additional_datagrams)
  }

  send(data) {
    // Method: Send
    return new Promise((resolve) => {
      // Call: Send(data)
      resolve({});
    });
  }

  sendTo(data, dest_addr, dns_query_type) {
    // Method: SendTo
    return new Promise((resolve) => {
      // Call: SendTo(data, dest_addr, dns_query_type)
      resolve({});
    });
  }

};

network.mojom.RestrictedUDPSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
