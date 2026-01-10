// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/surface_info.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: SurfaceInfo
viz.mojom.SurfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceInfo',
      packedSize: 32,
      fields: [
        { name: 'surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SurfaceIdSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'size_in_pixels', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
