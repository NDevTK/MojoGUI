// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/ref_counted_memory.mojom
// Module: mojo_base.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.RefCountedMemorySpec = { $: {} };

// Struct: RefCountedMemory
mojo.internal.Struct(
    mojo_base.mojom.RefCountedMemorySpec, 'mojo_base.mojom.RefCountedMemory', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);
