// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/gpu_extra_info.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.ANGLEFeatureSpec = { $: {} };
gfx.mojom.GpuExtraInfoSpec = { $: {} };

// Struct: ANGLEFeature
mojo.internal.Struct(
    gfx.mojom.ANGLEFeatureSpec, 'gfx.mojom.ANGLEFeature', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('category', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GpuExtraInfo
mojo.internal.Struct(
    gfx.mojom.GpuExtraInfoSpec, 'gfx.mojom.GpuExtraInfo', [
      mojo.internal.StructField('angle_features', 0, 0, mojo.internal.Array(gfx.mojom.ANGLEFeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
