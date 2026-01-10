// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/delegated_ink_point_renderer.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

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

gfx.mojom.DelegatedInkPointRendererPtr = gfx.mojom.DelegatedInkPointRendererRemote;
gfx.mojom.DelegatedInkPointRendererRequest = gfx.mojom.DelegatedInkPointRendererPendingReceiver;

