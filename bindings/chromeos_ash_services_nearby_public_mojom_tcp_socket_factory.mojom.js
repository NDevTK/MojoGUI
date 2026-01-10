// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/tcp_socket_factory.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: TcpSocketFactory
sharing.mojom.mojom.TcpSocketFactory = {};

sharing.mojom.mojom.TcpSocketFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.mojom.TcpSocketFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.TcpSocketFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.mojom.TcpSocketFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.mojom.TcpSocketFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.mojom.TcpSocketFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createTCPServerSocket(local_addr, port, backlog, traffic_annotation, socket) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec,
      sharing.mojom.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec,
      [local_addr, port, backlog, traffic_annotation, socket]);
  }

  createTCPConnectedSocket(timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec,
      sharing.mojom.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec,
      [timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer]);
  }

};

sharing.mojom.mojom.TcpSocketFactory.getRemote = function() {
  let remote = new sharing.mojom.mojom.TcpSocketFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.TcpSocketFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateTCPServerSocket
sharing.mojom.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpSocketFactory.CreateTCPServerSocket_Params',
      packedSize: 48,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: sharing.mojom.TcpServerSocketPortSpec, nullable: false, minVersion: 0 },
        { name: 'backlog', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 16, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
        { name: 'socket', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.TCPServerSocketRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

sharing.mojom.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpSocketFactory.CreateTCPServerSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'local_addr_out', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateTCPConnectedSocket
sharing.mojom.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpSocketFactory.CreateTCPConnectedSocket_Params',
      packedSize: 64,
      fields: [
        { name: 'timeout', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'remote_addr_list', packedOffset: 16, packedBitOffset: 0, type: network.mojom.AddressListSpec, nullable: false, minVersion: 0 },
        { name: 'tcp_connected_socket_options', packedOffset: 24, packedBitOffset: 0, type: network.mojom.TCPConnectedSocketOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
        { name: 'socket', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.TCPConnectedSocketRemote), nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

sharing.mojom.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpSocketFactory.CreateTCPConnectedSocket_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'result', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'peer_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
        { name: 'receive_stream', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'send_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
sharing.mojom.mojom.TcpSocketFactoryPtr = sharing.mojom.mojom.TcpSocketFactoryRemote;
sharing.mojom.mojom.TcpSocketFactoryRequest = sharing.mojom.mojom.TcpSocketFactoryPendingReceiver;

