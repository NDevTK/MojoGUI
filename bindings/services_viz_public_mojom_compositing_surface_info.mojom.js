// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/surface_info.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gfx = gfx || {};

viz.mojom.SurfaceInfoSpec = { $: {} };

// Struct: SurfaceInfo
mojo.internal.Struct(
    viz.mojom.SurfaceInfoSpec, 'viz.mojom.SurfaceInfo', [
      mojo.internal.StructField('surface_id', 0, 0, viz.mojom.SurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size_in_pixels', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);
