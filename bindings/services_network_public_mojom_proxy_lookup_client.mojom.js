// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_lookup_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var proxy_resolver = proxy_resolver || {};

network.mojom.ProxyLookupClient = {};
network.mojom.ProxyLookupClient.$interfaceName = 'network.mojom.ProxyLookupClient';
network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec = { $: {} };

// Interface: ProxyLookupClient
mojo.internal.Struct(
    network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec, 'network.mojom.ProxyLookupClient_OnProxyLookupComplete_Params', [
      mojo.internal.StructField('proxy_info', 0, 0, proxy_resolver.mojom.ProxyInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.ProxyLookupClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyLookupClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyLookupClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyLookupClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyLookupClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyLookupClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProxyLookupComplete(net_error, proxy_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec,
      null,
      [net_error, proxy_info],
      false);
  }

};

network.mojom.ProxyLookupClient.getRemote = function() {
  let remote = new network.mojom.ProxyLookupClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyLookupClient',
    'context');
  return remote.$;
};

network.mojom.ProxyLookupClientReceiver = class {
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
        
        // Try Method 0: OnProxyLookupComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProxyLookupComplete (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onProxyLookupComplete');
          const result = this.impl.onProxyLookupComplete(params.net_error, params.proxy_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.ProxyLookupClientReceiver = network.mojom.ProxyLookupClientReceiver;

network.mojom.ProxyLookupClientPtr = network.mojom.ProxyLookupClientRemote;
network.mojom.ProxyLookupClientRequest = network.mojom.ProxyLookupClientPendingReceiver;

