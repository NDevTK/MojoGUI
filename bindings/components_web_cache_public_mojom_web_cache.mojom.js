// Auto-generated MojoJS binding
// Source: chromium_src/components/web_cache/public/mojom/web_cache.mojom
// Module: web_cache.mojom

'use strict';

// Module namespace
var web_cache = web_cache || {};
web_cache.mojom = web_cache.mojom || {};

web_cache.mojom.WebCache = {};
web_cache.mojom.WebCache.$interfaceName = 'web_cache.mojom.WebCache';
web_cache.mojom.WebCache_ClearCache_ParamsSpec = { $: {} };

// Interface: WebCache
mojo.internal.Struct(
    web_cache.mojom.WebCache_ClearCache_ParamsSpec, 'web_cache.mojom.WebCache_ClearCache_Params', [
      mojo.internal.StructField('on_navigation', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

web_cache.mojom.WebCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_cache.mojom.WebCacheRemote = class {
  static get $interfaceName() {
    return 'web_cache.mojom.WebCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_cache.mojom.WebCachePendingReceiver,
      handle);
    this.$ = new web_cache.mojom.WebCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web_cache.mojom.WebCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clearCache(on_navigation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web_cache.mojom.WebCache_ClearCache_ParamsSpec,
      null,
      [on_navigation],
      false);
  }

};

web_cache.mojom.WebCache.getRemote = function() {
  let remote = new web_cache.mojom.WebCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_cache.mojom.WebCache',
    'context');
  return remote.$;
};

web_cache.mojom.WebCacheReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ClearCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_cache.mojom.WebCache_ClearCache_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearCache (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStructInline(web_cache.mojom.WebCache_ClearCache_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.clearCache');
          const result = this.impl.clearCache(params.on_navigation);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

web_cache.mojom.WebCacheReceiver = web_cache.mojom.WebCacheReceiver;

web_cache.mojom.WebCachePtr = web_cache.mojom.WebCacheRemote;
web_cache.mojom.WebCacheRequest = web_cache.mojom.WebCachePendingReceiver;

