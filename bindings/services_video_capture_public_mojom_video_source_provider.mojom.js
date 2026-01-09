// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source_provider.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Enum: GetSourceInfosResult
video_capture.mojom.GetSourceInfosResult = {
  kSuccess: 0,
  kErrorDroppedRequest: 1,
};

// Interface: VideoSourceProvider
video_capture.mojom.VideoSourceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.VideoSourceProvider';
  }

};

video_capture.mojom.VideoSourceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
