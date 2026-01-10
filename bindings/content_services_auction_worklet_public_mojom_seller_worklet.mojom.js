// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/seller_worklet.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Union: ComponentAuctionOtherSeller
auction_worklet.mojom.ComponentAuctionOtherSellerSpec = { $: mojo.internal.Union(
    'auction_worklet.mojom.ComponentAuctionOtherSeller', {
      'top_level_seller': {
        'ordinal': 0,
        'type': url.mojom.OriginSpec,
      }},
      'component_seller': {
        'ordinal': 1,
        'type': url.mojom.OriginSpec,
      }},
    })
};

// Struct: ComponentAuctionModifiedBidParams
auction_worklet.mojom.ComponentAuctionModifiedBidParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.ComponentAuctionModifiedBidParams',
      packedSize: 40,
      fields: [
        { name: 'ad', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bid_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'bid_$value', originalFieldName: 'bid' } },
        { name: 'bid_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'bid_$flag', originalFieldName: 'bid' } },
        { name: 'bid_currency', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ComponentAuctionReportResultParams
auction_worklet.mojom.ComponentAuctionReportResultParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.ComponentAuctionReportResultParams',
      packedSize: 32,
      fields: [
        { name: 'top_level_seller_signals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'modified_bid_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'modified_bid_$value', originalFieldName: 'modified_bid' } },
        { name: 'modified_bid_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'modified_bid_$flag', originalFieldName: 'modified_bid' } },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'code_ready_latency', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_signals_latency', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'trusted_scoring_signals_latency', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'deps_wait_start_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'score_ad_start_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'score_ad_finish_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'js_fetch_latency', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'script_latency', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'script_timed_out', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'ad_descriptor', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AdDescriptorSpec, nullable: false, minVersion: 0 },
        { name: 'creative_scanning_metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'reject_reason', packedOffset: 8, packedBitOffset: 0, type: auction_worklet.mojom.RejectReasonSpec, nullable: false, minVersion: 0 },
        { name: 'component_auction_modified_bid_params', packedOffset: 16, packedBitOffset: 0, type: auction_worklet.mojom.ComponentAuctionModifiedBidParamsSpec, nullable: true, minVersion: 0 },
        { name: 'bid_in_seller_currency_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'bid_in_seller_currency_$value', originalFieldName: 'bid_in_seller_currency' } },
        { name: 'bid_in_seller_currency_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'bid_in_seller_currency_$flag', originalFieldName: 'bid_in_seller_currency' } },
        { name: 'scoring_signals_data_version_$flag', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'scoring_signals_data_version_$value', originalFieldName: 'scoring_signals_data_version' } },
        { name: 'scoring_signals_data_version_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'scoring_signals_data_version_$flag', originalFieldName: 'scoring_signals_data_version' } },
        { name: 'debug_loss_report_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'debug_win_report_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'pa_requests', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'real_time_contributions', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.RealTimeReportingContributionSpec, false), nullable: false, minVersion: 0 },
        { name: 'score_ad_timing_metrics', packedOffset: 72, packedBitOffset: 0, type: auction_worklet.mojom.SellerTimingMetricsSpec, nullable: false, minVersion: 0 },
        { name: 'score_ad_dependency_latencies', packedOffset: 80, packedBitOffset: 0, type: auction_worklet.mojom.ScoreAdDependencyLatenciesSpec, nullable: false, minVersion: 0 },
        { name: 'errors', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
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
      packedSize: 192,
      fields: [
        { name: 'ad_metadata_json', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'bid_currency', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'auction_ad_config_non_shared_params', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigNonSharedParamsSpec, nullable: false, minVersion: 0 },
        { name: 'key_value_signals_cache_key', packedOffset: 32, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsCacheKeySpec, nullable: true, minVersion: 0 },
        { name: 'ad', packedOffset: 40, packedBitOffset: 0, type: auction_worklet.mojom.CreativeInfoWithoutOwnerSpec, nullable: false, minVersion: 0 },
        { name: 'ad_components', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.CreativeInfoWithoutOwnerSpec, false), nullable: false, minVersion: 0 },
        { name: 'direct_from_seller_seller_signals', packedOffset: 56, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_seller_signals_header_ad_slot', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals', packedOffset: 72, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals_header_ad_slot', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'browser_signals_other_seller', packedOffset: 88, packedBitOffset: 0, type: auction_worklet.mojom.ComponentAuctionOtherSellerSpec, nullable: true, minVersion: 0 },
        { name: 'component_expect_bid_currency', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'browser_signal_interest_group_owner', packedOffset: 112, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'browser_signal_selected_buyer_and_seller_reporting_id', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'browser_signal_buyer_and_seller_reporting_id', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'browser_signal_bidding_duration_msecs', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'browser_signal_for_debugging_only_in_cooldown_or_lockout', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'browser_signal_for_debugging_only_sampling', packedOffset: 140, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'seller_timeout', packedOffset: 144, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'group_by_origin_id', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'allow_group_by_origin_mode', packedOffset: 140, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'bidder_joining_origin', packedOffset: 168, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'score_ad_client', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 192}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReportResult
auction_worklet.mojom.SellerWorklet_ReportResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.SellerWorklet.ReportResult_Params',
      packedSize: 160,
      fields: [
        { name: 'auction_ad_config_non_shared_params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigNonSharedParamsSpec, nullable: false, minVersion: 0 },
        { name: 'direct_from_seller_seller_signals', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_seller_signals_header_ad_slot', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'direct_from_seller_auction_signals_header_ad_slot', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'browser_signals_other_seller', packedOffset: 40, packedBitOffset: 0, type: auction_worklet.mojom.ComponentAuctionOtherSellerSpec, nullable: true, minVersion: 0 },
        { name: 'browser_signal_interest_group_owner', packedOffset: 56, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'browser_signal_buyer_and_seller_reporting_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'browser_signal_selected_buyer_and_seller_reporting_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'browser_signal_render_url', packedOffset: 80, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'browser_signal_bid', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'browser_signal_bid_currency', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'browser_signal_desirability', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'browser_signal_highest_scoring_other_bid', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'browser_signal_highest_scoring_other_bid_currency', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.AdCurrencySpec, nullable: true, minVersion: 0 },
        { name: 'browser_signals_component_auction_report_result_params', packedOffset: 128, packedBitOffset: 0, type: auction_worklet.mojom.ComponentAuctionReportResultParamsSpec, nullable: true, minVersion: 0 },
        { name: 'scoring_signals_data_version_$flag', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'scoring_signals_data_version_$value', originalFieldName: 'scoring_signals_data_version' } },
        { name: 'scoring_signals_data_version_$value', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'scoring_signals_data_version_$flag', originalFieldName: 'scoring_signals_data_version' } },
        { name: 'trace_id', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 160}]
    }
  }
};

auction_worklet.mojom.SellerWorklet_ReportResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 56,
      fields: [
        { name: 'signals_for_winner', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'report_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'ad_beacon_map', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, url.mojom.UrlSpec, false), nullable: false, minVersion: 0 },
        { name: 'pa_requests', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(auction_worklet.mojom.PrivateAggregationRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'time_metrics', packedOffset: 32, packedBitOffset: 0, type: auction_worklet.mojom.SellerTimingMetricsSpec, nullable: false, minVersion: 0 },
        { name: 'error_msgs', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'agent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'thread_index', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.SellerWorkletPtr = auction_worklet.mojom.SellerWorkletRemote;
auction_worklet.mojom.SellerWorkletRequest = auction_worklet.mojom.SellerWorkletPendingReceiver;

