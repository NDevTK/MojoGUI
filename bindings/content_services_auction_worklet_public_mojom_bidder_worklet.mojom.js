// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/bidder_worklet.mojom
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
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

auction_worklet.mojom.KAnonymityBidModeSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.KAnonymityStatusSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.BidRoleSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.ReportingIdFieldSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.KAnonKeySpec = { $: {} };
auction_worklet.mojom.BidderWorkletNonSharedParamsSpec = { $: {} };
auction_worklet.mojom.BidderWorkletBidSpec = { $: {} };
auction_worklet.mojom.PrioritySignalsDoubleSpec = { $: {} };
auction_worklet.mojom.GenerateBidDependencyLatenciesSpec = { $: {} };
auction_worklet.mojom.BidderTimingMetricsSpec = { $: {} };
auction_worklet.mojom.PrivateModelTrainingRequestDataSpec = { $: {} };
auction_worklet.mojom.GenerateBidClient = {};
auction_worklet.mojom.GenerateBidClient.$interfaceName = 'auction_worklet.mojom.GenerateBidClient';
auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec = { $: {} };
auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ResponseParamsSpec = { $: {} };
auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec = { $: {} };
auction_worklet.mojom.GenerateBidFinalizer = {};
auction_worklet.mojom.GenerateBidFinalizer.$interfaceName = 'auction_worklet.mojom.GenerateBidFinalizer';
auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec = { $: {} };
auction_worklet.mojom.BidderWorklet = {};
auction_worklet.mojom.BidderWorklet.$interfaceName = 'auction_worklet.mojom.BidderWorklet';
auction_worklet.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec = { $: {} };
auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec = { $: {} };
auction_worklet.mojom.BidderWorklet_ReportWin_ParamsSpec = { $: {} };
auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParamsSpec = { $: {} };
auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec = { $: {} };

// Enum: KAnonymityBidMode
auction_worklet.mojom.KAnonymityBidMode = {
  kNone: 0,
  kSimulate: 1,
  kEnforce: 2,
};

// Enum: KAnonymityStatus
auction_worklet.mojom.KAnonymityStatus = {
  kUnknown: 0,
  kBelowThreshold: 1,
  kPassingNotEnforced: 2,
  kPassingAndEnforced: 3,
};

// Enum: BidRole
auction_worklet.mojom.BidRole = {
  kUnenforcedKAnon: 0,
  kEnforcedKAnon: 1,
  kBothKAnonModes: 2,
};

// Enum: ReportingIdField
auction_worklet.mojom.ReportingIdField = {
  kNone: 0,
  kInterestGroupName: 1,
  kBuyerReportingId: 2,
  kBuyerAndSellerReportingId: 3,
  kSelectedBuyerAndSellerReportingId: 4,
};

