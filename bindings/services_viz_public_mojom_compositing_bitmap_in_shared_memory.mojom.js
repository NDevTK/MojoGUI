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
        { name: 'image_info', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.ImageInfoSpec, nullable: false, minVersion: 0 },
        { name: 'row_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'pixels', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.WritableSharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
