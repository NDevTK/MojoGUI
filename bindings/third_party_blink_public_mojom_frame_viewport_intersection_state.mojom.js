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
      packedSize: 16,
      fields: [
        { name: 'main_frame_transform', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
