// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/layer_selection_bound.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Struct: LayerSelectionBound
cc.mojom.LayerSelectionBoundSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.LayerSelectionBound',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SelectionBoundTypeSpec, nullable: false },
        { name: 'edge_start', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'edge_end', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'layer_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'hidden', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LayerSelection
cc.mojom.LayerSelectionSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.LayerSelection',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.LayerSelectionBoundSpec, nullable: false },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: cc.mojom.LayerSelectionBoundSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
