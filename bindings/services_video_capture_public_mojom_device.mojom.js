// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/device.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: Device
video_capture.mojom.DevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.Device';
  }

  start(requested_settings, handler) {
    // Method: Start
    // Call: Start(requested_settings, handler)
  }

  maybeSuspend() {
    // Method: MaybeSuspend
    // Call: MaybeSuspend()
  }

  resume() {
    // Method: Resume
    // Call: Resume()
  }

  getPhotoState() {
    // Method: GetPhotoState
    return new Promise((resolve) => {
      // Call: GetPhotoState()
      resolve({});
    });
  }

  setPhotoOptions(settings) {
    // Method: SetPhotoOptions
    return new Promise((resolve) => {
      // Call: SetPhotoOptions(settings)
      resolve({});
    });
  }

  takePhoto() {
    // Method: TakePhoto
    return new Promise((resolve) => {
      // Call: TakePhoto()
      resolve({});
    });
  }

  processFeedback(feedback) {
    // Method: ProcessFeedback
    // Call: ProcessFeedback(feedback)
  }

  pauses(capturer) {
    // Method: pauses
    // Call: pauses(capturer)
  }

  frame(indeterminate) {
    // Method: frame
    // Call: frame(indeterminate)
  }

  requestRefreshFrame() {
    // Method: RequestRefreshFrame
    // Call: RequestRefreshFrame()
  }

};

video_capture.mojom.DeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
