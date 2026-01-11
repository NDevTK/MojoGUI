// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/file.mojom
// Module: mojo_base.mojom

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.FileSpec = { $: {} };
mojo_base.mojom.ReadOnlyFileSpec = { $: {} };

// Struct: File
mojo.internal.Struct(
    mojo_base.mojom.FileSpec, 'mojo_base.mojom.File', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('async', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadOnlyFile
mojo.internal.Struct(
    mojo_base.mojom.ReadOnlyFileSpec, 'mojo_base.mojom.ReadOnlyFile', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('async', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
