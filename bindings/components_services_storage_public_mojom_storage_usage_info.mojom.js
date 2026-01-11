// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/storage_usage_info.mojom
// Module: storage.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

storage.mojom.StorageUsageInfoSpec = { $: {} };

// Struct: StorageUsageInfo
mojo.internal.Struct(
    storage.mojom.StorageUsageInfoSpec, 'storage.mojom.StorageUsageInfo', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_size_bytes', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('last_modified', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
