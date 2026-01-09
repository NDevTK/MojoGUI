// Auto-generated MojoJS binding
// Source: chromium_src/components/persistent_cache/mojom/persistent_cache.mojom
// Module: persistent_cache.mojom

'use strict';

// Module namespace
var persistent_cache = persistent_cache || {};
persistent_cache.mojom = persistent_cache.mojom || {};


// Struct: PendingReadOnlyBackend
persistent_cache.mojom.PendingReadOnlyBackendSpec = {
  $: {
    structSpec: {
      name: 'persistent_cache.mojom.PendingReadOnlyBackend',
      packedSize: 32,
      fields: [
        { name: 'db_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'journal_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shared_lock', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PendingReadWriteBackend
persistent_cache.mojom.PendingReadWriteBackendSpec = {
  $: {
    structSpec: {
      name: 'persistent_cache.mojom.PendingReadWriteBackend',
      packedSize: 40,
      fields: [
        { name: 'db_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'journal_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'wal_file', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'shared_lock', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
