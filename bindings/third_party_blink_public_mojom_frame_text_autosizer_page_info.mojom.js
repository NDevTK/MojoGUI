// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/text_autosizer_page_info.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.TextAutosizerPageInfoSpec = { $: {} };

// Struct: TextAutosizerPageInfo
mojo.internal.Struct(
    blink.mojom.TextAutosizerPageInfoSpec, 'blink.mojom.TextAutosizerPageInfo', [
      mojo.internal.StructField('main_frame_width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('main_frame_layout_width', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('device_scale_adjustment', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);
