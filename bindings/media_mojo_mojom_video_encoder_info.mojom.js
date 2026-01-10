// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encoder_info.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: ResolutionRateLimit
media.mojom.ResolutionRateLimitSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ResolutionRateLimit',
      packedSize: 40,
      fields: [
        { name: 'frame_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'min_start_bitrate_bps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'min_bitrate_bps', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max_bitrate_bps', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'max_framerate_numerator', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_framerate_denominator', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: VideoEncoderInfo
media.mojom.VideoEncoderInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncoderInfo',
      packedSize: 64,
      fields: [
        { name: 'implementation_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'has_frame_delay', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'frame_delay', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'has_input_capacity', packedOffset: 52, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'input_capacity', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'supports_native_handle', packedOffset: 52, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_trusted_rate_controller', packedOffset: 52, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_hardware_accelerated', packedOffset: 52, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_simulcast', packedOffset: 52, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reports_average_qp', packedOffset: 52, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'requested_resolution_alignment', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'apply_alignment_to_all_simulcast_layers', packedOffset: 52, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_frame_size_change', packedOffset: 53, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'number_of_manual_reference_buffers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'fps_allocation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Pointer, false), false), nullable: false, minVersion: 0 },
        { name: 'resolution_rate_limits', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.ResolutionRateLimitSpec, false), nullable: false, minVersion: 0 },
        { name: 'gpu_supported_pixel_formats', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.VideoPixelFormatSpec, false), nullable: false, minVersion: 0 },
        { name: 'supports_gpu_shared_images', packedOffset: 53, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};
