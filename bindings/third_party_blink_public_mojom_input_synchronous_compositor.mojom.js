// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/synchronous_compositor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
      null,
      [draw_params],
      undefined,
      undefined
    );
  }

  demandDrawHw(draw_params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositor_DemandDrawHw_ParamsSpec,
      blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec,
      blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec,
      [draw_params],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  setSharedMemory(shm_region) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SynchronousCompositor_SetSharedMemory_ParamsSpec,
      blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec,
      blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec,
      [shm_region],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  demandDrawSw(draw_params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SynchronousCompositor_DemandDrawSw_ParamsSpec,
      blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec,
      blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec,
      [draw_params],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  willSkipDraw() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SynchronousCompositor_WillSkipDraw_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  zeroSharedMemory() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SynchronousCompositor_ZeroSharedMemory_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  zoomBy(delta, anchor) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.SynchronousCompositor_ZoomBy_ParamsSpec,
      blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec,
      blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec,
      [delta, anchor],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  setMemoryPolicy(bytes_limit) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.SynchronousCompositor_SetMemoryPolicy_ParamsSpec,
      null,
      null,
      [bytes_limit],
      undefined,
      undefined
    );
  }

  reclaimResources(layer_tree_frame_sink_id, resources) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.SynchronousCompositor_ReclaimResources_ParamsSpec,
      null,
      null,
      [layer_tree_frame_sink_id, resources],
      undefined,
      undefined
    );
  }

  onCompositorFrameTransitionDirectiveProcessed(layer_tree_frame_sink_id, sequence_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      null,
      [layer_tree_frame_sink_id, sequence_id],
      undefined,
      undefined
    );
  }

  setScroll(offset) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.SynchronousCompositor_SetScroll_ParamsSpec,
      null,
      null,
      [offset],
      undefined,
      undefined
    );
  }

  beginFrame(args, timing_details) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.SynchronousCompositor_BeginFrame_ParamsSpec,
      null,
      null,
      [args, timing_details],
      undefined,
      undefined
    );
  }

  setBeginFrameSourcePaused(paused) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.SynchronousCompositor_SetBeginFrameSourcePaused_ParamsSpec,
      null,
      null,
      [paused],
      undefined,
      undefined
    );
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
        { name: 'draw_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'draw_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SynchronousCompositor_DemandDrawHw_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.DemandDrawHw_ResponseParams',
      packedSize: 56,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'layer_tree_frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'metadata_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'local_surface_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'frame', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'hit_test_region_list', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'shm_region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SynchronousCompositor_SetSharedMemory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.SetSharedMemory_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'draw_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.SynchronousCompositor_DemandDrawSw_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.DemandDrawSw_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'metadata_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'meta_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'delta', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'anchor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.SynchronousCompositor_ZoomBy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.ZoomBy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'bytes_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'layer_tree_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'resources', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnCompositorFrameTransitionDirectiveProcessed
blink.mojom.SynchronousCompositor_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SynchronousCompositor.OnCompositorFrameTransitionDirectiveProcessed_Params',
      packedSize: 24,
      fields: [
        { name: 'layer_tree_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sequence_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'timing_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'paused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      null,
      [],
      undefined,
      undefined
    );
  }

  updateState(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositorHost_UpdateState_ParamsSpec,
      null,
      null,
      [params],
      undefined,
      undefined
    );
  }

  setNeedsBeginFrames(needs_begin_frames) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SynchronousCompositorHost_SetNeedsBeginFrames_ParamsSpec,
      null,
      null,
      [needs_begin_frames],
      undefined,
      undefined
    );
  }

  setThreads(threads) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SynchronousCompositorHost_SetThreads_ParamsSpec,
      null,
      null,
      [threads],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'needs_begin_frames', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'threads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      null,
      [layer_tree_frame_sink_id, metadata_version, local_surface_id, frame, hit_test_region_list],
      undefined,
      undefined
    );
  }

  beginFrameResponse(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SynchronousCompositorControlHost_BeginFrameResponse_ParamsSpec,
      null,
      null,
      [params],
      undefined,
      undefined
    );
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
      packedSize: 48,
      fields: [
        { name: 'layer_tree_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'metadata_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'local_surface_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'frame', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'hit_test_region_list', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.SynchronousCompositorControlHostPtr = blink.mojom.SynchronousCompositorControlHostRemote;
blink.mojom.SynchronousCompositorControlHostRequest = blink.mojom.SynchronousCompositorControlHostPendingReceiver;

