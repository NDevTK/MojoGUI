// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/byte_size.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: ByteSize
mojo_base.mojom.ByteSizeSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.ByteSize',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ByteSizeDelta
mojo_base.mojom.ByteSizeDeltaSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.ByteSizeDelta',
      packedSize: 16,
      fields: [
        { name: 'delta', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
