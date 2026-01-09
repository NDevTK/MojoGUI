// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/viewport_intersection_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FrameOcclusionState
blink.mojom.FrameOcclusionState = {
  kUnknown: 0,
  kPossiblyOccluded: 1,
  kGuaranteedNotOccluded: 2,
};

// Struct: ViewportIntersectionState
blink.mojom.ViewportIntersectionStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewportIntersectionState',
      packedSize: 64,
      fields: [
        { name: 'viewport_intersection', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'main_frame_intersection', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'compositor_visible_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'occlusion_state', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.FrameOcclusionStateSpec, nullable: false },
        { name: 'outermost_main_frame_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'outermost_main_frame_scroll_position', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'main_frame_transform', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
