// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_sink_bundle_id.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.FrameSinkBundleIdSpec = { $: {} };

// Struct: FrameSinkBundleId
mojo.internal.Struct(
    viz.mojom.FrameSinkBundleIdSpec, 'viz.mojom.FrameSinkBundleId', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('bundle_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
