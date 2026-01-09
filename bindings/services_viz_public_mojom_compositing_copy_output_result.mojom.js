// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/copy_output_result.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: CopyOutputResultFormat
viz.mojom.CopyOutputResultFormat = {
  RGBA: 0,
};

// Enum: CopyOutputResultDestination
viz.mojom.CopyOutputResultDestination = {
  kSystemMemory: 0,
  kSharedImage: 1,
};

// Struct: CopyOutputResult
viz.mojom.CopyOutputResultSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CopyOutputResult',
      packedSize: 16,
      fields: [
        { name: 'releaser', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
