// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_usage_info.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Struct: StorageUsageInfo
storage.mojom.StorageUsageInfoSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StorageUsageInfo',
      packedSize: 32,
      fields: [
        { name: 'storage_key', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false },
        { name: 'total_size_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'last_modified', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
