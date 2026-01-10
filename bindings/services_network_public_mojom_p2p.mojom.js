// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/p2p.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

network.mojom.EcnMarkingSpec = { $: mojo.internal.Enum() };
network.mojom.P2PReceivedPacketSpec = { $: {} };
network.mojom.P2PSendPacketSpec = { $: {} };
network.mojom.P2PNetworkNotificationClient = {};
network.mojom.P2PNetworkNotificationClient.$interfaceName = 'network.mojom.P2PNetworkNotificationClient';
network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager = {};
network.mojom.P2PSocketManager.$interfaceName = 'network.mojom.P2PSocketManager';
network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec = { $: {} };
network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec = { $: {} };
network.mojom.P2PSocketManager_CreateSocket_ParamsSpec = { $: {} };
network.mojom.P2PSocket = {};
network.mojom.P2PSocket.$interfaceName = 'network.mojom.P2PSocket';
network.mojom.P2PSocket_Send_ParamsSpec = { $: {} };
network.mojom.P2PSocket_SendBatch_ParamsSpec = { $: {} };
network.mojom.P2PSocket_SetOption_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient = {};
network.mojom.P2PSocketClient.$interfaceName = 'network.mojom.P2PSocketClient';
network.mojom.P2PSocketClient_SocketCreated_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_SendComplete_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec = { $: {} };
network.mojom.P2PSocketClient_DataReceived_ParamsSpec = { $: {} };

// Enum: EcnMarking
network.mojom.EcnMarking = {
  kNotEct: 0,
  kEct1: 1,
  kEct0: 2,
  kCe: 3,
};

