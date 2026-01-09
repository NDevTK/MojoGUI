// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/mask_filter_info.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: MaskFilterInfo
gfx.mojom.MaskFilterInfoSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.MaskFilterInfo',
      packedSize: 32,
      fields: [
        { name: 'rounded_corner_bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RRectFSpec, nullable: false },
        { name: 'gradient_mask', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.LinearGradientSpec, nullable: true },
        { name: 'clip_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
