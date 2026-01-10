// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/viewport_intersection_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.FrameOcclusionStateSpec = { $: mojo.internal.Enum() };
blink.mojom.ViewportIntersectionStateSpec = { $: {} };

// Enum: FrameOcclusionState
blink.mojom.FrameOcclusionState = {
  kUnknown: 0,
  kPossiblyOccluded: 1,
  kGuaranteedNotOccluded: 2,
};

// Struct: ViewportIntersectionState
mojo.internal.Struct(
    blink.mojom.ViewportIntersectionStateSpec, 'blink.mojom.ViewportIntersectionState', [
      mojo.internal.StructField('viewport_intersection', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('main_frame_intersection', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('compositor_visible_rect', 16, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('occlusion_state', 24, 0, blink.mojom.FrameOcclusionStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('outermost_main_frame_size', 32, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('outermost_main_frame_scroll_position', 40, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('main_frame_transform', 48, 0, gfx.mojom.TransformSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);