// Struct: P2PReceivedPacket
mojo.internal.Struct(
    network.mojom.P2PReceivedPacketSpec, 'network.mojom.P2PReceivedPacket', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('socket_address', 8, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('ecn', 24, 0, network.mojom.EcnMarkingSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: P2PSendPacket
mojo.internal.Struct(
    network.mojom.P2PSendPacketSpec, 'network.mojom.P2PSendPacket', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('packet_info', 8, 0, network.mojom.P2PPacketInfoSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: P2PNetworkNotificationClient
mojo.internal.Struct(
    network.mojom.P2PNetworkNotificationClient_NetworkListChanged_ParamsSpec, 'network.mojom.P2PNetworkNotificationClient_NetworkListChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(network.mojom.NetworkInterfaceSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('default_ipv4_local_address', 8, 0, network.mojom.IPAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('default_ipv6_local_address', 16, 0, network.mojom.IPAddressSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [networks, default_ipv4_local_address, default_ipv6_local_address],
      false);
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

network.mojom.P2PNetworkNotificationClientPtr = network.mojom.P2PNetworkNotificationClientRemote;
network.mojom.P2PNetworkNotificationClientRequest = network.mojom.P2PNetworkNotificationClientPendingReceiver;


// Interface: P2PSocketManager
mojo.internal.Struct(
    network.mojom.P2PSocketManager_StartNetworkNotifications_ParamsSpec, 'network.mojom.P2PSocketManager_StartNetworkNotifications_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(network.mojom.P2PNetworkNotificationClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec, 'network.mojom.P2PSocketManager_GetHostAddress_Params', [
      mojo.internal.StructField('host_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('address_family', 8, 0, network.mojom.AddressFamilySpec, null, true, 0, undefined),
      mojo.internal.StructField('enable_mdns', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec, 'network.mojom.P2PSocketManager_GetHostAddress_ResponseParams', [
      mojo.internal.StructField('addresses', 0, 0, mojo.internal.Array(network.mojom.IPAddressSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketManager_CreateSocket_ParamsSpec, 'network.mojom.P2PSocketManager_CreateSocket_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.P2PSocketTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('local_address', 8, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('port_range', 16, 0, network.mojom.P2PPortRangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_address', 24, 0, network.mojom.P2PHostAndIPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 32, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('devtools_token', 40, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('client', 48, 0, mojo.internal.InterfaceProxy(network.mojom.P2PSocketClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('socket', 56, 0, mojo.internal.InterfaceRequest(network.mojom.P2PSocketRemote), null, false, 0, undefined),
    ],
    [[0, 72]]);

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
      [client],
      false);
  }

  getHostAddress(host_name, address_family, enable_mdns) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PSocketManager_GetHostAddress_ParamsSpec,
      network.mojom.P2PSocketManager_GetHostAddress_ResponseParamsSpec,
      [host_name, address_family, enable_mdns],
      false);
  }

  createSocket(type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.P2PSocketManager_CreateSocket_ParamsSpec,
      null,
      [type, local_address, port_range, remote_address, traffic_annotation, devtools_token, client, socket],
      false);
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

network.mojom.P2PSocketManagerPtr = network.mojom.P2PSocketManagerRemote;
network.mojom.P2PSocketManagerRequest = network.mojom.P2PSocketManagerPendingReceiver;


// Interface: P2PSocket
mojo.internal.Struct(
    network.mojom.P2PSocket_Send_ParamsSpec, 'network.mojom.P2PSocket_Send_Params', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.ReadOnlyBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('packet_info', 8, 0, network.mojom.P2PPacketInfoSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.P2PSocket_SendBatch_ParamsSpec, 'network.mojom.P2PSocket_SendBatch_Params', [
      mojo.internal.StructField('packet_batch', 0, 0, mojo.internal.Array(network.mojom.P2PSendPacketSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocket_SetOption_ParamsSpec, 'network.mojom.P2PSocket_SetOption_Params', [
      mojo.internal.StructField('option', 0, 0, network.mojom.P2PSocketOptionSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [data, packet_info],
      false);
  }

  sendBatch(packet_batch) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PSocket_SendBatch_ParamsSpec,
      null,
      [packet_batch],
      false);
  }

  setOption(option, value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.P2PSocket_SetOption_ParamsSpec,
      null,
      [option, value],
      false);
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

network.mojom.P2PSocketPtr = network.mojom.P2PSocketRemote;
network.mojom.P2PSocketRequest = network.mojom.P2PSocketPendingReceiver;


// Interface: P2PSocketClient
mojo.internal.Struct(
    network.mojom.P2PSocketClient_SocketCreated_ParamsSpec, 'network.mojom.P2PSocketClient_SocketCreated_Params', [
      mojo.internal.StructField('local_address', 0, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('remote_address', 8, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_SendComplete_ParamsSpec, 'network.mojom.P2PSocketClient_SendComplete_Params', [
      mojo.internal.StructField('send_metrics', 0, 0, network.mojom.P2PSendPacketMetricsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec, 'network.mojom.P2PSocketClient_SendBatchComplete_Params', [
      mojo.internal.StructField('send_metrics_batch', 0, 0, mojo.internal.Array(network.mojom.P2PSendPacketMetricsSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.P2PSocketClient_DataReceived_ParamsSpec, 'network.mojom.P2PSocketClient_DataReceived_Params', [
      mojo.internal.StructField('packets', 0, 0, mojo.internal.Array(network.mojom.P2PReceivedPacketSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [local_address, remote_address],
      false);
  }

  sendComplete(send_metrics) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.P2PSocketClient_SendComplete_ParamsSpec,
      null,
      [send_metrics],
      false);
  }

  sendBatchComplete(send_metrics_batch) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.P2PSocketClient_SendBatchComplete_ParamsSpec,
      null,
      [send_metrics_batch],
      false);
  }

  dataReceived(packets) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.P2PSocketClient_DataReceived_ParamsSpec,
      null,
      [packets],
      false);
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

network.mojom.P2PSocketClientPtr = network.mojom.P2PSocketClientRemote;
network.mojom.P2PSocketClientRequest = network.mojom.P2PSocketClientPendingReceiver;

