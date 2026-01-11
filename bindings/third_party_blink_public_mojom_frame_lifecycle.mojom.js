// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/lifecycle.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FrameVisibilitySpec = { $: mojo.internal.Enum() };
blink.mojom.FrameLifecycleStateSpec = { $: mojo.internal.Enum() };

// Enum: FrameVisibility
blink.mojom.FrameVisibility = {
  kRenderedOutOfViewport: 0,
  kRenderedInViewport: 1,
  kNotRendered: 2,
};

// Enum: FrameLifecycleState
blink.mojom.FrameLifecycleState = {
  kRunning: 0,
  kPaused: 1,
  kFrozen: 2,
};
