// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/selection.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: Selection
viz.mojom.SelectionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Selection',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SelectionBoundSpec, nullable: false },
        { name: 'end', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SelectionBoundSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
