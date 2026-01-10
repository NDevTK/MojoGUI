// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/delegated_ink_point_renderer.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.DelegatedInkPointRenderer = {};
gfx.mojom.DelegatedInkPointRenderer.$interfaceName = 'gfx.mojom.DelegatedInkPointRenderer';
gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec = { $: {} };
gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec = { $: {} };

// Interface: DelegatedInkPointRenderer
mojo.internal.Struct(
    gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec, 'gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.DelegatedInkPointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec, 'gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_Params', [
    ],
    [[0, 8]]);

gfx.mojom.DelegatedInkPointRendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gfx.mojom.DelegatedInkPointRendererRemote = class {
  static get $interfaceName() {
    return 'gfx.mojom.DelegatedInkPointRenderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gfx.mojom.DelegatedInkPointRendererPendingReceiver,
      handle);
    this.$ = new gfx.mojom.DelegatedInkPointRendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gfx.mojom.DelegatedInkPointRendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  storeDelegatedInkPoint(point) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec,
      null,
      [point],
      false);
  }

  resetPrediction() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec,
      null,
      [],
      false);
  }

};

gfx.mojom.DelegatedInkPointRenderer.getRemote = function() {
  let remote = new gfx.mojom.DelegatedInkPointRendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gfx.mojom.DelegatedInkPointRenderer',
    'context');
  return remote.$;
};

gfx.mojom.DelegatedInkPointRendererReceiver = class {
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
        
        // Try Method 0: StoreDelegatedInkPoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreDelegatedInkPoint (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ResetPrediction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetPrediction (1)');
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
          const params = decoder.decodeStruct(gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.storeDelegatedInkPoint');
          const result = this.impl.storeDelegatedInkPoint(params.point);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetPrediction');
          const result = this.impl.resetPrediction();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

gfx.mojom.DelegatedInkPointRendererReceiver = gfx.mojom.DelegatedInkPointRendererReceiver;

gfx.mojom.DelegatedInkPointRendererPtr = gfx.mojom.DelegatedInkPointRendererRemote;
gfx.mojom.DelegatedInkPointRendererRequest = gfx.mojom.DelegatedInkPointRendererPendingReceiver;

