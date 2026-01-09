// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/bidder_worklet.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


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

// Interface: GenerateBidClient
auction_worklet.mojom.GenerateBidClient = {};

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
      null,
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

// ParamsSpec for OnBiddingSignalsReceived
auction_worklet.mojom.GenerateBidClient_OnBiddingSignalsReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.GenerateBidClient.OnBiddingSignalsReceived_Params',
      packedSize: 32,
      fields: [
        { name: 'priority_vector', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trusted_signals_fetch_latency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'update_if_older_than', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnGenerateBidComplete
auction_worklet.mojom.GenerateBidClient_OnGenerateBidComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.GenerateBidClient.OnGenerateBidComplete_Params',
      packedSize: 112,
      fields: [
        { name: 'bids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bidding_signals_data_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'debug_loss_report_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'debug_win_report_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'set_priority', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'update_priority_signals_overrides', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pa_requests', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'non_kanon_pa_requests', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'real_time_contributions', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'generate_bid_timing_metrics', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'generate_bid_dependency_latencies', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reject_reason', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'errors', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.GenerateBidClientPtr = auction_worklet.mojom.GenerateBidClientRemote;
auction_worklet.mojom.GenerateBidClientRequest = auction_worklet.mojom.GenerateBidClientPendingReceiver;


// Interface: GenerateBidFinalizer
auction_worklet.mojom.GenerateBidFinalizer = {};

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

// ParamsSpec for FinishGenerateBid
auction_worklet.mojom.GenerateBidFinalizer_FinishGenerateBid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.GenerateBidFinalizer.FinishGenerateBid_Params',
      packedSize: 72,
      fields: [
        { name: 'auction_signals_json', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'per_buyer_signals_json', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'per_buyer_timeout', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'expected_buyer_currency', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_per_buyer_signals', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_per_buyer_signals_header_ad_slot', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_auction_signals', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_auction_signals_header_ad_slot', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.GenerateBidFinalizerPtr = auction_worklet.mojom.GenerateBidFinalizerRemote;
auction_worklet.mojom.GenerateBidFinalizerRequest = auction_worklet.mojom.GenerateBidFinalizerPendingReceiver;


// Interface: BidderWorklet
auction_worklet.mojom.BidderWorklet = {};

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

// ParamsSpec for BeginGenerateBid
auction_worklet.mojom.BidderWorklet_BeginGenerateBid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.BeginGenerateBid_Params',
      packedSize: 152,
      fields: [
        { name: 'bidder_worklet_non_shared_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key_value_signals_cache_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'kanon_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'interest_group_join_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_per_buyer_signals', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_auction_signals', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_seller_origin', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_top_level_seller_origin', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_recency', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_for_debugging_only_sampling', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bidding_browser_signals', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'auction_start_time', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'requested_ad_size', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'multi_bid_limit', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_by_origin_id', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trace_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'generate_bid_client', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bid_finalizer', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendPendingSignalsRequests
auction_worklet.mojom.BidderWorklet_SendPendingSignalsRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.SendPendingSignalsRequests_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportWin
auction_worklet.mojom.BidderWorklet_ReportWin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.ReportWin_Params',
      packedSize: 240,
      fields: [
        { name: 'is_for_additional_bid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'interest_group_name_reporting_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'buyer_reporting_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'buyer_and_seller_reporting_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selected_buyer_and_seller_reporting_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'auction_signals_json', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'per_buyer_signals_json', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_per_buyer_signals', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_per_buyer_signals_header_ad_slot', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_auction_signals', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_auction_signals_header_ad_slot', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'seller_signals_json', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'kanon_status', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_render_url', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_bid', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_bid_currency', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_highest_scoring_other_bid', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_highest_scoring_other_bid_currency', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_made_highest_scoring_other_bid', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_ad_cost', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_modeling_signals', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_join_count', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_recency', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_seller_origin', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_top_level_seller_origin', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_reporting_timeout', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bidding_signals_data_version', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'aggregate_win_signals', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trace_id', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

auction_worklet.mojom.BidderWorklet_ReportWin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.ReportWin_ResponseParams',
      packedSize: 64,
      fields: [
        { name: 'report_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ad_beacon_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ad_macro_map', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pa_requests', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pmt_request_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'timing_metrics', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'errors', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectDevToolsAgent
auction_worklet.mojom.BidderWorklet_ConnectDevToolsAgent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BidderWorklet.ConnectDevToolsAgent_Params',
      packedSize: 24,
      fields: [
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'thread_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.BidderWorkletPtr = auction_worklet.mojom.BidderWorkletRemote;
auction_worklet.mojom.BidderWorkletRequest = auction_worklet.mojom.BidderWorkletPendingReceiver;

