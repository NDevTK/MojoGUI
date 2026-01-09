// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: EcnMarking
network.mojom.EcnMarking = {
  kNotEct: 0,
};

// Struct: P2PReceivedPacket
network.mojom.P2PReceivedPacket = class {
  constructor(values = {}) {
    this.ecn = values.ecn !== undefined ? values.ecn : 0;
  }
};

// Struct: P2PSendPacket
network.mojom.P2PSendPacket = class {
  constructor(values = {}) {
    this.packet_info = values.packet_info !== undefined ? values.packet_info : null;
  }
};

// Interface: P2PNetworkNotificationClient
network.mojom.P2PNetworkNotificationClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.P2PNetworkNotificationClient';
  }

  networkListChanged(networks, default_ipv4_local_address, default_ipv6_local_address) {
    // Method: NetworkListChanged
    // Call: NetworkListChanged(networks, default_ipv4_local_address, default_ipv6_local_address)
  }

};

network.mojom.P2PNetworkNotificationClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: P2PSocketManager
network.mojom.P2PSocketManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.P2PSocketManager';
  }

  startNetworkNotifications(client) {
    // Method: StartNetworkNotifications
    // Call: StartNetworkNotifications(client)
  }

  getHostAddress(host_name, address_family, enable_mdns) {
    // Method: GetHostAddress
    return new Promise((resolve) => {
      // Call: GetHostAddress(host_name, address_family, enable_mdns)
      resolve({});
    });
  }

  createSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket) {
    // Method: CreateSocket
    // Call: CreateSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket)
  }

};

network.mojom.P2PSocketManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: P2PSocket
network.mojom.P2PSocketPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.P2PSocket';
  }

  send(data, packet_info) {
    // Method: Send
    // Call: Send(data, packet_info)
  }

  sendBatch(packet_batch) {
    // Method: SendBatch
    // Call: SendBatch(packet_batch)
  }

  setOption(option, value) {
    // Method: SetOption
    // Call: SetOption(option, value)
  }

};

network.mojom.P2PSocketRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: P2PSocketClient
network.mojom.P2PSocketClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.P2PSocketClient';
  }

  socketCreated(local_address, remote_address) {
    // Method: SocketCreated
    // Call: SocketCreated(local_address, remote_address)
  }

  sendComplete(send_metrics) {
    // Method: SendComplete
    // Call: SendComplete(send_metrics)
  }

  sendBatchComplete(send_metrics_batch) {
    // Method: SendBatchComplete
    // Call: SendBatchComplete(send_metrics_batch)
  }

  dataReceived(packets) {
    // Method: DataReceived
    // Call: DataReceived(packets)
  }

};

network.mojom.P2PSocketClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
