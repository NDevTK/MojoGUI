// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/shared_memory.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: ReadOnlySharedMemoryRegion
mojo_base.mojom.ReadOnlySharedMemoryRegionSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.ReadOnlySharedMemoryRegion',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WritableSharedMemoryRegion
mojo_base.mojom.WritableSharedMemoryRegionSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.WritableSharedMemoryRegion',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UnsafeSharedMemoryRegion
mojo_base.mojom.UnsafeSharedMemoryRegionSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.UnsafeSharedMemoryRegion',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
