// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_sink.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: LayerContextSettings
viz.mojom.LayerContextSettings = class {
  constructor(values = {}) {
    this.enable_fluent_overlay_scrollbar = values.enable_fluent_overlay_scrollbar !== undefined ? values.enable_fluent_overlay_scrollbar : 0;
  }
};

// Struct: CompositorFrameSinkParams
viz.mojom.CompositorFrameSinkParams = class {
  constructor(values = {}) {
    this.wants_animate_only_begin_frames = values.wants_animate_only_begin_frames !== undefined ? values.wants_animate_only_begin_frames : false;
    this.to = values.to !== undefined ? values.to : null;
    this.auto_needs_begin_frame = values.auto_needs_begin_frame !== undefined ? values.auto_needs_begin_frame : false;
    this.no_compositor_frame_acks = values.no_compositor_frame_acks !== undefined ? values.no_compositor_frame_acks : false;
  }
};

// Interface: CompositorFrameSink
viz.mojom.CompositorFrameSinkPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.CompositorFrameSink';
  }

  setParams(params) {
    // Method: SetParams
    // Call: SetParams(params)
  }

  setNeedsBeginFrame(needs_begin_frame) {
    // Method: SetNeedsBeginFrame
    // Call: SetNeedsBeginFrame(needs_begin_frame)
  }

  surface(resize) {
    // Method: surface
    // Call: surface(resize)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  didReceiveCompositorFrameAck() {
    // Method: DidReceiveCompositorFrameAck
    // Call: DidReceiveCompositorFrameAck()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  submitCompositorFrame(local_surface_id, frame, hit_test_region_list, submit_time) {
    // Method: SubmitCompositorFrame
    // Call: SubmitCompositorFrame(local_surface_id, frame, hit_test_region_list, submit_time)
  }

  didNotProduceFrame(ack) {
    // Method: DidNotProduceFrame
    // Call: DidNotProduceFrame(ack)
  }

  notifyNewLocalSurfaceIdExpectedWhilePaused() {
    // Method: NotifyNewLocalSurfaceIdExpectedWhilePaused
    // Call: NotifyNewLocalSurfaceIdExpectedWhilePaused()
  }

  bindLayerContext(context, settings) {
    // Method: BindLayerContext
    // Call: BindLayerContext(context, settings)
  }

  setThreads(threads) {
    // Method: SetThreads
    // Call: SetThreads(threads)
  }

};

viz.mojom.CompositorFrameSinkRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CompositorFrameSinkClient
viz.mojom.CompositorFrameSinkClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.CompositorFrameSinkClient';
  }

  submitCompositorFrame() {
    // Method: SubmitCompositorFrame
    // Call: SubmitCompositorFrame()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  didReceiveCompositorFrameAck(resources) {
    // Method: DidReceiveCompositorFrameAck
    // Call: DidReceiveCompositorFrameAck(resources)
  }

  submitCompositorFrame() {
    // Method: SubmitCompositorFrame
    // Call: SubmitCompositorFrame()
  }

  didNotProduceFrame() {
    // Method: DidNotProduceFrame
    // Call: DidNotProduceFrame()
  }

  onBeginFrame(args, details, resources) {
    // Method: OnBeginFrame
    // Call: OnBeginFrame(args, details, resources)
  }

  onBeginFramePausedChanged(paused) {
    // Method: OnBeginFramePausedChanged
    // Call: OnBeginFramePausedChanged(paused)
  }

  reclaimResources(resources) {
    // Method: ReclaimResources
    // Call: ReclaimResources(resources)
  }

  onCompositorFrameTransitionDirectiveProcessed(sequence_id) {
    // Method: OnCompositorFrameTransitionDirectiveProcessed
    // Call: OnCompositorFrameTransitionDirectiveProcessed(sequence_id)
  }

  onSurfaceEvicted(local_surface_id) {
    // Method: OnSurfaceEvicted
    // Call: OnSurfaceEvicted(local_surface_id)
  }

};

viz.mojom.CompositorFrameSinkClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
