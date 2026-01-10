// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_metadata.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var skia = skia || {};
var skia = skia || {};

gpu.mojom.SharedImageMetadataSpec = { $: {} };

// Struct: SharedImageMetadata
mojo.internal.Struct(
    gpu.mojom.SharedImageMetadataSpec, 'gpu.mojom.SharedImageMetadata', [
      mojo.internal.StructField('format', 0, 0, viz.mojom.SharedImageFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_space', 16, 0, gfx.mojom.ColorSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('surface_origin', 24, 0, skia.mojom.SurfaceOriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpha_type', 32, 0, skia.mojom.AlphaTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('usage', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);
