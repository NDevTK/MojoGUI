// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/favicon/favicon_url.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FaviconIconType
blink.mojom.FaviconIconType = {
  kInvalid: 0,
  kFavicon: 1,
  kTouchIcon: 2,
  kTouchPrecomposedIcon: 3,
};

// Struct: FaviconURL
blink.mojom.FaviconURLSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FaviconURL',
      packedSize: 40,
      fields: [
        { name: 'icon_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'icon_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'icon_sizes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_default_icon', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
