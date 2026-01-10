// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/big_buffer.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.BigBufferSpec = { $: {} };
mojo_base.mojom.BigBufferSharedMemoryRegionSpec = { $: {} };

// Union: BigBuffer
mojo.internal.Union(
    mojo_base.mojom.BigBufferSpec, 'mojo_base.mojom.BigBuffer', {
      'bytes': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'shared_memory': {
        'ordinal': 1,
        'type': mojo_base.mojom.BigBufferSharedMemoryRegionSpec.$,
        'nullable': false,
      },
      'invalid_buffer': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Struct: BigBufferSharedMemoryRegion
mojo.internal.Struct(
    mojo_base.mojom.BigBufferSharedMemoryRegionSpec, 'mojo_base.mojom.BigBufferSharedMemoryRegion', [
      mojo.internal.StructField('buffer_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
