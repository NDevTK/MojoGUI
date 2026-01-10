// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: EcnMarking
network.mojom.mojom.EcnMarking = {
  kNotEct: 0,
  kEct1: 1,
  kEct0: 2,
  kCe: 3,
};
network.mojom.mojom.EcnMarkingSpec = { $: mojo.internal.Enum() };

// Struct: P2PReceivedPacket
network.mojom.mojom.P2PReceivedPacketSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PReceivedPacket',
      packedSize: 40,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false, minVersion: 0 },
        { name: 'socket_address', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'ecn', packedOffset: 24, packedBitOffset: 0, type: network.mojom.EcnMarkingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: P2PSendPacket
network.mojom.mojom.P2PSendPacketSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSendPacket',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false, minVersion: 0 },
        { name: 'packet_info', packedOffset: 8, packedBitOffset: 0, type: network.mojom.P2PPacketInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: P2PNetworkNotificationClient
network.mojom.mojom.P2PNetworkNotificationClient = {};

network.mojom.mojom.P2PNetworkNotificationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.P2PNetworkNotificationClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PNetworkNotificationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.P2PNetworkNotificationClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.P2PNetworkNotificationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.P2PNetworkNotificationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  networkListChanged(networks, default_ipv4_local_address, default_ipv6_local_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec,
      null,
      [networks, default_ipv4_local_address, default_ipv6_local_address]);
  }

};

network.mojom.mojom.P2PNetworkNotificationClient.getRemote = function() {
  let remote = new network.mojom.mojom.P2PNetworkNotificationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PNetworkNotificationClient',
    'context');
  return remote.$;
};

// ParamsSpec for NetworkListChanged
network.mojom.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PNetworkNotificationClient.NetworkListChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.NetworkInterfaceSpec, false), nullable: false, minVersion: 0 },
        { name: 'default_ipv4_local_address', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false, minVersion: 0 },
        { name: 'default_ipv6_local_address', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.P2PNetworkNotificationClientPtr = network.mojom.mojom.P2PNetworkNotificationClientRemote;
network.mojom.mojom.P2PNetworkNotificationClientRequest = network.mojom.mojom.P2PNetworkNotificationClientPendingReceiver;


// Interface: P2PSocketManager
network.mojom.mojom.P2PSocketManager = {};

network.mojom.mojom.P2PSocketManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.P2PSocketManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.P2PSocketManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.P2PSocketManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.P2PSocketManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startNetworkNotifications(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec,
      null,
      [client]);
  }

  getHostAddress(host_name, address_family, enable_mdns) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.P2PSocketManager_GetHostAddress_ParamsSpec,
      network.mojom.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec,
      [host_name, address_family, enable_mdns]);
  }

  createSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.P2PSocketManager_CreateSocket_ParamsSpec,
      null,
      [type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket]);
  }

};

network.mojom.mojom.P2PSocketManager.getRemote = function() {
  let remote = new network.mojom.mojom.P2PSocketManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketManager',
    'context');
  return remote.$;
};

