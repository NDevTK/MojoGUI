// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/bidder_worklet.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


// Enum: KAnonymityBidMode
auction_worklet.mojom.mojom.KAnonymityBidMode = {
  kNone: 0,
  kSimulate: 1,
  kEnforce: 2,
};
auction_worklet.mojom.mojom.KAnonymityBidModeSpec = { $: mojo.internal.Enum() };

// Enum: KAnonymityStatus
auction_worklet.mojom.mojom.KAnonymityStatus = {
  kUnknown: 0,
  kBelowThreshold: 1,
  kPassingNotEnforced: 2,
  kPassingAndEnforced: 3,
};
auction_worklet.mojom.mojom.KAnonymityStatusSpec = { $: mojo.internal.Enum() };

// Enum: BidRole
auction_worklet.mojom.mojom.BidRole = {
  kUnenforcedKAnon: 0,
  kEnforcedKAnon: 1,
  kBothKAnonModes: 2,
};
auction_worklet.mojom.mojom.BidRoleSpec = { $: mojo.internal.Enum() };

// Enum: ReportingIdField
auction_worklet.mojom.mojom.ReportingIdField = {
  kNone: 0,
  kInterestGroupName: 1,
  kBuyerReportingId: 2,
  kBuyerAndSellerReportingId: 3,
  kSelectedBuyerAndSellerReportingId: 4,
};
auction_worklet.mojom.mojom.ReportingIdFieldSpec = { $: mojo.internal.Enum() };

