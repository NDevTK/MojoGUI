// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/local_surface_id.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: LocalSurfaceId
viz.mojom.LocalSurfaceIdSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.LocalSurfaceId',
      packedSize: 24,
      fields: [
        { name: 'parent_sequence_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'child_sequence_number', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'embed_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
