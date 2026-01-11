// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/frame_data.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.FrameDataSpec = { $: {} };

// Struct: FrameData
mojo.internal.Struct(
    gfx.mojom.FrameDataSpec, 'gfx.mojom.FrameData', [
      mojo.internal.StructField('seq', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('swap_trace_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);
