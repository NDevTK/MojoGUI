// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/range/mojom/range.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: Range
gfx.mojom.RangeSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Range',
      packedSize: 16,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RangeF
gfx.mojom.RangeFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.RangeF',
      packedSize: 16,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
