// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/run_location.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.RunLocationSpec = { $: mojo.internal.Enum() };

// Enum: RunLocation
extensions.mojom.RunLocation = {
  kUndefined: 0,
  kDocumentStart: 1,
  kDocumentEnd: 2,
  kDocumentIdle: 3,
  kRunDeferred: 4,
  kBrowserDriven: 5,
};
