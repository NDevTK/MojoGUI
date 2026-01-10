// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/rrect_f.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: RRectFType
gfx.mojom.mojom.RRectFType = {
  kEmpty: 0,
  kRect: 1,
  kSingle: 2,
  kSimple: 3,
  kOval: 4,
  kComplex: 5,
};
gfx.mojom.mojom.RRectFTypeSpec = { $: mojo.internal.Enum() };

// Struct: RRectF
gfx.mojom.mojom.RRectFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.RRectF',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RRectFTypeSpec, nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'upper_left', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'upper_right', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'lower_right', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'lower_left', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
