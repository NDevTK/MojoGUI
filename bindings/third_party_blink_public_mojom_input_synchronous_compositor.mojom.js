// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/synchronous_compositor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SyncCompositorDemandDrawHwParams
blink.mojom.SyncCompositorDemandDrawHwParams = class {
  constructor(values = {}) {
    this.need_new_local_surface_id = values.need_new_local_surface_id !== undefined ? values.need_new_local_surface_id : false;
  }
};

// Struct: SyncCompositorDemandDrawSwParams
blink.mojom.SyncCompositorDemandDrawSwParams = class {
  constructor(values = {}) {
    this.transform = values.transform !== undefined ? values.transform : null;
  }
};

// Struct: SyncCompositorCommonRendererParams
blink.mojom.SyncCompositorCommonRendererParams = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : 0;
  }
};

// Interface: SynchronousCompositor
blink.mojom.SynchronousCompositorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SynchronousCompositor';
  }

  demandDrawHwAsync(draw_params) {
    // Method: DemandDrawHwAsync
    // Call: DemandDrawHwAsync(draw_params)
  }

  demandDrawHw(draw_params) {
    // Method: DemandDrawHw
    return new Promise((resolve) => {
      // Call: DemandDrawHw(draw_params)
      resolve({});
    });
  }

  setSharedMemory(shm_region) {
    // Method: SetSharedMemory
    return new Promise((resolve) => {
      // Call: SetSharedMemory(shm_region)
      resolve({});
    });
  }

  demandDrawSw(draw_params) {
    // Method: DemandDrawSw
    return new Promise((resolve) => {
      // Call: DemandDrawSw(draw_params)
      resolve({});
    });
  }

  willSkipDraw() {
    // Method: WillSkipDraw
    // Call: WillSkipDraw()
  }

  zeroSharedMemory() {
    // Method: ZeroSharedMemory
    // Call: ZeroSharedMemory()
  }

  zoomBy(delta, anchor) {
    // Method: ZoomBy
    return new Promise((resolve) => {
      // Call: ZoomBy(delta, anchor)
      resolve({});
    });
  }

  setMemoryPolicy(bytes_limit) {
    // Method: SetMemoryPolicy
    // Call: SetMemoryPolicy(bytes_limit)
  }

  reclaimResources(layer_tree_frame_sink_id, resources) {
    // Method: ReclaimResources
    // Call: ReclaimResources(layer_tree_frame_sink_id, resources)
  }

  onCompositorFrameTransitionDirectiveProcessed(layer_tree_frame_sink_id, sequence_id) {
    // Method: OnCompositorFrameTransitionDirectiveProcessed
    // Call: OnCompositorFrameTransitionDirectiveProcessed(layer_tree_frame_sink_id, sequence_id)
  }

  setScroll(offset) {
    // Method: SetScroll
    // Call: SetScroll(offset)
  }

  beginFrame(args, timing_details) {
    // Method: BeginFrame
    // Call: BeginFrame(args, timing_details)
  }

  setBeginFrameSourcePaused(paused) {
    // Method: SetBeginFrameSourcePaused
    // Call: SetBeginFrameSourcePaused(paused)
  }

};

blink.mojom.SynchronousCompositorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SynchronousCompositorHost
blink.mojom.SynchronousCompositorHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SynchronousCompositorHost';
  }

  layerTreeFrameSinkCreated() {
    // Method: LayerTreeFrameSinkCreated
    // Call: LayerTreeFrameSinkCreated()
  }

  updateState(params) {
    // Method: UpdateState
    // Call: UpdateState(params)
  }

  setNeedsBeginFrames(needs_begin_frames) {
    // Method: SetNeedsBeginFrames
    // Call: SetNeedsBeginFrames(needs_begin_frames)
  }

  setThreads(threads) {
    // Method: SetThreads
    // Call: SetThreads(threads)
  }

};

blink.mojom.SynchronousCompositorHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SynchronousCompositorControlHost
blink.mojom.SynchronousCompositorControlHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SynchronousCompositorControlHost';
  }

  returnFrame(layer_tree_frame_sink_id, metadata_version, local_surface_id, frame, hit_test_region_list) {
    // Method: ReturnFrame
    // Call: ReturnFrame(layer_tree_frame_sink_id, metadata_version, local_surface_id, frame, hit_test_region_list)
  }

  beginFrameResponse(params) {
    // Method: BeginFrameResponse
    // Call: BeginFrameResponse(params)
  }

};

blink.mojom.SynchronousCompositorControlHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
