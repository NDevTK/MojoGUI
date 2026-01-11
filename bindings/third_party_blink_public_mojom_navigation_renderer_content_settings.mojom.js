// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/renderer_content_settings.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.RendererContentSettingsSpec = { $: {} };

// Struct: RendererContentSettings
mojo.internal.Struct(
    blink.mojom.RendererContentSettingsSpec, 'blink.mojom.RendererContentSettings', [
      mojo.internal.StructField('allow_script', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_image', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_popup', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_mixed_content', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_controlled_frame', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
