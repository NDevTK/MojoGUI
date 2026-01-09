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
        { name: 'embed_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'parent_sequence_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'child_sequence_number', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
