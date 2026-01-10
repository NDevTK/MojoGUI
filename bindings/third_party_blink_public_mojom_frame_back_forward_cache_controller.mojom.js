// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/back_forward_cache_controller.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BlockingDetailsSpec = { $: {} };
blink.mojom.BackForwardCacheControllerHost = {};
blink.mojom.BackForwardCacheControllerHost.$interfaceName = 'blink.mojom.BackForwardCacheControllerHost';
blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec = { $: {} };
blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec = { $: {} };

// Struct: BlockingDetails
mojo.internal.Struct(
    blink.mojom.BlockingDetailsSpec, 'blink.mojom.BlockingDetails', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebSchedulerTrackedFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, blink.mojom.ScriptSourceLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: BackForwardCacheControllerHost
mojo.internal.Struct(
    blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec, 'blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_Params', [
      mojo.internal.StructField('reason', 0, 0, blink.mojom.RendererEvictionReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, blink.mojom.ScriptSourceLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec, 'blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_Params', [
      mojo.internal.StructField('details', 0, 0, mojo.internal.Array(blink.mojom.BlockingDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BackForwardCacheControllerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BackForwardCacheControllerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BackForwardCacheControllerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BackForwardCacheControllerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BackForwardCacheControllerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BackForwardCacheControllerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  evictFromBackForwardCache(reason, source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec,
      null,
      [reason, source],
      false);
  }

  didChangeBackForwardCacheDisablingFeatures(details) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec,
      null,
      [details],
      false);
  }

};

blink.mojom.BackForwardCacheControllerHost.getRemote = function() {
  let remote = new blink.mojom.BackForwardCacheControllerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BackForwardCacheControllerHost',
    'context');
  return remote.$;
};

blink.mojom.BackForwardCacheControllerHostReceiver = class {
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
        
        // Try Method 0: EvictFromBackForwardCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EvictFromBackForwardCache (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidChangeBackForwardCacheDisablingFeatures
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeBackForwardCacheDisablingFeatures (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.evictFromBackForwardCache');
          const result = this.impl.evictFromBackForwardCache(params.reason, params.source);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.didChangeBackForwardCacheDisablingFeatures');
          const result = this.impl.didChangeBackForwardCacheDisablingFeatures(params.details);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BackForwardCacheControllerHostReceiver = blink.mojom.BackForwardCacheControllerHostReceiver;

blink.mojom.BackForwardCacheControllerHostPtr = blink.mojom.BackForwardCacheControllerHostRemote;
blink.mojom.BackForwardCacheControllerHostRequest = blink.mojom.BackForwardCacheControllerHostPendingReceiver;

