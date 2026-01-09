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
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
