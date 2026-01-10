// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/surface_id.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: SurfaceId
viz.mojom.mojom.SurfaceIdSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceId',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'local_surface_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
