// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/screen_infos.mojom
// Module: display.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var gfx = gfx || {};

display.mojom.ScreenInfosSpec = { $: {} };

// Struct: ScreenInfos
mojo.internal.Struct(
    display.mojom.ScreenInfosSpec, 'display.mojom.ScreenInfos', [
      mojo.internal.StructField('screen_infos', 0, 0, mojo.internal.Array(display.mojom.ScreenInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('current_display_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('system_cursor_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
