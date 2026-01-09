// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/interest_group_types.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


blink.mojom.kMaxInterestGroupSize = 1048576;

blink.mojom.kMaxAllowedReportingOrigins = 10;

// Enum: ExecutionMode
blink.mojom.ExecutionMode = {
  kGroupedByOriginMode: 0,
  kFrozenContext: 1,
};
blink.mojom.ExecutionModeSpec = { $: mojo.internal.Enum() };

// Enum: TrustedBiddingSignalsSlotSizeMode
blink.mojom.TrustedBiddingSignalsSlotSizeMode = {
  kSlotSize: 0,
  kAllSlotsRequestedSizes: 1,
};
blink.mojom.TrustedBiddingSignalsSlotSizeModeSpec = { $: mojo.internal.Enum() };

// Enum: BuyerReportType
blink.mojom.BuyerReportType = {
  kInterestGroupCount: 0,
  kBidCount: 1,
  kTotalGenerateBidLatency: 2,
  kTotalSignalsFetchLatency: 3,
};
blink.mojom.BuyerReportTypeSpec = { $: mojo.internal.Enum() };

// Enum: RealTimeReportingType
blink.mojom.RealTimeReportingType = {
  kDefaultLocalReporting: 0,
};
blink.mojom.RealTimeReportingTypeSpec = { $: mojo.internal.Enum() };

// Union: AuctionAdConfigMaybePromiseJson
blink.mojom.AuctionAdConfigMaybePromiseJsonSpec = { $: mojo.internal.Union(
    'blink.mojom.AuctionAdConfigMaybePromiseJson', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'value': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      }},
    })
};

// Union: AuctionAdConfigMaybePromisePerBuyerSignals
blink.mojom.AuctionAdConfigMaybePromisePerBuyerSignalsSpec = { $: mojo.internal.Union(
    'blink.mojom.AuctionAdConfigMaybePromisePerBuyerSignals', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'value': {
        'ordinal': 1,
        'type': mojo.internal.Map(url.mojom.OriginSpec, mojo.internal.String, false),
        'nullable': true,
      }},
    })
};

// Union: AuctionAdConfigMaybePromiseBuyerTimeouts
blink.mojom.AuctionAdConfigMaybePromiseBuyerTimeoutsSpec = { $: mojo.internal.Union(
    'blink.mojom.AuctionAdConfigMaybePromiseBuyerTimeouts', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'value': {
        'ordinal': 1,
        'type': blink.mojom.AuctionAdConfigBuyerTimeoutsSpec,
      }},
    })
};

// Union: AuctionAdConfigMaybePromiseBuyerCurrencies
blink.mojom.AuctionAdConfigMaybePromiseBuyerCurrenciesSpec = { $: mojo.internal.Union(
    'blink.mojom.AuctionAdConfigMaybePromiseBuyerCurrencies', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'value': {
        'ordinal': 1,
        'type': blink.mojom.AuctionAdConfigBuyerCurrenciesSpec,
      }},
    })
};

// Union: AuctionAdConfigMaybePromiseDirectFromSellerSignals
blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec = { $: mojo.internal.Union(
    'blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignals', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'value': {
        'ordinal': 1,
        'type': blink.mojom.DirectFromSellerSignalsSpec,
        'nullable': true,
      }},
    })
};

// Union: AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacements
blink.mojom.AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacementsSpec = { $: mojo.internal.Union(
    'blink.mojom.AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacements', {
      'promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'value': {
        'ordinal': 1,
        'type': mojo.internal.Array(blink.mojom.AdKeywordReplacementSpec, false),
      }},
    })
};

