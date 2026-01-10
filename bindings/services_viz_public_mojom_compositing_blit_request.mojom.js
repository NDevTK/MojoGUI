// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/blit_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: LetterboxingBehavior
viz.mojom.mojom.LetterboxingBehavior = {
  kDoNotLetterbox: 0,
  kLetterbox: 1,
};
viz.mojom.mojom.LetterboxingBehaviorSpec = { $: mojo.internal.Enum() };

// Struct: BlitRequest
viz.mojom.mojom.BlitRequestSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BlitRequest',
      packedSize: 40,
      fields: [
        { name: 'destination_region_offset', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'letterboxing_behavior', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.LetterboxingBehaviorSpec, nullable: false, minVersion: 0 },
        { name: 'shared_image', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'populates_gpu_memory_buffer', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
