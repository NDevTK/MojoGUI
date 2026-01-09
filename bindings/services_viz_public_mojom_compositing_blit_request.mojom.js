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
      packedSize: 48,
      fields: [
        { name: 'destination_region_offset', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'letterboxing_behavior', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.LetterboxingBehaviorSpec, nullable: false },
        { name: 'shared_image', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false },
        { name: 'sync_token', packedOffset: 32, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
        { name: 'populates_gpu_memory_buffer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
