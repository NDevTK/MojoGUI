// Auto-generated MojoJS binding
 // Source: chromium_src/content/services/auction_worklet/public/mojom/seller_worklet.mojom
 // Module: auction_worklet.mojom

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
 

 mojo.internal.bindings.auction_worklet = mojo.internal.bindings.auction_worklet || {};
mojo.internal.bindings.auction_worklet.mojom = mojo.internal.bindings.auction_worklet.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionOtherSellerSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionModifiedBidParamsSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionReportResultParamsSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.ScoreAdDependencyLatenciesSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.SellerTimingMetricsSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.CreativeInfoWithoutOwnerSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.ScoreAdClient = {};
mojo.internal.bindings.auction_worklet.mojom.ScoreAdClient.$interfaceName = 'auction_worklet.mojom.ScoreAdClient';
mojo.internal.bindings.auction_worklet.mojom.ScoreAdClient_OnScoreAdComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.SellerWorklet = {};
mojo.internal.bindings.auction_worklet.mojom.SellerWorklet.$interfaceName = 'auction_worklet.mojom.SellerWorklet';
mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ScoreAd_ParamsSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_SendPendingSignalsRequests_ParamsSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ParamsSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ConnectDevToolsAgent_ParamsSpec = { $: {} };

// Union: ComponentAuctionOtherSeller
mojo.internal.Union(
    mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionOtherSellerSpec, 'auction_worklet.mojom.ComponentAuctionOtherSeller', {
      'arg_top_level_seller': {
        'ordinal': 0,
        'type': mojo.internal.bindings.url.mojom.OriginSpec.$,
        'nullable': false,
      },
      'arg_component_seller': {
        'ordinal': 1,
        'type': mojo.internal.bindings.url.mojom.OriginSpec.$,
        'nullable': false,
      },
    });

// Struct: ComponentAuctionModifiedBidParams
mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionModifiedBidParamsSpec, 'auction_worklet.mojom.ComponentAuctionModifiedBidParams', [
      mojo.internal.StructField('arg_ad', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bid_$value', 8, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_bid_$flag', originalFieldName: 'arg_bid' }),
      mojo.internal.StructField('arg_bid_currency', 16, 0, mojo.internal.bindings.blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bid_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_bid_$value', originalFieldName: 'arg_bid' }),
    ],
    [[0, 40]]);

// Struct: ComponentAuctionReportResultParams
mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionReportResultParamsSpec, 'auction_worklet.mojom.ComponentAuctionReportResultParams', [
      mojo.internal.StructField('arg_top_level_seller_signals', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_modified_bid_$value', 8, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_modified_bid_$flag', originalFieldName: 'arg_modified_bid' }),
      mojo.internal.StructField('arg_modified_bid_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_modified_bid_$value', originalFieldName: 'arg_modified_bid' }),
    ],
    [[0, 32]]);

