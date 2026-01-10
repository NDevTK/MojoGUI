// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/filter_operations.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: FilterOperations
viz.mojom.FilterOperationsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FilterOperations',
      packedSize: 16,
      fields: [
        { name: 'operations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.FilterOperationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
