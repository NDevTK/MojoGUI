// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/delegated_ink_point_renderer.mojom
// Module: gfx.mojom

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
  storeDelegatedInkPoint(point) {
    return this.$.storeDelegatedInkPoint(point);
  }
  resetPrediction() {
    return this.$.resetPrediction();
  }
};

gfx.mojom.DelegatedInkPointRendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DelegatedInkPointRenderer', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  storeDelegatedInkPoint(point) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec,
      null,
      [point],
      false);
  }

  resetPrediction() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DelegatedInkPointRenderer', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec.$.structSpec);
          const result = this.impl.storeDelegatedInkPoint(params.point);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec.$.structSpec);
          const result = this.impl.resetPrediction();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

gfx.mojom.DelegatedInkPointRendererReceiver = gfx.mojom.DelegatedInkPointRendererReceiver;

gfx.mojom.DelegatedInkPointRendererPtr = gfx.mojom.DelegatedInkPointRendererRemote;
gfx.mojom.DelegatedInkPointRendererRequest = gfx.mojom.DelegatedInkPointRendererPendingReceiver;

