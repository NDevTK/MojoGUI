// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/surface_range.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.SurfaceRangeSpec = { $: {} };

// Struct: SurfaceRange
mojo.internal.Struct(
    viz.mojom.SurfaceRangeSpec, 'viz.mojom.SurfaceRange', [
      mojo.internal.StructField('start', 0, 0, viz.mojom.SurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('end', 8, 0, viz.mojom.SurfaceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
