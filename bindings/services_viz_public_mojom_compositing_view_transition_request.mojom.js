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
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.CompositorFrameTransitionDirectiveTypeSpec, nullable: false },
        { name: 'transition_token', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: false },
        { name: 'maybe_cross_frame_sink', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sequence_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'capture_resource_ids', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
