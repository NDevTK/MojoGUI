// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/buckets/bucket_locator.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Struct: BucketLocator
storage.mojom.BucketLocatorSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BucketLocator',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketIdSpec, nullable: true, minVersion: 0 },
        { name: 'storage_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false, minVersion: 0 },
        { name: 'is_default', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
