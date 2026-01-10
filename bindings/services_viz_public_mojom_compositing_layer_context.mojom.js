// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer_context.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: Type
viz.mojom.mojom.Type = {
  kCreate: 0,
  kDelete: 1,
};
viz.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Struct: TransferableUIResourceRequest
viz.mojom.mojom.TransferableUIResourceRequestSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransferableUIResourceRequest',
      packedSize: 16,
      fields: [
        { name: 'kCreate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LayerTreeUpdate
viz.mojom.mojom.LayerTreeUpdateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerTreeUpdate',
      packedSize: 336,
      fields: [
        { name: 'begin_frame_args', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false, minVersion: 0 },
        { name: 'source_frame_number', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'primary_main_frame_item_sequence_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'selection', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.LayerSelectionSpec, nullable: false, minVersion: 0 },
        { name: 'page_scale_factor', packedOffset: 236, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'min_page_scale_factor', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'max_page_scale_factor', packedOffset: 244, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'external_page_scale_factor', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'device_viewport', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 252, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'painted_device_scale_factor', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'display_color_spaces', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.DisplayColorSpacesSpec, nullable: false, minVersion: 0 },
        { name: 'local_surface_id_from_parent', packedOffset: 48, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true, minVersion: 0 },
        { name: 'current_local_surface_id', packedOffset: 56, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false, minVersion: 0 },
        { name: 'next_frame_token', packedOffset: 260, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'send_frame_token_to_embedder', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'target_local_surface_id', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true, minVersion: 0 },
        { name: 'background_color', packedOffset: 72, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'overscroll_elasticity_transform', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'page_scale_transform', packedOffset: 268, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'inner_scroll', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'outer_clip', packedOffset: 276, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'outer_scroll', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'viewport_damage_rect', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'full_tree_damaged', packedOffset: 320, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'debug_state', packedOffset: 88, packedBitOffset: 0, type: cc.mojom.LayerTreeDebugStateSpec, nullable: false, minVersion: 0 },
        { name: 'display_transform_hint', packedOffset: 284, packedBitOffset: 0, type: gfx.mojom.OverlayTransformSpec, nullable: false, minVersion: 0 },
        { name: 'max_safe_area_inset_bottom', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'browser_controls_params', packedOffset: 96, packedBitOffset: 0, type: cc.mojom.BrowserControlsParamsSpec, nullable: false, minVersion: 0 },
        { name: 'browser_controls_offset_tag_modifications', packedOffset: 104, packedBitOffset: 0, type: cc.mojom.BrowserControlsOffsetTagModificationsSpec, nullable: false, minVersion: 0 },
        { name: 'top_controls_shown_ratio', packedOffset: 292, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'bottom_controls_shown_ratio', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'ui_resource_requests', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.TransferableUIResourceRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'layers', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.LayerSpec, false), nullable: false, minVersion: 0 },
        { name: 'layer_order', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: true, minVersion: 0 },
        { name: 'transform_tree_update', packedOffset: 136, packedBitOffset: 0, type: viz.mojom.TransformTreeUpdateSpec, nullable: true, minVersion: 0 },
        { name: 'scroll_tree_update', packedOffset: 144, packedBitOffset: 0, type: viz.mojom.ScrollTreeUpdateSpec, nullable: true, minVersion: 0 },
        { name: 'transform_nodes', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.TransformNodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'clip_nodes', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ClipNodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'effect_nodes', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.EffectNodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'scroll_nodes', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ScrollNodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'num_transform_nodes', packedOffset: 300, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_clip_nodes', packedOffset: 304, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_effect_nodes', packedOffset: 308, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_scroll_nodes', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'tilings', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.TilingSpec, false), nullable: false, minVersion: 0 },
        { name: 'surface_ranges', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.SurfaceRangeSpec, false), nullable: true, minVersion: 0 },
        { name: 'view_transition_requests', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ViewTransitionRequestSpec, false), nullable: true, minVersion: 0 },
        { name: 'animation_timelines', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.AnimationTimelineSpec, false), nullable: true, minVersion: 0 },
        { name: 'removed_animation_timelines', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: true, minVersion: 0 },
        { name: 'frame_has_damage', packedOffset: 320, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'damage_reasons_bit_mask', packedOffset: 316, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_handling_interaction', packedOffset: 320, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'delegated_ink_metadata', packedOffset: 224, packedBitOffset: 0, type: gfx.mojom.DelegatedInkMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'may_throttle_if_undrawn_frames', packedOffset: 320, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_viewport_mobile_optimized', packedOffset: 320, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 336}]
    }
  }
};

// Struct: PendingLayerContext
viz.mojom.mojom.PendingLayerContextSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.PendingLayerContext',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(viz.mojom.LayerContextRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(viz.mojom.LayerContextClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: LayerContext
viz.mojom.mojom.LayerContext = {};

viz.mojom.mojom.LayerContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.LayerContextRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.LayerContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.LayerContextPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.LayerContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.LayerContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVisible(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.LayerContext_SetVisible_ParamsSpec,
      null,
      [visible]);
  }

  updateDisplayTree(update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.LayerContext_UpdateDisplayTree_ParamsSpec,
      null,
      [update]);
  }

  updateDisplayTiling(tiling) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec,
      null,
      [tiling]);
  }

};

viz.mojom.mojom.LayerContext.getRemote = function() {
  let remote = new viz.mojom.mojom.LayerContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.LayerContext',
    'context');
  return remote.$;
};

// ParamsSpec for SetVisible
viz.mojom.mojom.LayerContext_SetVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContext.SetVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateDisplayTree
viz.mojom.mojom.LayerContext_UpdateDisplayTree_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContext.UpdateDisplayTree_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.LayerTreeUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateDisplayTiling
viz.mojom.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContext.UpdateDisplayTiling_Params',
      packedSize: 16,
      fields: [
        { name: 'tiling', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.TilingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.LayerContextPtr = viz.mojom.mojom.LayerContextRemote;
viz.mojom.mojom.LayerContextRequest = viz.mojom.mojom.LayerContextPendingReceiver;


// Interface: LayerContextClient
viz.mojom.mojom.LayerContextClient = {};

viz.mojom.mojom.LayerContextClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.LayerContextClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.LayerContextClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.LayerContextClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.LayerContextClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.LayerContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRequestCommitForFrame(args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec,
      null,
      [args]);
  }

  onTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec,
      null,
      [layer_id, tiling_scales_to_clean_up]);
  }

};

viz.mojom.mojom.LayerContextClient.getRemote = function() {
  let remote = new viz.mojom.mojom.LayerContextClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.LayerContextClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnRequestCommitForFrame
viz.mojom.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContextClient.OnRequestCommitForFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTilingsReadyForCleanup
viz.mojom.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LayerContextClient.OnTilingsReadyForCleanup_Params',
      packedSize: 24,
      fields: [
        { name: 'layer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'tiling_scales_to_clean_up', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Float, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.LayerContextClientPtr = viz.mojom.mojom.LayerContextClientRemote;
viz.mojom.mojom.LayerContextClientRequest = viz.mojom.mojom.LayerContextClientPendingReceiver;

