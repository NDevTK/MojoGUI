// Auto-generated MojoJS binding
// Source: chromium_src/components/lens/lens_metadata.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


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
lens.mojom.LatencyLogSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.LatencyLog',
      packedSize: 56,
      fields: [
        { name: 'phase', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'original_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'downscaled_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'image_format', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'time', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'encoded_bytes_size', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
