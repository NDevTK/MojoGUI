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
