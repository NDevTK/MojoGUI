// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/interest_group/interest_group_types.mojom
 // Module: blink.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.ExecutionModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.TrustedBiddingSignalsSlotSizeModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.BuyerReportTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.RealTimeReportingTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseJsonSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromisePerBuyerSignalsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseBuyerTimeoutsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseBuyerCurrenciesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacementsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AdAuctionRequestOrErrorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.InterestGroupAdSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SellerCapabilitiesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionServerRequestFlagsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AdKeywordReplacementSpec = { $: {} };
mojo.internal.bindings.blink.mojom.InterestGroupSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PreviousWinSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ViewOrClickCountsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ViewAndClickCountsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.BiddingBrowserSignalsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageInterestGroupSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DirectFromSellerSignalsSubresourceSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DirectFromSellerSignalsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigBuyerTimeoutsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AdCurrencySpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigBuyerCurrenciesSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdServerResponseConfigSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionReportBuyerDebugModeConfigSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionReportBuyersConfigSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigNonSharedParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionAdConfigSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionDataBuyerConfigSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AuctionDataConfigSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AdAuctionPerSellerRequestSpec = { $: {} };

mojo.internal.bindings.blink.mojom.kMaxInterestGroupSize = 1048576;

mojo.internal.bindings.blink.mojom.kMaxAllowedReportingOrigins = 10;

// Enum: ExecutionMode
mojo.internal.bindings.blink.mojom.ExecutionMode = {
  kCompatibilityMode: 0,
  kGroupedByOriginMode: 1,
  kFrozenContext: 2,
};

// Enum: TrustedBiddingSignalsSlotSizeMode
mojo.internal.bindings.blink.mojom.TrustedBiddingSignalsSlotSizeMode = {
  kNone: 0,
  kSlotSize: 1,
  kAllSlotsRequestedSizes: 2,
};

// Enum: BuyerReportType
mojo.internal.bindings.blink.mojom.BuyerReportType = {
  kInterestGroupCount: 0,
  kBidCount: 1,
  kTotalGenerateBidLatency: 2,
  kTotalSignalsFetchLatency: 3,
};

// Enum: RealTimeReportingType
mojo.internal.bindings.blink.mojom.RealTimeReportingType = {
  kDefaultLocalReporting: 0,
};

// Union: AuctionAdConfigMaybePromiseJson
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseJsonSpec, 'blink.mojom.AuctionAdConfigMaybePromiseJson', {
      'arg_promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_value': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      },
    });

// Union: AuctionAdConfigMaybePromisePerBuyerSignals
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromisePerBuyerSignalsSpec, 'blink.mojom.AuctionAdConfigMaybePromisePerBuyerSignals', {
      'arg_promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_value': {
        'ordinal': 1,
        'type': mojo.internal.Map(mojo.internal.bindings.url.mojom.OriginSpec.$, mojo.internal.String, false),
        'nullable': true,
      },
    });

// Union: AuctionAdConfigMaybePromiseBuyerTimeouts
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseBuyerTimeoutsSpec, 'blink.mojom.AuctionAdConfigMaybePromiseBuyerTimeouts', {
      'arg_promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_value': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.AuctionAdConfigBuyerTimeoutsSpec.$,
        'nullable': false,
      },
    });

// Union: AuctionAdConfigMaybePromiseBuyerCurrencies
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseBuyerCurrenciesSpec, 'blink.mojom.AuctionAdConfigMaybePromiseBuyerCurrencies', {
      'arg_promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_value': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.AuctionAdConfigBuyerCurrenciesSpec.$,
        'nullable': false,
      },
    });

// Union: AuctionAdConfigMaybePromiseDirectFromSellerSignals
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec, 'blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignals', {
      'arg_promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_value': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.DirectFromSellerSignalsSpec.$,
        'nullable': true,
      },
    });

// Union: AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacements
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacementsSpec, 'blink.mojom.AuctionAdConfigMaybePromiseDeprecatedRenderURLReplacements', {
      'arg_promise': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_value': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.bindings.blink.mojom.AdKeywordReplacementSpec.$, false),
        'nullable': false,
      },
    });

