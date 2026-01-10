// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/big_buffer.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Union: BigBuffer
mojo_base.mojom.mojom.BigBufferSpec = { $: mojo.internal.Union(
    'mojo_base.mojom.BigBuffer', {
      'bytes': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'shared_memory': {
        'ordinal': 1,
        'type': mojo_base.mojom.BigBufferSharedMemoryRegionSpec,
      }},
      'invalid_buffer': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
      }},
    })
};

// Struct: BigBufferSharedMemoryRegion
mojo_base.mojom.mojom.BigBufferSharedMemoryRegionSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.BigBufferSharedMemoryRegion',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
