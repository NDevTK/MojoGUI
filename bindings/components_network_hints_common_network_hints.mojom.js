// Auto-generated MojoJS binding
// Source: chromium_src/components/network_hints/common/network_hints.mojom
// Module: network_hints.mojom

'use strict';

// Module namespace
var network_hints = network_hints || {};
network_hints.mojom = network_hints.mojom || {};
var url = url || {};

network_hints.mojom.NetworkHintsHandler = {};
network_hints.mojom.NetworkHintsHandler.$interfaceName = 'network_hints.mojom.NetworkHintsHandler';
network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec = { $: {} };
network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec = { $: {} };

// Interface: NetworkHintsHandler
mojo.internal.Struct(
    network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec, 'network_hints.mojom.NetworkHintsHandler_PrefetchDNS_Params', [
      mojo.internal.StructField('url_list', 0, 0, mojo.internal.Array(url.mojom.SchemeHostPortSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec, 'network_hints.mojom.NetworkHintsHandler_Preconnect_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.SchemeHostPortSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_credentials', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

network_hints.mojom.NetworkHintsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network_hints.mojom.NetworkHintsHandlerRemote = class {
  static get $interfaceName() {
    return 'network_hints.mojom.NetworkHintsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network_hints.mojom.NetworkHintsHandlerPendingReceiver,
      handle);
    this.$ = new network_hints.mojom.NetworkHintsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network_hints.mojom.NetworkHintsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  prefetchDNS(url_list) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec,
      null,
      [url_list],
      false);
  }

  preconnect(url, allow_credentials) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec,
      null,
      [url, allow_credentials],
      false);
  }

};

network_hints.mojom.NetworkHintsHandler.getRemote = function() {
  let remote = new network_hints.mojom.NetworkHintsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network_hints.mojom.NetworkHintsHandler',
    'context');
  return remote.$;
};

network_hints.mojom.NetworkHintsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: PrefetchDNS
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrefetchDNS (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: Preconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Preconnect (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
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
          const params = decoder.decodeStruct(network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.prefetchDNS');
          const result = this.impl.prefetchDNS(params.url_list);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.preconnect');
          const result = this.impl.preconnect(params.url, params.allow_credentials);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network_hints.mojom.NetworkHintsHandlerReceiver = network_hints.mojom.NetworkHintsHandlerReceiver;

network_hints.mojom.NetworkHintsHandlerPtr = network_hints.mojom.NetworkHintsHandlerRemote;
network_hints.mojom.NetworkHintsHandlerRequest = network_hints.mojom.NetworkHintsHandlerPendingReceiver;

