// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/overlay_priority_hint.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.OverlayPriorityHintSpec = { $: mojo.internal.Enum() };

// Enum: OverlayPriorityHint
gfx.mojom.OverlayPriorityHint = {
  kNone: 0,
  kRegular: 1,
  kLowLatencyCanvas: 2,
  kHardwareProtection: 3,
  kVideo: 4,
};
