// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame_owner_properties.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.FrameOwnerPropertiesSpec = { $: {} };

// Struct: FrameOwnerProperties
mojo.internal.Struct(
    blink.mojom.FrameOwnerPropertiesSpec, 'blink.mojom.FrameOwnerProperties', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scrollbar_mode', 8, 0, blink.mojom.ScrollbarModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_scheme', 16, 0, blink.mojom.ColorSchemeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('preferred_color_scheme', 24, 0, blink.mojom.PreferredColorSchemeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('margin_width', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('margin_height', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('allow_fullscreen', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_payment_request', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_display_none', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);
