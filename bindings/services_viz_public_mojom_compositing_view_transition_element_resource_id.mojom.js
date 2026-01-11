// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/view_transition_element_resource_id.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var blink = blink || {};

viz.mojom.ViewTransitionElementResourceIdSpec = { $: {} };

// Struct: ViewTransitionElementResourceId
mojo.internal.Struct(
    viz.mojom.ViewTransitionElementResourceIdSpec, 'viz.mojom.ViewTransitionElementResourceId', [
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('local_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('for_scope_snapshot', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
