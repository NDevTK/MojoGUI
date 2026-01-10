// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/tiling.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.TileContentsSpec = { $: {} };
viz.mojom.TileResourceSpec = { $: {} };
viz.mojom.TileSpec = { $: {} };
viz.mojom.TilingSpec = { $: {} };

// Union: TileContents
mojo.internal.Union(
    viz.mojom.TileContentsSpec, 'viz.mojom.TileContents', {
      'missing_reason': {
        'ordinal': 0,
        'type': cc.mojom.MissingTileReasonSpec,
        'nullable': false,
      },
      'resource': {
        'ordinal': 1,
        'type': viz.mojom.TileResourceSpec,
        'nullable': false,
      },
      'solid_color': {
        'ordinal': 2,
        'type': skia.mojom.SkColor4fSpec,
        'nullable': false,
      },
    });

// Struct: TileResource
mojo.internal.Struct(
    viz.mojom.TileResourceSpec, 'viz.mojom.TileResource', [
      mojo.internal.StructField('resource', 0, 0, viz.mojom.TransferableResourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_checkered', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Tile
mojo.internal.Struct(
    viz.mojom.TileSpec, 'viz.mojom.Tile', [
      mojo.internal.StructField('column_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('row_index', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('update_damage', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('contents', 16, 0, viz.mojom.TileContentsSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Tiling
mojo.internal.Struct(
    viz.mojom.TilingSpec, 'viz.mojom.Tiling', [
      mojo.internal.StructField('layer_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('raster_translation', 8, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('raster_scale', 16, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('tile_size', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('tiling_rect', 32, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('tiles', 40, 0, mojo.internal.Array(viz.mojom.TileSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('scale_key', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('is_deleted', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);
