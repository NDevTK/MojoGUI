// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/ca_layer_params.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.CALayerContentSpec = { $: {} };
gfx.mojom.CALayerParamsSpec = { $: {} };

// Union: CALayerContent
mojo.internal.Union(
    gfx.mojom.CALayerContentSpec, 'gfx.mojom.CALayerContent', {
      'ca_context_id': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'io_surface_mach_port': {
        'ordinal': 1,
        'type': mojo.internal.Pointer,
        'nullable': false,
      },
    });

// Struct: CALayerParams
mojo.internal.Struct(
    gfx.mojom.CALayerParamsSpec, 'gfx.mojom.CALayerParams', [
      mojo.internal.StructField('content', 0, 0, gfx.mojom.CALayerContentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('is_empty', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
