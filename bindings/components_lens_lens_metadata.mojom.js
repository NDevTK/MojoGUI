// Auto-generated MojoJS binding
// Source: chromium_src/components/lens/lens_metadata.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: ImageFormat
lens.mojom.mojom.ImageFormat = {
  JPEG: 0,
  PNG: 1,
  WEBP: 2,
  ORIGINAL: 3,
};
lens.mojom.mojom.ImageFormatSpec = { $: mojo.internal.Enum() };

// Enum: Phase
lens.mojom.mojom.Phase = {
  OVERALL_START: 0,
  DOWNSCALE_START: 1,
  DOWNSCALE_END: 2,
  ENCODE_START: 3,
  ENCODE_END: 4,
};
lens.mojom.mojom.PhaseSpec = { $: mojo.internal.Enum() };

// Struct: LatencyLog
lens.mojom.mojom.LatencyLogSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LatencyLog',
      packedSize: 48,
      fields: [
        { name: 'phase', packedOffset: 24, packedBitOffset: 0, type: lens.mojom.PhaseSpec, nullable: false, minVersion: 0 },
        { name: 'original_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'downscaled_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'image_format', packedOffset: 28, packedBitOffset: 0, type: lens.mojom.ImageFormatSpec, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'encoded_bytes_size', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
