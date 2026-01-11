// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_configuration_params.mojom
// Module: display.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var gfx = gfx || {};

display.mojom.DisplayConfigurationParamsSpec = { $: {} };

// Struct: DisplayConfigurationParams
mojo.internal.Struct(
    display.mojom.DisplayConfigurationParamsSpec, 'display.mojom.DisplayConfigurationParams', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 16, 0, display.mojom.DisplayModeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('enable_vrr', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);
