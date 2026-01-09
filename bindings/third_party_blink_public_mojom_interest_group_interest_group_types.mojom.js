// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/interest_group_types.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ExecutionMode
blink.mojom.ExecutionMode = {
  kGroupedByOriginMode: 0,
  kFrozenContext: 1,
};

// Enum: TrustedBiddingSignalsSlotSizeMode
blink.mojom.TrustedBiddingSignalsSlotSizeMode = {
  kSlotSize: 0,
  kAllSlotsRequestedSizes: 1,
};

// Enum: BuyerReportType
blink.mojom.BuyerReportType = {
  kInterestGroupCount: 0,
  kBidCount: 1,
  kTotalGenerateBidLatency: 2,
  kTotalSignalsFetchLatency: 3,
};

// Enum: RealTimeReportingType
blink.mojom.RealTimeReportingType = {
  kDefaultLocalReporting: 0,
};
