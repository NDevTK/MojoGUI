// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/quota/quota_types.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BucketDurabilitySpec = { $: mojo.internal.Enum() };
blink.mojom.QuotaStatusCodeSpec = { $: mojo.internal.Enum() };
blink.mojom.UsageBreakdownSpec = { $: {} };

// Enum: BucketDurability
blink.mojom.BucketDurability = {
  kRelaxed: 0,
  kStrict: 1,
};

// Enum: QuotaStatusCode
blink.mojom.QuotaStatusCode = {
  kOk: 0,
  kErrorNotSupported: 9,
  kErrorInvalidModification: 13,
  kErrorInvalidAccess: 15,
  kErrorAbort: 20,
  kUnknown: -1,
};

// Struct: UsageBreakdown
mojo.internal.Struct(
    blink.mojom.UsageBreakdownSpec, 'blink.mojom.UsageBreakdown', [
      mojo.internal.StructField('fileSystem', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('webSql', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('indexedDatabase', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('serviceWorkerCache', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('serviceWorker', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('backgroundFetch', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 56]]);