// Struct: ScoreAdDependencyLatencies
mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.ScoreAdDependencyLatenciesSpec, 'auction_worklet.mojom.ScoreAdDependencyLatencies', [
      mojo.internal.StructField('arg_code_ready_latency', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_signals_latency', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_trusted_scoring_signals_latency', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_deps_wait_start_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_score_ad_start_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_score_ad_finish_time', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SellerTimingMetrics
mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.SellerTimingMetricsSpec, 'auction_worklet.mojom.SellerTimingMetrics', [
      mojo.internal.StructField('arg_js_fetch_latency', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_script_latency', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_script_timed_out', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CreativeInfoWithoutOwner
mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.CreativeInfoWithoutOwnerSpec, 'auction_worklet.mojom.CreativeInfoWithoutOwner', [
      mojo.internal.StructField('arg_ad_descriptor', 0, 0, mojo.internal.bindings.blink.mojom.AdDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_creative_scanning_metadata', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ScoreAdClient
mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.ScoreAdClient_OnScoreAdComplete_ParamsSpec, 'auction_worklet.mojom.ScoreAdClient_OnScoreAdComplete_Params', [
      mojo.internal.StructField('arg_score', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reject_reason', 8, 0, mojo.internal.bindings.auction_worklet.mojom.RejectReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_component_auction_modified_bid_params', 16, 0, mojo.internal.bindings.mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionModifiedBidParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bid_in_seller_currency_$value', 24, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_bid_in_seller_currency_$flag', originalFieldName: 'arg_bid_in_seller_currency' }),
      mojo.internal.StructField('arg_debug_loss_report_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_debug_win_report_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pa_requests', 48, 0, mojo.internal.Array(mojo.internal.bindings.auction_worklet.mojom.PrivateAggregationRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_real_time_contributions', 56, 0, mojo.internal.Array(mojo.internal.bindings.auction_worklet.mojom.RealTimeReportingContributionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_score_ad_timing_metrics', 64, 0, mojo.internal.bindings.mojo.internal.bindings.auction_worklet.mojom.SellerTimingMetricsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_score_ad_dependency_latencies', 72, 0, mojo.internal.bindings.mojo.internal.bindings.auction_worklet.mojom.ScoreAdDependencyLatenciesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_errors', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_scoring_signals_data_version_$value', 88, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_scoring_signals_data_version_$flag', originalFieldName: 'arg_scoring_signals_data_version' }),
      mojo.internal.StructField('arg_bid_in_seller_currency_$flag', 92, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_bid_in_seller_currency_$value', originalFieldName: 'arg_bid_in_seller_currency' }),
      mojo.internal.StructField('arg_scoring_signals_data_version_$flag', 92, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_scoring_signals_data_version_$value', originalFieldName: 'arg_scoring_signals_data_version' }),
    ],
    [[0, 104]]);

mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.ScoreAdClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onScoreAdComplete(arg_score, arg_reject_reason, arg_component_auction_modified_bid_params, arg_bid_in_seller_currency, arg_scoring_signals_data_version, arg_debug_loss_report_url, arg_debug_win_report_url, arg_pa_requests, arg_real_time_contributions, arg_score_ad_timing_metrics, arg_score_ad_dependency_latencies, arg_errors) {
    return this.$.onScoreAdComplete(arg_score, arg_reject_reason, arg_component_auction_modified_bid_params, arg_bid_in_seller_currency, arg_scoring_signals_data_version, arg_debug_loss_report_url, arg_debug_win_report_url, arg_pa_requests, arg_real_time_contributions, arg_score_ad_timing_metrics, arg_score_ad_dependency_latencies, arg_errors);
  }
};

mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScoreAdClient', [
      { explicit: null },
    ]);
  }

  onScoreAdComplete(arg_score, arg_reject_reason, arg_component_auction_modified_bid_params, arg_bid_in_seller_currency, arg_scoring_signals_data_version, arg_debug_loss_report_url, arg_debug_win_report_url, arg_pa_requests, arg_real_time_contributions, arg_score_ad_timing_metrics, arg_score_ad_dependency_latencies, arg_errors) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.auction_worklet.mojom.ScoreAdClient_OnScoreAdComplete_ParamsSpec,
      null,
      [arg_score, arg_reject_reason, arg_component_auction_modified_bid_params, arg_bid_in_seller_currency, arg_scoring_signals_data_version, arg_debug_loss_report_url, arg_debug_win_report_url, arg_pa_requests, arg_real_time_contributions, arg_score_ad_timing_metrics, arg_score_ad_dependency_latencies, arg_errors],
      false);
  }

};

