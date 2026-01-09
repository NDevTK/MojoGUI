// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/video_capture.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: VideoCaptureState
media.mojom.VideoCaptureState = {
  STARTED: 0,
  PAUSED: 1,
  RESUMED: 2,
  STOPPED: 3,
  ENDED: 4,
};

// Interface: VideoCaptureObserver
media.mojom.VideoCaptureObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoCaptureObserver';
  }

  onStateChanged(result) {
    // Method: OnStateChanged
    // Call: OnStateChanged(result)
  }

  onBufferReady() {
    // Method: OnBufferReady
    // Call: OnBufferReady()
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Method: OnNewBuffer
    // Call: OnNewBuffer(buffer_id, buffer_handle)
  }

  onBufferReady(buffer) {
    // Method: OnBufferReady
    // Call: OnBufferReady(buffer)
  }

  onNewBuffer() {
    // Method: OnNewBuffer
    // Call: OnNewBuffer()
  }

  onBufferDestroyed(buffer_id) {
    // Method: OnBufferDestroyed
    // Call: OnBufferDestroyed(buffer_id)
  }

  onBufferReady() {
    // Method: OnBufferReady
    // Call: OnBufferReady()
  }

  onFrameDropped(reason) {
    // Method: OnFrameDropped
    // Call: OnFrameDropped(reason)
  }

  onNewCaptureVersion(capture_version) {
    // Method: OnNewCaptureVersion
    // Call: OnNewCaptureVersion(capture_version)
  }

};

media.mojom.VideoCaptureObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoCaptureHost
media.mojom.VideoCaptureHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoCaptureHost';
  }

  start(device_id, session_id, params, observer) {
    // Method: Start
    // Call: Start(device_id, session_id, params, observer)
  }

  stop(device_id) {
    // Method: Stop
    // Call: Stop(device_id)
  }

  pause(device_id) {
    // Method: Pause
    // Call: Pause(device_id)
  }

  resume(device_id, session_id, params) {
    // Method: Resume
    // Call: Resume(device_id, session_id, params)
  }

  requestRefreshFrame(device_id) {
    // Method: RequestRefreshFrame
    // Call: RequestRefreshFrame(device_id)
  }

  releaseBuffer(device_id, buffer_id, feedback) {
    // Method: ReleaseBuffer
    // Call: ReleaseBuffer(device_id, buffer_id, feedback)
  }

  getDeviceSupportedFormats(device_id, session_id) {
    // Method: GetDeviceSupportedFormats
    return new Promise((resolve) => {
      // Call: GetDeviceSupportedFormats(device_id, session_id)
      resolve({});
    });
  }

  format() {
    // Method: format
    // Call: format()
  }

  getDeviceFormatsInUse(device_id, session_id) {
    // Method: GetDeviceFormatsInUse
    return new Promise((resolve) => {
      // Call: GetDeviceFormatsInUse(device_id, session_id)
      resolve({});
    });
  }

  onLog(device_id, message) {
    // Method: OnLog
    // Call: OnLog(device_id, message)
  }

};

media.mojom.VideoCaptureHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
