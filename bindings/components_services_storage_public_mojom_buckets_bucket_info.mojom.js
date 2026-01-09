// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/buckets/bucket_info.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Struct: BucketInfo
storage.mojom.BucketInfoSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BucketInfo',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'storage_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'expiration', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'quota', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'persistent', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'durability', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.BucketDurabilitySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
