// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_metadata.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var skia = skia || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};

viz.mojom.CompositorFrameMetadataSpec = { $: {} };

// Struct: CompositorFrameMetadata
mojo.internal.Struct(
    viz.mojom.CompositorFrameMetadataSpec, 'viz.mojom.CompositorFrameMetadata', [
      mojo.internal.StructField('device_scale_factor', 136, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('root_scroll_offset', 0, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 140, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('scrollable_viewport_size', 8, 0, gfx.mojom.SizeFSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_viewport_size', 16, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('content_color_usage', 144, 0, gfx.mojom.ContentColorUsageSpec, null, false, 0, undefined),
      mojo.internal.StructField('may_contain_video', 164, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('may_throttle_if_undrawn_frames', 164, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_handling_interaction', 164, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_handling_animation', 164, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('root_background_color', 24, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('latency_info', 32, 0, mojo.internal.Array(ui.mojom.LatencyInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('referenced_surfaces', 40, 0, mojo.internal.Array(viz.mojom.SurfaceRangeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('deadline', 48, 0, viz.mojom.FrameDeadlineSpec, null, false, 0, undefined),
      mojo.internal.StructField('activation_dependencies', 56, 0, mojo.internal.Array(viz.mojom.SurfaceIdSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('begin_frame_ack', 64, 0, viz.mojom.BeginFrameAckSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_token', 148, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('send_frame_token_to_embedder', 164, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('top_controls_visible_height_set', 164, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('top_controls_visible_height', 152, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 156, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('display_transform_hint', 160, 0, gfx.mojom.OverlayTransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_mobile_optimized', 164, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('delegated_ink_metadata', 72, 0, gfx.mojom.DelegatedInkMetadataSpec, null, true, 0, undefined),
      mojo.internal.StructField('transition_directives', 80, 0, mojo.internal.Array(viz.mojom.CompositorFrameTransitionDirectiveSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('capture_bounds', 88, 0, viz.mojom.RegionCaptureBoundsSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_shared_element_resources', 164, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('screenshot_destination', 96, 0, blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('is_software', 165, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('offset_tag_definitions', 104, 0, mojo.internal.Array(viz.mojom.OffsetTagDefinitionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('offset_tag_values', 112, 0, mojo.internal.Array(viz.mojom.OffsetTagValueSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_interval_inputs', 120, 0, viz.mojom.FrameIntervalInputsSpec, null, false, 0, undefined),
      mojo.internal.StructField('trees_in_viz_timing', 128, 0, viz.mojom.TreesInVizTimingSpec, null, false, 0, undefined),
    ],
    [[0, 176]]);
