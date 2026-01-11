// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/buckets/bucket_id.mojom
// Module: storage.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};

storage.mojom.BucketIdSpec = { $: {} };

// Struct: BucketId
mojo.internal.Struct(
    storage.mojom.BucketIdSpec, 'storage.mojom.BucketId', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);
