// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/favicon/favicon_url.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var gfx = gfx || {};

blink.mojom.FaviconIconTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FaviconURLSpec = { $: {} };

// Enum: FaviconIconType
blink.mojom.FaviconIconType = {
  kInvalid: 0,
  kFavicon: 1,
  kTouchIcon: 2,
  kTouchPrecomposedIcon: 3,
};

// Struct: FaviconURL
mojo.internal.Struct(
    blink.mojom.FaviconURLSpec, 'blink.mojom.FaviconURL', [
      mojo.internal.StructField('icon_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon_type', 8, 0, blink.mojom.FaviconIconTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon_sizes', 16, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_default_icon', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);
