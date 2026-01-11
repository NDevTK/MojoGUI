// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encoder_info.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gfx = gfx || {};

media.mojom.ResolutionRateLimitSpec = { $: {} };
media.mojom.VideoEncoderInfoSpec = { $: {} };

// Struct: ResolutionRateLimit
mojo.internal.Struct(
    media.mojom.ResolutionRateLimitSpec, 'media.mojom.ResolutionRateLimit', [
      mojo.internal.StructField('frame_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_start_bitrate_bps', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('min_bitrate_bps', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_bitrate_bps', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_framerate_numerator', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_framerate_denominator', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: VideoEncoderInfo
mojo.internal.Struct(
    media.mojom.VideoEncoderInfoSpec, 'media.mojom.VideoEncoderInfo', [
      mojo.internal.StructField('implementation_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('number_of_manual_reference_buffers', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('fps_allocation', 16, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('resolution_rate_limits', 24, 0, mojo.internal.Array(media.mojom.ResolutionRateLimitSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('gpu_supported_pixel_formats', 32, 0, mojo.internal.Array(media.mojom.VideoPixelFormatSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_delay', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('input_capacity', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('requested_resolution_alignment', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_frame_delay', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_input_capacity', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_native_handle', 52, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_trusted_rate_controller', 52, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_hardware_accelerated', 52, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_simulcast', 52, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reports_average_qp', 52, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('apply_alignment_to_all_simulcast_layers', 52, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_frame_size_change', 53, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_gpu_shared_images', 53, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);
