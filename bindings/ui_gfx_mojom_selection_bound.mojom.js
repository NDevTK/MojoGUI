// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/selection_bound.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: SelectionBoundType
gfx.mojom.SelectionBoundType = {
  LEFT: 0,
  RIGHT: 1,
  CENTER: 2,
  HIDDEN: 3,
  EMPTY: 4,
  LAST: 5,
};
gfx.mojom.SelectionBoundTypeSpec = { $: mojo.internal.Enum() };

// Struct: SelectionBound
gfx.mojom.SelectionBoundSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.SelectionBound',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SelectionBoundTypeSpec, nullable: false, minVersion: 0 },
        { name: 'edge_start', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'edge_end', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'visible_edge_start', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'visible_edge_end', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'visible', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
