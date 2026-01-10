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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = gfx.mojom.DelegatedInkPointRenderer_StoreDelegatedInkPoint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.storeDelegatedInkPoint(params.point);
          break;
        }
        case 1: {
          const params = gfx.mojom.DelegatedInkPointRenderer_ResetPrediction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resetPrediction();
          break;
        }
      }
    }});
  }
};

gfx.mojom.DelegatedInkPointRendererReceiver = gfx.mojom.DelegatedInkPointRendererReceiver;

gfx.mojom.DelegatedInkPointRendererPtr = gfx.mojom.DelegatedInkPointRendererRemote;
gfx.mojom.DelegatedInkPointRendererRequest = gfx.mojom.DelegatedInkPointRendererPendingReceiver;

