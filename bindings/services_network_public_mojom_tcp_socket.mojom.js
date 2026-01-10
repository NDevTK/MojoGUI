// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tcp_socket.mojom
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
var services = services || {};
var services = services || {};

network.mojom.TCPKeepAliveOptionsSpec = { $: {} };
network.mojom.TCPConnectedSocketOptionsSpec = { $: {} };
network.mojom.TCPServerSocketOptionsSpec = { $: {} };
network.mojom.TCPBoundSocket = {};
network.mojom.TCPBoundSocket.$interfaceName = 'network.mojom.TCPBoundSocket';
network.mojom.TCPBoundSocket_Listen_ParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Connect_ParamsSpec = { $: {} };
network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket = {};
network.mojom.TCPConnectedSocket.$interfaceName = 'network.mojom.TCPConnectedSocket';
network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec = { $: {} };
network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec = { $: {} };
network.mojom.SocketObserver = {};
network.mojom.SocketObserver.$interfaceName = 'network.mojom.SocketObserver';
network.mojom.SocketObserver_OnReadError_ParamsSpec = { $: {} };
network.mojom.SocketObserver_OnWriteError_ParamsSpec = { $: {} };
network.mojom.TCPServerSocket = {};
network.mojom.TCPServerSocket.$interfaceName = 'network.mojom.TCPServerSocket';
network.mojom.TCPServerSocket_Accept_ParamsSpec = { $: {} };
network.mojom.TCPServerSocket_Accept_ResponseParamsSpec = { $: {} };

