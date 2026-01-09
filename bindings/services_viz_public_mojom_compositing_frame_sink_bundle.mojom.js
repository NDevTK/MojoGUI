// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_sink_bundle.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: BundledFrameSubmission
viz.mojom.BundledFrameSubmission = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: BundledCompositorFrame
viz.mojom.BundledCompositorFrame = class {
  constructor(values = {}) {
    this.submit_time = values.submit_time !== undefined ? values.submit_time : 0;
  }
};

// Struct: BundledReturnedResources
viz.mojom.BundledReturnedResources = class {
  constructor(values = {}) {
    this.resources = values.resources !== undefined ? values.resources : 0;
  }
};

// Struct: BeginFrameInfo
viz.mojom.BeginFrameInfo = class {
  constructor(values = {}) {
    this.resources = values.resources !== undefined ? values.resources : 0;
  }
};

// Interface: FrameSinkBundle
viz.mojom.FrameSinkBundlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkBundle';
  }

  setNeedsBeginFrame(sink_id, needs_begin_frame) {
    // Method: SetNeedsBeginFrame
    // Call: SetNeedsBeginFrame(sink_id, needs_begin_frame)
  }

  submit(submissions) {
    // Method: Submit
    // Call: Submit(submissions)
  }

  setThreads(sink_id, threads) {
    // Method: SetThreads
    // Call: SetThreads(sink_id, threads)
  }

};

viz.mojom.FrameSinkBundleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameSinkBundleClient
viz.mojom.FrameSinkBundleClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkBundleClient';
  }

  flushNotifications(acks, begin_frames, reclaimed_resources) {
    // Method: FlushNotifications
    // Call: FlushNotifications(acks, begin_frames, reclaimed_resources)
  }

  onBeginFramePausedChanged(sink_id, paused) {
    // Method: OnBeginFramePausedChanged
    // Call: OnBeginFramePausedChanged(sink_id, paused)
  }

  onCompositorFrameTransitionDirectiveProcessed(sink_id, sequence_id) {
    // Method: OnCompositorFrameTransitionDirectiveProcessed
    // Call: OnCompositorFrameTransitionDirectiveProcessed(sink_id, sequence_id)
  }

};

viz.mojom.FrameSinkBundleClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
