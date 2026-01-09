// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encoder_info.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: ResolutionRateLimit
media.mojom.ResolutionRateLimitSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ResolutionRateLimit',
      packedSize: 16,
      fields: [
        { name: 'max_framerate_denominator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoEncoderInfo
media.mojom.VideoEncoderInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncoderInfo',
      packedSize: 16,
      fields: [
        { name: 'supports_gpu_shared_images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
