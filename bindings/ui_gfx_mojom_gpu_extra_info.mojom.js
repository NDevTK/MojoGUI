// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/gpu_extra_info.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: ANGLEFeature
gfx.mojom.mojom.ANGLEFeatureSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.ANGLEFeature',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'category', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GpuExtraInfo
gfx.mojom.mojom.GpuExtraInfoSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.GpuExtraInfo',
      packedSize: 16,
      fields: [
        { name: 'angle_features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.ANGLEFeatureSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
