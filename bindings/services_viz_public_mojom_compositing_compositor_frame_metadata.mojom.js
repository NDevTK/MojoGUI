// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_metadata.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: CompositorFrameMetadata
viz.mojom.CompositorFrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameMetadata',
      packedSize: 176,
      fields: [
        { name: 'device_scale_factor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'root_scroll_offset', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'page_scale_factor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'scrollable_viewport_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false, minVersion: 0 },
        { name: 'visible_viewport_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'content_color_usage', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.ContentColorUsageSpec, nullable: false, minVersion: 0 },
        { name: 'may_contain_video', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'may_throttle_if_undrawn_frames', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_handling_interaction', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_handling_animation', packedOffset: 36, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'root_background_color', packedOffset: 40, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'latency_info', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(ui.mojom.LatencyInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'referenced_surfaces', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.SurfaceRangeSpec, false), nullable: false, minVersion: 0 },
        { name: 'deadline', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.FrameDeadlineSpec, nullable: false, minVersion: 0 },
        { name: 'activation_dependencies', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.SurfaceIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'begin_frame_ack', packedOffset: 80, packedBitOffset: 0, type: viz.mojom.BeginFrameAckSpec, nullable: false, minVersion: 0 },
        { name: 'frame_token', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'send_frame_token_to_embedder', packedOffset: 36, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'top_controls_visible_height_set', packedOffset: 36, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'top_controls_visible_height', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'min_page_scale_factor', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'display_transform_hint', packedOffset: 100, packedBitOffset: 0, type: gfx.mojom.OverlayTransformSpec, nullable: false, minVersion: 0 },
        { name: 'is_mobile_optimized', packedOffset: 36, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'delegated_ink_metadata', packedOffset: 104, packedBitOffset: 0, type: gfx.mojom.DelegatedInkMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'transition_directives', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.CompositorFrameTransitionDirectiveSpec, false), nullable: false, minVersion: 0 },
        { name: 'capture_bounds', packedOffset: 120, packedBitOffset: 0, type: viz.mojom.RegionCaptureBoundsSpec, nullable: false, minVersion: 0 },
        { name: 'has_shared_element_resources', packedOffset: 36, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'screenshot_destination', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, nullable: true, minVersion: 0 },
        { name: 'is_software', packedOffset: 37, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'offset_tag_definitions', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.OffsetTagDefinitionSpec, false), nullable: false, minVersion: 0 },
        { name: 'offset_tag_values', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.OffsetTagValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'frame_interval_inputs', packedOffset: 152, packedBitOffset: 0, type: viz.mojom.FrameIntervalInputsSpec, nullable: false, minVersion: 0 },
        { name: 'trees_in_viz_timing', packedOffset: 160, packedBitOffset: 0, type: viz.mojom.TreesInVizTimingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 176}]
    }
  }
};