// Struct: KAnonKey
auction_worklet.mojom.mojom.KAnonKeySpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.KAnonKey',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BidderWorkletNonSharedParams
auction_worklet.mojom.mojom.BidderWorkletNonSharedParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorkletNonSharedParams',
      packedSize: 96,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'trusted_bidding_signals_slot_size_mode', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.InterestGroup.TrustedBiddingSignalsSlotSizeModeSpec, nullable: false, minVersion: 0 },
        { name: 'enable_bidding_signals_prioritization', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'priority_vector', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Double, false), nullable: true, minVersion: 0 },
        { name: 'execution_mode', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.InterestGroup.ExecutionModeSpec, nullable: false, minVersion: 0 },
        { name: 'update_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'trusted_bidding_signals_keys', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'max_trusted_bidding_signals_url_length', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'user_bidding_signals', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'ads', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.InterestGroupAdSpec, false), nullable: true, minVersion: 0 },
        { name: 'ad_components', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.InterestGroupAdSpec, false), nullable: true, minVersion: 0 },
        { name: 'kanon_keys', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.KAnonKeySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

// Struct: BidderWorkletBid
auction_worklet.mojom.mojom.BidderWorkletBidSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorkletBid',
      packedSize: 88,
      fields: [
        { name: 'bid_role', packedOffset: 72, packedBitOffset: 0, type: auction_worklet.mojom.BidRoleSpec, nullable: false, minVersion: 0 },
        { name: 'ad', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'bid_currency', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'ad_cost_$flag', packedOffset: 78, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'ad_cost_$value', originalFieldName: 'ad_cost' } },
        { name: 'ad_cost_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'ad_cost_$flag', originalFieldName: 'ad_cost' } },
        { name: 'ad_descriptor', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AdDescriptorSpec, nullable: false, minVersion: 0 },
        { name: 'selected_buyer_and_seller_reporting_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'ad_component_descriptors', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AdDescriptorSpec, false), nullable: true, minVersion: 0 },
        { name: 'modeling_signals_$flag', packedOffset: 78, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'modeling_signals_$value', originalFieldName: 'modeling_signals' } },
        { name: 'modeling_signals_$value', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'modeling_signals_$flag', originalFieldName: 'modeling_signals' } },
        { name: 'aggregate_win_signals', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'bid_duration', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: PrioritySignalsDouble
auction_worklet.mojom.mojom.PrioritySignalsDoubleSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.PrioritySignalsDouble',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GenerateBidDependencyLatencies
auction_worklet.mojom.mojom.GenerateBidDependencyLatenciesSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.GenerateBidDependencyLatencies',
      packedSize: 64,
      fields: [
        { name: 'code_ready_latency', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'config_promises_latency', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_signals_latency', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'trusted_bidding_signals_latency', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'deps_wait_start_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'generate_bid_start_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'generate_bid_finish_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: BidderTimingMetrics
auction_worklet.mojom.mojom.BidderTimingMetricsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderTimingMetrics',
      packedSize: 40,
      fields: [
        { name: 'js_fetch_latency', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'wasm_fetch_latency', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'script_latency', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'script_timed_out', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PrivateModelTrainingRequestData
auction_worklet.mojom.mojom.PrivateModelTrainingRequestDataSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.PrivateModelTrainingRequestData',
      packedSize: 48,
      fields: [
        { name: 'payload', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
        { name: 'payload_length', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'aggregation_coordinator_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: GenerateBidClient
auction_worklet.mojom.mojom.GenerateBidClient = {};

auction_worklet.mojom.mojom.GenerateBidClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.mojom.GenerateBidClientRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.GenerateBidClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.mojom.GenerateBidClientPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.mojom.GenerateBidClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.mojom.GenerateBidClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBiddingSignalsReceived(priority_vector, trusted_signals_fetch_latency, update_if_older_than) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec,
      null,
      [priority_vector, trusted_signals_fetch_latency, update_if_older_than]);
  }

  onGenerateBidComplete(bids, bidding_signals_data_version, debug_loss_report_url, debug_win_report_url, set_priority, update_priority_signals_overrides, pa_requests, non_kanon_pa_requests, real_time_contributions, generate_bid_timing_metrics, generate_bid_dependency_latencies, reject_reason, errors) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec,
      null,
      [bids, bidding_signals_data_version, debug_loss_report_url, debug_win_report_url, set_priority, update_priority_signals_overrides, pa_requests, non_kanon_pa_requests, real_time_contributions, generate_bid_timing_metrics, generate_bid_dependency_latencies, reject_reason, errors]);
  }

};

auction_worklet.mojom.mojom.GenerateBidClient.getRemote = function() {
  let remote = new auction_worklet.mojom.mojom.GenerateBidClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.GenerateBidClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnBiddingSignalsReceived
auction_worklet.mojom.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.GenerateBidClient.OnBiddingSignalsReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'priority_vector', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Double, false), nullable: false, minVersion: 0 },
        { name: 'trusted_signals_fetch_latency', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'update_if_older_than', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnGenerateBidComplete
auction_worklet.mojom.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.GenerateBidClient.OnGenerateBidComplete_Params',
      packedSize: 112,
      fields: [
        { name: 'bids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.BidderWorkletBidSpec, false), nullable: false, minVersion: 0 },
        { name: 'bidding_signals_data_version_$flag', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'bidding_signals_data_version_$value', originalFieldName: 'bidding_signals_data_version' } },
        { name: 'bidding_signals_data_version_$value', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'bidding_signals_data_version_$flag', originalFieldName: 'bidding_signals_data_version' } },
        { name: 'debug_loss_report_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'debug_win_report_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'set_priority_$flag', packedOffset: 96, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'set_priority_$value', originalFieldName: 'set_priority' } },
        { name: 'set_priority_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'set_priority_$flag', originalFieldName: 'set_priority' } },
        { name: 'update_priority_signals_overrides', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, auction_worklet.mojom.PrioritySignalsDoubleSpec, false), nullable: true, minVersion: 0 },
        { name: 'pa_requests', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'non_kanon_pa_requests', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'real_time_contributions', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.RealTimeReportingContributionSpec, false), nullable: false, minVersion: 0 },
        { name: 'generate_bid_timing_metrics', packedOffset: 64, packedBitOffset: 0, type: auction_worklet.mojom.BidderTimingMetricsSpec, nullable: false, minVersion: 0 },
        { name: 'generate_bid_dependency_latencies', packedOffset: 72, packedBitOffset: 0, type: auction_worklet.mojom.GenerateBidDependencyLatenciesSpec, nullable: false, minVersion: 0 },
        { name: 'reject_reason', packedOffset: 92, packedBitOffset: 0, type: auction_worklet.mojom.RejectReasonSpec, nullable: false, minVersion: 0 },
        { name: 'errors', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 112}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.mojom.GenerateBidClientPtr = auction_worklet.mojom.mojom.GenerateBidClientRemote;
auction_worklet.mojom.mojom.GenerateBidClientRequest = auction_worklet.mojom.mojom.GenerateBidClientPendingReceiver;


// Interface: GenerateBidFinalizer
auction_worklet.mojom.mojom.GenerateBidFinalizer = {};

auction_worklet.mojom.mojom.GenerateBidFinalizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.mojom.GenerateBidFinalizerRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.GenerateBidFinalizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.mojom.GenerateBidFinalizerPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.mojom.GenerateBidFinalizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.mojom.GenerateBidFinalizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  finishGenerateBid(auction_signals_json, per_buyer_signals_json, per_buyer_timeout, expected_buyer_currency, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec,
      null,
      [auction_signals_json, per_buyer_signals_json, per_buyer_timeout, expected_buyer_currency, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot]);
  }

};

