// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/blit_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: LetterboxingBehavior
viz.mojom.LetterboxingBehavior = {
  kDoNotLetterbox: 0,
  kLetterbox: 1,
};

// Struct: BlitRequest
viz.mojom.BlitRequestSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BlitRequest',
      packedSize: 16,
      fields: [
        { name: 'populates_gpu_memory_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
