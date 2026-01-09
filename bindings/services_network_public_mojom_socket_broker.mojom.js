// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/socket_broker.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: SocketBroker
network.mojom.SocketBroker = {};

network.mojom.SocketBrokerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SocketBrokerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SocketBroker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SocketBrokerPendingReceiver,
      handle);
    this.$ = new network.mojom.SocketBrokerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SocketBrokerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createTcpSocket(address_family) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec,
      network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec,
      network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec,
      [address_family],
      undefined,
      undefined
    );
  }

  createUdpSocket(address_family) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec,
      network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec,
      network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec,
      [address_family],
      undefined,
      undefined
    );
  }

};

network.mojom.SocketBroker.getRemote = function() {
  let remote = new network.mojom.SocketBrokerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SocketBroker',
    'context');
  return remote.$;
};

// ParamsSpec for CreateTcpSocket
network.mojom.SocketBroker_CreateTcpSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketBroker.CreateTcpSocket_Params',
      packedSize: 16,
      fields: [
        { name: 'address_family', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.SocketBroker_CreateTcpSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketBroker.CreateTcpSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'created_socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'rv', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateUdpSocket
network.mojom.SocketBroker_CreateUdpSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketBroker.CreateUdpSocket_Params',
      packedSize: 16,
      fields: [
        { name: 'address_family', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.SocketBroker_CreateUdpSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketBroker.CreateUdpSocket_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'created_socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'rv', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
network.mojom.SocketBrokerPtr = network.mojom.SocketBrokerRemote;
network.mojom.SocketBrokerRequest = network.mojom.SocketBrokerPendingReceiver;

