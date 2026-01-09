// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_metadata.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: SharedImageMetadata
gpu.mojom.SharedImageMetadataSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SharedImageMetadata',
      packedSize: 56,
      fields: [
        { name: 'format', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.SharedImageFormatSpec, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'color_space', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false },
        { name: 'surface_origin', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.SurfaceOriginSpec, nullable: false },
        { name: 'alpha_type', packedOffset: 40, packedBitOffset: 0, type: skia.mojom.AlphaTypeSpec, nullable: false },
        { name: 'usage', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
