// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/string16.mojom
// Module: mojo_base.mojom

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.String16Spec = { $: {} };
mojo_base.mojom.BigString16Spec = { $: {} };

// Struct: String16
mojo.internal.Struct(
    mojo_base.mojom.String16Spec, 'mojo_base.mojom.String16', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BigString16
mojo.internal.Struct(
    mojo_base.mojom.BigString16Spec, 'mojo_base.mojom.BigString16', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);
