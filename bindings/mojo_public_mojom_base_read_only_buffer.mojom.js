// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/read_only_buffer.mojom
// Module: mojo_base.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.ReadOnlyBufferSpec = { $: {} };

// Struct: ReadOnlyBuffer
mojo.internal.Struct(
    mojo_base.mojom.ReadOnlyBufferSpec, 'mojo_base.mojom.ReadOnlyBuffer', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
