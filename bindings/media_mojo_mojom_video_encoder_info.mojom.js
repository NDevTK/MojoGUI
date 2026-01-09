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
      packedSize: 40,
      fields: [
        { name: 'frame_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'min_start_bitrate_bps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'min_bitrate_bps', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max_bitrate_bps', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'max_framerate_numerator', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'max_framerate_denominator', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'implementation_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'number_of_manual_reference_buffers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'fps_allocation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'resolution_rate_limits', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'gpu_supported_pixel_formats', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'frame_delay', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'input_capacity', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'requested_resolution_alignment', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'has_frame_delay', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_input_capacity', packedOffset: 52, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_native_handle', packedOffset: 52, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'has_trusted_rate_controller', packedOffset: 52, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_hardware_accelerated', packedOffset: 52, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_simulcast', packedOffset: 52, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'reports_average_qp', packedOffset: 52, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'apply_alignment_to_all_simulcast_layers', packedOffset: 52, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_frame_size_change', packedOffset: 52, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_gpu_shared_images', packedOffset: 52, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
