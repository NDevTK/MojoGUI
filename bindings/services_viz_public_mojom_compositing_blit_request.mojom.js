// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/blit_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.LetterboxingBehaviorSpec = { $: mojo.internal.Enum() };
viz.mojom.BlitRequestSpec = { $: {} };

// Enum: LetterboxingBehavior
viz.mojom.LetterboxingBehavior = {
  kDoNotLetterbox: 0,
  kLetterbox: 1,
};

// Struct: BlitRequest
mojo.internal.Struct(
    viz.mojom.BlitRequestSpec, 'viz.mojom.BlitRequest', [
      mojo.internal.StructField('destination_region_offset', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('letterboxing_behavior', 8, 0, viz.mojom.LetterboxingBehaviorSpec, null, false, 0, undefined),
      mojo.internal.StructField('shared_image', 16, 0, gpu.mojom.ExportedSharedImageSpec, null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 24, 0, gpu.mojom.SyncTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('populates_gpu_memory_buffer', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);
