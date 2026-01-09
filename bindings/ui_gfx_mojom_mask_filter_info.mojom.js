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
        { name: 'rounded_corner_bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RRectFSpec, nullable: false, minVersion: 0 },
        { name: 'gradient_mask', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.LinearGradientSpec, nullable: true, minVersion: 0 },
        { name: 'clip_id_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'clip_id_$value', originalFieldName: 'clip_id' } },
        { name: 'clip_id_$value', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'clip_id_$flag', originalFieldName: 'clip_id' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
