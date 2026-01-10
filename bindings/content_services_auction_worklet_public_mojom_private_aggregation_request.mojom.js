// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/private_aggregation_request.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var blink = blink || {};
var blink = blink || {};

auction_worklet.mojom.BaseValueSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.ReservedNonErrorEventTypeSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.ReservedErrorEventTypeSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.ForEventSignalBucketSpec = { $: {} };
auction_worklet.mojom.ForEventSignalValueSpec = { $: {} };
auction_worklet.mojom.EventTypeSpec = { $: {} };
auction_worklet.mojom.AggregatableReportContributionSpec = { $: {} };
auction_worklet.mojom.BucketOffsetSpec = { $: {} };
auction_worklet.mojom.SignalBucketSpec = { $: {} };
auction_worklet.mojom.SignalValueSpec = { $: {} };
auction_worklet.mojom.AggregatableReportForEventContributionSpec = { $: {} };
auction_worklet.mojom.PrivateAggregationRequestSpec = { $: {} };
auction_worklet.mojom.FinalizedPrivateAggregationRequestSpec = { $: {} };

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

// Union: ForEventSignalBucket
mojo.internal.Union(
    auction_worklet.mojom.ForEventSignalBucketSpec, 'auction_worklet.mojom.ForEventSignalBucket', {
      'id_bucket': {
        'ordinal': 0,
        'type': mojo_base.mojom.Uint128Spec.$,
        'nullable': false,
      },
      'signal_bucket': {
        'ordinal': 1,
        'type': auction_worklet.mojom.SignalBucketSpec.$,
        'nullable': false,
      },
    });

// Union: ForEventSignalValue
mojo.internal.Union(
    auction_worklet.mojom.ForEventSignalValueSpec, 'auction_worklet.mojom.ForEventSignalValue', {
      'int_value': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'signal_value': {
        'ordinal': 1,
        'type': auction_worklet.mojom.SignalValueSpec.$,
        'nullable': false,
      },
    });

// Union: EventType
mojo.internal.Union(
    auction_worklet.mojom.EventTypeSpec, 'auction_worklet.mojom.EventType', {
      'reserved_non_error': {
        'ordinal': 0,
        'type': auction_worklet.mojom.ReservedNonErrorEventTypeSpec.$,
        'nullable': false,
      },
      'reserved_error': {
        'ordinal': 1,
        'type': auction_worklet.mojom.ReservedErrorEventTypeSpec.$,
        'nullable': false,
      },
      'non_reserved': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: AggregatableReportContribution
mojo.internal.Union(
    auction_worklet.mojom.AggregatableReportContributionSpec, 'auction_worklet.mojom.AggregatableReportContribution', {
      'histogram_contribution': {
        'ordinal': 0,
        'type': blink.mojom.AggregatableReportHistogramContributionSpec.$,
        'nullable': false,
      },
      'for_event_contribution': {
        'ordinal': 1,
        'type': auction_worklet.mojom.AggregatableReportForEventContributionSpec.$,
        'nullable': false,
      },
    });

// Struct: BucketOffset
mojo.internal.Struct(
    auction_worklet.mojom.BucketOffsetSpec, 'auction_worklet.mojom.BucketOffset', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_negative', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SignalBucket
mojo.internal.Struct(
    auction_worklet.mojom.SignalBucketSpec, 'auction_worklet.mojom.SignalBucket', [
      mojo.internal.StructField('base_value', 0, 0, auction_worklet.mojom.BaseValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale', 8, 0, mojo.internal.Double, 1.0, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, auction_worklet.mojom.BucketOffsetSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SignalValue
mojo.internal.Struct(
    auction_worklet.mojom.SignalValueSpec, 'auction_worklet.mojom.SignalValue', [
      mojo.internal.StructField('base_value', 0, 0, auction_worklet.mojom.BaseValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale', 8, 0, mojo.internal.Double, 1.0, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AggregatableReportForEventContribution
mojo.internal.Struct(
    auction_worklet.mojom.AggregatableReportForEventContributionSpec, 'auction_worklet.mojom.AggregatableReportForEventContribution', [
      mojo.internal.StructField('bucket', 0, 0, auction_worklet.mojom.ForEventSignalBucketSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, auction_worklet.mojom.ForEventSignalValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filtering_id_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'filtering_id_$value', originalFieldName: 'filtering_id' }),
      mojo.internal.StructField('filtering_id_$value', 24, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'filtering_id_$flag', originalFieldName: 'filtering_id' }),
      mojo.internal.StructField('event_type', 32, 0, auction_worklet.mojom.EventTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PrivateAggregationRequest
mojo.internal.Struct(
    auction_worklet.mojom.PrivateAggregationRequestSpec, 'auction_worklet.mojom.PrivateAggregationRequest', [
      mojo.internal.StructField('contribution', 0, 0, auction_worklet.mojom.AggregatableReportContributionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_mode_details', 8, 0, blink.mojom.DebugModeDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FinalizedPrivateAggregationRequest
mojo.internal.Struct(
    auction_worklet.mojom.FinalizedPrivateAggregationRequestSpec, 'auction_worklet.mojom.FinalizedPrivateAggregationRequest', [
      mojo.internal.StructField('contribution', 0, 0, blink.mojom.AggregatableReportHistogramContributionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_mode_details', 8, 0, blink.mojom.DebugModeDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_event', 16, 0, blink.mojom.PrivateAggregationErrorEventSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);
