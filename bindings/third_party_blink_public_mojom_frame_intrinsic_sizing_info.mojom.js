// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/intrinsic_sizing_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: IntrinsicSizingInfo
blink.mojom.IntrinsicSizingInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IntrinsicSizingInfo',
      packedSize: 32,
      fields: [
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false },
        { name: 'aspect_ratio', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false },
        { name: 'has_width', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_height', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
