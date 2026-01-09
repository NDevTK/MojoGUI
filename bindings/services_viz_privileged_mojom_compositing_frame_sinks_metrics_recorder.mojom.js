// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sinks_metrics_recorder.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: FrameCountingPerSinkData
viz.mojom.FrameCountingPerSinkData = class {
  constructor(values = {}) {
    this.presented_frames = values.presented_frames !== undefined ? values.presented_frames : 0;
  }
};

// Struct: FrameCountingData
viz.mojom.FrameCountingData = class {
  constructor(values = {}) {
    this.per_sink_data = values.per_sink_data !== undefined ? values.per_sink_data : [];
  }
};

// Struct: OverdrawData
viz.mojom.OverdrawData = class {
  constructor(values = {}) {
    this.average_overdraws = values.average_overdraws !== undefined ? values.average_overdraws : 0;
  }
};

// Interface: FrameSinksMetricsRecorder
viz.mojom.FrameSinksMetricsRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinksMetricsRecorder';
  }

  startFrameCounting(start_time, bucket_size) {
    // Method: StartFrameCounting
    // Call: StartFrameCounting(start_time, bucket_size)
  }

  stopFrameCounting() {
    // Method: StopFrameCounting
    return new Promise((resolve) => {
      // Call: StopFrameCounting()
      resolve({});
    });
  }

  startOverdrawTracking(root_frame_sink_id, bucket_size) {
    // Method: StartOverdrawTracking
    // Call: StartOverdrawTracking(root_frame_sink_id, bucket_size)
  }

  stopOverdrawTracking(root_frame_sink_id) {
    // Method: StopOverdrawTracking
    return new Promise((resolve) => {
      // Call: StopOverdrawTracking(root_frame_sink_id)
      resolve({});
    });
  }

};

viz.mojom.FrameSinksMetricsRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
