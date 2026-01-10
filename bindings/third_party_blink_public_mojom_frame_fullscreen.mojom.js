// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/fullscreen.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FullscreenOptionsSpec = { $: {} };

// Struct: FullscreenOptions
mojo.internal.Struct(
    blink.mojom.FullscreenOptionsSpec, 'blink.mojom.FullscreenOptions', [
      mojo.internal.StructField('prefers_navigation_bar', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefers_status_bar', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('display_id', 8, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('is_prefixed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_xr_overlay', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
