// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/luid.mojom
// Module: gpu.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.LuidSpec = { $: {} };

// Struct: Luid
mojo.internal.Struct(
    gpu.mojom.LuidSpec, 'gpu.mojom.Luid', [
      mojo.internal.StructField('high', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('low', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
