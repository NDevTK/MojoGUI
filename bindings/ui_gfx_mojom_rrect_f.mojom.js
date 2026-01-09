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
      packedSize: 16,
      fields: [
        { name: 'lower_left', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
