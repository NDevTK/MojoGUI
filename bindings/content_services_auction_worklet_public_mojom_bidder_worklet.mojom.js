// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/bidder_worklet.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var content = content || {};
var services = services || {};
var content = content || {};
var services = services || {};
var content = content || {};
var services = services || {};
var content = content || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
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
      mojo.internal.StructField('trusted_bidding_signals_slot_size_mode', 8, 0, blink.mojom.InterestGroup.TrustedBiddingSignalsSlotSizeModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('enable_bidding_signals_prioritization', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('priority_vector', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Double, false), null, true, 0, undefined),
      mojo.internal.StructField('execution_mode', 32, 0, blink.mojom.InterestGroup.ExecutionModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('update_url', 40, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_keys', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('max_trusted_bidding_signals_url_length', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('user_bidding_signals', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ads', 72, 0, mojo.internal.Array(blink.mojom.InterestGroupAdSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('ad_components', 80, 0, mojo.internal.Array(blink.mojom.InterestGroupAdSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('kanon_keys', 88, 0, mojo.internal.Array(auction_worklet.mojom.KAnonKeySpec, false), null, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: BidderWorkletBid
mojo.internal.Struct(
    auction_worklet.mojom.BidderWorkletBidSpec, 'auction_worklet.mojom.BidderWorkletBid', [
      mojo.internal.StructField('bid_role', 0, 0, auction_worklet.mojom.BidRoleSpec, null, false, 0, undefined),
      mojo.internal.StructField('ad', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bid', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('bid_currency', 24, 0, blink.mojom.AdCurrencySpec, null, true, 0, undefined),
      mojo.internal.StructField('ad_cost_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'ad_cost_$value', originalFieldName: 'ad_cost' }),
      mojo.internal.StructField('ad_cost_$value', 40, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'ad_cost_$flag', originalFieldName: 'ad_cost' }),
      mojo.internal.StructField('ad_descriptor', 48, 0, blink.mojom.AdDescriptorSpec, null, false, 0, undefined),
      mojo.internal.StructField('selected_buyer_and_seller_reporting_id', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ad_component_descriptors', 64, 0, mojo.internal.Array(blink.mojom.AdDescriptorSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('modeling_signals_$flag', 72, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'modeling_signals_$value', originalFieldName: 'modeling_signals' }),
      mojo.internal.StructField('modeling_signals_$value', 74, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'modeling_signals_$flag', originalFieldName: 'modeling_signals' }),
      mojo.internal.StructField('aggregate_win_signals', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('bid_duration', 88, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: PrioritySignalsDouble
mojo.internal.Struct(
    auction_worklet.mojom.PrioritySignalsDoubleSpec, 'auction_worklet.mojom.PrioritySignalsDouble', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GenerateBidDependencyLatencies
mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidDependencyLatenciesSpec, 'auction_worklet.mojom.GenerateBidDependencyLatencies', [
      mojo.internal.StructField('code_ready_latency', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('config_promises_latency', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_signals_latency', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_latency', 24, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('deps_wait_start_time', 32, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('generate_bid_start_time', 40, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('generate_bid_finish_time', 48, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: BidderTimingMetrics
mojo.internal.Struct(
    auction_worklet.mojom.BidderTimingMetricsSpec, 'auction_worklet.mojom.BidderTimingMetrics', [
      mojo.internal.StructField('js_fetch_latency', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('wasm_fetch_latency', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('script_latency', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('script_timed_out', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PrivateModelTrainingRequestData
mojo.internal.Struct(
    auction_worklet.mojom.PrivateModelTrainingRequestDataSpec, 'auction_worklet.mojom.PrivateModelTrainingRequestData', [
      mojo.internal.StructField('payload', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('payload_length', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('aggregation_coordinator_origin', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('destination', 32, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: GenerateBidClient
mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec, 'auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_Params', [
      mojo.internal.StructField('priority_vector', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('trusted_signals_fetch_latency', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('update_if_older_than', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ResponseParamsSpec, 'auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec, 'auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_Params', [
      mojo.internal.StructField('bids', 0, 0, mojo.internal.Array(auction_worklet.mojom.BidderWorkletBidSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('bidding_signals_data_version_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'bidding_signals_data_version_$value', originalFieldName: 'bidding_signals_data_version' }),
      mojo.internal.StructField('bidding_signals_data_version_$value', 12, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'bidding_signals_data_version_$flag', originalFieldName: 'bidding_signals_data_version' }),
      mojo.internal.StructField('debug_loss_report_url', 16, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('debug_win_report_url', 24, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('set_priority_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'set_priority_$value', originalFieldName: 'set_priority' }),
      mojo.internal.StructField('set_priority_$value', 40, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'set_priority_$flag', originalFieldName: 'set_priority' }),
      mojo.internal.StructField('update_priority_signals_overrides', 48, 0, mojo.internal.Map(mojo.internal.String, auction_worklet.mojom.PrioritySignalsDoubleSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('pa_requests', 56, 0, mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('non_kanon_pa_requests', 64, 0, mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('real_time_contributions', 72, 0, mojo.internal.Array(auction_worklet.mojom.RealTimeReportingContributionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('generate_bid_timing_metrics', 80, 0, auction_worklet.mojom.BidderTimingMetricsSpec, null, false, 0, undefined),
      mojo.internal.StructField('generate_bid_dependency_latencies', 88, 0, auction_worklet.mojom.GenerateBidDependencyLatenciesSpec, null, false, 0, undefined),
      mojo.internal.StructField('reject_reason', 96, 0, auction_worklet.mojom.RejectReasonSpec, null, false, 0, undefined),
      mojo.internal.StructField('errors', 104, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 120]]);

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
  }

  onBiddingSignalsReceived(priority_vector, trusted_signals_fetch_latency, update_if_older_than) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec,
      auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ResponseParamsSpec,
      [priority_vector, trusted_signals_fetch_latency, update_if_older_than]);
  }

  onGenerateBidComplete(bids, bidding_signals_data_version, debug_loss_report_url, debug_win_report_url, set_priority, update_priority_signals_overrides, pa_requests, non_kanon_pa_requests, real_time_contributions, generate_bid_timing_metrics, generate_bid_dependency_latencies, reject_reason, errors) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec,
      null,
      [bids, bidding_signals_data_version, debug_loss_report_url, debug_win_report_url, set_priority, update_priority_signals_overrides, pa_requests, non_kanon_pa_requests, real_time_contributions, generate_bid_timing_metrics, generate_bid_dependency_latencies, reject_reason, errors]);
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

auction_worklet.mojom.GenerateBidClientPtr = auction_worklet.mojom.GenerateBidClientRemote;
auction_worklet.mojom.GenerateBidClientRequest = auction_worklet.mojom.GenerateBidClientPendingReceiver;


// Interface: GenerateBidFinalizer
mojo.internal.Struct(
    auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec, 'auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_Params', [
      mojo.internal.StructField('auction_signals_json', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('per_buyer_signals_json', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('per_buyer_timeout', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('expected_buyer_currency', 24, 0, blink.mojom.AdCurrencySpec, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals', 32, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals_header_ad_slot', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals', 48, 0, url.mojom.UrlSpec, null, true, 0, undefined),
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
  }

  finishGenerateBid(auction_signals_json, per_buyer_signals_json, per_buyer_timeout, expected_buyer_currency, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec,
      null,
      [auction_signals_json, per_buyer_signals_json, per_buyer_timeout, expected_buyer_currency, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot]);
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

auction_worklet.mojom.GenerateBidFinalizerPtr = auction_worklet.mojom.GenerateBidFinalizerRemote;
auction_worklet.mojom.GenerateBidFinalizerRequest = auction_worklet.mojom.GenerateBidFinalizerPendingReceiver;


// Interface: BidderWorklet
mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec, 'auction_worklet.mojom.BidderWorklet_BeginGenerateBid_Params', [
      mojo.internal.StructField('bidder_worklet_non_shared_params', 0, 0, auction_worklet.mojom.BidderWorkletNonSharedParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('key_value_signals_cache_key', 8, 0, auction_worklet.mojom.TrustedSignalsCacheKeySpec, null, true, 0, undefined),
      mojo.internal.StructField('kanon_mode', 16, 0, auction_worklet.mojom.KAnonymityBidModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('interest_group_join_origin', 24, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals', 32, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals', 40, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_seller_origin', 48, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_top_level_seller_origin', 56, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_recency', 64, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_for_debugging_only_sampling', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bidding_browser_signals', 80, 0, blink.mojom.BiddingBrowserSignalsSpec, null, false, 0, undefined),
      mojo.internal.StructField('auction_start_time', 88, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('requested_ad_size', 96, 0, blink.mojom.AdSizeSpec, null, true, 0, undefined),
      mojo.internal.StructField('multi_bid_limit', 104, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('group_by_origin_id', 112, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('trace_id', 120, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('generate_bid_client', 128, 0, mojo.internal.AssociatedInterfaceProxy(auction_worklet.mojom.GenerateBidClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('bid_finalizer', 136, 0, mojo.internal.AssociatedInterfaceRequest(auction_worklet.mojom.GenerateBidFinalizerRemote), null, false, 0, undefined),
    ],
    [[0, 152]]);

mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec, 'auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_ReportWin_ParamsSpec, 'auction_worklet.mojom.BidderWorklet_ReportWin_Params', [
      mojo.internal.StructField('is_for_additional_bid', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('interest_group_name_reporting_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('buyer_reporting_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('buyer_and_seller_reporting_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('selected_buyer_and_seller_reporting_id', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('auction_signals_json', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('per_buyer_signals_json', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals', 56, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_per_buyer_signals_header_ad_slot', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals', 72, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('direct_from_seller_auction_signals_header_ad_slot', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('seller_signals_json', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('kanon_status', 96, 0, auction_worklet.mojom.KAnonymityStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_render_url', 104, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_bid', 112, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('browser_signal_bid_currency', 120, 0, blink.mojom.AdCurrencySpec, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_highest_scoring_other_bid', 128, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('browser_signal_highest_scoring_other_bid_currency', 136, 0, blink.mojom.AdCurrencySpec, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_made_highest_scoring_other_bid', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browser_signal_ad_cost_$flag', 144, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'browser_signal_ad_cost_$value', originalFieldName: 'browser_signal_ad_cost' }),
      mojo.internal.StructField('browser_signal_ad_cost_$value', 152, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'browser_signal_ad_cost_$flag', originalFieldName: 'browser_signal_ad_cost' }),
      mojo.internal.StructField('browser_signal_modeling_signals_$flag', 160, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'browser_signal_modeling_signals_$value', originalFieldName: 'browser_signal_modeling_signals' }),
      mojo.internal.StructField('browser_signal_modeling_signals_$value', 162, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'browser_signal_modeling_signals_$flag', originalFieldName: 'browser_signal_modeling_signals' }),
      mojo.internal.StructField('browser_signal_join_count', 164, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('browser_signal_recency', 165, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('browser_signal_seller_origin', 168, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('browser_signal_top_level_seller_origin', 176, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('browser_signal_reporting_timeout', 184, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('bidding_signals_data_version_$flag', 192, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'bidding_signals_data_version_$value', originalFieldName: 'bidding_signals_data_version' }),
      mojo.internal.StructField('bidding_signals_data_version_$value', 196, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'bidding_signals_data_version_$flag', originalFieldName: 'bidding_signals_data_version' }),
      mojo.internal.StructField('aggregate_win_signals', 200, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('trace_id', 208, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 224]]);

mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParamsSpec, 'auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParams', [
      mojo.internal.StructField('report_url', 0, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('ad_beacon_map', 8, 0, mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('ad_macro_map', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('pa_requests', 24, 0, mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('pmt_request_data', 32, 0, auction_worklet.mojom.PrivateModelTrainingRequestDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('timing_metrics', 40, 0, auction_worklet.mojom.BidderTimingMetricsSpec, null, false, 0, undefined),
      mojo.internal.StructField('errors', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec, 'auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
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
  }

  beginGenerateBid(bidder_worklet_non_shared_params, key_value_signals_cache_key, kanon_mode, interest_group_join_origin, direct_from_seller_per_buyer_signals, direct_from_seller_auction_signals, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_recency, browser_signal_for_debugging_only_sampling, bidding_browser_signals, auction_start_time, requested_ad_size, multi_bid_limit, group_by_origin_id, trace_id, generate_bid_client, bid_finalizer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec,
      null,
      [bidder_worklet_non_shared_params, key_value_signals_cache_key, kanon_mode, interest_group_join_origin, direct_from_seller_per_buyer_signals, direct_from_seller_auction_signals, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_recency, browser_signal_for_debugging_only_sampling, bidding_browser_signals, auction_start_time, requested_ad_size, multi_bid_limit, group_by_origin_id, trace_id, generate_bid_client, bid_finalizer]);
  }

  sendPendingSignalsRequests() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec,
      null,
      []);
  }

  reportWin(is_for_additional_bid, interest_group_name_reporting_id, buyer_reporting_id, buyer_and_seller_reporting_id, selected_buyer_and_seller_reporting_id, auction_signals_json, per_buyer_signals_json, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, seller_signals_json, kanon_status, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signal_made_highest_scoring_other_bid, browser_signal_ad_cost, browser_signal_modeling_signals, browser_signal_join_count, browser_signal_recency, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_reporting_timeout, bidding_signals_data_version, aggregate_win_signals, trace_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      auction_worklet.mojom.BidderWorklet_ReportWin_ParamsSpec,
      auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParamsSpec,
      [is_for_additional_bid, interest_group_name_reporting_id, buyer_reporting_id, buyer_and_seller_reporting_id, selected_buyer_and_seller_reporting_id, auction_signals_json, per_buyer_signals_json, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, seller_signals_json, kanon_status, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signal_made_highest_scoring_other_bid, browser_signal_ad_cost, browser_signal_modeling_signals, browser_signal_join_count, browser_signal_recency, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_reporting_timeout, bidding_signals_data_version, aggregate_win_signals, trace_id]);
  }

  connectDevToolsAgent(agent, thread_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec,
      null,
      [agent, thread_index]);
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

auction_worklet.mojom.BidderWorkletPtr = auction_worklet.mojom.BidderWorkletRemote;
auction_worklet.mojom.BidderWorkletRequest = auction_worklet.mojom.BidderWorkletPendingReceiver;

