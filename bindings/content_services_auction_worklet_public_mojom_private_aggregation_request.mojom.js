// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/private_aggregation_request.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Enum: BaseValue
auction_worklet.mojom.BaseValue = {
  kWinningBid: 0,
  kHighestScoringOtherBid: 1,
  kScriptRunTime: 2,
  kSignalsFetchTime: 3,
  kBidRejectReason: 4,
  kParticipatingInterestGroupCount: 5,
  kAverageCodeFetchTime: 6,
  kPercentScriptsTimeout: 7,
  kPercentInterestGroupsCumulativeTimeout: 8,
  kCumulativeBuyerTime: 9,
  kRegularInterestGroupsUsed: 10,
  kPercentRegularInterestGroupQuotaUsed: 11,
  kNegativeInterestGroupsUsed: 12,
  kPercentNegativeInterestGroupQuotaUsed: 13,
  kInterestGroupStorageUsed: 14,
  kPercentInterestGroupStorageQuotaUsed: 15,
};

// Enum: ReservedNonErrorEventType
auction_worklet.mojom.ReservedNonErrorEventType = {
  kReservedAlways: 0,
  kReservedWin: 1,
  kReservedLoss: 2,
  kReservedOnce: 3,
};

// Enum: ReservedErrorEventType
auction_worklet.mojom.ReservedErrorEventType = {
  kReportSuccess: 0,
  kTooManyContributions: 1,
  kEmptyReportDropped: 2,
  kPendingReportLimitReached: 3,
  kInsufficientBudget: 4,
  kUncaughtError: 5,
};

// Struct: BucketOffset
auction_worklet.mojom.BucketOffsetSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BucketOffset',
      packedSize: 16,
      fields: [
        { name: 'is_negative', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SignalBucket
auction_worklet.mojom.SignalBucketSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SignalBucket',
      packedSize: 16,
      fields: [
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SignalValue
auction_worklet.mojom.SignalValueSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SignalValue',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AggregatableReportForEventContribution
auction_worklet.mojom.AggregatableReportForEventContributionSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AggregatableReportForEventContribution',
      packedSize: 16,
      fields: [
        { name: 'event_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrivateAggregationRequest
auction_worklet.mojom.PrivateAggregationRequestSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.PrivateAggregationRequest',
      packedSize: 16,
      fields: [
        { name: 'debug_mode_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FinalizedPrivateAggregationRequest
auction_worklet.mojom.FinalizedPrivateAggregationRequestSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.FinalizedPrivateAggregationRequest',
      packedSize: 16,
      fields: [
        { name: 'error_event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
