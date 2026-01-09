// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/synchronous_compositor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SyncCompositorDemandDrawHwParams
blink.mojom.SyncCompositorDemandDrawHwParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SyncCompositorDemandDrawHwParams',
      packedSize: 40,
      fields: [
        { name: 'viewport_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'viewport_rect_for_tile_priority', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'transform_for_tile_priority', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'need_new_local_surface_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SyncCompositorDemandDrawSwParams
blink.mojom.SyncCompositorDemandDrawSwParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SyncCompositorDemandDrawSwParams',
      packedSize: 32,
      fields: [
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'clip', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'transform', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SyncCompositorCommonRendererParams
blink.mojom.SyncCompositorCommonRendererParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SyncCompositorCommonRendererParams',
      packedSize: 72,
      fields: [
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'total_scroll_offset', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'max_scroll_offset', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'scrollable_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false },
        { name: 'page_scale_factor', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'min_page_scale_factor', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'max_page_scale_factor', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'need_invalidate_count', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'invalidate_needs_draw', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'did_activate_pending_tree_count', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SynchronousCompositor
blink.mojom.SynchronousCompositor = {};

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
      [draw_params]);
  }

  demandDrawHw(draw_params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec,
      blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec,
      [draw_params]);
  }

  setSharedMemory(shm_region) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec,
      blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec,
      [shm_region]);
  }

  demandDrawSw(draw_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec,
      blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec,
      [draw_params]);
  }

  willSkipDraw() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec,
      null,
      []);
  }

  zeroSharedMemory() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec,
      null,
      []);
  }

  zoomBy(delta, anchor) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec,
      blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec,
      [delta, anchor]);
  }

  setMemoryPolicy(bytes_limit) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec,
      null,
      [bytes_limit]);
  }

  reclaimResources(layer_tree_frame_sink_id, resources) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec,
      null,
      [layer_tree_frame_sink_id, resources]);
  }

  onCompositorFrameTransitionDirectiveProcessed(layer_tree_frame_sink_id, sequence_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [layer_tree_frame_sink_id, sequence_id]);
  }

  setScroll(offset) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec,
      null,
      [offset]);
  }

  beginFrame(args, timing_details) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec,
      null,
      [args, timing_details]);
  }

  setBeginFrameSourcePaused(paused) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec,
      null,
      [paused]);
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

// ParamsSpec for DemandDrawHwAsync
blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.DemandDrawHwAsync_Params',
      packedSize: 16,
      fields: [
        { name: 'draw_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SyncCompositorDemandDrawHwParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DemandDrawHw
blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.DemandDrawHw_Params',
      packedSize: 16,
      fields: [
        { name: 'draw_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SyncCompositorDemandDrawHwParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.DemandDrawHw_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SyncCompositorCommonRendererParamsSpec, nullable: false },
        { name: 'layer_tree_frame_sink_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'metadata_version', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'local_surface_id', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true },
        { name: 'frame', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.CompositorFrameSpec, nullable: true },
        { name: 'hit_test_region_list', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.HitTestRegionListSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSharedMemory
blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.SetSharedMemory_Params',
      packedSize: 16,
      fields: [
        { name: 'shm_region', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.WritableSharedMemoryRegionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.SetSharedMemory_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.SyncCompositorCommonRendererParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DemandDrawSw
blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.DemandDrawSw_Params',
      packedSize: 16,
      fields: [
        { name: 'draw_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SyncCompositorDemandDrawSwParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.DemandDrawSw_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SyncCompositorCommonRendererParamsSpec, nullable: false },
        { name: 'metadata_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'meta_data', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.CompositorFrameMetadataSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WillSkipDraw
blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.WillSkipDraw_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ZeroSharedMemory
blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.ZeroSharedMemory_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ZoomBy
blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.ZoomBy_Params',
      packedSize: 24,
      fields: [
        { name: 'delta', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'anchor', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.ZoomBy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SyncCompositorCommonRendererParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMemoryPolicy
blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.SetMemoryPolicy_Params',
      packedSize: 16,
      fields: [
        { name: 'bytes_limit', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReclaimResources
blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.ReclaimResources_Params',
      packedSize: 24,
      fields: [
        { name: 'layer_tree_frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'resources', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCompositorFrameTransitionDirectiveProcessed
blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.OnCompositorFrameTransitionDirectiveProcessed_Params',
      packedSize: 16,
      fields: [
        { name: 'layer_tree_frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sequence_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetScroll
blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.SetScroll_Params',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BeginFrame
blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.BeginFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'args', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false },
        { name: 'timing_details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBeginFrameSourcePaused
blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.SetBeginFrameSourcePaused_Params',
      packedSize: 16,
      fields: [
        { name: 'paused', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SynchronousCompositorPtr = blink.mojom.SynchronousCompositorRemote;
blink.mojom.SynchronousCompositorRequest = blink.mojom.SynchronousCompositorPendingReceiver;


// Interface: SynchronousCompositorHost
blink.mojom.SynchronousCompositorHost = {};

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
      []);
  }

  updateState(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec,
      null,
      [params]);
  }

  setNeedsBeginFrames(needs_begin_frames) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec,
      null,
      [needs_begin_frames]);
  }

  setThreads(threads) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec,
      null,
      [threads]);
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

// ParamsSpec for LayerTreeFrameSinkCreated
blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositorHost.LayerTreeFrameSinkCreated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateState
blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositorHost.UpdateState_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SyncCompositorCommonRendererParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNeedsBeginFrames
blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositorHost.SetNeedsBeginFrames_Params',
      packedSize: 16,
      fields: [
        { name: 'needs_begin_frames', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetThreads
blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositorHost.SetThreads_Params',
      packedSize: 16,
      fields: [
        { name: 'threads', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SynchronousCompositorHostPtr = blink.mojom.SynchronousCompositorHostRemote;
blink.mojom.SynchronousCompositorHostRequest = blink.mojom.SynchronousCompositorHostPendingReceiver;


// Interface: SynchronousCompositorControlHost
blink.mojom.SynchronousCompositorControlHost = {};

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
      [layer_tree_frame_sink_id, metadata_version, local_surface_id, frame, hit_test_region_list]);
  }

  beginFrameResponse(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec,
      null,
      [params]);
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

// ParamsSpec for ReturnFrame
blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositorControlHost.ReturnFrame_Params',
      packedSize: 40,
      fields: [
        { name: 'layer_tree_frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'metadata_version', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'local_surface_id', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true },
        { name: 'frame', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.CompositorFrameSpec, nullable: true },
        { name: 'hit_test_region_list', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.HitTestRegionListSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BeginFrameResponse
blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositorControlHost.BeginFrameResponse_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SyncCompositorCommonRendererParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SynchronousCompositorControlHostPtr = blink.mojom.SynchronousCompositorControlHostRemote;
blink.mojom.SynchronousCompositorControlHostRequest = blink.mojom.SynchronousCompositorControlHostPendingReceiver;

