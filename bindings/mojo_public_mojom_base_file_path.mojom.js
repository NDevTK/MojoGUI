// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/file_path.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.FilePathSpec = { $: {} };
mojo_base.mojom.RelativeFilePathSpec = { $: {} };

// Struct: FilePath
mojo.internal.Struct(
    mojo_base.mojom.FilePathSpec, 'mojo_base.mojom.FilePath', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RelativeFilePath
mojo.internal.Struct(
    mojo_base.mojom.RelativeFilePathSpec, 'mojo_base.mojom.RelativeFilePath', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
