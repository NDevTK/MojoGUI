// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/render_surface_reason.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Enum: RenderSurfaceReason
cc.mojom.mojom.RenderSurfaceReason = {
  kNone: 0,
  kRoot: 1,
  k3dTransformFlattening: 2,
  kBackdropScope: 3,
  kBlendMode: 4,
  kBlendModeDstIn: 5,
  kOpacity: 6,
  kOpacityAnimation: 7,
  kFilter: 8,
  kFilterAnimation: 9,
  kBackdropFilter: 10,
  kBackdropFilterAnimation: 11,
  kRoundedCorner: 12,
  kClipPath: 13,
  kClipAxisAlignment: 14,
  kMask: 15,
  kTrilinearFiltering: 16,
  kCache: 17,
  kCopyRequest: 18,
  kMirrored: 19,
  kSubtreeIsBeingCaptured: 20,
  kViewTransitionParticipant: 21,
  kGradientMask: 22,
  k2DScaleTransformWithCompositedDescendants: 23,
  kTest: 24,
};
cc.mojom.mojom.RenderSurfaceReasonSpec = { $: mojo.internal.Enum() };
