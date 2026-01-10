// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/filter_operation.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var skia = skia || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.FilterTypeSpec = { $: mojo.internal.Enum() };
viz.mojom.FilterOperationSpec = { $: {} };

// Enum: FilterType
viz.mojom.FilterType = {
  GRAYSCALE: 0,
  SEPIA: 1,
  SATURATE: 2,
  HUE_ROTATE: 3,
  INVERT: 4,
  BRIGHTNESS: 5,
  CONTRAST: 6,
  OPACITY: 7,
  BLUR: 8,
  DROP_SHADOW: 9,
  COLOR_MATRIX: 10,
  ZOOM: 11,
  REFERENCE: 12,
  SATURATING_BRIGHTNESS: 13,
  ALPHA_THRESHOLD: 14,
  OFFSET: 15,
  FILTER_TYPE_LAST: 15,
};

// Struct: FilterOperation
mojo.internal.Struct(
    viz.mojom.FilterOperationSpec, 'viz.mojom.FilterOperation', [
      mojo.internal.StructField('type', 0, 0, viz.mojom.FilterTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drop_shadow_color', 16, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_filter', 24, 0, viz.mojom.PaintFilterSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('matrix', 32, 0, mojo.internal.Array(mojo.internal.Float, false), null, true, 0, undefined),
      mojo.internal.StructField('blur_tile_mode', 40, 0, skia.mojom.TileModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shape', 48, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('amount', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('zoom_inset', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 72]]);
