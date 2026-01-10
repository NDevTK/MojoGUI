// Auto-generated MojoJS binding
// Source: chromium_src/components/lens/lens_metadata.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

lens.mojom.ImageFormatSpec = { $: mojo.internal.Enum() };
lens.mojom.PhaseSpec = { $: mojo.internal.Enum() };
lens.mojom.LatencyLogSpec = { $: {} };

// Enum: ImageFormat
lens.mojom.ImageFormat = {
  JPEG: 0,
  PNG: 1,
  WEBP: 2,
  ORIGINAL: 3,
};

// Enum: Phase
lens.mojom.Phase = {
  OVERALL_START: 0,
  DOWNSCALE_START: 1,
  DOWNSCALE_END: 2,
  ENCODE_START: 3,
  ENCODE_END: 4,
};

// Struct: LatencyLog
mojo.internal.Struct(
    lens.mojom.LatencyLogSpec, 'lens.mojom.LatencyLog', [
      mojo.internal.StructField('phase', 0, 0, lens.mojom.PhaseSpec, null, false, 0, undefined),
      mojo.internal.StructField('original_size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('downscaled_size', 16, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('image_format', 24, 0, lens.mojom.ImageFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('time', 32, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('encoded_bytes_size', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);
