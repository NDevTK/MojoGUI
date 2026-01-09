// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/tiling.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: TileResource
viz.mojom.TileResourceSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TileResource',
      packedSize: 24,
      fields: [
        { name: 'resource', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_checkered', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Tile
viz.mojom.TileSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Tile',
      packedSize: 32,
      fields: [
        { name: 'contents', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'column_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'row_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'update_damage', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Tiling
viz.mojom.TilingSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Tiling',
      packedSize: 72,
      fields: [
        { name: 'layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'raster_translation', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'raster_scale', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'tile_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'tiling_rect', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'tiles', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'scale_key', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'is_deleted', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
