// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/context_lost_reason.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.ContextLostReasonSpec = { $: mojo.internal.Enum() };

// Enum: ContextLostReason
viz.mojom.ContextLostReason = {
  GUILTY: 0,
  INNOCENT: 1,
  UNKNOWN: 2,
  OUT_OF_MEMORY: 3,
  MAKE_CURRENT_FAILED: 4,
  GPU_CHANNEL_LOST: 5,
  INVALID_GPU_MESSAGE: 6,
};
