// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/buckets/bucket_locator.mojom
// Module: storage.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};

storage.mojom.BucketLocatorSpec = { $: {} };

// Struct: BucketLocator
mojo.internal.Struct(
    storage.mojom.BucketLocatorSpec, 'storage.mojom.BucketLocator', [
      mojo.internal.StructField('id', 0, 0, storage.mojom.BucketIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('storage_key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_default', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