// Struct: TCPKeepAliveOptions
mojo.internal.Struct(
    network.mojom.TCPKeepAliveOptionsSpec, 'network.mojom.TCPKeepAliveOptions', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('delay', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TCPConnectedSocketOptions
mojo.internal.Struct(
    network.mojom.TCPConnectedSocketOptionsSpec, 'network.mojom.TCPConnectedSocketOptions', [
      mojo.internal.StructField('send_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('receive_buffer_size', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('no_delay', 8, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('keep_alive_options', 16, 0, network.mojom.TCPKeepAliveOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TCPServerSocketOptions
mojo.internal.Struct(
    network.mojom.TCPServerSocketOptionsSpec, 'network.mojom.TCPServerSocketOptions', [
      mojo.internal.StructField('backlog', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ipv6_only_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 4, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('connection_tracker', 8, 0, mojo.internal.InterfaceProxy(network.mojom.SocketConnectionTrackerRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TCPBoundSocket
mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Listen_ParamsSpec, 'network.mojom.TCPBoundSocket_Listen_Params', [
      mojo.internal.StructField('backlog', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('socket', 8, 0, mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec, 'network.mojom.TCPBoundSocket_Listen_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Connect_ParamsSpec, 'network.mojom.TCPBoundSocket_Connect_Params', [
      mojo.internal.StructField('remote_addr_list', 0, 0, network.mojom.AddressListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tcp_connected_socket_options', 8, 0, network.mojom.TCPConnectedSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('socket', 16, 0, mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 24, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec, 'network.mojom.TCPBoundSocket_Connect_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 16, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 32, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 48]]);

network.mojom.TCPBoundSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPBoundSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPBoundSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPBoundSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPBoundSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TCPBoundSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listen(backlog, socket) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TCPBoundSocket_Listen_ParamsSpec,
      network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec,
      [backlog, socket],
      false);
  }

  connect(remote_addr_list, tcp_connected_socket_options, socket, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TCPBoundSocket_Connect_ParamsSpec,
      network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec,
      [remote_addr_list, tcp_connected_socket_options, socket, observer],
      false);
  }

};

network.mojom.TCPBoundSocket.getRemote = function() {
  let remote = new network.mojom.TCPBoundSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPBoundSocket',
    'context');
  return remote.$;
};

network.mojom.TCPBoundSocketPtr = network.mojom.TCPBoundSocketRemote;
network.mojom.TCPBoundSocketRequest = network.mojom.TCPBoundSocketPendingReceiver;


// Interface: TCPConnectedSocket
mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec, 'network.mojom.TCPConnectedSocket_UpgradeToTLS_Params', [
      mojo.internal.StructField('host_port_pair', 0, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, network.mojom.TLSClientSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 16, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 24, 0, mojo.internal.InterfaceRequest(network.mojom.TLSClientSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 32, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('receive_stream', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('ssl_info', 24, 0, network.mojom.SSLInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetSendBufferSize_Params', [
      mojo.internal.StructField('send_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetReceiveBufferSize_Params', [
      mojo.internal.StructField('receive_buffer_size', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetNoDelay_Params', [
      mojo.internal.StructField('no_delay', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec, 'network.mojom.TCPConnectedSocket_SetKeepAlive_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('delay_secs', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec, 'network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.TCPConnectedSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPConnectedSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPConnectedSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPConnectedSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPConnectedSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TCPConnectedSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  upgradeToTLS(host_port_pair, options, traffic_annotation, receiver, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec,
      network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec,
      [host_port_pair, options, traffic_annotation, receiver, observer],
      false);
  }

  setSendBufferSize(send_buffer_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec,
      [send_buffer_size],
      false);
  }

  setReceiveBufferSize(receive_buffer_size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec,
      [receive_buffer_size],
      false);
  }

  setNoDelay(no_delay) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec,
      [no_delay],
      false);
  }

  setKeepAlive(enable, delay_secs) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec,
      [enable, delay_secs],
      false);
  }

};

network.mojom.TCPConnectedSocket.getRemote = function() {
  let remote = new network.mojom.TCPConnectedSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPConnectedSocket',
    'context');
  return remote.$;
};

network.mojom.TCPConnectedSocketPtr = network.mojom.TCPConnectedSocketRemote;
network.mojom.TCPConnectedSocketRequest = network.mojom.TCPConnectedSocketPendingReceiver;


// Interface: SocketObserver
mojo.internal.Struct(
    network.mojom.SocketObserver_OnReadError_ParamsSpec, 'network.mojom.SocketObserver_OnReadError_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.SocketObserver_OnWriteError_ParamsSpec, 'network.mojom.SocketObserver_OnWriteError_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.SocketObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SocketObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SocketObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.SocketObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SocketObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReadError(net_error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SocketObserver_OnReadError_ParamsSpec,
      null,
      [net_error],
      false);
  }

  onWriteError(net_error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.SocketObserver_OnWriteError_ParamsSpec,
      null,
      [net_error],
      false);
  }

};

network.mojom.SocketObserver.getRemote = function() {
  let remote = new network.mojom.SocketObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketObserver',
    'context');
  return remote.$;
};

network.mojom.SocketObserverPtr = network.mojom.SocketObserverRemote;
network.mojom.SocketObserverRequest = network.mojom.SocketObserverPendingReceiver;


// Interface: TCPServerSocket
mojo.internal.Struct(
    network.mojom.TCPServerSocket_Accept_ParamsSpec, 'network.mojom.TCPServerSocket_Accept_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TCPServerSocket_Accept_ResponseParamsSpec, 'network.mojom.TCPServerSocket_Accept_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('remote_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connected_socket', 16, 0, mojo.internal.InterfaceProxy(network.mojom.TCPConnectedSocketRemote), null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 32, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 48]]);

network.mojom.TCPServerSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TCPServerSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TCPServerSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TCPServerSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.TCPServerSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.TCPServerSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  accept(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.TCPServerSocket_Accept_ParamsSpec,
      network.mojom.TCPServerSocket_Accept_ResponseParamsSpec,
      [observer],
      false);
  }

};

network.mojom.TCPServerSocket.getRemote = function() {
  let remote = new network.mojom.TCPServerSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TCPServerSocket',
    'context');
  return remote.$;
};

network.mojom.TCPServerSocketPtr = network.mojom.TCPServerSocketRemote;
network.mojom.TCPServerSocketRequest = network.mojom.TCPServerSocketPendingReceiver;

