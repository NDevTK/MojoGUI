// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/bitmap_in_shared_memory.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};

viz.mojom.BitmapInSharedMemorySpec = { $: {} };

// Struct: BitmapInSharedMemory
mojo.internal.Struct(
    viz.mojom.BitmapInSharedMemorySpec, 'viz.mojom.BitmapInSharedMemory', [
      mojo.internal.StructField('image_info', 0, 0, skia.mojom.ImageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('row_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('pixels', 16, 0, mojo_base.mojom.WritableSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);