auction_worklet.mojom.mojom.GenerateBidFinalizer.getRemote = function() {
  let remote = new auction_worklet.mojom.mojom.GenerateBidFinalizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.GenerateBidFinalizer',
    'context');
  return remote.$;
};

// ParamsSpec for FinishGenerateBid
auction_worklet.mojom.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.GenerateBidFinalizer.FinishGenerateBid_Params',
      packedSize: 72,
      fields: [
        { name: 'auction_signals_json', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'per_buyer_signals_json', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'per_buyer_timeout', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'expected_buyer_currency', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_per_buyer_signals', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_per_buyer_signals_header_ad_slot', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals_header_ad_slot', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.mojom.GenerateBidFinalizerPtr = auction_worklet.mojom.mojom.GenerateBidFinalizerRemote;
auction_worklet.mojom.mojom.GenerateBidFinalizerRequest = auction_worklet.mojom.mojom.GenerateBidFinalizerPendingReceiver;


// Interface: BidderWorklet
auction_worklet.mojom.mojom.BidderWorklet = {};

auction_worklet.mojom.mojom.BidderWorkletPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.mojom.BidderWorkletRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.BidderWorklet';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.mojom.BidderWorkletPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.mojom.BidderWorkletRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.mojom.BidderWorkletRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  beginGenerateBid(bidder_worklet_non_shared_params, key_value_signals_cache_key, kanon_mode, interest_group_join_origin, direct_from_seller_per_buyer_signals, direct_from_seller_auction_signals, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_recency, browser_signal_for_debugging_only_sampling, bidding_browser_signals, auction_start_time, requested_ad_size, multi_bid_limit, group_by_origin_id, trace_id, generate_bid_client, bid_finalizer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec,
      null,
      [bidder_worklet_non_shared_params, key_value_signals_cache_key, kanon_mode, interest_group_join_origin, direct_from_seller_per_buyer_signals, direct_from_seller_auction_signals, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_recency, browser_signal_for_debugging_only_sampling, bidding_browser_signals, auction_start_time, requested_ad_size, multi_bid_limit, group_by_origin_id, trace_id, generate_bid_client, bid_finalizer]);
  }

  sendPendingSignalsRequests() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec,
      null,
      []);
  }

  reportWin(is_for_additional_bid, interest_group_name_reporting_id, buyer_reporting_id, buyer_and_seller_reporting_id, selected_buyer_and_seller_reporting_id, auction_signals_json, per_buyer_signals_json, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, seller_signals_json, kanon_status, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signal_made_highest_scoring_other_bid, browser_signal_ad_cost, browser_signal_modeling_signals, browser_signal_join_count, browser_signal_recency, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_reporting_timeout, bidding_signals_data_version, aggregate_win_signals, trace_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      auction_worklet.mojom.mojom.BidderWorklet_ReportWin_ParamsSpec,
      auction_worklet.mojom.mojom.BidderWorklet_ReportWin_ResponseParamsSpec,
      [is_for_additional_bid, interest_group_name_reporting_id, buyer_reporting_id, buyer_and_seller_reporting_id, selected_buyer_and_seller_reporting_id, auction_signals_json, per_buyer_signals_json, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, seller_signals_json, kanon_status, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signal_made_highest_scoring_other_bid, browser_signal_ad_cost, browser_signal_modeling_signals, browser_signal_join_count, browser_signal_recency, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_reporting_timeout, bidding_signals_data_version, aggregate_win_signals, trace_id]);
  }

  connectDevToolsAgent(agent, thread_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      auction_worklet.mojom.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec,
      null,
      [agent, thread_index]);
  }

};

auction_worklet.mojom.mojom.BidderWorklet.getRemote = function() {
  let remote = new auction_worklet.mojom.mojom.BidderWorkletRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.BidderWorklet',
    'context');
  return remote.$;
};

