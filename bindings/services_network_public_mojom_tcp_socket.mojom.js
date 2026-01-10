// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/tcp_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: TCPKeepAliveOptions
network.mojom.TCPKeepAliveOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPKeepAliveOptions',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'delay', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TCPConnectedSocketOptions
network.mojom.TCPConnectedSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocketOptions',
      packedSize: 32,
      fields: [
        { name: 'send_buffer_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receive_buffer_size', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'no_delay', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keep_alive_options', packedOffset: 16, packedBitOffset: 0, type: network.mojom.TCPKeepAliveOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TCPServerSocketOptions
network.mojom.TCPServerSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPServerSocketOptions',
      packedSize: 24,
      fields: [
        { name: 'backlog', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'ipv6_only_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' } },
        { name: 'ipv6_only_$value', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' } },
        { name: 'connection_tracker', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: TCPBoundSocket
network.mojom.TCPBoundSocket = {};

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
      [backlog, socket]);
  }

  connect(remote_addr_list, tcp_connected_socket_options, socket, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TCPBoundSocket_Connect_ParamsSpec,
      network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec,
      [remote_addr_list, tcp_connected_socket_options, socket, observer]);
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

// ParamsSpec for Listen
network.mojom.TCPBoundSocket_Listen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPBoundSocket.Listen_Params',
      packedSize: 16,
      fields: [
        { name: 'backlog', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'socket', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TCPBoundSocket_Listen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPBoundSocket.Listen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Connect
network.mojom.TCPBoundSocket_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPBoundSocket.Connect_Params',
      packedSize: 32,
      fields: [
        { name: 'remote_addr_list', packedOffset: 0, packedBitOffset: 0, type: network.mojom.AddressListSpec, nullable: false, minVersion: 0 },
        { name: 'tcp_connected_socket_options', packedOffset: 8, packedBitOffset: 0, type: network.mojom.TCPConnectedSocketOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'socket', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

network.mojom.TCPBoundSocket_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPBoundSocket.Connect_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'peer_addr', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'receive_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'send_stream', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
network.mojom.TCPBoundSocketPtr = network.mojom.TCPBoundSocketRemote;
network.mojom.TCPBoundSocketRequest = network.mojom.TCPBoundSocketPendingReceiver;


// Interface: TCPConnectedSocket
network.mojom.TCPConnectedSocket = {};

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
      [host_port_pair, options, traffic_annotation, receiver, observer]);
  }

  setSendBufferSize(send_buffer_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec,
      [send_buffer_size]);
  }

  setReceiveBufferSize(receive_buffer_size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec,
      [receive_buffer_size]);
  }

  setNoDelay(no_delay) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec,
      [no_delay]);
  }

  setKeepAlive(enable, delay_secs) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec,
      network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec,
      [enable, delay_secs]);
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

// ParamsSpec for UpgradeToTLS
network.mojom.TCPConnectedSocket_UpgradeToTLS_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.UpgradeToTLS_Params',
      packedSize: 40,
      fields: [
        { name: 'host_port_pair', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: network.mojom.TLSClientSocketOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 16, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.TCPConnectedSocket_UpgradeToTLS_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.UpgradeToTLS_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receive_stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'send_stream', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'ssl_info', packedOffset: 24, packedBitOffset: 0, type: network.mojom.SSLInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetSendBufferSize
network.mojom.TCPConnectedSocket_SetSendBufferSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.SetSendBufferSize_Params',
      packedSize: 16,
      fields: [
        { name: 'send_buffer_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TCPConnectedSocket_SetSendBufferSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.SetSendBufferSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetReceiveBufferSize
network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.SetReceiveBufferSize_Params',
      packedSize: 16,
      fields: [
        { name: 'receive_buffer_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TCPConnectedSocket_SetReceiveBufferSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.SetReceiveBufferSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetNoDelay
network.mojom.TCPConnectedSocket_SetNoDelay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.SetNoDelay_Params',
      packedSize: 16,
      fields: [
        { name: 'no_delay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TCPConnectedSocket_SetNoDelay_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.SetNoDelay_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetKeepAlive
network.mojom.TCPConnectedSocket_SetKeepAlive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.SetKeepAlive_Params',
      packedSize: 16,
      fields: [
        { name: 'enable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'delay_secs', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TCPConnectedSocket_SetKeepAlive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPConnectedSocket.SetKeepAlive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.TCPConnectedSocketPtr = network.mojom.TCPConnectedSocketRemote;
network.mojom.TCPConnectedSocketRequest = network.mojom.TCPConnectedSocketPendingReceiver;


// Interface: SocketObserver
network.mojom.SocketObserver = {};

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
      [net_error]);
  }

  onWriteError(net_error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.SocketObserver_OnWriteError_ParamsSpec,
      null,
      [net_error]);
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

// ParamsSpec for OnReadError
network.mojom.SocketObserver_OnReadError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketObserver.OnReadError_Params',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWriteError
network.mojom.SocketObserver_OnWriteError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketObserver.OnWriteError_Params',
      packedSize: 16,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.SocketObserverPtr = network.mojom.SocketObserverRemote;
network.mojom.SocketObserverRequest = network.mojom.SocketObserverPendingReceiver;


// Interface: TCPServerSocket
network.mojom.TCPServerSocket = {};

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
      [observer]);
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

// ParamsSpec for Accept
network.mojom.TCPServerSocket_Accept_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPServerSocket.Accept_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.TCPServerSocket_Accept_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TCPServerSocket.Accept_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'remote_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'connected_socket', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'send_stream', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'receive_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
network.mojom.TCPServerSocketPtr = network.mojom.TCPServerSocketRemote;
network.mojom.TCPServerSocketRequest = network.mojom.TCPServerSocketPendingReceiver;

