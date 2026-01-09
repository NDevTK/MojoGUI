// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/gpu_extra_info.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: ANGLEFeature
gfx.mojom.ANGLEFeatureSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.ANGLEFeature',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'category', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'status', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GpuExtraInfo
gfx.mojom.GpuExtraInfoSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.GpuExtraInfo',
      packedSize: 16,
      fields: [
        { name: 'angle_features', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
