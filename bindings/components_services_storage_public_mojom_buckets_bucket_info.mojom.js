// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/buckets/bucket_info.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};
var blink = blink || {};

storage.mojom.BucketInfoSpec = { $: {} };

// Struct: BucketInfo
mojo.internal.Struct(
    storage.mojom.BucketInfoSpec, 'storage.mojom.BucketInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('storage_key', 8, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiration', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('durability', 40, 0, blink.mojom.BucketDurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('persistent', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);
