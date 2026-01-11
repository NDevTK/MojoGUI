// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/mojom/window_show_state.mojom
// Module: ui.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.WindowShowStateSpec = { $: mojo.internal.Enum() };

// Enum: WindowShowState
ui.mojom.WindowShowState = {
  kDefault: 0,
  kNormal: 1,
  kMinimized: 2,
  kMaximized: 3,
  kInactive: 4,
  kFullscreen: 5,
  MinVersion: 5,
};
