// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/surface_id.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: SurfaceId
viz.mojom.SurfaceIdSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceId',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'local_surface_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