// Union: AdAuctionRequestOrError
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.AdAuctionRequestOrErrorSpec, 'blink.mojom.AdAuctionRequestOrError', {
      'arg_request': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: InterestGroupAd
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.InterestGroupAdSpec, 'blink.mojom.InterestGroupAd', [
      mojo.internal.StructField('arg_render_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size_group', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_buyer_reporting_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_buyer_and_seller_reporting_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_selectable_buyer_and_seller_reporting_ids', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_metadata', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_ad_render_id', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_reporting_origins', 56, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.OriginSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_creative_scanning_metadata', 64, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 80]]);

// Struct: SellerCapabilities
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SellerCapabilitiesSpec, 'blink.mojom.SellerCapabilities', [
      mojo.internal.StructField('arg_allows_interest_group_counts', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allows_latency_stats', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AuctionServerRequestFlags
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionServerRequestFlagsSpec, 'blink.mojom.AuctionServerRequestFlags', [
      mojo.internal.StructField('arg_omit_ads', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_full_ads', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_omit_user_bidding_signals', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AdKeywordReplacement
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AdKeywordReplacementSpec, 'blink.mojom.AdKeywordReplacement', [
      mojo.internal.StructField('arg_match', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_replacement', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InterestGroup
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.InterestGroupSpec, 'blink.mojom.InterestGroup', [
      mojo.internal.StructField('arg_kCompatibilityMode', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PreviousWin
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PreviousWinSpec, 'blink.mojom.PreviousWin', [
      mojo.internal.StructField('arg_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ad_json', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ViewOrClickCounts
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ViewOrClickCountsSpec, 'blink.mojom.ViewOrClickCounts', [
      mojo.internal.StructField('arg_past_hour', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_past_day', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_past_week', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_past_30_days', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_past_90_days', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ViewAndClickCounts
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ViewAndClickCountsSpec, 'blink.mojom.ViewAndClickCounts', [
      mojo.internal.StructField('arg_view_counts', 0, 0, mojo.internal.bindings.blink.mojom.ViewOrClickCountsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_click_counts', 8, 0, mojo.internal.bindings.blink.mojom.ViewOrClickCountsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BiddingBrowserSignals
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.BiddingBrowserSignalsSpec, 'blink.mojom.BiddingBrowserSignals', [
      mojo.internal.StructField('arg_prev_wins', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.PreviousWinSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_view_and_click_counts', 8, 0, mojo.internal.bindings.blink.mojom.ViewAndClickCountsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_join_count', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bid_count', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_for_debugging_only_in_cooldown_or_lockout', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: StorageInterestGroup
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageInterestGroupSpec, 'blink.mojom.StorageInterestGroup', [
      mojo.internal.StructField('arg_interest_group', 0, 0, mojo.internal.bindings.blink.mojom.InterestGroupSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bidding_browser_signals', 8, 0, mojo.internal.bindings.blink.mojom.BiddingBrowserSignalsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_joining_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_join_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_updated', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_next_update_after', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_estimated_size', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: DirectFromSellerSignalsSubresource
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DirectFromSellerSignalsSubresourceSpec, 'blink.mojom.DirectFromSellerSignalsSubresource', [
      mojo.internal.StructField('arg_bundle_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_token', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DirectFromSellerSignals
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DirectFromSellerSignalsSpec, 'blink.mojom.DirectFromSellerSignals', [
      mojo.internal.StructField('arg_prefix', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_per_buyer_signals', 8, 0, mojo.internal.Map(mojo.internal.bindings.url.mojom.OriginSpec.$, mojo.internal.bindings.blink.mojom.DirectFromSellerSignalsSubresourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_seller_signals', 16, 0, mojo.internal.bindings.blink.mojom.DirectFromSellerSignalsSubresourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auction_signals', 24, 0, mojo.internal.bindings.blink.mojom.DirectFromSellerSignalsSubresourceSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AuctionAdConfigBuyerTimeouts
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigBuyerTimeoutsSpec, 'blink.mojom.AuctionAdConfigBuyerTimeouts', [
      mojo.internal.StructField('arg_all_buyers_timeout', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_per_buyer_timeouts', 8, 0, mojo.internal.Map(mojo.internal.bindings.url.mojom.OriginSpec.$, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdCurrency
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AdCurrencySpec, 'blink.mojom.AdCurrency', [
      mojo.internal.StructField('arg_currency_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AuctionAdConfigBuyerCurrencies
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigBuyerCurrenciesSpec, 'blink.mojom.AuctionAdConfigBuyerCurrencies', [
      mojo.internal.StructField('arg_all_buyers_currency', 0, 0, mojo.internal.bindings.blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_per_buyer_currencies', 8, 0, mojo.internal.Map(mojo.internal.bindings.url.mojom.OriginSpec.$, mojo.internal.bindings.blink.mojom.AdCurrencySpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AuctionAdServerResponseConfig
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionAdServerResponseConfigSpec, 'blink.mojom.AuctionAdServerResponseConfig', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AuctionReportBuyerDebugModeConfig
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionReportBuyerDebugModeConfigSpec, 'blink.mojom.AuctionReportBuyerDebugModeConfig', [
      mojo.internal.StructField('arg_debug_key_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_debug_key_$flag', originalFieldName: 'arg_debug_key' }),
      mojo.internal.StructField('arg_is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_debug_key_$flag', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_debug_key_$value', originalFieldName: 'arg_debug_key' }),
    ],
    [[0, 24]]);

// Struct: AuctionReportBuyersConfig
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionReportBuyersConfigSpec, 'blink.mojom.AuctionReportBuyersConfig', [
      mojo.internal.StructField('arg_bucket', 0, 0, mojo.internal.bindings.mojo_base.mojom.Uint128Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AuctionAdConfigNonSharedParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigNonSharedParamsSpec, 'blink.mojom.AuctionAdConfigNonSharedParams', [
      mojo.internal.StructField('arg_kInterestGroupCount', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AuctionAdConfig
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionAdConfigSpec, 'blink.mojom.AuctionAdConfig', [
      mojo.internal.StructField('arg_seller', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_server_response', 8, 0, mojo.internal.bindings.blink.mojom.AuctionAdServerResponseConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_decision_logic_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_trusted_scoring_signals_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auction_ad_config_non_shared_params', 32, 0, mojo.internal.bindings.blink.mojom.AuctionAdConfigNonSharedParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_signals', 40, 0, mojo.internal.bindings.blink.mojom.AuctionAdConfigMaybePromiseDirectFromSellerSignalsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_per_buyer_experiment_group_ids', 48, 0, mojo.internal.Map(mojo.internal.bindings.url.mojom.OriginSpec.$, mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_aggregation_coordinator_origin', 56, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_seller_experiment_group_id_$value', 64, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_seller_experiment_group_id_$flag', originalFieldName: 'arg_seller_experiment_group_id' }),
      mojo.internal.StructField('arg_all_buyer_experiment_group_id_$value', 66, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_all_buyer_experiment_group_id_$flag', originalFieldName: 'arg_all_buyer_experiment_group_id' }),
      mojo.internal.StructField('arg_expects_direct_from_seller_signals_header_ad_slot', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_seller_experiment_group_id_$flag', 68, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_seller_experiment_group_id_$value', originalFieldName: 'arg_seller_experiment_group_id' }),
      mojo.internal.StructField('arg_all_buyer_experiment_group_id_$flag', 68, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_all_buyer_experiment_group_id_$value', originalFieldName: 'arg_all_buyer_experiment_group_id' }),
      mojo.internal.StructField('arg_expects_additional_bids', 68, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_send_creative_scanning_metadata_$flag', 68, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_send_creative_scanning_metadata_$value', originalFieldName: 'arg_send_creative_scanning_metadata' }),
      mojo.internal.StructField('arg_send_creative_scanning_metadata_$value', 68, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_send_creative_scanning_metadata_$flag', originalFieldName: 'arg_send_creative_scanning_metadata' }),
    ],
    [[0, 80]]);

// Struct: AuctionDataBuyerConfig
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionDataBuyerConfigSpec, 'blink.mojom.AuctionDataBuyerConfig', [
      mojo.internal.StructField('arg_target_size_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_target_size_$flag', originalFieldName: 'arg_target_size' }),
      mojo.internal.StructField('arg_target_size_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_target_size_$value', originalFieldName: 'arg_target_size' }),
    ],
    [[0, 16]]);

// Struct: AuctionDataConfig
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AuctionDataConfigSpec, 'blink.mojom.AuctionDataConfig', [
      mojo.internal.StructField('arg_per_buyer_configs', 0, 0, mojo.internal.Map(mojo.internal.bindings.url.mojom.OriginSpec.$, mojo.internal.bindings.blink.mojom.AuctionDataBuyerConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_request_size_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_request_size_$flag', originalFieldName: 'arg_request_size' }),
      mojo.internal.StructField('arg_request_size_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_request_size_$value', originalFieldName: 'arg_request_size' }),
    ],
    [[0, 24]]);

// Struct: AdAuctionPerSellerRequest
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AdAuctionPerSellerRequestSpec, 'blink.mojom.AdAuctionPerSellerRequest', [
      mojo.internal.StructField('arg_seller', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.bindings.blink.mojom.AdAuctionRequestOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
