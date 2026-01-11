// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/shared_memory.mojom
// Module: mojo_base.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.ReadOnlySharedMemoryRegionSpec = { $: {} };
mojo_base.mojom.WritableSharedMemoryRegionSpec = { $: {} };
mojo_base.mojom.UnsafeSharedMemoryRegionSpec = { $: {} };

// Struct: ReadOnlySharedMemoryRegion
mojo.internal.Struct(
    mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, 'mojo_base.mojom.ReadOnlySharedMemoryRegion', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WritableSharedMemoryRegion
mojo.internal.Struct(
    mojo_base.mojom.WritableSharedMemoryRegionSpec, 'mojo_base.mojom.WritableSharedMemoryRegion', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnsafeSharedMemoryRegion
mojo.internal.Struct(
    mojo_base.mojom.UnsafeSharedMemoryRegionSpec, 'mojo_base.mojom.UnsafeSharedMemoryRegion', [
      mojo.internal.StructField('buffer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
