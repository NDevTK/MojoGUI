// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/selection_bound.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Enum: SelectionBoundType
gfx.mojom.SelectionBoundType = {
  LEFT: 0,
  RIGHT: 1,
  CENTER: 2,
  HIDDEN: 3,
  EMPTY: 4,
  LAST: 5,
};

// Struct: SelectionBound
gfx.mojom.SelectionBoundSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.SelectionBound',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
