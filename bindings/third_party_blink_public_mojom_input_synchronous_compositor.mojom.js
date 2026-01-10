// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/synchronous_compositor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var viz = viz || {};
var gfx = gfx || {};

blink.mojom.SyncCompositorDemandDrawHwParamsSpec = { $: {} };
blink.mojom.SyncCompositorDemandDrawSwParamsSpec = { $: {} };
blink.mojom.SyncCompositorCommonRendererParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor = {};
blink.mojom.SynchronousCompositor.$interfaceName = 'blink.mojom.SynchronousCompositor';
blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositorHost = {};
blink.mojom.SynchronousCompositorHost.$interfaceName = 'blink.mojom.SynchronousCompositorHost';
blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositorControlHost = {};
blink.mojom.SynchronousCompositorControlHost.$interfaceName = 'blink.mojom.SynchronousCompositorControlHost';
blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec = { $: {} };
blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec = { $: {} };

// Struct: SyncCompositorDemandDrawHwParams
mojo.internal.Struct(
    blink.mojom.SyncCompositorDemandDrawHwParamsSpec, 'blink.mojom.SyncCompositorDemandDrawHwParams', [
      mojo.internal.StructField('viewport_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport_rect_for_tile_priority', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transform_for_tile_priority', 16, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('need_new_local_surface_id', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SyncCompositorDemandDrawSwParams
mojo.internal.Struct(
    blink.mojom.SyncCompositorDemandDrawSwParamsSpec, 'blink.mojom.SyncCompositorDemandDrawSwParams', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('clip', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transform', 16, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SyncCompositorCommonRendererParams
mojo.internal.Struct(
    blink.mojom.SyncCompositorCommonRendererParamsSpec, 'blink.mojom.SyncCompositorCommonRendererParams', [
      mojo.internal.StructField('total_scroll_offset', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_scroll_offset', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrollable_size', 16, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_page_scale_factor', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('need_invalidate_count', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('did_activate_pending_tree_count', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('invalidate_needs_draw', 48, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: SynchronousCompositor
mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawHwAsync_Params', [
      mojo.internal.StructField('draw_params', 0, 0, blink.mojom.SyncCompositorDemandDrawHwParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawHw_Params', [
      mojo.internal.StructField('draw_params', 0, 0, blink.mojom.SyncCompositorDemandDrawHwParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 8, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frame', 16, 0, viz.mojom.CompositorFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hit_test_region_list', 24, 0, viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('layer_tree_frame_sink_id', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('metadata_version', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec, 'blink.mojom.SynchronousCompositor_SetSharedMemory_Params', [
      mojo.internal.StructField('shm_region', 0, 0, mojo_base.mojom.WritableSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec, 'blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawSw_Params', [
      mojo.internal.StructField('draw_params', 0, 0, blink.mojom.SyncCompositorDemandDrawSwParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec, 'blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('meta_data', 8, 0, viz.mojom.CompositorFrameMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('metadata_version', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec, 'blink.mojom.SynchronousCompositor_WillSkipDraw_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec, 'blink.mojom.SynchronousCompositor_ZeroSharedMemory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec, 'blink.mojom.SynchronousCompositor_ZoomBy_Params', [
      mojo.internal.StructField('anchor', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delta', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec, 'blink.mojom.SynchronousCompositor_ZoomBy_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec, 'blink.mojom.SynchronousCompositor_SetMemoryPolicy_Params', [
      mojo.internal.StructField('bytes_limit', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec, 'blink.mojom.SynchronousCompositor_ReclaimResources_Params', [
      mojo.internal.StructField('resources', 0, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('layer_tree_frame_sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec, 'blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_Params', [
      mojo.internal.StructField('layer_tree_frame_sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sequence_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec, 'blink.mojom.SynchronousCompositor_SetScroll_Params', [
      mojo.internal.StructField('offset', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec, 'blink.mojom.SynchronousCompositor_BeginFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timing_details', 8, 0, mojo.internal.Map(mojo.internal.Uint32, viz.mojom.FrameTimingDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec, 'blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_Params', [
      mojo.internal.StructField('paused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SynchronousCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SynchronousCompositorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SynchronousCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SynchronousCompositorPendingReceiver,
      handle);
    this.$ = new blink.mojom.SynchronousCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SynchronousCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  demandDrawHwAsync(draw_params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec,
      null,
      [draw_params],
      false);
  }

  demandDrawHw(draw_params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec,
      blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec,
      [draw_params],
      false);
  }

  setSharedMemory(shm_region) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec,
      blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec,
      [shm_region],
      false);
  }

  demandDrawSw(draw_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec,
      blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec,
      [draw_params],
      false);
  }

  willSkipDraw() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec,
      null,
      [],
      false);
  }

  zeroSharedMemory() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec,
      null,
      [],
      false);
  }

  zoomBy(delta, anchor) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec,
      blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec,
      [delta, anchor],
      false);
  }

  setMemoryPolicy(bytes_limit) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec,
      null,
      [bytes_limit],
      false);
  }

  reclaimResources(layer_tree_frame_sink_id, resources) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec,
      null,
      [layer_tree_frame_sink_id, resources],
      false);
  }

  onCompositorFrameTransitionDirectiveProcessed(layer_tree_frame_sink_id, sequence_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [layer_tree_frame_sink_id, sequence_id],
      false);
  }

  setScroll(offset) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec,
      null,
      [offset],
      false);
  }

  beginFrame(args, timing_details) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec,
      null,
      [args, timing_details],
      false);
  }

  setBeginFrameSourcePaused(paused) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec,
      null,
      [paused],
      false);
  }

};

blink.mojom.SynchronousCompositor.getRemote = function() {
  let remote = new blink.mojom.SynchronousCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SynchronousCompositor',
    'context');
  return remote.$;
};

blink.mojom.SynchronousCompositorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
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
        
        // Try Method 0: DemandDrawHwAsync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DemandDrawHwAsync (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DemandDrawHw
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DemandDrawHw (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetSharedMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSharedMemory (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DemandDrawSw
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DemandDrawSw (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: WillSkipDraw
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WillSkipDraw (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ZeroSharedMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ZeroSharedMemory (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ZoomBy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ZoomBy (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetMemoryPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMemoryPolicy (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReclaimResources
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReclaimResources (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnCompositorFrameTransitionDirectiveProcessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompositorFrameTransitionDirectiveProcessed (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetScroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScroll (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: BeginFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginFrame (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetBeginFrameSourcePaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBeginFrameSourcePaused (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.demandDrawHwAsync');
          const result = this.impl.demandDrawHwAsync(params.draw_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.demandDrawHw');
          const result = this.impl.demandDrawHw(params.draw_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSharedMemory');
          const result = this.impl.setSharedMemory(params.shm_region);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.demandDrawSw');
          const result = this.impl.demandDrawSw(params.draw_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.willSkipDraw');
          const result = this.impl.willSkipDraw();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.zeroSharedMemory');
          const result = this.impl.zeroSharedMemory();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.zoomBy');
          const result = this.impl.zoomBy(params.delta, params.anchor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMemoryPolicy');
          const result = this.impl.setMemoryPolicy(params.bytes_limit);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reclaimResources');
          const result = this.impl.reclaimResources(params.layer_tree_frame_sink_id, params.resources);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCompositorFrameTransitionDirectiveProcessed');
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.layer_tree_frame_sink_id, params.sequence_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setScroll');
          const result = this.impl.setScroll(params.offset);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.beginFrame');
          const result = this.impl.beginFrame(params.args, params.timing_details);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBeginFrameSourcePaused');
          const result = this.impl.setBeginFrameSourcePaused(params.paused);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SynchronousCompositorReceiver = blink.mojom.SynchronousCompositorReceiver;

blink.mojom.SynchronousCompositorPtr = blink.mojom.SynchronousCompositorRemote;
blink.mojom.SynchronousCompositorRequest = blink.mojom.SynchronousCompositorPendingReceiver;


// Interface: SynchronousCompositorHost
mojo.internal.Struct(
    blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec, 'blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec, 'blink.mojom.SynchronousCompositorHost_UpdateState_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec, 'blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_Params', [
      mojo.internal.StructField('needs_begin_frames', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec, 'blink.mojom.SynchronousCompositorHost_SetThreads_Params', [
      mojo.internal.StructField('threads', 0, 0, mojo.internal.Array(viz.mojom.ThreadSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SynchronousCompositorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SynchronousCompositorHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SynchronousCompositorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SynchronousCompositorHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.SynchronousCompositorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SynchronousCompositorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  layerTreeFrameSinkCreated() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec,
      null,
      [],
      false);
  }

  updateState(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec,
      null,
      [params],
      false);
  }

  setNeedsBeginFrames(needs_begin_frames) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec,
      null,
      [needs_begin_frames],
      false);
  }

  setThreads(threads) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec,
      null,
      [threads],
      false);
  }

};

blink.mojom.SynchronousCompositorHost.getRemote = function() {
  let remote = new blink.mojom.SynchronousCompositorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SynchronousCompositorHost',
    'context');
  return remote.$;
};

blink.mojom.SynchronousCompositorHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: LayerTreeFrameSinkCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LayerTreeFrameSinkCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetNeedsBeginFrames
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNeedsBeginFrames (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetThreads
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreads (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.layerTreeFrameSinkCreated');
          const result = this.impl.layerTreeFrameSinkCreated();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateState');
          const result = this.impl.updateState(params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setNeedsBeginFrames');
          const result = this.impl.setNeedsBeginFrames(params.needs_begin_frames);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setThreads');
          const result = this.impl.setThreads(params.threads);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SynchronousCompositorHostReceiver = blink.mojom.SynchronousCompositorHostReceiver;

blink.mojom.SynchronousCompositorHostPtr = blink.mojom.SynchronousCompositorHostRemote;
blink.mojom.SynchronousCompositorHostRequest = blink.mojom.SynchronousCompositorHostPendingReceiver;


// Interface: SynchronousCompositorControlHost
mojo.internal.Struct(
    blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec, 'blink.mojom.SynchronousCompositorControlHost_ReturnFrame_Params', [
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frame', 8, 0, viz.mojom.CompositorFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hit_test_region_list', 16, 0, viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('layer_tree_frame_sink_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('metadata_version', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec, 'blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.SyncCompositorCommonRendererParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SynchronousCompositorControlHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SynchronousCompositorControlHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SynchronousCompositorControlHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SynchronousCompositorControlHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.SynchronousCompositorControlHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SynchronousCompositorControlHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  returnFrame(layer_tree_frame_sink_id, metadata_version, local_surface_id, frame, hit_test_region_list) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec,
      null,
      [layer_tree_frame_sink_id, metadata_version, local_surface_id, frame, hit_test_region_list],
      false);
  }

  beginFrameResponse(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec,
      null,
      [params],
      false);
  }

};

blink.mojom.SynchronousCompositorControlHost.getRemote = function() {
  let remote = new blink.mojom.SynchronousCompositorControlHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SynchronousCompositorControlHost',
    'context');
  return remote.$;
};

blink.mojom.SynchronousCompositorControlHostReceiver = class {
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
        
        // Try Method 0: ReturnFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReturnFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BeginFrameResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginFrameResponse (1)');
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
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.returnFrame');
          const result = this.impl.returnFrame(params.layer_tree_frame_sink_id, params.metadata_version, params.local_surface_id, params.frame, params.hit_test_region_list);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.beginFrameResponse');
          const result = this.impl.beginFrameResponse(params.params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SynchronousCompositorControlHostReceiver = blink.mojom.SynchronousCompositorControlHostReceiver;

blink.mojom.SynchronousCompositorControlHostPtr = blink.mojom.SynchronousCompositorControlHostRemote;
blink.mojom.SynchronousCompositorControlHostRequest = blink.mojom.SynchronousCompositorControlHostPendingReceiver;

