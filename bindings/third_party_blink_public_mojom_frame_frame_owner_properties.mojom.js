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
      mojo.internal.StructField('scrollbar_mode', 8, 0, blink.mojom.ScrollbarModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('margin_width', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('margin_height', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('allow_fullscreen', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_payment_request', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_display_none', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('color_scheme', 20, 0, blink.mojom.ColorSchemeSpec, null, false, 0, undefined),
      mojo.internal.StructField('preferred_color_scheme', 24, 0, blink.mojom.PreferredColorSchemeSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);
