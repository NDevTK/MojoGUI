// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/version.mojom
// Module: mojo_base.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.VersionSpec = { $: {} };

// Struct: Version
mojo.internal.Struct(
    mojo_base.mojom.VersionSpec, 'mojo_base.mojom.Version', [
      mojo.internal.StructField('components', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
