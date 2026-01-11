// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/subtree_capture_id.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.SubtreeCaptureIdSpec = { $: {} };

// Struct: SubtreeCaptureId
mojo.internal.Struct(
    viz.mojom.SubtreeCaptureIdSpec, 'viz.mojom.SubtreeCaptureId', [
      mojo.internal.StructField('subtree_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);
