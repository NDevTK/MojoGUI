// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/surface_info.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: SurfaceInfo
viz.mojom.SurfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceInfo',
      packedSize: 32,
      fields: [
        { name: 'surface_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.SurfaceIdSpec, nullable: false },
        { name: 'device_scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'size_in_pixels', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
