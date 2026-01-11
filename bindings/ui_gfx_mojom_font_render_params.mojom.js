// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/font_render_params.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.HintingSpec = { $: mojo.internal.Enum() };
gfx.mojom.SubpixelRenderingSpec = { $: mojo.internal.Enum() };

// Enum: Hinting
gfx.mojom.Hinting = {
  kNone: 0,
  kSlight: 1,
  kMedium: 2,
  kFull: 3,
};

// Enum: SubpixelRendering
gfx.mojom.SubpixelRendering = {
  kNone: 0,
  kRGB: 1,
  kBGR: 2,
  kVRGB: 3,
  kVBGR: 4,
};