// ParamsSpec for StartNetworkNotifications
network.mojom.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketManager.StartNetworkNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.P2PNetworkNotificationClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetHostAddress
network.mojom.mojom.P2PSocketManager_GetHostAddress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketManager.GetHostAddress_Params',
      packedSize: 24,
      fields: [
        { name: 'host_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'address_family', packedOffset: 8, packedBitOffset: 0, type: network.mojom.AddressFamilySpec, nullable: true, minVersion: 0 },
        { name: 'enable_mdns', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketManager.GetHostAddress_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'addresses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.IPAddressSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateSocket
network.mojom.mojom.P2PSocketManager_CreateSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketManager.CreateSocket_Params',
      packedSize: 72,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.P2PSocketTypeSpec, nullable: false, minVersion: 0 },
        { name: 'local_address', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'port_range', packedOffset: 16, packedBitOffset: 0, type: network.mojom.P2PPortRangeSpec, nullable: false, minVersion: 0 },
        { name: 'remote_address', packedOffset: 24, packedBitOffset: 0, type: network.mojom.P2PHostAndIPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
        { name: 'devtools_token', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'client', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.P2PSocketClientRemote), nullable: false, minVersion: 0 },
        { name: 'socket', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.P2PSocketRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.P2PSocketManagerPtr = network.mojom.mojom.P2PSocketManagerRemote;
network.mojom.mojom.P2PSocketManagerRequest = network.mojom.mojom.P2PSocketManagerPendingReceiver;


// Interface: P2PSocket
network.mojom.mojom.P2PSocket = {};

network.mojom.mojom.P2PSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.P2PSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.P2PSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.P2PSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.P2PSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  send(data, packet_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.P2PSocket_Send_ParamsSpec,
      null,
      [data, packet_info]);
  }

  sendBatch(packet_batch) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.P2PSocket_SendBatch_ParamsSpec,
      null,
      [packet_batch]);
  }

  setOption(option, value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.P2PSocket_SetOption_ParamsSpec,
      null,
      [option, value]);
  }

};

network.mojom.mojom.P2PSocket.getRemote = function() {
  let remote = new network.mojom.mojom.P2PSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocket',
    'context');
  return remote.$;
};

// ParamsSpec for Send
network.mojom.mojom.P2PSocket_Send_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocket.Send_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false, minVersion: 0 },
        { name: 'packet_info', packedOffset: 8, packedBitOffset: 0, type: network.mojom.P2PPacketInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendBatch
network.mojom.mojom.P2PSocket_SendBatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocket.SendBatch_Params',
      packedSize: 16,
      fields: [
        { name: 'packet_batch', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.P2PSendPacketSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetOption
network.mojom.mojom.P2PSocket_SetOption_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocket.SetOption_Params',
      packedSize: 24,
      fields: [
        { name: 'option', packedOffset: 0, packedBitOffset: 0, type: network.mojom.P2PSocketOptionSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.P2PSocketPtr = network.mojom.mojom.P2PSocketRemote;
network.mojom.mojom.P2PSocketRequest = network.mojom.mojom.P2PSocketPendingReceiver;


// Interface: P2PSocketClient
network.mojom.mojom.P2PSocketClient = {};

network.mojom.mojom.P2PSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.P2PSocketClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.P2PSocketClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.P2PSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.P2PSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  socketCreated(local_address, remote_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.P2PSocketClient_SocketCreated_ParamsSpec,
      null,
      [local_address, remote_address]);
  }

  sendComplete(send_metrics) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.P2PSocketClient_SendComplete_ParamsSpec,
      null,
      [send_metrics]);
  }

  sendBatchComplete(send_metrics_batch) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec,
      null,
      [send_metrics_batch]);
  }

  dataReceived(packets) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.mojom.P2PSocketClient_DataReceived_ParamsSpec,
      null,
      [packets]);
  }

};

network.mojom.mojom.P2PSocketClient.getRemote = function() {
  let remote = new network.mojom.mojom.P2PSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketClient',
    'context');
  return remote.$;
};

// ParamsSpec for SocketCreated
network.mojom.mojom.P2PSocketClient_SocketCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketClient.SocketCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'local_address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
        { name: 'remote_address', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendComplete
network.mojom.mojom.P2PSocketClient_SendComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketClient.SendComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'send_metrics', packedOffset: 0, packedBitOffset: 0, type: network.mojom.P2PSendPacketMetricsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendBatchComplete
network.mojom.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketClient.SendBatchComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'send_metrics_batch', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.P2PSendPacketMetricsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DataReceived
network.mojom.mojom.P2PSocketClient_DataReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketClient.DataReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'packets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.P2PReceivedPacketSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.P2PSocketClientPtr = network.mojom.mojom.P2PSocketClientRemote;
network.mojom.mojom.P2PSocketClientRequest = network.mojom.mojom.P2PSocketClientPendingReceiver;

