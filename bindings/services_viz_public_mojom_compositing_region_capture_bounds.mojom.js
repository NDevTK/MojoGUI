// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/region_capture_bounds.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gfx = gfx || {};
var mojo_base = mojo_base || {};

viz.mojom.CropIdBoundsPairSpec = { $: {} };
viz.mojom.RegionCaptureBoundsSpec = { $: {} };

// Struct: CropIdBoundsPair
mojo.internal.Struct(
    viz.mojom.CropIdBoundsPairSpec, 'viz.mojom.CropIdBoundsPair', [
      mojo.internal.StructField('crop_id', 0, 0, mojo_base.mojom.TokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RegionCaptureBounds
mojo.internal.Struct(
    viz.mojom.RegionCaptureBoundsSpec, 'viz.mojom.RegionCaptureBounds', [
      mojo.internal.StructField('bounds', 0, 0, mojo.internal.Array(viz.mojom.CropIdBoundsPairSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
