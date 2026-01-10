// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/unguessable_token.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.UnguessableTokenSpec = { $: {} };

// Struct: UnguessableToken
mojo.internal.Struct(
    mojo_base.mojom.UnguessableTokenSpec, 'mojo_base.mojom.UnguessableToken', [
      mojo.internal.StructField('high', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('low', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);
