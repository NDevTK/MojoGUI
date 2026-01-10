// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_resolving_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Struct: ProxyResolvingSocketOptions
network.mojom.mojom.ProxyResolvingSocketOptionsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocketOptions',
      packedSize: 16,
      fields: [
        { name: 'use_tls', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ProxyResolvingSocket
network.mojom.mojom.ProxyResolvingSocket = {};

network.mojom.mojom.ProxyResolvingSocketPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.ProxyResolvingSocketRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyResolvingSocket';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.ProxyResolvingSocketPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.ProxyResolvingSocketRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.ProxyResolvingSocketRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  upgradeToTLS(host_port_pair, traffic_annotation, receiver, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.ProxyResolvingSocket_UpgradeToTLS_ParamsSpec,
      network.mojom.mojom.ProxyResolvingSocket_UpgradeToTLS_ResponseParamsSpec,
      [host_port_pair, traffic_annotation, receiver, observer]);
  }

};

network.mojom.mojom.ProxyResolvingSocket.getRemote = function() {
  let remote = new network.mojom.mojom.ProxyResolvingSocketRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyResolvingSocket',
    'context');
  return remote.$;
};

// ParamsSpec for UpgradeToTLS
network.mojom.mojom.ProxyResolvingSocket_UpgradeToTLS_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocket.UpgradeToTLS_Params',
      packedSize: 40,
      fields: [
        { name: 'host_port_pair', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HostPortPairSpec, nullable: false, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 8, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.TLSClientSocketRemote), nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

network.mojom.mojom.ProxyResolvingSocket_UpgradeToTLS_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocket.UpgradeToTLS_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'net_error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receive_stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'send_stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.ProxyResolvingSocketPtr = network.mojom.mojom.ProxyResolvingSocketRemote;
network.mojom.mojom.ProxyResolvingSocketRequest = network.mojom.mojom.ProxyResolvingSocketPendingReceiver;


// Interface: ProxyResolvingSocketFactory
network.mojom.mojom.ProxyResolvingSocketFactory = {};

network.mojom.mojom.ProxyResolvingSocketFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.ProxyResolvingSocketFactoryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyResolvingSocketFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.ProxyResolvingSocketFactoryPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.ProxyResolvingSocketFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.ProxyResolvingSocketFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createProxyResolvingSocket(url, network_anonymization_key, options, traffic_annotation, socket, observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec,
      network.mojom.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParamsSpec,
      [url, network_anonymization_key, options, traffic_annotation, socket, observer]);
  }

};

network.mojom.mojom.ProxyResolvingSocketFactory.getRemote = function() {
  let remote = new network.mojom.mojom.ProxyResolvingSocketFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyResolvingSocketFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateProxyResolvingSocket
network.mojom.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocketFactory.CreateProxyResolvingSocket_Params',
      packedSize: 64,
      fields: [
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'network_anonymization_key', packedOffset: 0, packedBitOffset: 0, type: network.mojom.NetworkAnonymizationKeySpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ProxyResolvingSocketOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 32, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
        { name: 'socket', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.ProxyResolvingSocketRemote), nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

network.mojom.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyResolvingSocketFactory.CreateProxyResolvingSocket_ResponseParams',
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
network.mojom.mojom.ProxyResolvingSocketFactoryPtr = network.mojom.mojom.ProxyResolvingSocketFactoryRemote;
network.mojom.mojom.ProxyResolvingSocketFactoryRequest = network.mojom.mojom.ProxyResolvingSocketFactoryPendingReceiver;