// ParamsSpec for BeginGenerateBid
auction_worklet.mojom.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.BeginGenerateBid_Params',
      packedSize: 128,
      fields: [
        { name: 'bidder_worklet_non_shared_params', packedOffset: 0, packedBitOffset: 0, type: auction_worklet.mojom.BidderWorkletNonSharedParamsSpec, nullable: false, minVersion: 0 },
        { name: 'key_value_signals_cache_key', packedOffset: 8, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsCacheKeySpec, nullable: true, minVersion: 0 },
        { name: 'kanon_mode', packedOffset: 104, packedBitOffset: 0, type: auction_worklet.mojom.KAnonymityBidModeSpec, nullable: false, minVersion: 0 },
        { name: 'interest_group_join_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'direct_from_seller_per_buyer_signals', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'browser_signal_seller_origin', packedOffset: 40, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'browser_signal_top_level_seller_origin', packedOffset: 48, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'browser_signal_recency', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'browser_signal_for_debugging_only_sampling', packedOffset: 118, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bidding_browser_signals', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.BiddingBrowserSignalsSpec, nullable: false, minVersion: 0 },
        { name: 'auction_start_time', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'requested_ad_size', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.AdSizeSpec, nullable: true, minVersion: 0 },
        { name: 'multi_bid_limit', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'group_by_origin_id', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'generate_bid_client', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'bid_finalizer', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 128}]
    }
  }
};

// ParamsSpec for SendPendingSignalsRequests
auction_worklet.mojom.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.SendPendingSignalsRequests_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReportWin
auction_worklet.mojom.mojom.BidderWorklet_ReportWin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.ReportWin_Params',
      packedSize: 200,
      fields: [
        { name: 'is_for_additional_bid', packedOffset: 186, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'interest_group_name_reporting_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'buyer_reporting_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'buyer_and_seller_reporting_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'selected_buyer_and_seller_reporting_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'auction_signals_json', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'per_buyer_signals_json', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_per_buyer_signals', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_per_buyer_signals_header_ad_slot', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals_header_ad_slot', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'seller_signals_json', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'kanon_status', packedOffset: 176, packedBitOffset: 0, type: auction_worklet.mojom.KAnonymityStatusSpec, nullable: false, minVersion: 0 },
        { name: 'browser_signal_render_url', packedOffset: 88, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'browser_signal_bid', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'browser_signal_bid_currency', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'browser_signal_highest_scoring_other_bid', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'browser_signal_highest_scoring_other_bid_currency', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'browser_signal_made_highest_scoring_other_bid', packedOffset: 186, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'browser_signal_ad_cost_$flag', packedOffset: 186, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'browser_signal_ad_cost_$value', originalFieldName: 'browser_signal_ad_cost' } },
        { name: 'browser_signal_ad_cost_$value', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'browser_signal_ad_cost_$flag', originalFieldName: 'browser_signal_ad_cost' } },
        { name: 'browser_signal_modeling_signals_$flag', packedOffset: 186, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'browser_signal_modeling_signals_$value', originalFieldName: 'browser_signal_modeling_signals' } },
        { name: 'browser_signal_modeling_signals_$value', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'browser_signal_modeling_signals_$flag', originalFieldName: 'browser_signal_modeling_signals' } },
        { name: 'browser_signal_join_count', packedOffset: 187, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'browser_signal_recency', packedOffset: 188, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'browser_signal_seller_origin', packedOffset: 136, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'browser_signal_top_level_seller_origin', packedOffset: 144, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'browser_signal_reporting_timeout', packedOffset: 152, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'bidding_signals_data_version_$flag', packedOffset: 186, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'bidding_signals_data_version_$value', originalFieldName: 'bidding_signals_data_version' } },
        { name: 'bidding_signals_data_version_$value', packedOffset: 180, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'bidding_signals_data_version_$flag', originalFieldName: 'bidding_signals_data_version' } },
        { name: 'aggregate_win_signals', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'trace_id', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 200}]
    }
  }
};

auction_worklet.mojom.mojom.BidderWorklet_ReportWin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.ReportWin_ResponseParams',
      packedSize: 64,
      fields: [
        { name: 'report_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'ad_beacon_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'ad_macro_map', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'pa_requests', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'pmt_request_data', packedOffset: 32, packedBitOffset: 0, type: auction_worklet.mojom.PrivateModelTrainingRequestDataSpec, nullable: true, minVersion: 0 },
        { name: 'timing_metrics', packedOffset: 40, packedBitOffset: 0, type: auction_worklet.mojom.BidderTimingMetricsSpec, nullable: false, minVersion: 0 },
        { name: 'errors', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for ConnectDevToolsAgent
auction_worklet.mojom.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.ConnectDevToolsAgent_Params',
      packedSize: 16,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'thread_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.mojom.BidderWorkletPtr = auction_worklet.mojom.mojom.BidderWorkletRemote;
auction_worklet.mojom.mojom.BidderWorkletRequest = auction_worklet.mojom.mojom.BidderWorkletPendingReceiver;

