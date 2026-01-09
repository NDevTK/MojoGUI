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
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SelectionBoundTypeSpec, nullable: false },
        { name: 'edge_start', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'edge_end', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'visible_edge_start', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'visible_edge_end', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'visible', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
