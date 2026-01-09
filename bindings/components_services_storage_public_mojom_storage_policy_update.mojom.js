// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_policy_update.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Struct: StoragePolicyUpdate
storage.mojom.StoragePolicyUpdateSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StoragePolicyUpdate',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'purge_on_shutdown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