// Union: AdAuctionRequestOrError
blink.mojom.AdAuctionRequestOrErrorSpec = { $: mojo.internal.Union(
    'blink.mojom.AdAuctionRequestOrError', {
      'request': {
        'ordinal': 0,
        'type': mojo_base.mojom.BigBufferSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: InterestGroupAd
blink.mojom.InterestGroupAdSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InterestGroupAd',
      packedSize: 80,
      fields: [
        { name: 'render_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size_group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'buyer_reporting_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'buyer_and_seller_reporting_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'selectable_buyer_and_seller_reporting_ids', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'metadata', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'ad_render_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'allowed_reporting_origins', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: true, minVersion: 0 },
        { name: 'creative_scanning_metadata', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: SellerCapabilities
blink.mojom.SellerCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SellerCapabilities',
      packedSize: 16,
      fields: [
        { name: 'allows_interest_group_counts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allows_latency_stats', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AuctionServerRequestFlags
blink.mojom.AuctionServerRequestFlagsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionServerRequestFlags',
      packedSize: 16,
      fields: [
        { name: 'omit_ads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_full_ads', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'omit_user_bidding_signals', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AdKeywordReplacement
blink.mojom.AdKeywordReplacementSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdKeywordReplacement',
      packedSize: 24,
      fields: [
        { name: 'match', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'replacement', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: InterestGroup
blink.mojom.InterestGroupSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InterestGroup',
      packedSize: 16,
      fields: [
        { name: 'kCompatibilityMode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PreviousWin
blink.mojom.PreviousWinSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PreviousWin',
      packedSize: 24,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'ad_json', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ViewOrClickCounts
blink.mojom.ViewOrClickCountsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewOrClickCounts',
      packedSize: 32,
      fields: [
        { name: 'past_hour', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'past_day', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'past_week', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'past_30_days', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'past_90_days', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ViewAndClickCounts
blink.mojom.ViewAndClickCountsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ViewAndClickCounts',
      packedSize: 24,
      fields: [
        { name: 'view_counts', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewOrClickCountsSpec, nullable: false, minVersion: 0 },
        { name: 'click_counts', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ViewOrClickCountsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BiddingBrowserSignals
blink.mojom.BiddingBrowserSignalsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BiddingBrowserSignals',
      packedSize: 40,
      fields: [
        { name: 'join_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bid_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'prev_wins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PreviousWinSpec, false), nullable: false, minVersion: 0 },
        { name: 'for_debugging_only_in_cooldown_or_lockout', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'view_and_click_counts', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ViewAndClickCountsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: StorageInterestGroup
blink.mojom.StorageInterestGroupSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageInterestGroup',
      packedSize: 64,
      fields: [
        { name: 'interest_group', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InterestGroupSpec, nullable: false, minVersion: 0 },
        { name: 'bidding_browser_signals', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BiddingBrowserSignalsSpec, nullable: false, minVersion: 0 },
        { name: 'joining_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'join_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_updated', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'next_update_after', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'estimated_size', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: DirectFromSellerSignalsSubresource
blink.mojom.DirectFromSellerSignalsSubresourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectFromSellerSignalsSubresource',
      packedSize: 24,
      fields: [
        { name: 'bundle_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DirectFromSellerSignals
blink.mojom.DirectFromSellerSignalsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DirectFromSellerSignals',
      packedSize: 40,
      fields: [
        { name: 'prefix', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'per_buyer_signals', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, blink.mojom.DirectFromSellerSignalsSubresourceSpec, false), nullable: false, minVersion: 0 },
        { name: 'seller_signals', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.DirectFromSellerSignalsSubresourceSpec, nullable: true, minVersion: 0 },
        { name: 'auction_signals', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.DirectFromSellerSignalsSubresourceSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: AuctionAdConfigBuyerTimeouts
blink.mojom.AuctionAdConfigBuyerTimeoutsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionAdConfigBuyerTimeouts',
      packedSize: 24,
      fields: [
        { name: 'all_buyers_timeout', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'per_buyer_timeouts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, mojo_base.mojom.TimeDeltaSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AdCurrency
blink.mojom.AdCurrencySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdCurrency',
      packedSize: 16,
      fields: [
        { name: 'currency_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AuctionAdConfigBuyerCurrencies
blink.mojom.AuctionAdConfigBuyerCurrenciesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionAdConfigBuyerCurrencies',
      packedSize: 24,
      fields: [
        { name: 'all_buyers_currency', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'per_buyer_currencies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, blink.mojom.AdCurrencySpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AuctionAdServerResponseConfig
blink.mojom.AuctionAdServerResponseConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionAdServerResponseConfig',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AuctionReportBuyerDebugModeConfig
blink.mojom.AuctionReportBuyerDebugModeConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionReportBuyerDebugModeConfig',
      packedSize: 24,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'debug_key_$flag', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'debug_key_$value', originalFieldName: 'debug_key' } },
        { name: 'debug_key_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'debug_key_$flag', originalFieldName: 'debug_key' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AuctionReportBuyersConfig
blink.mojom.AuctionReportBuyersConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionReportBuyersConfig',
      packedSize: 24,
      fields: [
        { name: 'bucket', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false, minVersion: 0 },
        { name: 'scale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AuctionAdConfigNonSharedParams
blink.mojom.AuctionAdConfigNonSharedParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionAdConfigNonSharedParams',
      packedSize: 16,
      fields: [
        { name: 'kInterestGroupCount', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AuctionAdConfig
blink.mojom.AuctionAdConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionAdConfig',
      packedSize: 88,
      fields: [
        { name: 'seller', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'server_response', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuctionAdServerResponseConfigSpec, nullable: true, minVersion: 0 },
        { name: 'decision_logic_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'trusted_scoring_signals_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'auction_ad_config_non_shared_params', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigNonSharedParamsSpec, nullable: false, minVersion: 0 },
        { name: 'direct_from_seller_signals', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec, nullable: false, minVersion: 0 },
        { name: 'expects_direct_from_seller_signals_header_ad_slot', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'seller_experiment_group_id_$flag', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'seller_experiment_group_id_$value', originalFieldName: 'seller_experiment_group_id' } },
        { name: 'seller_experiment_group_id_$value', packedOffset: 58, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'seller_experiment_group_id_$flag', originalFieldName: 'seller_experiment_group_id' } },
        { name: 'all_buyer_experiment_group_id_$flag', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'all_buyer_experiment_group_id_$value', originalFieldName: 'all_buyer_experiment_group_id' } },
        { name: 'all_buyer_experiment_group_id_$value', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'all_buyer_experiment_group_id_$flag', originalFieldName: 'all_buyer_experiment_group_id' } },
        { name: 'per_buyer_experiment_group_ids', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'expects_additional_bids', packedOffset: 56, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'aggregation_coordinator_origin', packedOffset: 72, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'send_creative_scanning_metadata_$flag', packedOffset: 56, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'send_creative_scanning_metadata_$value', originalFieldName: 'send_creative_scanning_metadata' } },
        { name: 'send_creative_scanning_metadata_$value', packedOffset: 56, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'send_creative_scanning_metadata_$flag', originalFieldName: 'send_creative_scanning_metadata' } },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: AuctionDataBuyerConfig
blink.mojom.AuctionDataBuyerConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionDataBuyerConfig',
      packedSize: 16,
      fields: [
        { name: 'target_size_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'target_size_$value', originalFieldName: 'target_size' } },
        { name: 'target_size_$value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'target_size_$flag', originalFieldName: 'target_size' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AuctionDataConfig
blink.mojom.AuctionDataConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionDataConfig',
      packedSize: 24,
      fields: [
        { name: 'per_buyer_configs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, blink.mojom.AuctionDataBuyerConfigSpec, false), nullable: false, minVersion: 0 },
        { name: 'request_size_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'request_size_$value', originalFieldName: 'request_size' } },
        { name: 'request_size_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'request_size_$flag', originalFieldName: 'request_size' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AdAuctionPerSellerRequest
blink.mojom.AdAuctionPerSellerRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionPerSellerRequest',
      packedSize: 32,
      fields: [
        { name: 'seller', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AdAuctionRequestOrErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
