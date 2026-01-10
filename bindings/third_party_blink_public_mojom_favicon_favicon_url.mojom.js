// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/favicon/favicon_url.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: FaviconIconType
blink.mojom.mojom.FaviconIconType = {
  kInvalid: 0,
  kFavicon: 1,
  kTouchIcon: 2,
  kTouchPrecomposedIcon: 3,
};
blink.mojom.mojom.FaviconIconTypeSpec = { $: mojo.internal.Enum() };

// Struct: FaviconURL
blink.mojom.mojom.FaviconURLSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FaviconURL',
      packedSize: 32,
      fields: [
        { name: 'icon_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'icon_type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FaviconIconTypeSpec, nullable: false, minVersion: 0 },
        { name: 'icon_sizes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_default_icon', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
