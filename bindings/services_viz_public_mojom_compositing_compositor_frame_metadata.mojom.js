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
      packedSize: 192,
      fields: [
        { name: 'root_scroll_offset', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'scrollable_viewport_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false },
        { name: 'visible_viewport_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'content_color_usage', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.ContentColorUsageSpec, nullable: false },
        { name: 'root_background_color', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false },
        { name: 'latency_info', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'referenced_surfaces', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'deadline', packedOffset: 56, packedBitOffset: 0, type: viz.mojom.FrameDeadlineSpec, nullable: false },
        { name: 'activation_dependencies', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'begin_frame_ack', packedOffset: 72, packedBitOffset: 0, type: viz.mojom.BeginFrameAckSpec, nullable: false },
        { name: 'display_transform_hint', packedOffset: 80, packedBitOffset: 0, type: gfx.mojom.OverlayTransformSpec, nullable: false },
        { name: 'delegated_ink_metadata', packedOffset: 88, packedBitOffset: 0, type: gfx.mojom.DelegatedInkMetadataSpec, nullable: true },
        { name: 'transition_directives', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'capture_bounds', packedOffset: 104, packedBitOffset: 0, type: viz.mojom.RegionCaptureBoundsSpec, nullable: false },
        { name: 'screenshot_destination', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec, nullable: true },
        { name: 'offset_tag_definitions', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'offset_tag_values', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'frame_interval_inputs', packedOffset: 136, packedBitOffset: 0, type: viz.mojom.FrameIntervalInputsSpec, nullable: false },
        { name: 'trees_in_viz_timing', packedOffset: 144, packedBitOffset: 0, type: viz.mojom.TreesInVizTimingSpec, nullable: false },
        { name: 'device_scale_factor', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'page_scale_factor', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'frame_token', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'top_controls_visible_height', packedOffset: 164, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'min_page_scale_factor', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'may_contain_video', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'may_throttle_if_undrawn_frames', packedOffset: 172, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_handling_interaction', packedOffset: 172, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_handling_animation', packedOffset: 172, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'send_frame_token_to_embedder', packedOffset: 172, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'top_controls_visible_height_set', packedOffset: 172, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'is_mobile_optimized', packedOffset: 172, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'has_shared_element_resources', packedOffset: 172, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'is_software', packedOffset: 172, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
