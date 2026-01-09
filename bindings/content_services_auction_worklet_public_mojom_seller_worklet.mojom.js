// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/seller_worklet.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Struct: ComponentAuctionModifiedBidParams
auction_worklet.mojom.ComponentAuctionModifiedBidParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.ComponentAuctionModifiedBidParams',
      packedSize: 32,
      fields: [
        { name: 'ad', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
        { name: 'bid_currency', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ComponentAuctionReportResultParams
auction_worklet.mojom.ComponentAuctionReportResultParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.ComponentAuctionReportResultParams',
      packedSize: 24,
      fields: [
        { name: 'top_level_seller_signals', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'modified_bid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScoreAdDependencyLatencies
auction_worklet.mojom.ScoreAdDependencyLatenciesSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.ScoreAdDependencyLatencies',
      packedSize: 56,
      fields: [
        { name: 'code_ready_latency', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'direct_from_seller_signals_latency', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'trusted_scoring_signals_latency', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'deps_wait_start_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'score_ad_start_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'score_ad_finish_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SellerTimingMetrics
auction_worklet.mojom.SellerTimingMetricsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SellerTimingMetrics',
      packedSize: 32,
      fields: [
        { name: 'js_fetch_latency', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'script_latency', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'script_timed_out', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CreativeInfoWithoutOwner
auction_worklet.mojom.CreativeInfoWithoutOwnerSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.CreativeInfoWithoutOwner',
      packedSize: 24,
      fields: [
        { name: 'ad_descriptor', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AdDescriptorSpec, nullable: false },
        { name: 'creative_scanning_metadata', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ScoreAdClient
auction_worklet.mojom.ScoreAdClient = {};

auction_worklet.mojom.ScoreAdClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.ScoreAdClientRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.ScoreAdClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.ScoreAdClientPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.ScoreAdClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.ScoreAdClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onScoreAdComplete(score, reject_reason, component_auction_modified_bid_params, bid_in_seller_currency, scoring_signals_data_version, debug_loss_report_url, debug_win_report_url, pa_requests, real_time_contributions, score_ad_timing_metrics, score_ad_dependency_latencies, errors) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.ScoreAdClient_OnScoreAdComplete_ParamsSpec,
      null,
      [score, reject_reason, component_auction_modified_bid_params, bid_in_seller_currency, scoring_signals_data_version, debug_loss_report_url, debug_win_report_url, pa_requests, real_time_contributions, score_ad_timing_metrics, score_ad_dependency_latencies, errors]);
  }

};

auction_worklet.mojom.ScoreAdClient.getRemote = function() {
  let remote = new auction_worklet.mojom.ScoreAdClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.ScoreAdClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnScoreAdComplete
auction_worklet.mojom.ScoreAdClient_OnScoreAdComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.ScoreAdClient.OnScoreAdComplete_Params',
      packedSize: 104,
      fields: [
        { name: 'score', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'reject_reason', packedOffset: 16, packedBitOffset: 0, type: auction_worklet.mojom.RejectReasonSpec, nullable: false },
        { name: 'component_auction_modified_bid_params', packedOffset: 24, packedBitOffset: 0, type: auction_worklet.mojom.ComponentAuctionModifiedBidParamsSpec, nullable: true },
        { name: 'bid_in_seller_currency', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: true },
        { name: 'scoring_signals_data_version', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'debug_loss_report_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'debug_win_report_url', packedOffset: 56, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'pa_requests', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'real_time_contributions', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'score_ad_timing_metrics', packedOffset: 80, packedBitOffset: 0, type: auction_worklet.mojom.SellerTimingMetricsSpec, nullable: false },
        { name: 'score_ad_dependency_latencies', packedOffset: 88, packedBitOffset: 0, type: auction_worklet.mojom.ScoreAdDependencyLatenciesSpec, nullable: false },
        { name: 'errors', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.ScoreAdClientPtr = auction_worklet.mojom.ScoreAdClientRemote;
auction_worklet.mojom.ScoreAdClientRequest = auction_worklet.mojom.ScoreAdClientPendingReceiver;


// Interface: SellerWorklet
auction_worklet.mojom.SellerWorklet = {};

auction_worklet.mojom.SellerWorkletPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.SellerWorkletRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.SellerWorklet';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.SellerWorkletPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.SellerWorkletRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.SellerWorkletRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scoreAd(ad_metadata_json, bid, bid_currency, auction_ad_config_non_shared_params, key_value_signals_cache_key, ad, ad_components, direct_from_seller_seller_signals, direct_from_seller_seller_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, browser_signals_other_seller, component_expect_bid_currency, browser_signal_interest_group_owner, browser_signal_selected_buyer_and_seller_reporting_id, browser_signal_buyer_and_seller_reporting_id, browser_signal_bidding_duration_msecs, browser_signal_for_debugging_only_in_cooldown_or_lockout, browser_signal_for_debugging_only_sampling, seller_timeout, group_by_origin_id, allow_group_by_origin_mode, trace_id, bidder_joining_origin, score_ad_client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.SellerWorklet_ScoreAd_ParamsSpec,
      null,
      [ad_metadata_json, bid, bid_currency, auction_ad_config_non_shared_params, key_value_signals_cache_key, ad, ad_components, direct_from_seller_seller_signals, direct_from_seller_seller_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, browser_signals_other_seller, component_expect_bid_currency, browser_signal_interest_group_owner, browser_signal_selected_buyer_and_seller_reporting_id, browser_signal_buyer_and_seller_reporting_id, browser_signal_bidding_duration_msecs, browser_signal_for_debugging_only_in_cooldown_or_lockout, browser_signal_for_debugging_only_sampling, seller_timeout, group_by_origin_id, allow_group_by_origin_mode, trace_id, bidder_joining_origin, score_ad_client]);
  }

  sendPendingSignalsRequests() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.SellerWorklet_SendPendingSignalsRequests_ParamsSpec,
      null,
      []);
  }

  reportResult(auction_ad_config_non_shared_params, direct_from_seller_seller_signals, direct_from_seller_seller_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, browser_signals_other_seller, browser_signal_interest_group_owner, browser_signal_buyer_and_seller_reporting_id, browser_signal_selected_buyer_and_seller_reporting_id, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_desirability, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signals_component_auction_report_result_params, scoring_signals_data_version, trace_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      auction_worklet.mojom.SellerWorklet_ReportResult_ParamsSpec,
      auction_worklet.mojom.SellerWorklet_ReportResult_ResponseParamsSpec,
      [auction_ad_config_non_shared_params, direct_from_seller_seller_signals, direct_from_seller_seller_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, browser_signals_other_seller, browser_signal_interest_group_owner, browser_signal_buyer_and_seller_reporting_id, browser_signal_selected_buyer_and_seller_reporting_id, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_desirability, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signals_component_auction_report_result_params, scoring_signals_data_version, trace_id]);
  }

  connectDevToolsAgent(agent, thread_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      auction_worklet.mojom.SellerWorklet_ConnectDevToolsAgent_ParamsSpec,
      null,
      [agent, thread_index]);
  }

};

auction_worklet.mojom.SellerWorklet.getRemote = function() {
  let remote = new auction_worklet.mojom.SellerWorkletRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.SellerWorklet',
    'context');
  return remote.$;
};

// ParamsSpec for ScoreAd
auction_worklet.mojom.SellerWorklet_ScoreAd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SellerWorklet.ScoreAd_Params',
      packedSize: 200,
      fields: [
        { name: 'ad_metadata_json', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'bid_currency', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true },
        { name: 'auction_ad_config_non_shared_params', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigNonSharedParamsSpec, nullable: false },
        { name: 'key_value_signals_cache_key', packedOffset: 40, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsCacheKeySpec, nullable: true },
        { name: 'ad', packedOffset: 48, packedBitOffset: 0, type: auction_worklet.mojom.CreativeInfoWithoutOwnerSpec, nullable: false },
        { name: 'ad_components', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'direct_from_seller_seller_signals', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'direct_from_seller_seller_signals_header_ad_slot', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_auction_signals', packedOffset: 80, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'direct_from_seller_auction_signals_header_ad_slot', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signals_other_seller', packedOffset: 96, packedBitOffset: 0, type: auction_worklet.mojom.ComponentAuctionOtherSellerSpec, nullable: true },
        { name: 'component_expect_bid_currency', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true },
        { name: 'browser_signal_interest_group_owner', packedOffset: 112, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'browser_signal_selected_buyer_and_seller_reporting_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_buyer_and_seller_reporting_id', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_bidding_duration_msecs', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'browser_signal_for_debugging_only_in_cooldown_or_lockout', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'browser_signal_for_debugging_only_sampling', packedOffset: 140, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'seller_timeout', packedOffset: 152, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'group_by_origin_id', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'allow_group_by_origin_mode', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'trace_id', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'bidder_joining_origin', packedOffset: 184, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'score_ad_client', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendPendingSignalsRequests
auction_worklet.mojom.SellerWorklet_SendPendingSignalsRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SellerWorklet.SendPendingSignalsRequests_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReportResult
auction_worklet.mojom.SellerWorklet_ReportResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SellerWorklet.ReportResult_Params',
      packedSize: 152,
      fields: [
        { name: 'auction_ad_config_non_shared_params', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigNonSharedParamsSpec, nullable: false },
        { name: 'direct_from_seller_seller_signals', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'direct_from_seller_seller_signals_header_ad_slot', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'direct_from_seller_auction_signals', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'direct_from_seller_auction_signals_header_ad_slot', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signals_other_seller', packedOffset: 48, packedBitOffset: 0, type: auction_worklet.mojom.ComponentAuctionOtherSellerSpec, nullable: true },
        { name: 'browser_signal_interest_group_owner', packedOffset: 56, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'browser_signal_buyer_and_seller_reporting_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_selected_buyer_and_seller_reporting_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_signal_render_url', packedOffset: 80, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'browser_signal_bid', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'browser_signal_bid_currency', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true },
        { name: 'browser_signal_desirability', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'browser_signal_highest_scoring_other_bid', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'browser_signal_highest_scoring_other_bid_currency', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true },
        { name: 'browser_signals_component_auction_report_result_params', packedOffset: 128, packedBitOffset: 0, type: auction_worklet.mojom.ComponentAuctionReportResultParamsSpec, nullable: true },
        { name: 'scoring_signals_data_version', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'trace_id', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

auction_worklet.mojom.SellerWorklet_ReportResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SellerWorklet.ReportResult_ResponseParams',
      packedSize: 56,
      fields: [
        { name: 'signals_for_winner', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'report_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'ad_beacon_map', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'pa_requests', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'time_metrics', packedOffset: 40, packedBitOffset: 0, type: auction_worklet.mojom.SellerTimingMetricsSpec, nullable: false },
        { name: 'error_msgs', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectDevToolsAgent
auction_worklet.mojom.SellerWorklet_ConnectDevToolsAgent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SellerWorklet.ConnectDevToolsAgent_Params',
      packedSize: 16,
      fields: [
        { name: 'agent', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'thread_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.SellerWorkletPtr = auction_worklet.mojom.SellerWorkletRemote;
auction_worklet.mojom.SellerWorkletRequest = auction_worklet.mojom.SellerWorkletPendingReceiver;

