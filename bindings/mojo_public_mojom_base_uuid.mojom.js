// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/uuid.mojom
// Module: mojo_base.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.UuidSpec = { $: {} };

// Struct: Uuid
mojo.internal.Struct(
    mojo_base.mojom.UuidSpec, 'mojo_base.mojom.Uuid', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);
