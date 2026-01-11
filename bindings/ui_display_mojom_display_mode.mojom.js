// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_mode.mojom
// Module: display.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var gfx = gfx || {};

display.mojom.DisplayModeSpec = { $: {} };

// Struct: DisplayMode
mojo.internal.Struct(
    display.mojom.DisplayModeSpec, 'display.mojom.DisplayMode', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('refresh_rate', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('vsync_rate_min_$value', 12, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'vsync_rate_min_$flag', originalFieldName: 'vsync_rate_min' }),
      mojo.internal.StructField('is_interlaced', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('vsync_rate_min_$flag', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'vsync_rate_min_$value', originalFieldName: 'vsync_rate_min' }),
    ],
    [[0, 32]]);
