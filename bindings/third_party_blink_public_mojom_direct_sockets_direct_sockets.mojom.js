// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/direct_sockets/direct_sockets.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DirectTCPSocketOptions
blink.mojom.DirectTCPSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectTCPSocketOptions',
      packedSize: 16,
      fields: [
        { name: 'dns_query_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DirectConnectedUDPSocketOptions
blink.mojom.DirectConnectedUDPSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectConnectedUDPSocketOptions',
      packedSize: 16,
      fields: [
        { name: 'multicast_loopback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DirectBoundUDPSocketOptions
blink.mojom.DirectBoundUDPSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectBoundUDPSocketOptions',
      packedSize: 16,
      fields: [
        { name: 'multicast_loopback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DirectTCPServerSocketOptions
blink.mojom.DirectTCPServerSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectTCPServerSocketOptions',
      packedSize: 16,
      fields: [
        { name: 'backlog', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: DirectSocketsService
blink.mojom.DirectSocketsService = {};

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

// ParamsSpec for OpenTCPSocket
blink.mojom.DirectSocketsService_OpenTCPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenTCPSocket_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'observer', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DirectSocketsService_OpenTCPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenTCPSocket_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'peer_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'receive_stream', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'send_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'result', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenConnectedUDPSocket
blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenConnectedUDPSocket_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'listener', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DirectSocketsService_OpenConnectedUDPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenConnectedUDPSocket_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'peer_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenBoundUDPSocket
blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenBoundUDPSocket_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'listener', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DirectSocketsService_OpenBoundUDPSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenBoundUDPSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenTCPServerSocket
blink.mojom.DirectSocketsService_OpenTCPServerSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenTCPServerSocket_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.DirectSocketsService_OpenTCPServerSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectSocketsService.OpenTCPServerSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'local_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.DirectSocketsServicePtr = blink.mojom.DirectSocketsServiceRemote;
blink.mojom.DirectSocketsServiceRequest = blink.mojom.DirectSocketsServicePendingReceiver;

