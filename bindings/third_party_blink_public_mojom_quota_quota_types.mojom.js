// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/quota/quota_types.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: BucketDurability
blink.mojom.BucketDurability = {
  kRelaxed: 0,
  kStrict: 1,
};
blink.mojom.BucketDurabilitySpec = { $: mojo.internal.Enum() };

// Enum: QuotaStatusCode
blink.mojom.QuotaStatusCode = {
  kOk: 0,
  kErrorNotSupported: 1,
  kErrorInvalidModification: 2,
  kErrorInvalidAccess: 3,
  kErrorAbort: 4,
  kUnknown: 5,
};
blink.mojom.QuotaStatusCodeSpec = { $: mojo.internal.Enum() };

// Struct: UsageBreakdown
blink.mojom.UsageBreakdownSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UsageBreakdown',
      packedSize: 56,
      fields: [
        { name: 'fileSystem', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'webSql', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'indexedDatabase', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'serviceWorkerCache', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'serviceWorker', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'backgroundFetch', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
