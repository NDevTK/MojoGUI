// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_resolving_socket.mojom
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
var url = url || {};

network.mojom.ProxyResolvingSocketOptionsSpec = { $: {} };
network.mojom.ProxyResolvingSocket = {};
network.mojom.ProxyResolvingSocket.$interfaceName = 'network.mojom.ProxyResolvingSocket';
network.mojom.ProxyResolvingSocket_UpgradeToTLS_ParamsSpec = { $: {} };
network.mojom.ProxyResolvingSocket_UpgradeToTLS_ResponseParamsSpec = { $: {} };
network.mojom.ProxyResolvingSocketFactory = {};
network.mojom.ProxyResolvingSocketFactory.$interfaceName = 'network.mojom.ProxyResolvingSocketFactory';
network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec = { $: {} };
network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParamsSpec = { $: {} };

// Struct: ProxyResolvingSocketOptions
mojo.internal.Struct(
    network.mojom.ProxyResolvingSocketOptionsSpec, 'network.mojom.ProxyResolvingSocketOptions', [
      mojo.internal.StructField('use_tls', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ProxyResolvingSocket
mojo.internal.Struct(
    network.mojom.ProxyResolvingSocket_UpgradeToTLS_ParamsSpec, 'network.mojom.ProxyResolvingSocket_UpgradeToTLS_Params', [
      mojo.internal.StructField('host_port_pair', 0, 0, network.mojom.HostPortPairSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 8, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(network.mojom.TLSClientSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 24, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    network.mojom.ProxyResolvingSocket_UpgradeToTLS_ResponseParamsSpec, 'network.mojom.ProxyResolvingSocket_UpgradeToTLS_ResponseParams', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('receive_stream', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 32]]);

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
      [host_port_pair, traffic_annotation, receiver, observer],
      false);
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

network.mojom.ProxyResolvingSocketPtr = network.mojom.ProxyResolvingSocketRemote;
network.mojom.ProxyResolvingSocketRequest = network.mojom.ProxyResolvingSocketPendingReceiver;


// Interface: ProxyResolvingSocketFactory
mojo.internal.Struct(
    network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec, 'network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, network.mojom.ProxyResolvingSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 24, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 32, 0, mojo.internal.InterfaceRequest(network.mojom.ProxyResolvingSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 40, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParamsSpec, 'network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 16, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 32, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 48]]);

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
      [url, network_anonymization_key, options, traffic_annotation, socket, observer],
      false);
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

network.mojom.ProxyResolvingSocketFactoryPtr = network.mojom.ProxyResolvingSocketFactoryRemote;
network.mojom.ProxyResolvingSocketFactoryRequest = network.mojom.ProxyResolvingSocketFactoryPendingReceiver;

