// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/tcp_socket_factory.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};


// Interface: TcpSocketFactory
sharing.mojom.TcpSocketFactory = {};

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
      sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec,
      [local_addr, port, backlog, traffic_annotation, socket],
      undefined,
      undefined
    );
  }

  createTCPConnectedSocket(timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec,
      sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec,
      sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec,
      [timeout, local_addr, remote_addr_list, tcp_connected_socket_options, traffic_annotation, socket, observer],
      undefined,
      undefined
    );
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

// ParamsSpec for CreateTCPServerSocket
sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpSocketFactory.CreateTCPServerSocket_Params',
      packedSize: 48,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'backlog', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'socket', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

sharing.mojom.TcpSocketFactory_CreateTCPServerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpSocketFactory.CreateTCPServerSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr_out', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateTCPConnectedSocket
sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpSocketFactory.CreateTCPConnectedSocket_Params',
      packedSize: 64,
      fields: [
        { name: 'timeout', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'remote_addr_list', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tcp_connected_socket_options', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'socket', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

sharing.mojom.TcpSocketFactory_CreateTCPConnectedSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sharing.mojom.TcpSocketFactory.CreateTCPConnectedSocket_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'peer_addr', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'receive_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'send_stream', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
sharing.mojom.TcpSocketFactoryPtr = sharing.mojom.TcpSocketFactoryRemote;
sharing.mojom.TcpSocketFactoryRequest = sharing.mojom.TcpSocketFactoryPendingReceiver;

