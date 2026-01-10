// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/layer_selection_bound.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: LayerSelectionBound
cc.mojom.mojom.LayerSelectionBoundSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.LayerSelectionBound',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SelectionBoundTypeSpec, nullable: false, minVersion: 0 },
        { name: 'edge_start', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'edge_end', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'layer_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'hidden', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: LayerSelection
cc.mojom.mojom.LayerSelectionSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.LayerSelection',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.LayerSelectionBoundSpec, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: cc.mojom.LayerSelectionBoundSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
