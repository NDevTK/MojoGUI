// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/view_transition_element_resource_id.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: ViewTransitionElementResourceId
viz.mojom.ViewTransitionElementResourceIdSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ViewTransitionElementResourceId',
      packedSize: 32,
      fields: [
        { name: 'transition_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: true },
        { name: 'local_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'for_scope_snapshot', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
