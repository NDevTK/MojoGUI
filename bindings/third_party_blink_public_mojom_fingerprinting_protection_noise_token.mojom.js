// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/fingerprinting_protection/noise_token.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.NoiseTokenSpec = { $: {} };

// Struct: NoiseToken
mojo.internal.Struct(
    blink.mojom.NoiseTokenSpec, 'blink.mojom.NoiseToken', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);
