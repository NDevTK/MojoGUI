// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_timing_details.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

viz.mojom.FrameTimingDetailsSpec = { $: {} };

// Struct: FrameTimingDetails
mojo.internal.Struct(
    viz.mojom.FrameTimingDetailsSpec, 'viz.mojom.FrameTimingDetails', [
      mojo.internal.StructField('received_compositor_frame_timestamp', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('embedded_frame_timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('draw_start_timestamp', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('swap_timings', 24, 0, gfx.mojom.SwapTimingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('presentation_feedback', 32, 0, gfx.mojom.PresentationFeedbackSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 40, 0, viz.mojom.BeginFrameIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_update_display_tree', 48, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_prepare_to_draw', 56, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_draw_layers', 64, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('submit_compositor_frame', 72, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 88]]);
