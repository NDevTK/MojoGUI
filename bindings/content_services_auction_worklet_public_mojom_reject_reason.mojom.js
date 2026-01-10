// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/reject_reason.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};

auction_worklet.mojom.RejectReasonSpec = { $: mojo.internal.Enum() };

// Enum: RejectReason
auction_worklet.mojom.RejectReason = {
  kNotAvailable: 0,
  kInvalidBid: 1,
  kBidBelowAuctionFloor: 2,
  kPendingApprovalByExchange: 3,
  kDisapprovedByExchange: 4,
  kBlockedByPublisher: 5,
  kLanguageExclusions: 6,
  kCategoryExclusions: 7,
  kBelowKAnonThreshold: 8,
  kWrongGenerateBidCurrency: 9,
  kWrongScoreAdCurrency: 10,
  kMultiBidLimitExceeded: 11,
};
