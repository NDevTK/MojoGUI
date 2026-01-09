// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encoder_metrics_provider.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: VideoEncoderUseCase
media.mojom.VideoEncoderUseCase = {
  kCastMirroring: 0,
  kMediaRecorder: 1,
  kWebCodecs: 2,
  kWebRTC: 3,
};

// Interface: VideoEncoderMetricsProvider
media.mojom.VideoEncoderMetricsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoEncoderMetricsProvider';
  }

  initialize(encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode) {
    // Method: Initialize
    // Call: Initialize(encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode)
  }

  setEncodedFrameCount(encoder_id, num_encoded_frames) {
    // Method: SetEncodedFrameCount
    // Call: SetEncodedFrameCount(encoder_id, num_encoded_frames)
  }

  setError(encoder_id, status) {
    // Method: SetError
    // Call: SetError(encoder_id, status)
  }

  complete(encoder_id) {
    // Method: Complete
    // Call: Complete(encoder_id)
  }

};

media.mojom.VideoEncoderMetricsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
