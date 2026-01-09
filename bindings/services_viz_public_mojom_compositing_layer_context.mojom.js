// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer_context.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: Type
viz.mojom.Type = {
  kCreate: 0,
  kDelete: 1,
};

// Struct: TransferableUIResourceRequest
viz.mojom.TransferableUIResourceRequestSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransferableUIResourceRequest',
      packedSize: 16,
      fields: [
        { name: 'kCreate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LayerTreeUpdate
viz.mojom.LayerTreeUpdateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerTreeUpdate',
      packedSize: 16,
      fields: [
        { name: 'is_viewport_mobile_optimized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PendingLayerContext
viz.mojom.PendingLayerContextSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.PendingLayerContext',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: LayerContext
viz.mojom.LayerContext = {};

viz.mojom.LayerContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.LayerContextRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.LayerContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.LayerContextPendingReceiver,
      handle);
    this.$ = new viz.mojom.LayerContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.LayerContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVisible(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.LayerContext_SetVisible_ParamsSpec,
      null,
      [visible]);
  }

  updateDisplayTree(update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec,
      null,
      [update]);
  }

  updateDisplayTiling(tiling) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec,
      null,
      [tiling]);
  }

};

viz.mojom.LayerContext.getRemote = function() {
  let remote = new viz.mojom.LayerContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.LayerContext',
    'context');
  return remote.$;
};

// ParamsSpec for SetVisible
viz.mojom.LayerContext_SetVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContext.SetVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateDisplayTree
viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContext.UpdateDisplayTree_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateDisplayTiling
viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContext.UpdateDisplayTiling_Params',
      packedSize: 16,
      fields: [
        { name: 'tiling', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.LayerContextPtr = viz.mojom.LayerContextRemote;
viz.mojom.LayerContextRequest = viz.mojom.LayerContextPendingReceiver;


// Interface: LayerContextClient
viz.mojom.LayerContextClient = {};

viz.mojom.LayerContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.LayerContextClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.LayerContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.LayerContextClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.LayerContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.LayerContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRequestCommitForFrame(args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec,
      null,
      [args]);
  }

  onTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec,
      null,
      [layer_id, tiling_scales_to_clean_up]);
  }

};

viz.mojom.LayerContextClient.getRemote = function() {
  let remote = new viz.mojom.LayerContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.LayerContextClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnRequestCommitForFrame
viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContextClient.OnRequestCommitForFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTilingsReadyForCleanup
viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContextClient.OnTilingsReadyForCleanup_Params',
      packedSize: 24,
      fields: [
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'tiling_scales_to_clean_up', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.LayerContextClientPtr = viz.mojom.LayerContextClientRemote;
viz.mojom.LayerContextClientRequest = viz.mojom.LayerContextClientPendingReceiver;

