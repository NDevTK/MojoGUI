// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_timing_details.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: FrameTimingDetails
viz.mojom.mojom.FrameTimingDetailsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameTimingDetails',
      packedSize: 88,
      fields: [
        { name: 'received_compositor_frame_timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'embedded_frame_timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'draw_start_timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'swap_timings', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SwapTimingsSpec, nullable: false, minVersion: 0 },
        { name: 'presentation_feedback', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.PresentationFeedbackSpec, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.BeginFrameIdSpec, nullable: false, minVersion: 0 },
        { name: 'start_update_display_tree', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'start_prepare_to_draw', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'start_draw_layers', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'submit_compositor_frame', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};
