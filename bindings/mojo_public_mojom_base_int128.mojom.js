// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/int128.mojom
// Module: mojo_base.mojom

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.Int128Spec = { $: {} };
mojo_base.mojom.Uint128Spec = { $: {} };

// Struct: Int128
mojo.internal.Struct(
    mojo_base.mojom.Int128Spec, 'mojo_base.mojom.Int128', [
      mojo.internal.StructField('high', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('low', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Uint128
mojo.internal.Struct(
    mojo_base.mojom.Uint128Spec, 'mojo_base.mojom.Uint128', [
      mojo.internal.StructField('high', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('low', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);
