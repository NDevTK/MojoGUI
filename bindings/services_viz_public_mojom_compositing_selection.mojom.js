// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/selection.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.SelectionSpec = { $: {} };

// Struct: Selection
mojo.internal.Struct(
    viz.mojom.SelectionSpec, 'viz.mojom.Selection', [
      mojo.internal.StructField('start', 0, 0, gfx.mojom.SelectionBoundSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end', 8, 0, gfx.mojom.SelectionBoundSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
