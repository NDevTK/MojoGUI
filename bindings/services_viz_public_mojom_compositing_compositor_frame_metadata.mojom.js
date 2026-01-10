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
      mojo.internal.StructField('device_scale_factor', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('root_scroll_offset', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('scrollable_viewport_size', 24, 0, gfx.mojom.SizeFSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_viewport_size', 32, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('content_color_usage', 40, 0, gfx.mojom.ContentColorUsageSpec, null, false, 0, undefined),
      mojo.internal.StructField('may_contain_video', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('may_throttle_if_undrawn_frames', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_handling_interaction', 44, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_handling_animation', 44, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('root_background_color', 48, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('latency_info', 56, 0, mojo.internal.Array(ui.mojom.LatencyInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('referenced_surfaces', 64, 0, mojo.internal.Array(viz.mojom.SurfaceRangeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('deadline', 72, 0, viz.mojom.FrameDeadlineSpec, null, false, 0, undefined),
      mojo.internal.StructField('activation_dependencies', 80, 0, mojo.internal.Array(viz.mojom.SurfaceIdSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('begin_frame_ack', 88, 0, viz.mojom.BeginFrameAckSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_token', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('send_frame_token_to_embedder', 100, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('top_controls_visible_height_set', 100, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('top_controls_visible_height', 104, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 108, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('display_transform_hint', 112, 0, gfx.mojom.OverlayTransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_mobile_optimized', 116, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('delegated_ink_metadata', 120, 0, gfx.mojom.DelegatedInkMetadataSpec, null, true, 0, undefined),
      mojo.internal.StructField('transition_directives', 128, 0, mojo.internal.Array(viz.mojom.CompositorFrameTransitionDirectiveSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('capture_bounds', 136, 0, viz.mojom.RegionCaptureBoundsSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_shared_element_resources', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('screenshot_destination', 152, 0, blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('is_software', 160, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('offset_tag_definitions', 168, 0, mojo.internal.Array(viz.mojom.OffsetTagDefinitionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('offset_tag_values', 176, 0, mojo.internal.Array(viz.mojom.OffsetTagValueSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_interval_inputs', 184, 0, viz.mojom.FrameIntervalInputsSpec, null, false, 0, undefined),
      mojo.internal.StructField('trees_in_viz_timing', 192, 0, viz.mojom.TreesInVizTimingSpec, null, false, 0, undefined),
    ],
    [[0, 208]]);
