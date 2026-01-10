// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/file.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: File
mojo_base.mojom.mojom.FileSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.File',
      packedSize: 24,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'async', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ReadOnlyFile
mojo_base.mojom.mojom.ReadOnlyFileSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.ReadOnlyFile',
      packedSize: 24,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'async', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
