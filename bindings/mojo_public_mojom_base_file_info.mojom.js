// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/file_info.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.FileInfoSpec = { $: {} };

// Struct: FileInfo
mojo.internal.Struct(
    mojo_base.mojom.FileInfoSpec, 'mojo_base.mojom.FileInfo', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('is_directory', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_symbolic_link', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('last_modified', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_accessed', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);
