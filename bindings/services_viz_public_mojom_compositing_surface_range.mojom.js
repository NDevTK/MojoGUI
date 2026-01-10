// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/surface_range.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: SurfaceRange
viz.mojom.mojom.SurfaceRangeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceRange',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SurfaceIdSpec, nullable: true, minVersion: 0 },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.SurfaceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
