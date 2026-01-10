// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/tiling.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Union: TileContents
viz.mojom.TileContentsSpec = { $: mojo.internal.Union(
    'viz.mojom.TileContents', {
      'missing_reason': {
        'ordinal': 0,
        'type': cc.mojom.MissingTileReasonSpec,
      }},
      'resource': {
        'ordinal': 1,
        'type': viz.mojom.TileResourceSpec,
      }},
      'solid_color': {
        'ordinal': 2,
        'type': skia.mojom.SkColor4fSpec,
      }},
    })
};

// Struct: TileResource
viz.mojom.TileResourceSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TileResource',
      packedSize: 24,
      fields: [
        { name: 'resource', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.TransferableResourceSpec, nullable: false, minVersion: 0 },
        { name: 'is_checkered', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Tile
viz.mojom.TileSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Tile',
      packedSize: 40,
      fields: [
        { name: 'column_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'row_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'update_damage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'contents', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.TileContentsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Tiling
viz.mojom.TilingSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Tiling',
      packedSize: 64,
      fields: [
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'raster_translation', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'raster_scale', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'tile_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'tiling_rect', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'tiles', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.TileSpec, false), nullable: false, minVersion: 0 },
        { name: 'scale_key', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'is_deleted', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};
