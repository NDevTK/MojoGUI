// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/interest_group_types.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};
var url = url || {};

blink.mojom.ExecutionModeSpec = { $: mojo.internal.Enum() };
blink.mojom.TrustedBiddingSignalsSlotSizeModeSpec = { $: mojo.internal.Enum() };
blink.mojom.BuyerReportTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.RealTimeReportingTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AuctionAdConfigMaybePromiseJsonSpec = { $: {} };
blink.mojom.AuctionAdConfigMaybePromisePerBuyerSignalsSpec = { $: {} };
blink.mojom.AuctionAdConfigMaybePromiseBuyerTimeoutsSpec = { $: {} };
blink.mojom.AuctionAdConfigMaybePromiseBuyerCurrenciesSpec = { $: {} };
blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec = { $: {} };
blink.mojom.AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacementsSpec = { $: {} };
blink.mojom.AdAuctionRequestOrErrorSpec = { $: {} };
blink.mojom.InterestGroupAdSpec = { $: {} };
blink.mojom.SellerCapabilitiesSpec = { $: {} };
blink.mojom.AuctionServerRequestFlagsSpec = { $: {} };
blink.mojom.AdKeywordReplacementSpec = { $: {} };
blink.mojom.InterestGroupSpec = { $: {} };
blink.mojom.PreviousWinSpec = { $: {} };
blink.mojom.ViewOrClickCountsSpec = { $: {} };
blink.mojom.ViewAndClickCountsSpec = { $: {} };
blink.mojom.BiddingBrowserSignalsSpec = { $: {} };
blink.mojom.StorageInterestGroupSpec = { $: {} };
blink.mojom.DirectFromSellerSignalsSubresourceSpec = { $: {} };
blink.mojom.DirectFromSellerSignalsSpec = { $: {} };
blink.mojom.AuctionAdConfigBuyerTimeoutsSpec = { $: {} };
blink.mojom.AdCurrencySpec = { $: {} };
blink.mojom.AuctionAdConfigBuyerCurrenciesSpec = { $: {} };
blink.mojom.AuctionAdServerResponseConfigSpec = { $: {} };
blink.mojom.AuctionReportBuyerDebugModeConfigSpec = { $: {} };
blink.mojom.AuctionReportBuyersConfigSpec = { $: {} };
blink.mojom.AuctionAdConfigNonSharedParamsSpec = { $: {} };
blink.mojom.AuctionAdConfigSpec = { $: {} };
blink.mojom.AuctionDataBuyerConfigSpec = { $: {} };
blink.mojom.AuctionDataConfigSpec = { $: {} };
blink.mojom.AdAuctionPerSellerRequestSpec = { $: {} };

blink.mojom.kMaxInterestGroupSize = 1048576;

blink.mojom.kMaxAllowedReportingOrigins = 10;

// Enum: ExecutionMode
blink.mojom.ExecutionMode = {
  kCompatibilityMode: 0,
  kGroupedByOriginMode: 1,
  kFrozenContext: 2,
};

// Enum: TrustedBiddingSignalsSlotSizeMode
blink.mojom.TrustedBiddingSignalsSlotSizeMode = {
  kNone: 0,
  kSlotSize: 1,
  kAllSlotsRequestedSizes: 2,
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

// Union: AuctionAdConfigMaybePromiseJson
mojo.internal.Union(
    blink.mojom.AuctionAdConfigMaybePromiseJsonSpec, 'blink.mojom.AuctionAdConfigMaybePromiseJson', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'value': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      },
    });

// Union: AuctionAdConfigMaybePromisePerBuyerSignals
mojo.internal.Union(
    blink.mojom.AuctionAdConfigMaybePromisePerBuyerSignalsSpec, 'blink.mojom.AuctionAdConfigMaybePromisePerBuyerSignals', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'value': {
        'ordinal': 1,
        'type': mojo.internal.Map(url.mojom.OriginSpec, mojo.internal.String, false),
        'nullable': true,
      },
    });

