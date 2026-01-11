// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/jserror.mojom
// Module: mojo_base.mojom

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.JsErrorSpec = { $: {} };

// Struct: JsError
mojo.internal.Struct(
    mojo_base.mojom.JsErrorSpec, 'mojo_base.mojom.JsError', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('cause', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);