mojo.internal.bindings.auction_worklet.mojom.ScoreAdClient.getRemote = function() {
  let remote = new mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.ScoreAdClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScoreAdClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnScoreAdComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.ScoreAdClient_OnScoreAdComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScoreAdComplete (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.ScoreAdClient_OnScoreAdComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScoreAdComplete');
          const result = this.impl.onScoreAdComplete(params.arg_score, params.arg_reject_reason, params.arg_component_auction_modified_bid_params, params.arg_bid_in_seller_currency, params.arg_scoring_signals_data_version, params.arg_debug_loss_report_url, params.arg_debug_win_report_url, params.arg_pa_requests, params.arg_real_time_contributions, params.arg_score_ad_timing_metrics, params.arg_score_ad_dependency_latencies, params.arg_errors);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientReceiver = mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientReceiver;

mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientPtr = mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientRemote;
mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientRequest = mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientPendingReceiver;


// Interface: SellerWorklet
mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ScoreAd_ParamsSpec, 'auction_worklet.mojom.SellerWorklet_ScoreAd_Params', [
      mojo.internal.StructField('arg_ad_metadata_json', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bid', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bid_currency', 16, 0, mojo.internal.bindings.blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_auction_ad_config_non_shared_params', 24, 0, mojo.internal.bindings.blink.mojom.AuctionAdConfigNonSharedParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_value_signals_cache_key', 32, 0, mojo.internal.bindings.auction_worklet.mojom.TrustedSignalsCacheKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ad', 40, 0, mojo.internal.bindings.mojo.internal.bindings.auction_worklet.mojom.CreativeInfoWithoutOwnerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ad_components', 48, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.auction_worklet.mojom.CreativeInfoWithoutOwnerSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_seller_signals', 56, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_seller_signals_header_ad_slot', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_auction_signals', 72, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_auction_signals_header_ad_slot', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signals_other_seller', 88, 0, mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionOtherSellerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_component_expect_bid_currency', 96, 0, mojo.internal.bindings.blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_interest_group_owner', 104, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_selected_buyer_and_seller_reporting_id', 112, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_buyer_and_seller_reporting_id', 120, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_seller_timeout', 128, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_group_by_origin_id', 136, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 144, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bidder_joining_origin', 152, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_score_ad_client', 160, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.auction_worklet.mojom.ScoreAdClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_bidding_duration_msecs', 168, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_for_debugging_only_in_cooldown_or_lockout', 172, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_for_debugging_only_sampling', 172, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_group_by_origin_mode', 172, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 184]]);

mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_SendPendingSignalsRequests_ParamsSpec, 'auction_worklet.mojom.SellerWorklet_SendPendingSignalsRequests_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ParamsSpec, 'auction_worklet.mojom.SellerWorklet_ReportResult_Params', [
      mojo.internal.StructField('arg_auction_ad_config_non_shared_params', 0, 0, mojo.internal.bindings.blink.mojom.AuctionAdConfigNonSharedParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_seller_signals', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_seller_signals_header_ad_slot', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_auction_signals', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_direct_from_seller_auction_signals_header_ad_slot', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signals_other_seller', 40, 0, mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionOtherSellerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_interest_group_owner', 48, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_buyer_and_seller_reporting_id', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_selected_buyer_and_seller_reporting_id', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_render_url', 72, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_bid', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_bid_currency', 88, 0, mojo.internal.bindings.blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_desirability', 96, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_highest_scoring_other_bid', 104, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_browser_signal_highest_scoring_other_bid_currency', 112, 0, mojo.internal.bindings.blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_browser_signals_component_auction_report_result_params', 120, 0, mojo.internal.bindings.mojo.internal.bindings.auction_worklet.mojom.ComponentAuctionReportResultParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 128, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scoring_signals_data_version_$value', 136, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_scoring_signals_data_version_$flag', originalFieldName: 'arg_scoring_signals_data_version' }),
      mojo.internal.StructField('arg_scoring_signals_data_version_$flag', 140, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_scoring_signals_data_version_$value', originalFieldName: 'arg_scoring_signals_data_version' }),
    ],
    [[0, 152]]);

mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ResponseParamsSpec, 'auction_worklet.mojom.SellerWorklet_ReportResult_ResponseParams', [
      mojo.internal.StructField('arg_signals_for_winner', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_report_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ad_beacon_map', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pa_requests', 24, 0, mojo.internal.Array(mojo.internal.bindings.auction_worklet.mojom.PrivateAggregationRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_time_metrics', 32, 0, mojo.internal.bindings.mojo.internal.bindings.auction_worklet.mojom.SellerTimingMetricsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_msgs', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ConnectDevToolsAgent_ParamsSpec, 'auction_worklet.mojom.SellerWorklet_ConnectDevToolsAgent_Params', [
      mojo.internal.StructField('arg_agent', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_thread_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.auction_worklet.mojom.SellerWorkletPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.auction_worklet.mojom.SellerWorkletRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.SellerWorklet';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.auction_worklet.mojom.SellerWorkletPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.auction_worklet.mojom.SellerWorkletRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scoreAd(arg_ad_metadata_json, arg_bid, arg_bid_currency, arg_auction_ad_config_non_shared_params, arg_key_value_signals_cache_key, arg_ad, arg_ad_components, arg_direct_from_seller_seller_signals, arg_direct_from_seller_seller_signals_header_ad_slot, arg_direct_from_seller_auction_signals, arg_direct_from_seller_auction_signals_header_ad_slot, arg_browser_signals_other_seller, arg_component_expect_bid_currency, arg_browser_signal_interest_group_owner, arg_browser_signal_selected_buyer_and_seller_reporting_id, arg_browser_signal_buyer_and_seller_reporting_id, arg_browser_signal_bidding_duration_msecs, arg_browser_signal_for_debugging_only_in_cooldown_or_lockout, arg_browser_signal_for_debugging_only_sampling, arg_seller_timeout, arg_group_by_origin_id, arg_allow_group_by_origin_mode, arg_trace_id, arg_bidder_joining_origin, arg_score_ad_client) {
    return this.$.scoreAd(arg_ad_metadata_json, arg_bid, arg_bid_currency, arg_auction_ad_config_non_shared_params, arg_key_value_signals_cache_key, arg_ad, arg_ad_components, arg_direct_from_seller_seller_signals, arg_direct_from_seller_seller_signals_header_ad_slot, arg_direct_from_seller_auction_signals, arg_direct_from_seller_auction_signals_header_ad_slot, arg_browser_signals_other_seller, arg_component_expect_bid_currency, arg_browser_signal_interest_group_owner, arg_browser_signal_selected_buyer_and_seller_reporting_id, arg_browser_signal_buyer_and_seller_reporting_id, arg_browser_signal_bidding_duration_msecs, arg_browser_signal_for_debugging_only_in_cooldown_or_lockout, arg_browser_signal_for_debugging_only_sampling, arg_seller_timeout, arg_group_by_origin_id, arg_allow_group_by_origin_mode, arg_trace_id, arg_bidder_joining_origin, arg_score_ad_client);
  }
  sendPendingSignalsRequests() {
    return this.$.sendPendingSignalsRequests();
  }
  reportResult(arg_auction_ad_config_non_shared_params, arg_direct_from_seller_seller_signals, arg_direct_from_seller_seller_signals_header_ad_slot, arg_direct_from_seller_auction_signals, arg_direct_from_seller_auction_signals_header_ad_slot, arg_browser_signals_other_seller, arg_browser_signal_interest_group_owner, arg_browser_signal_buyer_and_seller_reporting_id, arg_browser_signal_selected_buyer_and_seller_reporting_id, arg_browser_signal_render_url, arg_browser_signal_bid, arg_browser_signal_bid_currency, arg_browser_signal_desirability, arg_browser_signal_highest_scoring_other_bid, arg_browser_signal_highest_scoring_other_bid_currency, arg_browser_signals_component_auction_report_result_params, arg_scoring_signals_data_version, arg_trace_id) {
    return this.$.reportResult(arg_auction_ad_config_non_shared_params, arg_direct_from_seller_seller_signals, arg_direct_from_seller_seller_signals_header_ad_slot, arg_direct_from_seller_auction_signals, arg_direct_from_seller_auction_signals_header_ad_slot, arg_browser_signals_other_seller, arg_browser_signal_interest_group_owner, arg_browser_signal_buyer_and_seller_reporting_id, arg_browser_signal_selected_buyer_and_seller_reporting_id, arg_browser_signal_render_url, arg_browser_signal_bid, arg_browser_signal_bid_currency, arg_browser_signal_desirability, arg_browser_signal_highest_scoring_other_bid, arg_browser_signal_highest_scoring_other_bid_currency, arg_browser_signals_component_auction_report_result_params, arg_scoring_signals_data_version, arg_trace_id);
  }
  connectDevToolsAgent(arg_agent, arg_thread_index) {
    return this.$.connectDevToolsAgent(arg_agent, arg_thread_index);
  }
};

mojo.internal.bindings.auction_worklet.mojom.SellerWorkletRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SellerWorklet', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  scoreAd(arg_ad_metadata_json, arg_bid, arg_bid_currency, arg_auction_ad_config_non_shared_params, arg_key_value_signals_cache_key, arg_ad, arg_ad_components, arg_direct_from_seller_seller_signals, arg_direct_from_seller_seller_signals_header_ad_slot, arg_direct_from_seller_auction_signals, arg_direct_from_seller_auction_signals_header_ad_slot, arg_browser_signals_other_seller, arg_component_expect_bid_currency, arg_browser_signal_interest_group_owner, arg_browser_signal_selected_buyer_and_seller_reporting_id, arg_browser_signal_buyer_and_seller_reporting_id, arg_browser_signal_bidding_duration_msecs, arg_browser_signal_for_debugging_only_in_cooldown_or_lockout, arg_browser_signal_for_debugging_only_sampling, arg_seller_timeout, arg_group_by_origin_id, arg_allow_group_by_origin_mode, arg_trace_id, arg_bidder_joining_origin, arg_score_ad_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ScoreAd_ParamsSpec,
      null,
      [arg_ad_metadata_json, arg_bid, arg_bid_currency, arg_auction_ad_config_non_shared_params, arg_key_value_signals_cache_key, arg_ad, arg_ad_components, arg_direct_from_seller_seller_signals, arg_direct_from_seller_seller_signals_header_ad_slot, arg_direct_from_seller_auction_signals, arg_direct_from_seller_auction_signals_header_ad_slot, arg_browser_signals_other_seller, arg_component_expect_bid_currency, arg_browser_signal_interest_group_owner, arg_browser_signal_selected_buyer_and_seller_reporting_id, arg_browser_signal_buyer_and_seller_reporting_id, arg_browser_signal_bidding_duration_msecs, arg_browser_signal_for_debugging_only_in_cooldown_or_lockout, arg_browser_signal_for_debugging_only_sampling, arg_seller_timeout, arg_group_by_origin_id, arg_allow_group_by_origin_mode, arg_trace_id, arg_bidder_joining_origin, arg_score_ad_client],
      false);
  }

  sendPendingSignalsRequests() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_SendPendingSignalsRequests_ParamsSpec,
      null,
      [],
      false);
  }

  reportResult(arg_auction_ad_config_non_shared_params, arg_direct_from_seller_seller_signals, arg_direct_from_seller_seller_signals_header_ad_slot, arg_direct_from_seller_auction_signals, arg_direct_from_seller_auction_signals_header_ad_slot, arg_browser_signals_other_seller, arg_browser_signal_interest_group_owner, arg_browser_signal_buyer_and_seller_reporting_id, arg_browser_signal_selected_buyer_and_seller_reporting_id, arg_browser_signal_render_url, arg_browser_signal_bid, arg_browser_signal_bid_currency, arg_browser_signal_desirability, arg_browser_signal_highest_scoring_other_bid, arg_browser_signal_highest_scoring_other_bid_currency, arg_browser_signals_component_auction_report_result_params, arg_scoring_signals_data_version, arg_trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ParamsSpec,
      mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ResponseParamsSpec,
      [arg_auction_ad_config_non_shared_params, arg_direct_from_seller_seller_signals, arg_direct_from_seller_seller_signals_header_ad_slot, arg_direct_from_seller_auction_signals, arg_direct_from_seller_auction_signals_header_ad_slot, arg_browser_signals_other_seller, arg_browser_signal_interest_group_owner, arg_browser_signal_buyer_and_seller_reporting_id, arg_browser_signal_selected_buyer_and_seller_reporting_id, arg_browser_signal_render_url, arg_browser_signal_bid, arg_browser_signal_bid_currency, arg_browser_signal_desirability, arg_browser_signal_highest_scoring_other_bid, arg_browser_signal_highest_scoring_other_bid_currency, arg_browser_signals_component_auction_report_result_params, arg_scoring_signals_data_version, arg_trace_id],
      false);
  }

  connectDevToolsAgent(arg_agent, arg_thread_index) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ConnectDevToolsAgent_ParamsSpec,
      null,
      [arg_agent, arg_thread_index],
      false);
  }

};

