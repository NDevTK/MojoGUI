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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.storeDelegatedInkPoint');
          const result = this.impl.storeDelegatedInkPoint(params.point);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec.$, 0);
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

