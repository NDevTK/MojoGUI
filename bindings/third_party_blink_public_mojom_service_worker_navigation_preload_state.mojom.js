// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/navigation_preload_state.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.NavigationPreloadStateSpec = { $: {} };

// Struct: NavigationPreloadState
mojo.internal.Struct(
    blink.mojom.NavigationPreloadStateSpec, 'blink.mojom.NavigationPreloadState', [
      mojo.internal.StructField('header', 0, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