mojo.internal.bindings.auction_worklet.mojom.SellerWorklet.getRemote = function() {
  let remote = new mojo.internal.bindings.auction_worklet.mojom.SellerWorkletRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.SellerWorklet',
    'context');
  return remote.$;
};

mojo.internal.bindings.auction_worklet.mojom.SellerWorkletReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SellerWorklet', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ScoreAd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ScoreAd_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScoreAd (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendPendingSignalsRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_SendPendingSignalsRequests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendPendingSignalsRequests (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportResult (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ConnectDevToolsAgent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ConnectDevToolsAgent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectDevToolsAgent (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ScoreAd_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scoreAd');
          const result = this.impl.scoreAd(params.arg_ad_metadata_json, params.arg_bid, params.arg_bid_currency, params.arg_auction_ad_config_non_shared_params, params.arg_key_value_signals_cache_key, params.arg_ad, params.arg_ad_components, params.arg_direct_from_seller_seller_signals, params.arg_direct_from_seller_seller_signals_header_ad_slot, params.arg_direct_from_seller_auction_signals, params.arg_direct_from_seller_auction_signals_header_ad_slot, params.arg_browser_signals_other_seller, params.arg_component_expect_bid_currency, params.arg_browser_signal_interest_group_owner, params.arg_browser_signal_selected_buyer_and_seller_reporting_id, params.arg_browser_signal_buyer_and_seller_reporting_id, params.arg_browser_signal_bidding_duration_msecs, params.arg_browser_signal_for_debugging_only_in_cooldown_or_lockout, params.arg_browser_signal_for_debugging_only_sampling, params.arg_seller_timeout, params.arg_group_by_origin_id, params.arg_allow_group_by_origin_mode, params.arg_trace_id, params.arg_bidder_joining_origin, params.arg_score_ad_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_SendPendingSignalsRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendPendingSignalsRequests');
          const result = this.impl.sendPendingSignalsRequests();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportResult');
          const result = this.impl.reportResult(params.arg_auction_ad_config_non_shared_params, params.arg_direct_from_seller_seller_signals, params.arg_direct_from_seller_seller_signals_header_ad_slot, params.arg_direct_from_seller_auction_signals, params.arg_direct_from_seller_auction_signals_header_ad_slot, params.arg_browser_signals_other_seller, params.arg_browser_signal_interest_group_owner, params.arg_browser_signal_buyer_and_seller_reporting_id, params.arg_browser_signal_selected_buyer_and_seller_reporting_id, params.arg_browser_signal_render_url, params.arg_browser_signal_bid, params.arg_browser_signal_bid_currency, params.arg_browser_signal_desirability, params.arg_browser_signal_highest_scoring_other_bid, params.arg_browser_signal_highest_scoring_other_bid_currency, params.arg_browser_signals_component_auction_report_result_params, params.arg_scoring_signals_data_version, params.arg_trace_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ReportResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReportResult FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.auction_worklet.mojom.SellerWorklet_ConnectDevToolsAgent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectDevToolsAgent');
          const result = this.impl.connectDevToolsAgent(params.arg_agent, params.arg_thread_index);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.auction_worklet.mojom.SellerWorkletReceiver = mojo.internal.bindings.auction_worklet.mojom.SellerWorkletReceiver;

mojo.internal.bindings.auction_worklet.mojom.SellerWorkletPtr = mojo.internal.bindings.auction_worklet.mojom.SellerWorkletRemote;
mojo.internal.bindings.auction_worklet.mojom.SellerWorkletRequest = mojo.internal.bindings.auction_worklet.mojom.SellerWorkletPendingReceiver;

