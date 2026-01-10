// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_policy_update.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var url = url || {};

storage.mojom.StoragePolicyUpdateSpec = { $: {} };

// Struct: StoragePolicyUpdate
mojo.internal.Struct(
    storage.mojom.StoragePolicyUpdateSpec, 'storage.mojom.StoragePolicyUpdate', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('purge_on_shutdown', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
