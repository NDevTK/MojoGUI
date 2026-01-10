// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_deadline.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.FrameDeadlineSpec = { $: {} };

// Struct: FrameDeadline
mojo.internal.Struct(
    viz.mojom.FrameDeadlineSpec, 'viz.mojom.FrameDeadline', [
      mojo.internal.StructField('frame_start_time', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deadline_in_frames', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('use_default_lower_bound_deadline', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
