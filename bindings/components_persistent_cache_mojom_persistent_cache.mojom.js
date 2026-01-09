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
      packedSize: 16,
      fields: [
        { name: 'shared_lock', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'shared_lock', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
