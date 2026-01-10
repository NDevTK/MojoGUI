// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/byte_size.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.ByteSizeSpec = { $: {} };
mojo_base.mojom.ByteSizeDeltaSpec = { $: {} };

// Struct: ByteSize
mojo.internal.Struct(
    mojo_base.mojom.ByteSizeSpec, 'mojo_base.mojom.ByteSize', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ByteSizeDelta
mojo.internal.Struct(
    mojo_base.mojom.ByteSizeDeltaSpec, 'mojo_base.mojom.ByteSizeDelta', [
      mojo.internal.StructField('delta', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);
