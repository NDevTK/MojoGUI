// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/seller_worklet.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Struct: ComponentAuctionModifiedBidParams
auction_worklet.mojom.ComponentAuctionModifiedBidParams = class {
  constructor(values = {}) {
    this.bid_currency = values.bid_currency !== undefined ? values.bid_currency : 0;
  }
};

// Struct: ComponentAuctionReportResultParams
auction_worklet.mojom.ComponentAuctionReportResultParams = class {
  constructor(values = {}) {
    this.modified_bid = values.modified_bid !== undefined ? values.modified_bid : 0;
  }
};

// Struct: ScoreAdDependencyLatencies
auction_worklet.mojom.ScoreAdDependencyLatencies = class {
  constructor(values = {}) {
    this.trusted_scoring_signals_latency = values.trusted_scoring_signals_latency !== undefined ? values.trusted_scoring_signals_latency : null;
    this.score_ad_finish_time = values.score_ad_finish_time !== undefined ? values.score_ad_finish_time : null;
  }
};

// Struct: SellerTimingMetrics
auction_worklet.mojom.SellerTimingMetrics = class {
  constructor(values = {}) {
    this.script_timed_out = values.script_timed_out !== undefined ? values.script_timed_out : false;
  }
};

// Struct: CreativeInfoWithoutOwner
auction_worklet.mojom.CreativeInfoWithoutOwner = class {
  constructor(values = {}) {
    this.creative_scanning_metadata = values.creative_scanning_metadata !== undefined ? values.creative_scanning_metadata : "";
  }
};

// Interface: ScoreAdClient
auction_worklet.mojom.ScoreAdClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.ScoreAdClient';
  }

  scoreAd() {
    // Method: ScoreAd
    // Call: ScoreAd()
  }

  auction() {
    // Method: auction
    // Call: auction()
  }

  onScoreAdComplete(score, reject_reason, component_auction_modified_bid_params, bid_in_seller_currency, scoring_signals_data_version, debug_loss_report_url, debug_win_report_url, pa_requests, real_time_contributions, score_ad_timing_metrics, score_ad_dependency_latencies, errors) {
    // Method: OnScoreAdComplete
    // Call: OnScoreAdComplete(score, reject_reason, component_auction_modified_bid_params, bid_in_seller_currency, scoring_signals_data_version, debug_loss_report_url, debug_win_report_url, pa_requests, real_time_contributions, score_ad_timing_metrics, score_ad_dependency_latencies, errors)
  }

};

auction_worklet.mojom.ScoreAdClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SellerWorklet
auction_worklet.mojom.SellerWorkletPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.SellerWorklet';
  }

  scoreAd() {
    // Method: scoreAd
    // Call: scoreAd()
  }

  reportResult() {
    // Method: ReportResult
    // Call: ReportResult()
  }

  sendPendingSignalsRequests() {
    // Method: SendPendingSignalsRequests
    // Call: SendPendingSignalsRequests()
  }

  setTrustedSignalsCache() {
    // Method: SetTrustedSignalsCache
    // Call: SetTrustedSignalsCache()
  }

  runAdAuction() {
    // Method: runAdAuction
    // Call: runAdAuction()
  }

  runAdAuction() {
    // Method: runAdAuction
    // Call: runAdAuction()
  }

  reportWin() {
    // Method: reportWin
    // Call: reportWin()
  }

  reportResult() {
    // Method: reportResult
    // Call: reportResult()
  }

  scoreAd() {
    // Method: scoreAd
    // Call: scoreAd()
  }

  scoreAd() {
    // Method: scoreAd
    // Call: scoreAd()
  }

  onScoreAdComplete() {
    // Method: OnScoreAdComplete
    // Call: OnScoreAdComplete()
  }

  scoreAd(ad_metadata_json, bid, bid_currency, auction_ad_config_non_shared_params, key_value_signals_cache_key, ad, ad_components, direct_from_seller_seller_signals, direct_from_seller_seller_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, browser_signals_other_seller, component_expect_bid_currency, browser_signal_interest_group_owner, browser_signal_selected_buyer_and_seller_reporting_id, browser_signal_buyer_and_seller_reporting_id, browser_signal_bidding_duration_msecs, browser_signal_for_debugging_only_in_cooldown_or_lockout, browser_signal_for_debugging_only_sampling, seller_timeout, group_by_origin_id, allow_group_by_origin_mode, trace_id, bidder_joining_origin, score_ad_client) {
    // Method: ScoreAd
    // Call: ScoreAd(ad_metadata_json, bid, bid_currency, auction_ad_config_non_shared_params, key_value_signals_cache_key, ad, ad_components, direct_from_seller_seller_signals, direct_from_seller_seller_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, browser_signals_other_seller, component_expect_bid_currency, browser_signal_interest_group_owner, browser_signal_selected_buyer_and_seller_reporting_id, browser_signal_buyer_and_seller_reporting_id, browser_signal_bidding_duration_msecs, browser_signal_for_debugging_only_in_cooldown_or_lockout, browser_signal_for_debugging_only_sampling, seller_timeout, group_by_origin_id, allow_group_by_origin_mode, trace_id, bidder_joining_origin, score_ad_client)
  }

  scoreAd() {
    // Method: ScoreAd
    // Call: ScoreAd()
  }

  sendPendingSignalsRequests() {
    // Method: SendPendingSignalsRequests
    // Call: SendPendingSignalsRequests()
  }

  reportResult() {
    // Method: reportResult
    // Call: reportResult()
  }

  scoreAd() {
    // Method: ScoreAd
    // Call: ScoreAd()
  }

  scoreAd() {
    // Method: ScoreAd
    // Call: ScoreAd()
  }

  scoreAd() {
    // Method: ScoreAd
    // Call: ScoreAd()
  }

  runAdAuction() {
    // Method: runAdAuction
    // Call: runAdAuction()
  }

  runAdAuction() {
    // Method: runAdAuction
    // Call: runAdAuction()
  }

  scoreAd() {
    // Method: ScoreAd
    // Call: ScoreAd()
  }

  reportResult() {
    // Method: ReportResult
    // Call: ReportResult()
  }

  reportResult() {
    // Method: reportResult
    // Call: reportResult()
  }

  reportResult(auction_ad_config_non_shared_params, direct_from_seller_seller_signals, direct_from_seller_seller_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, browser_signals_other_seller, browser_signal_interest_group_owner, browser_signal_buyer_and_seller_reporting_id, browser_signal_selected_buyer_and_seller_reporting_id, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_desirability, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signals_component_auction_report_result_params, scoring_signals_data_version, trace_id) {
    // Method: ReportResult
    return new Promise((resolve) => {
      // Call: ReportResult(auction_ad_config_non_shared_params, direct_from_seller_seller_signals, direct_from_seller_seller_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, browser_signals_other_seller, browser_signal_interest_group_owner, browser_signal_buyer_and_seller_reporting_id, browser_signal_selected_buyer_and_seller_reporting_id, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_desirability, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signals_component_auction_report_result_params, scoring_signals_data_version, trace_id)
      resolve({});
    });
  }

  connectDevToolsAgent(agent, thread_index) {
    // Method: ConnectDevToolsAgent
    // Call: ConnectDevToolsAgent(agent, thread_index)
  }

};

auction_worklet.mojom.SellerWorkletRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