// Union: AuctionAdConfigMaybePromiseBuyerTimeouts
mojo.internal.Union(
    blink.mojom.AuctionAdConfigMaybePromiseBuyerTimeoutsSpec, 'blink.mojom.AuctionAdConfigMaybePromiseBuyerTimeouts', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'value': {
        'ordinal': 1,
        'type': blink.mojom.AuctionAdConfigBuyerTimeoutsSpec,
        'nullable': false,
      },
    });

// Union: AuctionAdConfigMaybePromiseBuyerCurrencies
mojo.internal.Union(
    blink.mojom.AuctionAdConfigMaybePromiseBuyerCurrenciesSpec, 'blink.mojom.AuctionAdConfigMaybePromiseBuyerCurrencies', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'value': {
        'ordinal': 1,
        'type': blink.mojom.AuctionAdConfigBuyerCurrenciesSpec,
        'nullable': false,
      },
    });

// Union: AuctionAdConfigMaybePromiseDirectFromSellerSignals
mojo.internal.Union(
    blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec, 'blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignals', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'value': {
        'ordinal': 1,
        'type': blink.mojom.DirectFromSellerSignalsSpec,
        'nullable': true,
      },
    });

// Union: AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacements
mojo.internal.Union(
    blink.mojom.AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacementsSpec, 'blink.mojom.AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacements', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'value': {
        'ordinal': 1,
        'type': mojo.internal.Array(blink.mojom.AdKeywordReplacementSpec, false),
        'nullable': false,
      },
    });

