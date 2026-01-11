// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/picture_in_picture_window_options/picture_in_picture_window_options.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.PictureInPictureWindowOptionsSpec = { $: {} };

// Struct: PictureInPictureWindowOptions
mojo.internal.Struct(
    blink.mojom.PictureInPictureWindowOptionsSpec, 'blink.mojom.PictureInPictureWindowOptions', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('height', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('disallow_return_to_opener', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefer_initial_window_placement', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
