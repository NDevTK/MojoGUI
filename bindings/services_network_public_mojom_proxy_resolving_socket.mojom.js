// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_resolving_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
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
      mojo.internal.StructField('receive_stream', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
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

network.mojom.ProxyResolvingSocketReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: UpgradeToTLS
        try {
             decoder.decodeStruct(network.mojom.ProxyResolvingSocket_UpgradeToTLS_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpgradeToTLS (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ProxyResolvingSocket_UpgradeToTLS_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.upgradeToTLS');
          const result = this.impl.upgradeToTLS(params.host_port_pair, params.traffic_annotation, params.receiver, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.ProxyResolvingSocket_UpgradeToTLS_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.ProxyResolvingSocketReceiver = network.mojom.ProxyResolvingSocketReceiver;

network.mojom.ProxyResolvingSocketPtr = network.mojom.ProxyResolvingSocketRemote;
network.mojom.ProxyResolvingSocketRequest = network.mojom.ProxyResolvingSocketPendingReceiver;


// Interface: ProxyResolvingSocketFactory
mojo.internal.Struct(
    network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec, 'network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 8, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, network.mojom.ProxyResolvingSocketOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 24, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('socket', 32, 0, mojo.internal.InterfaceRequest(network.mojom.ProxyResolvingSocketSpec), null, false, 0, undefined),
      mojo.internal.StructField('observer', 40, 0, mojo.internal.InterfaceProxy(network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParamsSpec, 'network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParams', [
      mojo.internal.StructField('local_addr', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peer_addr', 8, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('receive_stream', 16, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('send_stream', 24, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('result', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
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

network.mojom.ProxyResolvingSocketFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateProxyResolvingSocket
        try {
             decoder.decodeStruct(network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateProxyResolvingSocket (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createProxyResolvingSocket');
          const result = this.impl.createProxyResolvingSocket(params.url, params.network_anonymization_key, params.options, params.traffic_annotation, params.socket, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.ProxyResolvingSocketFactory_CreateProxyResolvingSocket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.ProxyResolvingSocketFactoryReceiver = network.mojom.ProxyResolvingSocketFactoryReceiver;

network.mojom.ProxyResolvingSocketFactoryPtr = network.mojom.ProxyResolvingSocketFactoryRemote;
network.mojom.ProxyResolvingSocketFactoryRequest = network.mojom.ProxyResolvingSocketFactoryPendingReceiver;

