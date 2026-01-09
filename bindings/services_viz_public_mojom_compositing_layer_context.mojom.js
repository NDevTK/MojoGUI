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
        { name: 'kCreate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 392,
      fields: [
        { name: 'begin_frame_args', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false },
        { name: 'source_frame_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'trace_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'primary_main_frame_item_sequence_number', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'selection', packedOffset: 40, packedBitOffset: 0, type: cc.mojom.LayerSelectionSpec, nullable: false },
        { name: 'page_scale_factor', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'min_page_scale_factor', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'max_page_scale_factor', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'external_page_scale_factor', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'device_viewport', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'device_scale_factor', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'painted_device_scale_factor', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'display_color_spaces', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.DisplayColorSpacesSpec, nullable: false },
        { name: 'local_surface_id_from_parent', packedOffset: 88, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true },
        { name: 'current_local_surface_id', packedOffset: 96, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false },
        { name: 'next_frame_token', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'send_frame_token_to_embedder', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'target_local_surface_id', packedOffset: 120, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true },
        { name: 'background_color', packedOffset: 128, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'overscroll_elasticity_transform', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'page_scale_transform', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'inner_scroll', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'outer_clip', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'outer_scroll', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'viewport_damage_rect', packedOffset: 160, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'full_tree_damaged', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'debug_state', packedOffset: 176, packedBitOffset: 0, type: cc.mojom.LayerTreeDebugStateSpec, nullable: false },
        { name: 'display_transform_hint', packedOffset: 184, packedBitOffset: 0, type: gfx.mojom.OverlayTransformSpec, nullable: false },
        { name: 'max_safe_area_inset_bottom', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'browser_controls_params', packedOffset: 200, packedBitOffset: 0, type: cc.mojom.BrowserControlsParamsSpec, nullable: false },
        { name: 'browser_controls_offset_tag_modifications', packedOffset: 208, packedBitOffset: 0, type: cc.mojom.BrowserControlsOffsetTagModificationsSpec, nullable: false },
        { name: 'top_controls_shown_ratio', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'bottom_controls_shown_ratio', packedOffset: 220, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'ui_resource_requests', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'layers', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'layer_order', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'transform_tree_update', packedOffset: 248, packedBitOffset: 0, type: viz.mojom.TransformTreeUpdateSpec, nullable: true },
        { name: 'scroll_tree_update', packedOffset: 256, packedBitOffset: 0, type: viz.mojom.ScrollTreeUpdateSpec, nullable: true },
        { name: 'transform_nodes', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'clip_nodes', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'effect_nodes', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'scroll_nodes', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'num_transform_nodes', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'num_clip_nodes', packedOffset: 300, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'num_effect_nodes', packedOffset: 304, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'num_scroll_nodes', packedOffset: 308, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'tilings', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'surface_ranges', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'view_transition_requests', packedOffset: 328, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'animation_timelines', packedOffset: 336, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'removed_animation_timelines', packedOffset: 344, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'frame_has_damage', packedOffset: 352, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'damage_reasons_bit_mask', packedOffset: 360, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_handling_interaction', packedOffset: 364, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'delegated_ink_metadata', packedOffset: 376, packedBitOffset: 0, type: gfx.mojom.DelegatedInkMetadataSpec, nullable: true },
        { name: 'may_throttle_if_undrawn_frames', packedOffset: 384, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_viewport_mobile_optimized', packedOffset: 384, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
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
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
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
        { name: 'visible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
        { name: 'update', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.LayerTreeUpdateSpec, nullable: false },
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
        { name: 'tiling', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.TilingSpec, nullable: false },
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
        { name: 'args', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false },
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
        { name: 'layer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'tiling_scales_to_clean_up', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.LayerContextClientPtr = viz.mojom.LayerContextClientRemote;
viz.mojom.LayerContextClientRequest = viz.mojom.LayerContextClientPendingReceiver;

