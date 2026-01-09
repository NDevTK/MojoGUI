// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/referrer_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ReferrerPolicy
network.mojom.ReferrerPolicy = {
  kAlways: 0,
  kNoReferrerWhenDowngrade: 1,
  kNever: 2,
  kOrigin: 3,
  kOriginWhenCrossOrigin: 4,
  kStrictOriginWhenCrossOrigin: 5,
  kSameOrigin: 6,
  kStrictOrigin: 7,
};

// Enum: URLRequestReferrerPolicy
network.mojom.URLRequestReferrerPolicy = {
  kClearReferrerOnTransitionFromSecureToInsecure: 0,
  kReduceReferrerGranularityOnTransitionCrossOrigin: 1,
  kOriginOnlyOnTransitionCrossOrigin: 2,
  kNeverClearReferrer: 3,
  kOrigin: 4,
  kClearReferrerOnTransitionCrossOrigin: 5,
  kOriginClearOnTransitionFromSecureToInsecure: 6,
  kNoReferrer: 7,
};
