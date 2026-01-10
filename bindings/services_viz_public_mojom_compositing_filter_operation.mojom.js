// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/filter_operation.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var skia = skia || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};


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
  FILTER_TYPE_LAST: 16,
};
viz.mojom.FilterTypeSpec = { $: mojo.internal.Enum() };

// Struct: FilterOperation
viz.mojom.FilterOperationSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FilterOperation',
      packedSize: 64,
      fields: [
        { name: 'type', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.FilterTypeSpec, nullable: false, minVersion: 0 },
        { name: 'amount', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'drop_shadow_color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'image_filter', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.PaintFilterSpec, nullable: false, minVersion: 0 },
        { name: 'matrix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
        { name: 'zoom_inset', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'blur_tile_mode', packedOffset: 52, packedBitOffset: 0, type: skia.mojom.TileModeSpec, nullable: false, minVersion: 0 },
        { name: 'shape', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};
