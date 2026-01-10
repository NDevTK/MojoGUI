// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/view_transition_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var blink = blink || {};


// Struct: ViewTransitionRequest
viz.mojom.ViewTransitionRequestSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ViewTransitionRequest',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.CompositorFrameTransitionDirectiveTypeSpec, nullable: false, minVersion: 0 },
        { name: 'transition_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: false, minVersion: 0 },
        { name: 'maybe_cross_frame_sink', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sequence_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'capture_resource_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.ViewTransitionElementResourceIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
