// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/tcp_socket_factory.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

sharing.mojom.TcpSocketFactory = {};
sharing.mojom.TcpSocketFactory.$interfaceName = 'sharing.mojom.TcpSocketFactory';
sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec = { $: {} };
sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec = { $: {} };
sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec = { $: {} };
sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec = { $: {} };

// Interface: TcpSocketFactory
mojo.internal.Struct(
    sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec, 'sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_Params', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, sharing.mojom.TcpServerSocketPortSpec, null, false, 0, undefined),
      mojo.internal.StructField('backlog', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 24, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('socket', 32, 0, mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec, 'sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr_out', 8, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec, 'sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_Params', [
      mojo.internal.StructField('timeout', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('local_addr', 8, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('remote_addr_list', 16, 0, network.mojom.AddressListSpec, null, false, 0, undefined),
      mojo.internal.StructField('tcp_connected_socket_options', 24, 0, network.mojom.TCPConnectedSocketOptionsSpec, null, true, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 32, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('socket', 40, 0, mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 48, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec, 'sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 8, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 16, 0, network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 32, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 48]]);

sharing.mojom.TcpSocketFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.TcpSocketFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.TcpSocketFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.TcpSocketFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.TcpSocketFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.TcpSocketFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createTCPServerSocket(local_addr, port, backlog, traffic_annotation, socket) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec,
      sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec,
      [local_addr, port, backlog, traffic_annotation, socket],
      false);
  }

  createTCPConnectedSocket(timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec,
      sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec,
      [timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer],
      false);
  }

};

sharing.mojom.TcpSocketFactory.getRemote = function() {
  let remote = new sharing.mojom.TcpSocketFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.TcpSocketFactory',
    'context');
  return remote.$;
};

sharing.mojom.TcpSocketFactoryPtr = sharing.mojom.TcpSocketFactoryRemote;
sharing.mojom.TcpSocketFactoryRequest = sharing.mojom.TcpSocketFactoryPendingReceiver;

