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

// Enum: QuotaStatusCode
blink.mojom.QuotaStatusCode = {
  kOk: 0,
  kErrorNotSupported: 1,
  kErrorInvalidModification: 2,
  kErrorInvalidAccess: 3,
  kErrorAbort: 4,
  kUnknown: 5,
};

// Struct: UsageBreakdown
blink.mojom.UsageBreakdownSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UsageBreakdown',
      packedSize: 56,
      fields: [
        { name: 'fileSystem', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'webSql', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'indexedDatabase', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'serviceWorkerCache', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'serviceWorker', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'backgroundFetch', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
