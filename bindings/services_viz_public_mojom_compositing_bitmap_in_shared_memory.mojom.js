// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/bitmap_in_shared_memory.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: BitmapInSharedMemory
viz.mojom.BitmapInSharedMemorySpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BitmapInSharedMemory',
      packedSize: 32,
      fields: [
        { name: 'image_info', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.ImageInfoSpec, nullable: false },
        { name: 'row_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'pixels', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.WritableSharedMemoryRegionSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
