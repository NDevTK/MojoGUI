// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/selection_bound.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

gfx.mojom.SelectionBoundTypeSpec = { $: mojo.internal.Enum() };
gfx.mojom.SelectionBoundSpec = { $: {} };

// Enum: SelectionBoundType
gfx.mojom.SelectionBoundType = {
  LEFT: 0,
  RIGHT: 1,
  CENTER: 2,
  HIDDEN: 3,
  EMPTY: 4,
  LAST: 4,
};

// Struct: SelectionBound
mojo.internal.Struct(
    gfx.mojom.SelectionBoundSpec, 'gfx.mojom.SelectionBound', [
      mojo.internal.StructField('type', 0, 0, gfx.mojom.SelectionBoundTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('edge_start', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('edge_end', 16, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_edge_start', 24, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_edge_end', 32, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);
