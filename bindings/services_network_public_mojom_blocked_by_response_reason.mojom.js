// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/blocked_by_response_reason.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.BlockedByResponseReasonSpec = { $: mojo.internal.Enum() };

// Enum: BlockedByResponseReason
network.mojom.BlockedByResponseReason = {
  kCoepFrameResourceNeedsCoepHeader: 0,
  kCoopSandboxedIFrameCannotNavigateToCoopPage: 1,
  kCorpNotSameOrigin: 2,
  kCorpNotSameOriginAfterDefaultedToSameOriginByCoep: 3,
  kCorpNotSameOriginAfterDefaultedToSameOriginByDip: 4,
  kCorpNotSameOriginAfterDefaultedToSameOriginByCoepAndDip: 5,
  kCorpNotSameSite: 6,
  kSRIMessageSignatureMismatch: 7,
};
