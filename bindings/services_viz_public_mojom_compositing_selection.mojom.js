// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/selection.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: Selection
viz.mojom.mojom.SelectionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Selection',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SelectionBoundSpec, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SelectionBoundSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
