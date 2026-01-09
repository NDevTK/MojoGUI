// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/ref_counted_memory.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: RefCountedMemory
mojo_base.mojom.RefCountedMemorySpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.RefCountedMemory',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
