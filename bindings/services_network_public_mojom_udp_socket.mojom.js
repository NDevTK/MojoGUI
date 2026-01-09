// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/udp_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: UDPSocketOptions
network.mojom.UDPSocketOptions = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
    this.broadcast = values.broadcast !== undefined ? values.broadcast : null;
    this.false = values.false !== undefined ? values.false : false;
    this.socket = values.socket !== undefined ? values.socket : null;
    this.false = values.false !== undefined ? values.false : false;
    this.1 = values.1 !== undefined ? values.1 : 0;
    this.to = values.to !== undefined ? values.to : null;
    this.off = values.off !== undefined ? values.off : null;
    this.true = values.true !== undefined ? values.true : false;
    this.kernel = values.kernel !== undefined ? values.kernel : null;
    this.case = values.case !== undefined ? values.case : null;
    this.0 = values.0 !== undefined ? values.0 : 0;
    this.case = values.case !== undefined ? values.case : null;
    this.ipv6_only = values.ipv6_only !== undefined ? values.ipv6_only : 0;
  }
};

// Interface: UDPSocket
network.mojom.UDPSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.UDPSocket';
  }

  bind(local_addr, socket_options) {
    // Method: Bind
    return new Promise((resolve) => {
      // Call: Bind(local_addr, socket_options)
      resolve({});
    });
  }

  connect(remote_addr, socket_options) {
    // Method: Connect
    return new Promise((resolve) => {
      // Call: Connect(remote_addr, socket_options)
      resolve({});
    });
  }

  setBroadcast(broadcast) {
    // Method: SetBroadcast
    return new Promise((resolve) => {
      // Call: SetBroadcast(broadcast)
      resolve({});
    });
  }

  setSendBufferSize(send_buffer_size) {
    // Method: SetSendBufferSize
    return new Promise((resolve) => {
      // Call: SetSendBufferSize(send_buffer_size)
      resolve({});
    });
  }

  setReceiveBufferSize(receive_buffer_size) {
    // Method: SetReceiveBufferSize
    return new Promise((resolve) => {
      // Call: SetReceiveBufferSize(receive_buffer_size)
      resolve({});
    });
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

  receiveMoreWithBufferSize(num_additional_datagrams, buffer_size) {
    // Method: ReceiveMoreWithBufferSize
    // Call: ReceiveMoreWithBufferSize(num_additional_datagrams, buffer_size)
  }

  sendTo(dest_addr, data, traffic_annotation) {
    // Method: SendTo
    return new Promise((resolve) => {
      // Call: SendTo(dest_addr, data, traffic_annotation)
      resolve({});
    });
  }

  send(data, traffic_annotation) {
    // Method: Send
    return new Promise((resolve) => {
      // Call: Send(data, traffic_annotation)
      resolve({});
    });
  }

  close() {
    // Method: Close
    // Call: Close()
  }

};

network.mojom.UDPSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UDPSocketListener
network.mojom.UDPSocketListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.UDPSocketListener';
  }

  onReceived(result, src_addr, data) {
    // Method: OnReceived
    // Call: OnReceived(result, src_addr, data)
  }

};

network.mojom.UDPSocketListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
