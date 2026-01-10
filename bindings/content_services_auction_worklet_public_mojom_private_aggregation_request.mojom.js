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
auction_worklet.mojom.BaseValueSpec = { $: mojo.internal.Enum() };

// Enum: ReservedNonErrorEventType
auction_worklet.mojom.ReservedNonErrorEventType = {
  kReservedAlways: 0,
  kReservedWin: 1,
  kReservedLoss: 2,
  kReservedOnce: 3,
};
auction_worklet.mojom.ReservedNonErrorEventTypeSpec = { $: mojo.internal.Enum() };

// Enum: ReservedErrorEventType
auction_worklet.mojom.ReservedErrorEventType = {
  kReportSuccess: 0,
  kTooManyContributions: 1,
  kEmptyReportDropped: 2,
  kPendingReportLimitReached: 3,
  kInsufficientBudget: 4,
  kUncaughtError: 5,
};
auction_worklet.mojom.ReservedErrorEventTypeSpec = { $: mojo.internal.Enum() };

// Union: ForEventSignalBucket
auction_worklet.mojom.ForEventSignalBucketSpec = { $: mojo.internal.Union(
    'auction_worklet.mojom.ForEventSignalBucket', {
      'id_bucket': {
        'ordinal': 0,
        'type': mojo_base.mojom.Uint128Spec,
      }},
      'signal_bucket': {
        'ordinal': 1,
        'type': auction_worklet.mojom.SignalBucketSpec,
      }},
    })
};

// Union: ForEventSignalValue
auction_worklet.mojom.ForEventSignalValueSpec = { $: mojo.internal.Union(
    'auction_worklet.mojom.ForEventSignalValue', {
      'int_value': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
      }},
      'signal_value': {
        'ordinal': 1,
        'type': auction_worklet.mojom.SignalValueSpec,
      }},
    })
};

// Union: EventType
auction_worklet.mojom.EventTypeSpec = { $: mojo.internal.Union(
    'auction_worklet.mojom.EventType', {
      'reserved_non_error': {
        'ordinal': 0,
        'type': auction_worklet.mojom.ReservedNonErrorEventTypeSpec,
      }},
      'reserved_error': {
        'ordinal': 1,
        'type': auction_worklet.mojom.ReservedErrorEventTypeSpec,
      }},
      'non_reserved': {
        'ordinal': 2,
        'type': mojo.internal.String,
      }},
    })
};

// Union: AggregatableReportContribution
auction_worklet.mojom.AggregatableReportContributionSpec = { $: mojo.internal.Union(
    'auction_worklet.mojom.AggregatableReportContribution', {
      'histogram_contribution': {
        'ordinal': 0,
        'type': blink.mojom.AggregatableReportHistogramContributionSpec,
      }},
      'for_event_contribution': {
        'ordinal': 1,
        'type': auction_worklet.mojom.AggregatableReportForEventContributionSpec,
      }},
    })
};

// Struct: BucketOffset
auction_worklet.mojom.BucketOffsetSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BucketOffset',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false, minVersion: 0 },
        { name: 'is_negative', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SignalBucket
auction_worklet.mojom.SignalBucketSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SignalBucket',
      packedSize: 32,
      fields: [
        { name: 'base_value', packedOffset: 0, packedBitOffset: 0, type: auction_worklet.mojom.BaseValueSpec, nullable: false, minVersion: 0 },
        { name: 'scale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 16, packedBitOffset: 0, type: auction_worklet.mojom.BucketOffsetSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SignalValue
auction_worklet.mojom.SignalValueSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SignalValue',
      packedSize: 24,
      fields: [
        { name: 'base_value', packedOffset: 0, packedBitOffset: 0, type: auction_worklet.mojom.BaseValueSpec, nullable: false, minVersion: 0 },
        { name: 'scale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AggregatableReportForEventContribution
auction_worklet.mojom.AggregatableReportForEventContributionSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AggregatableReportForEventContribution',
      packedSize: 72,
      fields: [
        { name: 'bucket', packedOffset: 0, packedBitOffset: 0, type: auction_worklet.mojom.ForEventSignalBucketSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: auction_worklet.mojom.ForEventSignalValueSpec, nullable: false, minVersion: 0 },
        { name: 'filtering_id_$flag', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'filtering_id_$value', originalFieldName: 'filtering_id' } },
        { name: 'filtering_id_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'filtering_id_$flag', originalFieldName: 'filtering_id' } },
        { name: 'event_type', packedOffset: 48, packedBitOffset: 0, type: auction_worklet.mojom.EventTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: PrivateAggregationRequest
auction_worklet.mojom.PrivateAggregationRequestSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.PrivateAggregationRequest',
      packedSize: 32,
      fields: [
        { name: 'contribution', packedOffset: 0, packedBitOffset: 0, type: auction_worklet.mojom.AggregatableReportContributionSpec, nullable: false, minVersion: 0 },
        { name: 'debug_mode_details', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.DebugModeDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: FinalizedPrivateAggregationRequest
auction_worklet.mojom.FinalizedPrivateAggregationRequestSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.FinalizedPrivateAggregationRequest',
      packedSize: 32,
      fields: [
        { name: 'contribution', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AggregatableReportHistogramContributionSpec, nullable: false, minVersion: 0 },
        { name: 'debug_mode_details', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.DebugModeDetailsSpec, nullable: false, minVersion: 0 },
        { name: 'error_event', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PrivateAggregationErrorEventSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
