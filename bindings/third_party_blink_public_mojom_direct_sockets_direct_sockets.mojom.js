// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/direct_sockets/direct_sockets.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

blink.mojom.DirectTCPSocketOptionsSpec = { $: {} };
blink.mojom.DirectConnectedUDPSocketOptionsSpec = { $: {} };
blink.mojom.DirectBoundUDPSocketOptionsSpec = { $: {} };
blink.mojom.DirectTCPServerSocketOptionsSpec = { $: {} };
blink.mojom.DirectSocketsService = {};
blink.mojom.DirectSocketsService.$interfaceName = 'blink.mojom.DirectSocketsService';
blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec = { $: {} };
blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec = { $: {} };

// Struct: DirectTCPSocketOptions
mojo.internal.Struct(
    blink.mojom.DirectTCPSocketOptionsSpec, 'blink.mojom.DirectTCPSocketOptions', [
      mojo.internal.StructField('remote_addr', 0, 0, network.mojom.HostPortPairSpec, null, false, 0, undefined),
      mojo.internal.StructField('send_buffer_size_$flag', 28, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('send_buffer_size_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$flag', 28, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$value', 20, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('no_delay', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keep_alive_options', 8, 0, network.mojom.TCPKeepAliveOptionsSpec, null, true, 0, undefined),
      mojo.internal.StructField('dns_query_type', 24, 0, network.mojom.DnsQueryTypeSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DirectConnectedUDPSocketOptions
mojo.internal.Struct(
    blink.mojom.DirectConnectedUDPSocketOptionsSpec, 'blink.mojom.DirectConnectedUDPSocketOptions', [
      mojo.internal.StructField('remote_addr', 0, 0, network.mojom.HostPortPairSpec, null, false, 0, undefined),
      mojo.internal.StructField('send_buffer_size_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('send_buffer_size_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$flag', 20, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('dns_query_type', 16, 0, network.mojom.DnsQueryTypeSpec, null, true, 0, undefined),
      mojo.internal.StructField('multicast_time_to_live_$flag', 20, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_time_to_live_$value', originalFieldName: 'multicast_time_to_live' }),
      mojo.internal.StructField('multicast_time_to_live_$value', 21, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_time_to_live_$flag', originalFieldName: 'multicast_time_to_live' }),
      mojo.internal.StructField('multicast_loopback_$flag', 20, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_loopback_$value', originalFieldName: 'multicast_loopback' }),
      mojo.internal.StructField('multicast_loopback_$value', 20, 4, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_loopback_$flag', originalFieldName: 'multicast_loopback' }),
    ],
    [[0, 32]]);

// Struct: DirectBoundUDPSocketOptions
mojo.internal.Struct(
    blink.mojom.DirectBoundUDPSocketOptionsSpec, 'blink.mojom.DirectBoundUDPSocketOptions', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('send_buffer_size_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_buffer_size_$value', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('send_buffer_size_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'send_buffer_size_$flag', originalFieldName: 'send_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$flag', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'receive_buffer_size_$value', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('receive_buffer_size_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'receive_buffer_size_$flag', originalFieldName: 'receive_buffer_size' }),
      mojo.internal.StructField('ipv6_only_$flag', 16, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 16, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('multicast_allow_address_sharing_$flag', 16, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_allow_address_sharing_$value', originalFieldName: 'multicast_allow_address_sharing' }),
      mojo.internal.StructField('multicast_allow_address_sharing_$value', 16, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_allow_address_sharing_$flag', originalFieldName: 'multicast_allow_address_sharing' }),
      mojo.internal.StructField('multicast_time_to_live_$flag', 16, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_time_to_live_$value', originalFieldName: 'multicast_time_to_live' }),
      mojo.internal.StructField('multicast_time_to_live_$value', 17, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_time_to_live_$flag', originalFieldName: 'multicast_time_to_live' }),
      mojo.internal.StructField('multicast_loopback_$flag', 16, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'multicast_loopback_$value', originalFieldName: 'multicast_loopback' }),
      mojo.internal.StructField('multicast_loopback_$value', 18, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'multicast_loopback_$flag', originalFieldName: 'multicast_loopback' }),
    ],
    [[0, 32]]);

// Struct: DirectTCPServerSocketOptions
mojo.internal.Struct(
    blink.mojom.DirectTCPServerSocketOptionsSpec, 'blink.mojom.DirectTCPServerSocketOptions', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('ipv6_only_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ipv6_only_$value', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('ipv6_only_$value', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'ipv6_only_$flag', originalFieldName: 'ipv6_only' }),
      mojo.internal.StructField('backlog_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'backlog_$value', originalFieldName: 'backlog' }),
      mojo.internal.StructField('backlog_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'backlog_$flag', originalFieldName: 'backlog' }),
    ],
    [[0, 24]]);

// Interface: DirectSocketsService
mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec, 'blink.mojom.DirectSocketsService_OpenTCPSocket_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.DirectTCPSocketOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec, 'blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParams', [
      mojo.internal.StructField('result', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec, 'blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.DirectConnectedUDPSocketOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.RestrictedUDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec, 'blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParams', [
      mojo.internal.StructField('result', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec, 'blink.mojom.DirectSocketsService_OpenBoundUDPSocket_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.DirectBoundUDPSocketOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.RestrictedUDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec, 'blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParams', [
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec, 'blink.mojom.DirectSocketsService_OpenTCPServerSocket_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.DirectTCPServerSocketOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec, 'blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParams', [
      mojo.internal.StructField('result', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.DirectSocketsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DirectSocketsServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DirectSocketsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DirectSocketsServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.DirectSocketsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DirectSocketsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openTCPSocket(options, receiver, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec,
      blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec,
      [options, receiver, observer]);
  }

  openConnectedUDPSocket(options, receiver, listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec,
      blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec,
      [options, receiver, listener]);
  }

  openBoundUDPSocket(options, receiver, listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec,
      blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec,
      [options, receiver, listener]);
  }

  openTCPServerSocket(options, receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec,
      blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec,
      [options, receiver]);
  }

};

blink.mojom.DirectSocketsService.getRemote = function() {
  let remote = new blink.mojom.DirectSocketsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DirectSocketsService',
    'context');
  return remote.$;
};

blink.mojom.DirectSocketsServicePtr = blink.mojom.DirectSocketsServiceRemote;
blink.mojom.DirectSocketsServiceRequest = blink.mojom.DirectSocketsServicePendingReceiver;

