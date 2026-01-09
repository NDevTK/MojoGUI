// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_video_capture.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: BufferFormatPreference
viz.mojom.BufferFormatPreference = {
  kDefault: 0,
  kPreferGpuMemoryBuffer: 1,
  DMA: 2,
  allowing: 3,
};

// Struct: VideoCaptureTarget
viz.mojom.VideoCaptureTarget = class {
  constructor(values = {}) {
    this.sub_target = values.sub_target !== undefined ? values.sub_target : null;
  }
};

// Interface: FrameSinkVideoConsumerFrameCallbacks
viz.mojom.FrameSinkVideoConsumerFrameCallbacksPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks';
  }

  done() {
    // Method: Done
    // Call: Done()
  }

  provideFeedback(feedback) {
    // Method: ProvideFeedback
    // Call: ProvideFeedback(feedback)
  }

};

viz.mojom.FrameSinkVideoConsumerFrameCallbacksRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameSinkVideoConsumer
viz.mojom.FrameSinkVideoConsumerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkVideoConsumer';
  }

  onFrameCaptured(data, info, content_rect, callbacks) {
    // Method: OnFrameCaptured
    // Call: OnFrameCaptured(data, info, content_rect, callbacks)
  }

  onNewCaptureVersion(capture_version) {
    // Method: OnNewCaptureVersion
    // Call: OnNewCaptureVersion(capture_version)
  }

  onFrameWithEmptyRegionCapture() {
    // Method: OnFrameWithEmptyRegionCapture
    // Call: OnFrameWithEmptyRegionCapture()
  }

  onStopped() {
    // Method: OnStopped
    // Call: OnStopped()
  }

  onLog(message) {
    // Method: OnLog
    // Call: OnLog(message)
  }

};

viz.mojom.FrameSinkVideoConsumerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameSinkVideoCapturer
viz.mojom.FrameSinkVideoCapturerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkVideoCapturer';
  }

  setFormat(format) {
    // Method: SetFormat
    // Call: SetFormat(format)
  }

  setMinCapturePeriod(min_period) {
    // Method: SetMinCapturePeriod
    // Call: SetMinCapturePeriod(min_period)
  }

  setMinSizeChangePeriod(min_period) {
    // Method: SetMinSizeChangePeriod
    // Call: SetMinSizeChangePeriod(min_period)
  }

  setResolutionConstraints(min_size, max_size, use_fixed_aspect_ratio) {
    // Method: SetResolutionConstraints
    // Call: SetResolutionConstraints(min_size, max_size, use_fixed_aspect_ratio)
  }

  setAutoThrottlingEnabled(enabled) {
    // Method: SetAutoThrottlingEnabled
    // Call: SetAutoThrottlingEnabled(enabled)
  }

  setAnimationFpsLockIn(enabled, majority_damaged_pixel_min_ratio) {
    // Method: SetAnimationFpsLockIn
    // Call: SetAnimationFpsLockIn(enabled, majority_damaged_pixel_min_ratio)
  }

  changeTarget(target, sub_capture_version) {
    // Method: ChangeTarget
    // Call: ChangeTarget(target, sub_capture_version)
  }

  start(consumer, buffer_format_preference) {
    // Method: Start
    // Call: Start(consumer, buffer_format_preference)
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  requestRefreshFrame() {
    // Method: RequestRefreshFrame
    // Call: RequestRefreshFrame()
  }

  createOverlay(stacking_index, receiver) {
    // Method: CreateOverlay
    // Call: CreateOverlay(stacking_index, receiver)
  }

};

viz.mojom.FrameSinkVideoCapturerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameSinkVideoCaptureOverlay
viz.mojom.FrameSinkVideoCaptureOverlayPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.FrameSinkVideoCaptureOverlay';
  }

  setImageAndBounds(image, bounds) {
    // Method: SetImageAndBounds
    // Call: SetImageAndBounds(image, bounds)
  }

  setBounds(bounds) {
    // Method: SetBounds
    // Call: SetBounds(bounds)
  }

  onCapturedMouseEvent(coordinates) {
    // Method: OnCapturedMouseEvent
    // Call: OnCapturedMouseEvent(coordinates)
  }

};

viz.mojom.FrameSinkVideoCaptureOverlayRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
