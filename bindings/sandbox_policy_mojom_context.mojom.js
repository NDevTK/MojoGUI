// Auto-generated MojoJS binding
// Source: chromium_src/sandbox/policy/mojom/context.mojom
// Module: sandbox.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var sandbox = sandbox || {};
sandbox.mojom = sandbox.mojom || {};

sandbox.mojom.ContextSpec = { $: mojo.internal.Enum() };

// Enum: Context
sandbox.mojom.Context = {
  kBrowser: 0,
  kPrivilegedUtility: 1,
  kLowest: 2,
};
