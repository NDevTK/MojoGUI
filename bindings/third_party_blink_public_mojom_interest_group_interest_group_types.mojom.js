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
      packedSize: 16,
      fields: [
        { name: 'creative_scanning_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'replacement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'ad_json', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'click_counts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'view_and_click_counts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'estimated_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'auction_signals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'per_buyer_timeouts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'per_buyer_currencies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'debug_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'scale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'send_creative_scanning_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'request_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
