// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/overlay_strategy.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.OverlayStrategySpec = { $: mojo.internal.Enum() };

// Enum: OverlayStrategy
viz.mojom.OverlayStrategy = {
  kFullscreen: 0,
  kSingleOnTop: 1,
  kUnderlay: 2,
  kUnderlayCast: 3,
};
