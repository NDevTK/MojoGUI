// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/view_transition_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: ViewTransitionRequest
viz.mojom.ViewTransitionRequestSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ViewTransitionRequest',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'transition_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'capture_resource_ids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sequence_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'maybe_cross_frame_sink', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
