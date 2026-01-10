// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/lifecycle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FrameVisibility
blink.mojom.mojom.FrameVisibility = {
  kRenderedOutOfViewport: 0,
  kRenderedInViewport: 1,
  kNotRendered: 2,
};
blink.mojom.mojom.FrameVisibilitySpec = { $: mojo.internal.Enum() };

// Enum: FrameLifecycleState
blink.mojom.mojom.FrameLifecycleState = {
  kRunning: 0,
  kPaused: 1,
  kFrozen: 2,
};
blink.mojom.mojom.FrameLifecycleStateSpec = { $: mojo.internal.Enum() };
