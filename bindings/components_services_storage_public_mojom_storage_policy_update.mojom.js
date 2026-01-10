// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_policy_update.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var url = url || {};


// Struct: StoragePolicyUpdate
storage.mojom.mojom.StoragePolicyUpdateSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StoragePolicyUpdate',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'purge_on_shutdown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
