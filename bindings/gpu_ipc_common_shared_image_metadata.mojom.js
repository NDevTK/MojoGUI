// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_metadata.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var skia = skia || {};
var skia = skia || {};


// Struct: SharedImageMetadata
gpu.mojom.SharedImageMetadataSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SharedImageMetadata',
      packedSize: 56,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SharedImageFormatSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'color_space', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'surface_origin', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.SurfaceOriginSpec, nullable: false, minVersion: 0 },
        { name: 'alpha_type', packedOffset: 36, packedBitOffset: 0, type: skia.mojom.AlphaTypeSpec, nullable: false, minVersion: 0 },
        { name: 'usage', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
