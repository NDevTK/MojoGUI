// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_interval_inputs.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.ContentFrameIntervalTypeSpec = { $: mojo.internal.Enum() };
viz.mojom.ContentFrameIntervalInfoSpec = { $: {} };
viz.mojom.FrameIntervalInputsSpec = { $: {} };

// Enum: ContentFrameIntervalType
viz.mojom.ContentFrameIntervalType = {
  kVideo: 0,
  kAnimatingImage: 1,
  kScrollBarFadeOutAnimation: 2,
  kCompositorScroll: 3,
};

// Struct: ContentFrameIntervalInfo
mojo.internal.Struct(
    viz.mojom.ContentFrameIntervalInfoSpec, 'viz.mojom.ContentFrameIntervalInfo', [
      mojo.internal.StructField('type', 8, 0, viz.mojom.ContentFrameIntervalTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_interval', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('duplicate_count', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FrameIntervalInputs
mojo.internal.Struct(
    viz.mojom.FrameIntervalInputsSpec, 'viz.mojom.FrameIntervalInputs', [
      mojo.internal.StructField('frame_time', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_user_input', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_input', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('major_scroll_speed_in_pixels_per_second', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('content_interval_info', 8, 0, mojo.internal.Array(viz.mojom.ContentFrameIntervalInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('has_only_content_frame_interval_updates', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
