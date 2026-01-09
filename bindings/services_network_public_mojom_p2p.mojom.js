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
  kEct1: 1,
  kEct0: 2,
  kCe: 3,
};

// Struct: P2PReceivedPacket
network.mojom.P2PReceivedPacketSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PReceivedPacket',
      packedSize: 40,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
        { name: 'socket_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'ecn', packedOffset: 24, packedBitOffset: 0, type: network.mojom.EcnMarkingSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: P2PSendPacket
network.mojom.P2PSendPacketSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSendPacket',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
        { name: 'packet_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: P2PNetworkNotificationClient
network.mojom.P2PNetworkNotificationClient = {};

network.mojom.P2PNetworkNotificationClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PNetworkNotificationClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PNetworkNotificationClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PNetworkNotificationClientPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PNetworkNotificationClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PNetworkNotificationClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  networkListChanged(networks, default_ipv4_local_address, default_ipv6_local_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec,
      null,
      [networks, default_ipv4_local_address, default_ipv6_local_address]);
  }

};

network.mojom.P2PNetworkNotificationClient.getRemote = function() {
  let remote = new network.mojom.P2PNetworkNotificationClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PNetworkNotificationClient',
    'context');
  return remote.$;
};

// ParamsSpec for NetworkListChanged
network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PNetworkNotificationClient.NetworkListChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'default_ipv4_local_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'default_ipv6_local_address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.P2PNetworkNotificationClientPtr = network.mojom.P2PNetworkNotificationClientRemote;
network.mojom.P2PNetworkNotificationClientRequest = network.mojom.P2PNetworkNotificationClientPendingReceiver;


// Interface: P2PSocketManager
network.mojom.P2PSocketManager = {};

network.mojom.P2PSocketManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PSocketManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startNetworkNotifications(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec,
      null,
      [client]);
  }

  getHostAddress(host_name, address_family, enable_mdns) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec,
      network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec,
      [host_name, address_family, enable_mdns]);
  }

  createSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.P2PSocketManager_CreateSocket_ParamsSpec,
      null,
      [type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket]);
  }

};

network.mojom.P2PSocketManager.getRemote = function() {
  let remote = new network.mojom.P2PSocketManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketManager',
    'context');
  return remote.$;
};

// ParamsSpec for StartNetworkNotifications
network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketManager.StartNetworkNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetHostAddress
network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketManager.GetHostAddress_Params',
      packedSize: 32,
      fields: [
        { name: 'host_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'address_family', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'enable_mdns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketManager.GetHostAddress_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'addresses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSocket
network.mojom.P2PSocketManager_CreateSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketManager.CreateSocket_Params',
      packedSize: 64,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'local_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'port_range', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'remote_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'devtools_token', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'client', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'socket', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.P2PSocketManagerPtr = network.mojom.P2PSocketManagerRemote;
network.mojom.P2PSocketManagerRequest = network.mojom.P2PSocketManagerPendingReceiver;


// Interface: P2PSocket
network.mojom.P2PSocket = {};

network.mojom.P2PSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  send(data, packet_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.P2PSocket_Send_ParamsSpec,
      null,
      [data, packet_info]);
  }

  sendBatch(packet_batch) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PSocket_SendBatch_ParamsSpec,
      null,
      [packet_batch]);
  }

  setOption(option, value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.P2PSocket_SetOption_ParamsSpec,
      null,
      [option, value]);
  }

};

network.mojom.P2PSocket.getRemote = function() {
  let remote = new network.mojom.P2PSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocket',
    'context');
  return remote.$;
};

// ParamsSpec for Send
network.mojom.P2PSocket_Send_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocket.Send_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyBufferSpec, nullable: false },
        { name: 'packet_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendBatch
network.mojom.P2PSocket_SendBatch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocket.SendBatch_Params',
      packedSize: 16,
      fields: [
        { name: 'packet_batch', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOption
network.mojom.P2PSocket_SetOption_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocket.SetOption_Params',
      packedSize: 24,
      fields: [
        { name: 'option', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.P2PSocketPtr = network.mojom.P2PSocketRemote;
network.mojom.P2PSocketRequest = network.mojom.P2PSocketPendingReceiver;


// Interface: P2PSocketClient
network.mojom.P2PSocketClient = {};

network.mojom.P2PSocketClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.P2PSocketClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.P2PSocketClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.P2PSocketClientPendingReceiver,
      handle);
    this.$ = new network.mojom.P2PSocketClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.P2PSocketClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  socketCreated(local_address, remote_address) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.P2PSocketClient_SocketCreated_ParamsSpec,
      null,
      [local_address, remote_address]);
  }

  sendComplete(send_metrics) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PSocketClient_SendComplete_ParamsSpec,
      null,
      [send_metrics]);
  }

  sendBatchComplete(send_metrics_batch) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec,
      null,
      [send_metrics_batch]);
  }

  dataReceived(packets) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.P2PSocketClient_DataReceived_ParamsSpec,
      null,
      [packets]);
  }

};

network.mojom.P2PSocketClient.getRemote = function() {
  let remote = new network.mojom.P2PSocketClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.P2PSocketClient',
    'context');
  return remote.$;
};

// ParamsSpec for SocketCreated
network.mojom.P2PSocketClient_SocketCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketClient.SocketCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'local_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'remote_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendComplete
network.mojom.P2PSocketClient_SendComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketClient.SendComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'send_metrics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendBatchComplete
network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketClient.SendBatchComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'send_metrics_batch', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DataReceived
network.mojom.P2PSocketClient_DataReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.P2PSocketClient.DataReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'packets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.P2PSocketClientPtr = network.mojom.P2PSocketClientRemote;
network.mojom.P2PSocketClientRequest = network.mojom.P2PSocketClientPendingReceiver;

