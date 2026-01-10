// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer_context.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.TypeSpec = { $: mojo.internal.Enum() };
viz.mojom.TransferableUIResourceRequestSpec = { $: {} };
viz.mojom.LayerTreeUpdateSpec = { $: {} };
viz.mojom.PendingLayerContextSpec = { $: {} };
viz.mojom.LayerContext = {};
viz.mojom.LayerContext.$interfaceName = 'viz.mojom.LayerContext';
viz.mojom.LayerContext_SetVisible_ParamsSpec = { $: {} };
viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec = { $: {} };
viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec = { $: {} };
viz.mojom.LayerContextClient = {};
viz.mojom.LayerContextClient.$interfaceName = 'viz.mojom.LayerContextClient';
viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec = { $: {} };
viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec = { $: {} };

// Enum: Type
viz.mojom.Type = {
  kCreate: 0,
  kDelete: 1,
};

// Struct: TransferableUIResourceRequest
mojo.internal.Struct(
    viz.mojom.TransferableUIResourceRequestSpec, 'viz.mojom.TransferableUIResourceRequest', [
      mojo.internal.StructField('kCreate', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LayerTreeUpdate
mojo.internal.Struct(
    viz.mojom.LayerTreeUpdateSpec, 'viz.mojom.LayerTreeUpdate', [
      mojo.internal.StructField('begin_frame_args', 0, 0, viz.mojom.BeginFrameArgsSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_frame_number', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('trace_id', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('primary_main_frame_item_sequence_number', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('selection', 32, 0, cc.mojom.LayerSelectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_page_scale_factor', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('external_page_scale_factor', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('device_viewport', 56, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('painted_device_scale_factor', 68, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('display_color_spaces', 72, 0, gfx.mojom.DisplayColorSpacesSpec, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id_from_parent', 80, 0, viz.mojom.LocalSurfaceIdSpec, null, true, 0, undefined),
      mojo.internal.StructField('current_local_surface_id', 88, 0, viz.mojom.LocalSurfaceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('next_frame_token', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('send_frame_token_to_embedder', 100, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('target_local_surface_id', 104, 0, viz.mojom.LocalSurfaceIdSpec, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 112, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('overscroll_elasticity_transform', 120, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_transform', 124, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('inner_scroll', 128, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('outer_clip', 132, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('outer_scroll', 136, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('viewport_damage_rect', 144, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('full_tree_damaged', 152, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('debug_state', 160, 0, cc.mojom.LayerTreeDebugStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('display_transform_hint', 168, 0, gfx.mojom.OverlayTransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_safe_area_inset_bottom', 172, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('browser_controls_params', 176, 0, cc.mojom.BrowserControlsParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('browser_controls_offset_tag_modifications', 184, 0, cc.mojom.BrowserControlsOffsetTagModificationsSpec, null, false, 0, undefined),
      mojo.internal.StructField('top_controls_shown_ratio', 192, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_shown_ratio', 196, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('ui_resource_requests', 200, 0, mojo.internal.Array(viz.mojom.TransferableUIResourceRequestSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('layers', 208, 0, mojo.internal.Array(viz.mojom.LayerSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('layer_order', 216, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('transform_tree_update', 224, 0, viz.mojom.TransformTreeUpdateSpec, null, true, 0, undefined),
      mojo.internal.StructField('scroll_tree_update', 232, 0, viz.mojom.ScrollTreeUpdateSpec, null, true, 0, undefined),
      mojo.internal.StructField('transform_nodes', 240, 0, mojo.internal.Array(viz.mojom.TransformNodeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('clip_nodes', 248, 0, mojo.internal.Array(viz.mojom.ClipNodeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('effect_nodes', 256, 0, mojo.internal.Array(viz.mojom.EffectNodeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('scroll_nodes', 264, 0, mojo.internal.Array(viz.mojom.ScrollNodeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('num_transform_nodes', 272, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_clip_nodes', 276, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_effect_nodes', 280, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_scroll_nodes', 284, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('tilings', 288, 0, mojo.internal.Array(viz.mojom.TilingSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('surface_ranges', 296, 0, mojo.internal.Array(viz.mojom.SurfaceRangeSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('view_transition_requests', 304, 0, mojo.internal.Array(viz.mojom.ViewTransitionRequestSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('animation_timelines', 312, 0, mojo.internal.Array(viz.mojom.AnimationTimelineSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('removed_animation_timelines', 320, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('frame_has_damage', 328, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('damage_reasons_bit_mask', 332, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_handling_interaction', 336, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('delegated_ink_metadata', 344, 0, gfx.mojom.DelegatedInkMetadataSpec, null, true, 0, undefined),
      mojo.internal.StructField('may_throttle_if_undrawn_frames', 352, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_viewport_mobile_optimized', 352, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 368]]);

// Struct: PendingLayerContext
mojo.internal.Struct(
    viz.mojom.PendingLayerContextSpec, 'viz.mojom.PendingLayerContext', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.AssociatedInterfaceRequest(viz.mojom.LayerContextRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.AssociatedInterfaceProxy(viz.mojom.LayerContextClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: LayerContext
mojo.internal.Struct(
    viz.mojom.LayerContext_SetVisible_ParamsSpec, 'viz.mojom.LayerContext_SetVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec, 'viz.mojom.LayerContext_UpdateDisplayTree_Params', [
      mojo.internal.StructField('update', 0, 0, viz.mojom.LayerTreeUpdateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec, 'viz.mojom.LayerContext_UpdateDisplayTiling_Params', [
      mojo.internal.StructField('tiling', 0, 0, viz.mojom.TilingSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [visible],
      false);
  }

  updateDisplayTree(update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec,
      null,
      [update],
      false);
  }

  updateDisplayTiling(tiling) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec,
      null,
      [tiling],
      false);
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

viz.mojom.LayerContextPtr = viz.mojom.LayerContextRemote;
viz.mojom.LayerContextRequest = viz.mojom.LayerContextPendingReceiver;


// Interface: LayerContextClient
mojo.internal.Struct(
    viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec, 'viz.mojom.LayerContextClient_OnRequestCommitForFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec, 'viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_Params', [
      mojo.internal.StructField('layer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tiling_scales_to_clean_up', 8, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [args],
      false);
  }

  onTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec,
      null,
      [layer_id, tiling_scales_to_clean_up],
      false);
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

viz.mojom.LayerContextClientPtr = viz.mojom.LayerContextClientRemote;
viz.mojom.LayerContextClientRequest = viz.mojom.LayerContextClientPendingReceiver;

