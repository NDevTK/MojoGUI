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
      packedSize: 16,
      fields: [
        { name: 'purge_on_shutdown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