// Struct: KAnonKey
mojo.internal.Struct(
    auction_worklet.mojom.KAnonKeySpec, 'auction_worklet.mojom.KAnonKey', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BidderWorkletNonSharedParams
mojo.internal.Struct(
    auction_worklet.mojom.BidderWorkletNonSharedParamsSpec, 'auction_worklet.mojom.BidderWorkletNonSharedParams', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_slot_size_mode', 8, 0, blink.mojom.InterestGroup.TrustedBiddingSignalsSlotSizeModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority_vector', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Double, false), null, true, 0, undefined),
      mojo.internal.StructField('execution_mode', 24, 0, blink.mojom.InterestGroup.ExecutionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_url', 32, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_keys', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('user_bidding_signals', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ads', 56, 0, mojo.internal.Array(blink.mojom.InterestGroupAdSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('ad_components', 64, 0, mojo.internal.Array(blink.mojom.InterestGroupAdSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('kanon_keys', 72, 0, mojo.internal.Array(auction_worklet.mojom.KAnonKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('max_trusted_bidding_signals_url_length', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_bidding_signals_prioritization', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: BidderWorkletBid
mojo.internal.Struct(
    auction_worklet.mojom.BidderWorkletBidSpec, 'auction_worklet.mojom.BidderWorkletBid', [
      mojo.internal.StructField('bid_role', 0, 0, auction_worklet.mojom.BidRoleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ad', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bid', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('bid_currency', 24, 0, blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ad_cost_$value', 32, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'ad_cost_$flag', originalFieldName: 'ad_cost' }),
      mojo.internal.StructField('ad_descriptor', 40, 0, blink.mojom.AdDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected_buyer_and_seller_reporting_id', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ad_component_descriptors', 56, 0, mojo.internal.Array(blink.mojom.AdDescriptorSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('aggregate_win_signals', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('bid_duration', 72, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modeling_signals_$value', 80, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'modeling_signals_$flag', originalFieldName: 'modeling_signals' }),
      mojo.internal.StructField('ad_cost_$flag', 82, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ad_cost_$value', originalFieldName: 'ad_cost' }),
      mojo.internal.StructField('modeling_signals_$flag', 82, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'modeling_signals_$value', originalFieldName: 'modeling_signals' }),
    ],
    [[0, 96]]);

// Struct: PrioritySignalsDouble
mojo.internal.Struct(
    auction_worklet.mojom.PrioritySignalsDoubleSpec, 'auction_worklet.mojom.PrioritySignalsDouble', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GenerateBidDependencyLatencies
mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidDependencyLatenciesSpec, 'auction_worklet.mojom.GenerateBidDependencyLatencies', [
      mojo.internal.StructField('code_ready_latency', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('config_promises_latency', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_signals_latency', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_latency', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('deps_wait_start_time', 32, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('generate_bid_start_time', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('generate_bid_finish_time', 48, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: BidderTimingMetrics
mojo.internal.Struct(
    auction_worklet.mojom.BidderTimingMetricsSpec, 'auction_worklet.mojom.BidderTimingMetrics', [
      mojo.internal.StructField('js_fetch_latency', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wasm_fetch_latency', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('script_latency', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_timed_out', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PrivateModelTrainingRequestData
mojo.internal.Struct(
    auction_worklet.mojom.PrivateModelTrainingRequestDataSpec, 'auction_worklet.mojom.PrivateModelTrainingRequestData', [
      mojo.internal.StructField('payload', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('aggregation_coordinator_origin', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('payload_length', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: GenerateBidClient
mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec, 'auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_Params', [
      mojo.internal.StructField('priority_vector', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('trusted_signals_fetch_latency', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_if_older_than', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ResponseParamsSpec, 'auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec, 'auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_Params', [
      mojo.internal.StructField('bids', 0, 0, mojo.internal.Array(auction_worklet.mojom.BidderWorkletBidSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('debug_loss_report_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('debug_win_report_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('set_priority_$value', 24, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'set_priority_$flag', originalFieldName: 'set_priority' }),
      mojo.internal.StructField('update_priority_signals_overrides', 32, 0, mojo.internal.Map(mojo.internal.String, auction_worklet.mojom.PrioritySignalsDoubleSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('pa_requests', 40, 0, mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('non_kanon_pa_requests', 48, 0, mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('real_time_contributions', 56, 0, mojo.internal.Array(auction_worklet.mojom.RealTimeReportingContributionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('generate_bid_timing_metrics', 64, 0, auction_worklet.mojom.BidderTimingMetricsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('generate_bid_dependency_latencies', 72, 0, auction_worklet.mojom.GenerateBidDependencyLatenciesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reject_reason', 80, 0, auction_worklet.mojom.RejectReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('errors', 88, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('bidding_signals_data_version_$value', 96, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'bidding_signals_data_version_$flag', originalFieldName: 'bidding_signals_data_version' }),
      mojo.internal.StructField('bidding_signals_data_version_$flag', 100, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'bidding_signals_data_version_$value', originalFieldName: 'bidding_signals_data_version' }),
      mojo.internal.StructField('set_priority_$flag', 100, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'set_priority_$value', originalFieldName: 'set_priority' }),
    ],
    [[0, 112]]);

auction_worklet.mojom.GenerateBidClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.GenerateBidClientRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.GenerateBidClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.GenerateBidClientPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.GenerateBidClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.GenerateBidClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GenerateBidClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBiddingSignalsReceived(priority_vector, trusted_signals_fetch_latency, update_if_older_than) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec,
      auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ResponseParamsSpec,
      [priority_vector, trusted_signals_fetch_latency, update_if_older_than],
      false);
  }

  onGenerateBidComplete(bids, bidding_signals_data_version, debug_loss_report_url, debug_win_report_url, set_priority, update_priority_signals_overrides, pa_requests, non_kanon_pa_requests, real_time_contributions, generate_bid_timing_metrics, generate_bid_dependency_latencies, reject_reason, errors) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec,
      null,
      [bids, bidding_signals_data_version, debug_loss_report_url, debug_win_report_url, set_priority, update_priority_signals_overrides, pa_requests, non_kanon_pa_requests, real_time_contributions, generate_bid_timing_metrics, generate_bid_dependency_latencies, reject_reason, errors],
      false);
  }

};

auction_worklet.mojom.GenerateBidClient.getRemote = function() {
  let remote = new auction_worklet.mojom.GenerateBidClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.GenerateBidClient',
    'context');
  return remote.$;
};

auction_worklet.mojom.GenerateBidClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GenerateBidClient', [
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
        
        // Try Method 0: OnBiddingSignalsReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBiddingSignalsReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnGenerateBidComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGenerateBidComplete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBiddingSignalsReceived');
          const result = this.impl.onBiddingSignalsReceived(params.priority_vector, params.trusted_signals_fetch_latency, params.update_if_older_than);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGenerateBidComplete');
          const result = this.impl.onGenerateBidComplete(params.bids, params.bidding_signals_data_version, params.debug_loss_report_url, params.debug_win_report_url, params.set_priority, params.update_priority_signals_overrides, params.pa_requests, params.non_kanon_pa_requests, params.real_time_contributions, params.generate_bid_timing_metrics, params.generate_bid_dependency_latencies, params.reject_reason, params.errors);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.GenerateBidClientReceiver = auction_worklet.mojom.GenerateBidClientReceiver;

auction_worklet.mojom.GenerateBidClientPtr = auction_worklet.mojom.GenerateBidClientRemote;
auction_worklet.mojom.GenerateBidClientRequest = auction_worklet.mojom.GenerateBidClientPendingReceiver;


// Interface: GenerateBidFinalizer
mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec, 'auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_Params', [
      mojo.internal.StructField('auction_signals_json', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('per_buyer_signals_json', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('per_buyer_timeout', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('expected_buyer_currency', 24, 0, blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals', 32, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals_header_ad_slot', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals', 48, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals_header_ad_slot', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

auction_worklet.mojom.GenerateBidFinalizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.GenerateBidFinalizerRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.GenerateBidFinalizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.GenerateBidFinalizerPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.GenerateBidFinalizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.GenerateBidFinalizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GenerateBidFinalizer', [
      { explicit: null },
    ]);
  }

  finishGenerateBid(auction_signals_json, per_buyer_signals_json, per_buyer_timeout, expected_buyer_currency, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec,
      null,
      [auction_signals_json, per_buyer_signals_json, per_buyer_timeout, expected_buyer_currency, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot],
      false);
  }

};

auction_worklet.mojom.GenerateBidFinalizer.getRemote = function() {
  let remote = new auction_worklet.mojom.GenerateBidFinalizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.GenerateBidFinalizer',
    'context');
  return remote.$;
};

auction_worklet.mojom.GenerateBidFinalizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GenerateBidFinalizer', [
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
        
        // Try Method 0: FinishGenerateBid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinishGenerateBid (0)');
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
          const params = decoder.decodeStructInline(auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finishGenerateBid');
          const result = this.impl.finishGenerateBid(params.auction_signals_json, params.per_buyer_signals_json, params.per_buyer_timeout, params.expected_buyer_currency, params.direct_from_seller_per_buyer_signals, params.direct_from_seller_per_buyer_signals_header_ad_slot, params.direct_from_seller_auction_signals, params.direct_from_seller_auction_signals_header_ad_slot);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.GenerateBidFinalizerReceiver = auction_worklet.mojom.GenerateBidFinalizerReceiver;

auction_worklet.mojom.GenerateBidFinalizerPtr = auction_worklet.mojom.GenerateBidFinalizerRemote;
auction_worklet.mojom.GenerateBidFinalizerRequest = auction_worklet.mojom.GenerateBidFinalizerPendingReceiver;


// Interface: BidderWorklet
mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec, 'auction_worklet.mojom.BidderWorklet_BeginGenerateBid_Params', [
      mojo.internal.StructField('bidder_worklet_non_shared_params', 0, 0, auction_worklet.mojom.BidderWorkletNonSharedParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_value_signals_cache_key', 8, 0, auction_worklet.mojom.TrustedSignalsCacheKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('kanon_mode', 16, 0, auction_worklet.mojom.KAnonymityBidModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interest_group_join_origin', 24, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals', 32, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals', 40, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_seller_origin', 48, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_top_level_seller_origin', 56, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_recency', 64, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bidding_browser_signals', 72, 0, blink.mojom.BiddingBrowserSignalsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auction_start_time', 80, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('requested_ad_size', 88, 0, blink.mojom.AdSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('group_by_origin_id', 96, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('trace_id', 104, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('generate_bid_client', 112, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('bid_finalizer', 120, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('multi_bid_limit', 128, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('browser_signal_for_debugging_only_sampling', 130, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec, 'auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_ReportWin_ParamsSpec, 'auction_worklet.mojom.BidderWorklet_ReportWin_Params', [
      mojo.internal.StructField('interest_group_name_reporting_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('buyer_reporting_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('buyer_and_seller_reporting_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('selected_buyer_and_seller_reporting_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('auction_signals_json', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('per_buyer_signals_json', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals', 48, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals_header_ad_slot', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals', 64, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals_header_ad_slot', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('seller_signals_json', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('kanon_status', 88, 0, auction_worklet.mojom.KAnonymityStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_render_url', 96, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_bid', 104, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('browser_signal_bid_currency', 112, 0, blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_highest_scoring_other_bid', 120, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('browser_signal_highest_scoring_other_bid_currency', 128, 0, blink.mojom.AdCurrencySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_ad_cost_$value', 136, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'browser_signal_ad_cost_$flag', originalFieldName: 'browser_signal_ad_cost' }),
      mojo.internal.StructField('browser_signal_seller_origin', 144, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_top_level_seller_origin', 152, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_reporting_timeout', 160, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('aggregate_win_signals', 168, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('trace_id', 176, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('bidding_signals_data_version_$value', 184, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'bidding_signals_data_version_$flag', originalFieldName: 'bidding_signals_data_version' }),
      mojo.internal.StructField('browser_signal_modeling_signals_$value', 188, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'browser_signal_modeling_signals_$flag', originalFieldName: 'browser_signal_modeling_signals' }),
      mojo.internal.StructField('is_for_additional_bid', 190, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browser_signal_made_highest_scoring_other_bid', 190, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browser_signal_ad_cost_$flag', 190, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'browser_signal_ad_cost_$value', originalFieldName: 'browser_signal_ad_cost' }),
      mojo.internal.StructField('browser_signal_modeling_signals_$flag', 190, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'browser_signal_modeling_signals_$value', originalFieldName: 'browser_signal_modeling_signals' }),
      mojo.internal.StructField('browser_signal_join_count', 191, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('browser_signal_recency', 192, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('bidding_signals_data_version_$flag', 193, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'bidding_signals_data_version_$value', originalFieldName: 'bidding_signals_data_version' }),
    ],
    [[0, 208]]);

mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParamsSpec, 'auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParams', [
      mojo.internal.StructField('report_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ad_beacon_map', 8, 0, mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('ad_macro_map', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('pa_requests', 24, 0, mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pmt_request_data', 32, 0, auction_worklet.mojom.PrivateModelTrainingRequestDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('timing_metrics', 40, 0, auction_worklet.mojom.BidderTimingMetricsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('errors', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec, 'auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_Params', [
      mojo.internal.StructField('agent', 0, 0, pending_associated_receiver<blink.mojom.DevToolsAgent>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('thread_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

auction_worklet.mojom.BidderWorkletPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.BidderWorkletRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.BidderWorklet';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.BidderWorkletPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.BidderWorkletRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.BidderWorkletRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BidderWorklet', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  beginGenerateBid(bidder_worklet_non_shared_params, key_value_signals_cache_key, kanon_mode, interest_group_join_origin, direct_from_seller_per_buyer_signals, direct_from_seller_auction_signals, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_recency, browser_signal_for_debugging_only_sampling, bidding_browser_signals, auction_start_time, requested_ad_size, multi_bid_limit, group_by_origin_id, trace_id, generate_bid_client, bid_finalizer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec,
      null,
      [bidder_worklet_non_shared_params, key_value_signals_cache_key, kanon_mode, interest_group_join_origin, direct_from_seller_per_buyer_signals, direct_from_seller_auction_signals, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_recency, browser_signal_for_debugging_only_sampling, bidding_browser_signals, auction_start_time, requested_ad_size, multi_bid_limit, group_by_origin_id, trace_id, generate_bid_client, bid_finalizer],
      false);
  }

  sendPendingSignalsRequests() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec,
      null,
      [],
      false);
  }

  reportWin(is_for_additional_bid, interest_group_name_reporting_id, buyer_reporting_id, buyer_and_seller_reporting_id, selected_buyer_and_seller_reporting_id, auction_signals_json, per_buyer_signals_json, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, seller_signals_json, kanon_status, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signal_made_highest_scoring_other_bid, browser_signal_ad_cost, browser_signal_modeling_signals, browser_signal_join_count, browser_signal_recency, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_reporting_timeout, bidding_signals_data_version, aggregate_win_signals, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      auction_worklet.mojom.BidderWorklet_ReportWin_ParamsSpec,
      auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParamsSpec,
      [is_for_additional_bid, interest_group_name_reporting_id, buyer_reporting_id, buyer_and_seller_reporting_id, selected_buyer_and_seller_reporting_id, auction_signals_json, per_buyer_signals_json, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, seller_signals_json, kanon_status, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signal_made_highest_scoring_other_bid, browser_signal_ad_cost, browser_signal_modeling_signals, browser_signal_join_count, browser_signal_recency, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_reporting_timeout, bidding_signals_data_version, aggregate_win_signals, trace_id],
      false);
  }

  connectDevToolsAgent(agent, thread_index) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec,
      null,
      [agent, thread_index],
      false);
  }

};

auction_worklet.mojom.BidderWorklet.getRemote = function() {
  let remote = new auction_worklet.mojom.BidderWorkletRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.BidderWorklet',
    'context');
  return remote.$;
};

auction_worklet.mojom.BidderWorkletReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BidderWorklet', [
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
        
        // Try Method 0: BeginGenerateBid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginGenerateBid (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendPendingSignalsRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendPendingSignalsRequests (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportWin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.BidderWorklet_ReportWin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportWin (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ConnectDevToolsAgent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec);
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
          const params = decoder.decodeStructInline(auction_worklet.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginGenerateBid');
          const result = this.impl.beginGenerateBid(params.bidder_worklet_non_shared_params, params.key_value_signals_cache_key, params.kanon_mode, params.interest_group_join_origin, params.direct_from_seller_per_buyer_signals, params.direct_from_seller_auction_signals, params.browser_signal_seller_origin, params.browser_signal_top_level_seller_origin, params.browser_signal_recency, params.browser_signal_for_debugging_only_sampling, params.bidding_browser_signals, params.auction_start_time, params.requested_ad_size, params.multi_bid_limit, params.group_by_origin_id, params.trace_id, params.generate_bid_client, params.bid_finalizer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendPendingSignalsRequests');
          const result = this.impl.sendPendingSignalsRequests();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.BidderWorklet_ReportWin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportWin');
          const result = this.impl.reportWin(params.is_for_additional_bid, params.interest_group_name_reporting_id, params.buyer_reporting_id, params.buyer_and_seller_reporting_id, params.selected_buyer_and_seller_reporting_id, params.auction_signals_json, params.per_buyer_signals_json, params.direct_from_seller_per_buyer_signals, params.direct_from_seller_per_buyer_signals_header_ad_slot, params.direct_from_seller_auction_signals, params.direct_from_seller_auction_signals_header_ad_slot, params.seller_signals_json, params.kanon_status, params.browser_signal_render_url, params.browser_signal_bid, params.browser_signal_bid_currency, params.browser_signal_highest_scoring_other_bid, params.browser_signal_highest_scoring_other_bid_currency, params.browser_signal_made_highest_scoring_other_bid, params.browser_signal_ad_cost, params.browser_signal_modeling_signals, params.browser_signal_join_count, params.browser_signal_recency, params.browser_signal_seller_origin, params.browser_signal_top_level_seller_origin, params.browser_signal_reporting_timeout, params.bidding_signals_data_version, params.aggregate_win_signals, params.trace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectDevToolsAgent');
          const result = this.impl.connectDevToolsAgent(params.agent, params.thread_index);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.BidderWorkletReceiver = auction_worklet.mojom.BidderWorkletReceiver;

auction_worklet.mojom.BidderWorkletPtr = auction_worklet.mojom.BidderWorkletRemote;
auction_worklet.mojom.BidderWorkletRequest = auction_worklet.mojom.BidderWorkletPendingReceiver;