// Union: AdAuctionRequestOrError
mojo.internal.Union(
    blink.mojom.AdAuctionRequestOrErrorSpec, 'blink.mojom.AdAuctionRequestOrError', {
      'request': {
        'ordinal': 0,
        'type': mojo_base.mojom.BigBufferSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: InterestGroupAd
mojo.internal.Struct(
    blink.mojom.InterestGroupAdSpec, 'blink.mojom.InterestGroupAd', [
      mojo.internal.StructField('render_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size_group', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('buyer_reporting_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('buyer_and_seller_reporting_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('selectable_buyer_and_seller_reporting_ids', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('metadata', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ad_render_id', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allowed_reporting_origins', 56, 0, mojo.internal.Array(url.mojom.OriginSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('creative_scanning_metadata', 64, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 80]]);

// Struct: SellerCapabilities
mojo.internal.Struct(
    blink.mojom.SellerCapabilitiesSpec, 'blink.mojom.SellerCapabilities', [
      mojo.internal.StructField('allows_interest_group_counts', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allows_latency_stats', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AuctionServerRequestFlags
mojo.internal.Struct(
    blink.mojom.AuctionServerRequestFlagsSpec, 'blink.mojom.AuctionServerRequestFlags', [
      mojo.internal.StructField('omit_ads', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_full_ads', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('omit_user_bidding_signals', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AdKeywordReplacement
mojo.internal.Struct(
    blink.mojom.AdKeywordReplacementSpec, 'blink.mojom.AdKeywordReplacement', [
      mojo.internal.StructField('match', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('replacement', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InterestGroup
mojo.internal.Struct(
    blink.mojom.InterestGroupSpec, 'blink.mojom.InterestGroup', [
      mojo.internal.StructField('kCompatibilityMode', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PreviousWin
mojo.internal.Struct(
    blink.mojom.PreviousWinSpec, 'blink.mojom.PreviousWin', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('ad_json', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ViewOrClickCounts
mojo.internal.Struct(
    blink.mojom.ViewOrClickCountsSpec, 'blink.mojom.ViewOrClickCounts', [
      mojo.internal.StructField('past_hour', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('past_day', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('past_week', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('past_30_days', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('past_90_days', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ViewAndClickCounts
mojo.internal.Struct(
    blink.mojom.ViewAndClickCountsSpec, 'blink.mojom.ViewAndClickCounts', [
      mojo.internal.StructField('view_counts', 0, 0, blink.mojom.ViewOrClickCountsSpec, null, false, 0, undefined),
      mojo.internal.StructField('click_counts', 8, 0, blink.mojom.ViewOrClickCountsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BiddingBrowserSignals
mojo.internal.Struct(
    blink.mojom.BiddingBrowserSignalsSpec, 'blink.mojom.BiddingBrowserSignals', [
      mojo.internal.StructField('join_count', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bid_count', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('prev_wins', 0, 0, mojo.internal.Array(blink.mojom.PreviousWinSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('for_debugging_only_in_cooldown_or_lockout', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('view_and_click_counts', 8, 0, blink.mojom.ViewAndClickCountsSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: StorageInterestGroup
mojo.internal.Struct(
    blink.mojom.StorageInterestGroupSpec, 'blink.mojom.StorageInterestGroup', [
      mojo.internal.StructField('interest_group', 0, 0, blink.mojom.InterestGroupSpec, null, false, 0, undefined),
      mojo.internal.StructField('bidding_browser_signals', 8, 0, blink.mojom.BiddingBrowserSignalsSpec, null, false, 0, undefined),
      mojo.internal.StructField('joining_origin', 16, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('join_time', 24, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_updated', 32, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('next_update_after', 40, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('estimated_size', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: DirectFromSellerSignalsSubresource
mojo.internal.Struct(
    blink.mojom.DirectFromSellerSignalsSubresourceSpec, 'blink.mojom.DirectFromSellerSignalsSubresource', [
      mojo.internal.StructField('bundle_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DirectFromSellerSignals
mojo.internal.Struct(
    blink.mojom.DirectFromSellerSignalsSpec, 'blink.mojom.DirectFromSellerSignals', [
      mojo.internal.StructField('prefix', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('per_buyer_signals', 8, 0, mojo.internal.Map(url.mojom.OriginSpec, blink.mojom.DirectFromSellerSignalsSubresourceSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('seller_signals', 16, 0, blink.mojom.DirectFromSellerSignalsSubresourceSpec, null, true, 0, undefined),
      mojo.internal.StructField('auction_signals', 24, 0, blink.mojom.DirectFromSellerSignalsSubresourceSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AuctionAdConfigBuyerTimeouts
mojo.internal.Struct(
    blink.mojom.AuctionAdConfigBuyerTimeoutsSpec, 'blink.mojom.AuctionAdConfigBuyerTimeouts', [
      mojo.internal.StructField('all_buyers_timeout', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('per_buyer_timeouts', 8, 0, mojo.internal.Map(url.mojom.OriginSpec, mojo_base.mojom.TimeDeltaSpec, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdCurrency
mojo.internal.Struct(
    blink.mojom.AdCurrencySpec, 'blink.mojom.AdCurrency', [
      mojo.internal.StructField('currency_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AuctionAdConfigBuyerCurrencies
mojo.internal.Struct(
    blink.mojom.AuctionAdConfigBuyerCurrenciesSpec, 'blink.mojom.AuctionAdConfigBuyerCurrencies', [
      mojo.internal.StructField('all_buyers_currency', 0, 0, blink.mojom.AdCurrencySpec, null, true, 0, undefined),
      mojo.internal.StructField('per_buyer_currencies', 8, 0, mojo.internal.Map(url.mojom.OriginSpec, blink.mojom.AdCurrencySpec, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AuctionAdServerResponseConfig
mojo.internal.Struct(
    blink.mojom.AuctionAdServerResponseConfigSpec, 'blink.mojom.AuctionAdServerResponseConfig', [
      mojo.internal.StructField('request_id', 0, 0, mojo_base.mojom.UuidSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AuctionReportBuyerDebugModeConfig
mojo.internal.Struct(
    blink.mojom.AuctionReportBuyerDebugModeConfigSpec, 'blink.mojom.AuctionReportBuyerDebugModeConfig', [
      mojo.internal.StructField('is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('debug_key_$flag', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' }),
      mojo.internal.StructField('debug_key_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' }),
    ],
    [[0, 24]]);

// Struct: AuctionReportBuyersConfig
mojo.internal.Struct(
    blink.mojom.AuctionReportBuyersConfigSpec, 'blink.mojom.AuctionReportBuyersConfig', [
      mojo.internal.StructField('bucket', 0, 0, mojo_base.mojom.Uint128Spec, null, false, 0, undefined),
      mojo.internal.StructField('scale', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AuctionAdConfigNonSharedParams
mojo.internal.Struct(
    blink.mojom.AuctionAdConfigNonSharedParamsSpec, 'blink.mojom.AuctionAdConfigNonSharedParams', [
      mojo.internal.StructField('kInterestGroupCount', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AuctionAdConfig
mojo.internal.Struct(
    blink.mojom.AuctionAdConfigSpec, 'blink.mojom.AuctionAdConfig', [
      mojo.internal.StructField('seller', 16, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('server_response', 24, 0, blink.mojom.AuctionAdServerResponseConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('decision_logic_url', 32, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('trusted_scoring_signals_url', 40, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('auction_ad_config_non_shared_params', 48, 0, blink.mojom.AuctionAdConfigNonSharedParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('direct_from_seller_signals', 0, 0, blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec, null, false, 0, undefined),
      mojo.internal.StructField('expects_direct_from_seller_signals_header_ad_slot', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('seller_experiment_group_id_$flag', 76, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'seller_experiment_group_id_$value', originalFieldName: 'seller_experiment_group_id' }),
      mojo.internal.StructField('seller_experiment_group_id_$value', 72, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'seller_experiment_group_id_$flag', originalFieldName: 'seller_experiment_group_id' }),
      mojo.internal.StructField('all_buyer_experiment_group_id_$flag', 76, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'all_buyer_experiment_group_id_$value', originalFieldName: 'all_buyer_experiment_group_id' }),
      mojo.internal.StructField('all_buyer_experiment_group_id_$value', 74, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'all_buyer_experiment_group_id_$flag', originalFieldName: 'all_buyer_experiment_group_id' }),
      mojo.internal.StructField('per_buyer_experiment_group_ids', 56, 0, mojo.internal.Map(url.mojom.OriginSpec, mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('expects_additional_bids', 76, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('aggregation_coordinator_origin', 64, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('send_creative_scanning_metadata_$flag', 76, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_creative_scanning_metadata_$value', originalFieldName: 'send_creative_scanning_metadata' }),
      mojo.internal.StructField('send_creative_scanning_metadata_$value', 76, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'send_creative_scanning_metadata_$flag', originalFieldName: 'send_creative_scanning_metadata' }),
    ],
    [[0, 88]]);

// Struct: AuctionDataBuyerConfig
mojo.internal.Struct(
    blink.mojom.AuctionDataBuyerConfigSpec, 'blink.mojom.AuctionDataBuyerConfig', [
      mojo.internal.StructField('target_size_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'target_size_$value', originalFieldName: 'target_size' }),
      mojo.internal.StructField('target_size_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'target_size_$flag', originalFieldName: 'target_size' }),
    ],
    [[0, 16]]);

// Struct: AuctionDataConfig
mojo.internal.Struct(
    blink.mojom.AuctionDataConfigSpec, 'blink.mojom.AuctionDataConfig', [
      mojo.internal.StructField('per_buyer_configs', 0, 0, mojo.internal.Map(url.mojom.OriginSpec, blink.mojom.AuctionDataBuyerConfigSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('request_size_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'request_size_$value', originalFieldName: 'request_size' }),
      mojo.internal.StructField('request_size_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'request_size_$flag', originalFieldName: 'request_size' }),
    ],
    [[0, 24]]);

// Struct: AdAuctionPerSellerRequest
mojo.internal.Struct(
    blink.mojom.AdAuctionPerSellerRequestSpec, 'blink.mojom.AdAuctionPerSellerRequest', [
      mojo.internal.StructField('seller', 16, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 0, 0, blink.mojom.AdAuctionRequestOrErrorSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);
