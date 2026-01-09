// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_frame_handler.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Struct: ReadyFrameInBuffer
video_capture.mojom.ReadyFrameInBuffer = class {
  constructor(values = {}) {
    this.frame_info = values.frame_info !== undefined ? values.frame_info : 0;
  }
};

// Interface: VideoFrameAccessHandler
video_capture.mojom.VideoFrameAccessHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.VideoFrameAccessHandler';
  }

  onFinishedConsumingBuffer(buffer_id) {
    // Method: OnFinishedConsumingBuffer
    // Call: OnFinishedConsumingBuffer(buffer_id)
  }

};

video_capture.mojom.VideoFrameAccessHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoFrameHandler
video_capture.mojom.VideoFrameHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.VideoFrameHandler';
  }

  onCaptureConfigurationChanged() {
    // Method: OnCaptureConfigurationChanged
    // Call: OnCaptureConfigurationChanged()
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Method: OnNewBuffer
    // Call: OnNewBuffer(buffer_id, buffer_handle)
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Method: OnFrameAccessHandlerReady
    // Call: OnFrameAccessHandlerReady(frame_access_handler)
  }

  onFrameReadyInBuffer(buffer) {
    // Method: OnFrameReadyInBuffer
    // Call: OnFrameReadyInBuffer(buffer)
  }

  onBufferRetired(buffer_id) {
    // Method: OnBufferRetired
    // Call: OnBufferRetired(buffer_id)
  }

  onError(error) {
    // Method: OnError
    // Call: OnError(error)
  }

  onFrameDropped(reason) {
    // Method: OnFrameDropped
    // Call: OnFrameDropped(reason)
  }

  onNewCaptureVersion(capture_version) {
    // Method: OnNewCaptureVersion
    // Call: OnNewCaptureVersion(capture_version)
  }

  onFrameWithEmptyRegionCapture() {
    // Method: OnFrameWithEmptyRegionCapture
    // Call: OnFrameWithEmptyRegionCapture()
  }

  onLog(message) {
    // Method: OnLog
    // Call: OnLog(message)
  }

  onStarted() {
    // Method: OnStarted
    // Call: OnStarted()
  }

  onStartedUsingGpuDecode() {
    // Method: OnStartedUsingGpuDecode
    // Call: OnStartedUsingGpuDecode()
  }

  onStopped() {
    // Method: OnStopped
    // Call: OnStopped()
  }

};

video_capture.mojom.VideoFrameHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
