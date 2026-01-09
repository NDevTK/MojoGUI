// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Enum: CreatePushSubscriptionSuccessCode
video_capture.mojom.CreatePushSubscriptionSuccessCode = {
  kCreatedWithRequestedSettings: 0,
  kCreatedWithDifferentSettings: 1,
};

// Interface: PushVideoStreamSubscription
video_capture.mojom.PushVideoStreamSubscriptionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.PushVideoStreamSubscription';
  }

  activate() {
    // Method: Activate
    // Call: Activate()
  }

  onFrameReadyInBuffer() {
    // Method: OnFrameReadyInBuffer
    // Call: OnFrameReadyInBuffer()
  }

  onFrameDropped() {
    // Method: OnFrameDropped
    // Call: OnFrameDropped()
  }

  onNewBuffer() {
    // Method: OnNewBuffer
    // Call: OnNewBuffer()
  }

  onBufferRetired() {
    // Method: OnBufferRetired
    // Call: OnBufferRetired()
  }

  suspend() {
    // Method: Suspend
    // Call: Suspend()
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

  takePhoto() {
    // Method: TakePhoto
    // Call: TakePhoto()
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

  close() {
    // Method: Close
    // Call: Close()
  }

  processFeedback(feedback) {
    // Method: ProcessFeedback
    // Call: ProcessFeedback(feedback)
  }

};

video_capture.mojom.PushVideoStreamSubscriptionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoSource
video_capture.mojom.VideoSourcePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.VideoSource';
  }

  onFrameReadyInBuffer() {
    // Method: OnFrameReadyInBuffer
    // Call: OnFrameReadyInBuffer()
  }

  createPushSubscription(subscriber, requested_settings, force_reopen_with_new_settings, subscription) {
    // Method: CreatePushSubscription
    return new Promise((resolve) => {
      // Call: CreatePushSubscription(subscriber, requested_settings, force_reopen_with_new_settings, subscription)
      resolve({});
    });
  }

};

video_capture.mojom.VideoSourceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
