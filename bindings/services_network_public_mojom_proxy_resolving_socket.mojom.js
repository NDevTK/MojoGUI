// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_resolving_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: ProxyResolvingSocketOptions
network.mojom.ProxyResolvingSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocketOptions',
      packedSize: 16,
      fields: [
        { name: 'use_tls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ProxyResolvingSocket
network.mojom.ProxyResolvingSocket = {};

network.mojom.ProxyResolvingSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyResolvingSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyResolvingSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyResolvingSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyResolvingSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyResolvingSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  upgradeToTLS(host_port_pair, traffic_annotation, receiver, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyResolvingSocket_UpgradeToTLS_ParamsSpec,
      network.mojom.ProxyResolvingSocket_UpgradeToTLS_ResponseParamsSpec,
      [host_port_pair, traffic_annotation, receiver, observer]);
  }

};

network.mojom.ProxyResolvingSocket.getRemote = function() {
  let remote = new network.mojom.ProxyResolvingSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyResolvingSocket',
    'context');
  return remote.$;
};

// ParamsSpec for UpgradeToTLS
network.mojom.ProxyResolvingSocket_UpgradeToTLS_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocket.UpgradeToTLS_Params',
      packedSize: 32,
      fields: [
        { name: 'host_port_pair', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false },
        { name: 'traffic_annotation', packedOffset: 8, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'observer', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.ProxyResolvingSocket_UpgradeToTLS_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocket.UpgradeToTLS_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'receive_stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'send_stream', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ProxyResolvingSocketPtr = network.mojom.ProxyResolvingSocketRemote;
network.mojom.ProxyResolvingSocketRequest = network.mojom.ProxyResolvingSocketPendingReceiver;


// Interface: ProxyResolvingSocketFactory
network.mojom.ProxyResolvingSocketFactory = {};

network.mojom.ProxyResolvingSocketFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyResolvingSocketFactoryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyResolvingSocketFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyResolvingSocketFactoryPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyResolvingSocketFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyResolvingSocketFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createProxyResolvingSocket(url, network_anonymization_key, options, traffic_annotation, socket, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec,
      network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParamsSpec,
      [url, network_anonymization_key, options, traffic_annotation, socket, observer]);
  }

};

network.mojom.ProxyResolvingSocketFactory.getRemote = function() {
  let remote = new network.mojom.ProxyResolvingSocketFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyResolvingSocketFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateProxyResolvingSocket
network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocketFactory.CreateProxyResolvingSocket_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'network_anonymization_key', packedOffset: 8, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ProxyResolvingSocketOptionsSpec, nullable: true },
        { name: 'traffic_annotation', packedOffset: 24, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false },
        { name: 'socket', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'observer', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocketFactory.CreateProxyResolvingSocket_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'local_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true },
        { name: 'peer_addr', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true },
        { name: 'receive_stream', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'send_stream', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ProxyResolvingSocketFactoryPtr = network.mojom.ProxyResolvingSocketFactoryRemote;
network.mojom.ProxyResolvingSocketFactoryRequest = network.mojom.ProxyResolvingSocketFactoryPendingReceiver;

