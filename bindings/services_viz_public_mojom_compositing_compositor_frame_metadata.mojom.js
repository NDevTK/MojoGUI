// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_metadata.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gfx = gfx || {};
var skia = skia || {};
var blink = blink || {};
var ui = ui || {};

viz.mojom.CompositorFrameMetadataSpec = { $: {} };

// Struct: CompositorFrameMetadata
mojo.internal.Struct(
    viz.mojom.CompositorFrameMetadataSpec, 'viz.mojom.CompositorFrameMetadata', [
      mojo.internal.StructField('root_scroll_offset', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scrollable_viewport_size', 8, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_viewport_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_color_usage', 24, 0, gfx.mojom.ContentColorUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('root_background_color', 32, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('latency_info', 40, 0, mojo.internal.Array(ui.mojom.LatencyInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('referenced_surfaces', 48, 0, mojo.internal.Array(viz.mojom.SurfaceRangeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('deadline', 56, 0, viz.mojom.FrameDeadlineSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_dependencies', 64, 0, mojo.internal.Array(viz.mojom.SurfaceIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('begin_frame_ack', 72, 0, viz.mojom.BeginFrameAckSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_transform_hint', 80, 0, gfx.mojom.OverlayTransformSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delegated_ink_metadata', 88, 0, gfx.mojom.DelegatedInkMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('transition_directives', 96, 0, mojo.internal.Array(viz.mojom.CompositorFrameTransitionDirectiveSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('capture_bounds', 104, 0, viz.mojom.RegionCaptureBoundsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screenshot_destination', 112, 0, blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('offset_tag_definitions', 120, 0, mojo.internal.Array(viz.mojom.OffsetTagDefinitionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('offset_tag_values', 128, 0, mojo.internal.Array(viz.mojom.OffsetTagValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_interval_inputs', 136, 0, viz.mojom.FrameIntervalInputsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trees_in_viz_timing', 144, 0, viz.mojom.TreesInVizTimingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 152, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 156, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('frame_token', 160, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_visible_height', 164, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 168, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('may_contain_video', 172, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('may_throttle_if_undrawn_frames', 172, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_handling_interaction', 172, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_handling_animation', 172, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('send_frame_token_to_embedder', 172, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('top_controls_visible_height_set', 172, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_mobile_optimized', 172, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_shared_element_resources', 172, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_software', 173, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 184]]);
