// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer_context.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var cc = cc || {};
var skia = skia || {};
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
      mojo.internal.StructField('begin_frame_args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('primary_main_frame_item_sequence_number', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('selection', 24, 0, cc.mojom.LayerSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_viewport', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_color_spaces', 40, 0, gfx.mojom.DisplayColorSpacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id_from_parent', 48, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('current_local_surface_id', 56, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_local_surface_id', 64, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 72, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport_damage_rect', 80, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_state', 88, 0, cc.mojom.LayerTreeDebugStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_transform_hint', 96, 0, gfx.mojom.OverlayTransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_controls_params', 104, 0, cc.mojom.BrowserControlsParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_controls_offset_tag_modifications', 112, 0, cc.mojom.BrowserControlsOffsetTagModificationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ui_resource_requests', 120, 0, mojo.internal.Array(viz.mojom.TransferableUIResourceRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('layers', 128, 0, mojo.internal.Array(viz.mojom.LayerSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('layer_order', 136, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('transform_tree_update', 144, 0, viz.mojom.TransformTreeUpdateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scroll_tree_update', 152, 0, viz.mojom.ScrollTreeUpdateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('transform_nodes', 160, 0, mojo.internal.Array(viz.mojom.TransformNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('clip_nodes', 168, 0, mojo.internal.Array(viz.mojom.ClipNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('effect_nodes', 176, 0, mojo.internal.Array(viz.mojom.EffectNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scroll_nodes', 184, 0, mojo.internal.Array(viz.mojom.ScrollNodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tilings', 192, 0, mojo.internal.Array(viz.mojom.TilingSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('surface_ranges', 200, 0, mojo.internal.Array(viz.mojom.SurfaceRangeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('view_transition_requests', 208, 0, mojo.internal.Array(viz.mojom.ViewTransitionRequestSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('animation_timelines', 216, 0, mojo.internal.Array(viz.mojom.AnimationTimelineSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('removed_animation_timelines', 224, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('delegated_ink_metadata', 232, 0, gfx.mojom.DelegatedInkMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_frame_number', 240, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 244, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 248, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_page_scale_factor', 252, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('external_page_scale_factor', 256, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 260, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('painted_device_scale_factor', 264, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('next_frame_token', 268, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('overscroll_elasticity_transform', 272, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_transform', 276, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('inner_scroll', 280, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('outer_clip', 284, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('outer_scroll', 288, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_safe_area_inset_bottom', 292, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_shown_ratio', 296, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_shown_ratio', 300, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('num_transform_nodes', 304, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_clip_nodes', 308, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_effect_nodes', 312, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_scroll_nodes', 316, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('damage_reasons_bit_mask', 320, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('send_frame_token_to_embedder', 324, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('full_tree_damaged', 324, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('frame_has_damage', 324, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_handling_interaction', 324, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('may_throttle_if_undrawn_frames', 324, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_viewport_mobile_optimized', 324, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 336]]);

// Struct: PendingLayerContext
mojo.internal.Struct(
    viz.mojom.PendingLayerContextSpec, 'viz.mojom.PendingLayerContext', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
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
      mojo.internal.StructField('update', 0, 0, viz.mojom.LayerTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec, 'viz.mojom.LayerContext_UpdateDisplayTiling_Params', [
      mojo.internal.StructField('tiling', 0, 0, viz.mojom.TilingSpec.$, null, false, 0, undefined),
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
  setVisible(visible) {
    return this.$.setVisible(visible);
  }
  updateDisplayTree(update) {
    return this.$.updateDisplayTree(update);
  }
  updateDisplayTiling(tiling) {
    return this.$.updateDisplayTiling(tiling);
  }
};

viz.mojom.LayerContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LayerContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.LayerContext_SetVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  updateDisplayTree(update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec,
      null,
      [update],
      false);
  }

  updateDisplayTiling(tiling) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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

viz.mojom.LayerContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LayerContext', [
      { explicit: null },
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
             decoder.decodeStructInline(viz.mojom.LayerContext_SetVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayerContext_SetVisible_ParamsSpec.$.structSpec);
          const result = this.impl.setVisible(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayerContext_UpdateDisplayTree_ParamsSpec.$.structSpec);
          const result = this.impl.updateDisplayTree(params.update);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayerContext_UpdateDisplayTiling_ParamsSpec.$.structSpec);
          const result = this.impl.updateDisplayTiling(params.tiling);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.LayerContextReceiver = viz.mojom.LayerContextReceiver;

viz.mojom.LayerContextPtr = viz.mojom.LayerContextRemote;
viz.mojom.LayerContextRequest = viz.mojom.LayerContextPendingReceiver;


// Interface: LayerContextClient
mojo.internal.Struct(
    viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec, 'viz.mojom.LayerContextClient_OnRequestCommitForFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec, 'viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_Params', [
      mojo.internal.StructField('tiling_scales_to_clean_up', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('layer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
  onRequestCommitForFrame(args) {
    return this.$.onRequestCommitForFrame(args);
  }
  onTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up) {
    return this.$.onTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up);
  }
};

viz.mojom.LayerContextClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LayerContextClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onRequestCommitForFrame(args) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec,
      null,
      [args],
      false);
  }

  onTilingsReadyForCleanup(layer_id, tiling_scales_to_clean_up) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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

viz.mojom.LayerContextClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LayerContextClient', [
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
             decoder.decodeStructInline(viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayerContextClient_OnRequestCommitForFrame_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestCommitForFrame(params.args);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.LayerContextClient_OnTilingsReadyForCleanup_ParamsSpec.$.structSpec);
          const result = this.impl.onTilingsReadyForCleanup(params.layer_id, params.tiling_scales_to_clean_up);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.LayerContextClientReceiver = viz.mojom.LayerContextClientReceiver;

viz.mojom.LayerContextClientPtr = viz.mojom.LayerContextClientRemote;
viz.mojom.LayerContextClientRequest = viz.mojom.LayerContextClientPendingReceiver;

