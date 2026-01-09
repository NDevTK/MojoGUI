// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/file_path.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: FilePath
mojo_base.mojom.FilePathSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.FilePath',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RelativeFilePath
mojo_base.mojom.RelativeFilePathSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.RelativeFilePath',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
