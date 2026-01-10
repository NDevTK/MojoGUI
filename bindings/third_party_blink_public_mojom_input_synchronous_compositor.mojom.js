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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SynchronousCompositor_DemandDrawHwAsync_ParamsSpec.$.decode(message.payload);
          const result = this.impl.demandDrawHwAsync(params.draw_params);
          break;
        }
        case 1: {
          const params = blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec.$.decode(message.payload);
          const result = this.impl.demandDrawHw(params.draw_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSharedMemory(params.shm_region);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec.$.decode(message.payload);
          const result = this.impl.demandDrawSw(params.draw_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec.$.decode(message.payload);
          const result = this.impl.willSkipDraw();
          break;
        }
        case 5: {
          const params = blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.zeroSharedMemory();
          break;
        }
        case 6: {
          const params = blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.zoomBy(params.delta, params.anchor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 7: {
          const params = blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMemoryPolicy(params.bytes_limit);
          break;
        }
        case 8: {
          const params = blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reclaimResources(params.layer_tree_frame_sink_id, params.resources);
          break;
        }
        case 9: {
          const params = blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.layer_tree_frame_sink_id, params.sequence_id);
          break;
        }
        case 10: {
          const params = blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setScroll(params.offset);
          break;
        }
        case 11: {
          const params = blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.beginFrame(params.args, params.timing_details);
          break;
        }
        case 12: {
          const params = blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBeginFrameSourcePaused(params.paused);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SynchronousCompositorHost_LayerTreeFrameSinkCreated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.layerTreeFrameSinkCreated();
          break;
        }
        case 1: {
          const params = blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateState(params.params);
          break;
        }
        case 2: {
          const params = blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setNeedsBeginFrames(params.needs_begin_frames);
          break;
        }
        case 3: {
          const params = blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setThreads(params.threads);
          break;
        }
      }
    });
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SynchronousCompositorControlHost_ReturnFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.returnFrame(params.layer_tree_frame_sink_id, params.metadata_version, params.local_surface_id, params.frame, params.hit_test_region_list);
          break;
        }
        case 1: {
          const params = blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec.$.decode(message.payload);
          const result = this.impl.beginFrameResponse(params.params);
          break;
        }
      }
    });
  }
};

blink.mojom.SynchronousCompositorControlHostReceiver = blink.mojom.SynchronousCompositorControlHostReceiver;

blink.mojom.SynchronousCompositorControlHostPtr = blink.mojom.SynchronousCompositorControlHostRemote;
blink.mojom.SynchronousCompositorControlHostRequest = blink.mojom.SynchronousCompositorControlHostPendingReceiver;

