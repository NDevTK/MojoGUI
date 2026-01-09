// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/big_buffer.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: BigBufferSharedMemoryRegion
mojo_base.mojom.BigBufferSharedMemoryRegionSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.BigBufferSharedMemoryRegion',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
