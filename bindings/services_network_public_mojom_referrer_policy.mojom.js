// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/referrer_policy.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ReferrerPolicySpec = { $: mojo.internal.Enum() };
network.mojom.URLRequestReferrerPolicySpec = { $: mojo.internal.Enum() };

// Enum: ReferrerPolicy
network.mojom.ReferrerPolicy = {
  kAlways: 0,
  kDefault: 1,
  kNoReferrerWhenDowngrade: 2,
  kNever: 3,
  kOrigin: 4,
  kOriginWhenCrossOrigin: 5,
  kStrictOriginWhenCrossOrigin: 6,
  kSameOrigin: 7,
  kStrictOrigin: 8,
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
