// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/rrect_f.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Enum: RRectFType
gfx.mojom.RRectFType = {
  kEmpty: 0,
  kRect: 1,
  kSingle: 2,
  kSimple: 3,
  kOval: 4,
  kComplex: 5,
};

// Struct: RRectF
gfx.mojom.RRectFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.RRectF',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RRectFTypeSpec, nullable: false },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'upper_left', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'upper_right', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'lower_right', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'lower_left', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
