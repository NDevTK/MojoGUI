// Auto-generated MojoJS binding
// Source: chromium_src/components/persistent_cache/mojom/persistent_cache.mojom
// Module: persistent_cache.mojom

'use strict';

// Module namespace
var persistent_cache = persistent_cache || {};
persistent_cache.mojom = persistent_cache.mojom || {};
var mojo_base = mojo_base || {};

persistent_cache.mojom.PendingReadOnlyBackendSpec = { $: {} };
persistent_cache.mojom.PendingReadWriteBackendSpec = { $: {} };

// Struct: PendingReadOnlyBackend
mojo.internal.Struct(
    persistent_cache.mojom.PendingReadOnlyBackendSpec, 'persistent_cache.mojom.PendingReadOnlyBackend', [
      mojo.internal.StructField('db_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('journal_file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_lock', 16, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PendingReadWriteBackend
mojo.internal.Struct(
    persistent_cache.mojom.PendingReadWriteBackendSpec, 'persistent_cache.mojom.PendingReadWriteBackend', [
      mojo.internal.StructField('db_file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('journal_file', 8, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wal_file', 16, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shared_lock', 24, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);
