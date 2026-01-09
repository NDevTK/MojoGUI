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

// Struct: InterestGroupAd
blink.mojom.InterestGroupAdSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InterestGroupAd',
      packedSize: 80,
      fields: [
        { name: 'render_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'size_group', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'buyer_reporting_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'buyer_and_seller_reporting_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selectable_buyer_and_seller_reporting_ids', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'metadata', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ad_render_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allowed_reporting_origins', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'creative_scanning_metadata', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'allows_interest_group_counts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allows_latency_stats', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'omit_ads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'include_full_ads', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'omit_user_bidding_signals', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'match', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'replacement', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kCompatibilityMode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'ad_json', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'past_hour', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'past_day', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'past_week', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'past_30_days', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'past_90_days', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'view_counts', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewOrClickCountsSpec, nullable: false },
        { name: 'click_counts', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ViewOrClickCountsSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'join_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bid_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'prev_wins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'for_debugging_only_in_cooldown_or_lockout', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'view_and_click_counts', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ViewAndClickCountsSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'interest_group', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InterestGroupSpec, nullable: false },
        { name: 'bidding_browser_signals', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BiddingBrowserSignalsSpec, nullable: false },
        { name: 'joining_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'join_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'last_updated', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'next_update_after', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'estimated_size', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'bundle_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'prefix', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'per_buyer_signals', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'seller_signals', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.DirectFromSellerSignalsSubresourceSpec, nullable: true },
        { name: 'auction_signals', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.DirectFromSellerSignalsSubresourceSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'all_buyers_timeout', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'per_buyer_timeouts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'currency_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'all_buyers_currency', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true },
        { name: 'per_buyer_currencies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'debug_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'bucket', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false },
        { name: 'scale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kInterestGroupCount', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AuctionAdConfig
blink.mojom.AuctionAdConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuctionAdConfig',
      packedSize: 104,
      fields: [
        { name: 'seller', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'server_response', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuctionAdServerResponseConfigSpec, nullable: true },
        { name: 'decision_logic_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'trusted_scoring_signals_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'auction_ad_config_non_shared_params', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigNonSharedParamsSpec, nullable: false },
        { name: 'direct_from_seller_signals', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec, nullable: false },
        { name: 'expects_direct_from_seller_signals_header_ad_slot', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'seller_experiment_group_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: true },
        { name: 'all_buyer_experiment_group_id', packedOffset: 58, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: true },
        { name: 'per_buyer_experiment_group_ids', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'expects_additional_bids', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'aggregation_coordinator_origin', packedOffset: 80, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'send_creative_scanning_metadata', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'target_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'per_buyer_configs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'request_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdAuctionPerSellerRequest
blink.mojom.AdAuctionPerSellerRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionPerSellerRequest',
      packedSize: 24,
      fields: [
        { name: 'seller', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AdAuctionRequestOrErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
