// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/filter_operation.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


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

// Struct: FilterOperation
viz.mojom.FilterOperationSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FilterOperation',
      packedSize: 72,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FilterTypeSpec, nullable: false },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'drop_shadow_color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'image_filter', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.PaintFilterSpec, nullable: false },
        { name: 'matrix', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'blur_tile_mode', packedOffset: 40, packedBitOffset: 0, type: skia.mojom.TileModeSpec, nullable: false },
        { name: 'shape', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'amount', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'zoom_inset', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
