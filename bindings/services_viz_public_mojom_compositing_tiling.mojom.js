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
      packedSize: 16,
      fields: [
        { name: 'is_checkered', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'contents', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'is_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
