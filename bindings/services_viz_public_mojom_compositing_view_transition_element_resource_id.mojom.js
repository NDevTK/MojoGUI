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
      packedSize: 24,
      fields: [
        { name: 'transition_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewTransitionTokenSpec, nullable: true, minVersion: 0 },
        { name: 'local_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'for_scope_snapshot', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
