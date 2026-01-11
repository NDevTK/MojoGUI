// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks_types.mojom
// Module: contextual_tasks.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var contextual_tasks = contextual_tasks || {};
contextual_tasks.mojom = contextual_tasks.mojom || {};

contextual_tasks.mojom.TabSelectionModeSpec = { $: mojo.internal.Enum() };

// Enum: TabSelectionMode
contextual_tasks.mojom.TabSelectionMode = {
  kEmbeddingsMatch: 0,
  kMultiSignalScoring: 1,
};
