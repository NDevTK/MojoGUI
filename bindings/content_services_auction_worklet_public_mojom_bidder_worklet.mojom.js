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
  but: 1,
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
auction_worklet.mojom.KAnonKey = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : "";
  }
};

// Struct: BidderWorkletNonSharedParams
auction_worklet.mojom.BidderWorkletNonSharedParams = class {
  constructor(values = {}) {
    this.kanon_keys = values.kanon_keys !== undefined ? values.kanon_keys : 0;
  }
};

// Struct: BidderWorkletBid
auction_worklet.mojom.BidderWorkletBid = class {
  constructor(values = {}) {
    this.bid_currency = values.bid_currency !== undefined ? values.bid_currency : 0;
    this.ad_cost = values.ad_cost !== undefined ? values.ad_cost : 0;
    this.selected_buyer_and_seller_reporting_id = values.selected_buyer_and_seller_reporting_id !== undefined ? values.selected_buyer_and_seller_reporting_id : "";
    this.be = values.be !== undefined ? values.be : null;
    this.ad_component_descriptors = values.ad_component_descriptors !== undefined ? values.ad_component_descriptors : [];
    this.modeling_signals = values.modeling_signals !== undefined ? values.modeling_signals : 0;
    this.bid_duration = values.bid_duration !== undefined ? values.bid_duration : "";
  }
};

// Struct: PrioritySignalsDouble
auction_worklet.mojom.PrioritySignalsDouble = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: GenerateBidDependencyLatencies
auction_worklet.mojom.GenerateBidDependencyLatencies = class {
  constructor(values = {}) {
    this.trusted_bidding_signals_latency = values.trusted_bidding_signals_latency !== undefined ? values.trusted_bidding_signals_latency : null;
    this.generate_bid_finish_time = values.generate_bid_finish_time !== undefined ? values.generate_bid_finish_time : null;
  }
};

// Struct: BidderTimingMetrics
auction_worklet.mojom.BidderTimingMetrics = class {
  constructor(values = {}) {
    this.wasm_fetch_latency = values.wasm_fetch_latency !== undefined ? values.wasm_fetch_latency : null;
    this.script_timed_out = values.script_timed_out !== undefined ? values.script_timed_out : false;
  }
};

// Struct: PrivateModelTrainingRequestData
auction_worklet.mojom.PrivateModelTrainingRequestData = class {
  constructor(values = {}) {
    this.payload = values.payload !== undefined ? values.payload : null;
    this.destination = values.destination !== undefined ? values.destination : 0;
  }
};

// Interface: GenerateBidClient
auction_worklet.mojom.GenerateBidClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.GenerateBidClient';
  }

  onBiddingSignalsReceived(priority_vector, trusted_signals_fetch_latency, update_if_older_than) {
    // Method: OnBiddingSignalsReceived
    // Call: OnBiddingSignalsReceived(priority_vector, trusted_signals_fetch_latency, update_if_older_than)
  }

  onGenerateBidComplete(bids, bidding_signals_data_version, debug_loss_report_url, debug_win_report_url, set_priority, update_priority_signals_overrides, pa_requests, non_kanon_pa_requests, real_time_contributions, generate_bid_timing_metrics, generate_bid_dependency_latencies, reject_reason, errors) {
    // Method: OnGenerateBidComplete
    // Call: OnGenerateBidComplete(bids, bidding_signals_data_version, debug_loss_report_url, debug_win_report_url, set_priority, update_priority_signals_overrides, pa_requests, non_kanon_pa_requests, real_time_contributions, generate_bid_timing_metrics, generate_bid_dependency_latencies, reject_reason, errors)
  }

};

auction_worklet.mojom.GenerateBidClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GenerateBidFinalizer
auction_worklet.mojom.GenerateBidFinalizerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.GenerateBidFinalizer';
  }

  finishGenerateBid(auction_signals_json, per_buyer_signals_json, per_buyer_timeout, expected_buyer_currency, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot) {
    // Method: FinishGenerateBid
    // Call: FinishGenerateBid(auction_signals_json, per_buyer_signals_json, per_buyer_timeout, expected_buyer_currency, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot)
  }

};

auction_worklet.mojom.GenerateBidFinalizerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BidderWorklet
auction_worklet.mojom.BidderWorkletPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.BidderWorklet';
  }

  beginGenerateBid(bidder_worklet_non_shared_params, key_value_signals_cache_key, kanon_mode, interest_group_join_origin, direct_from_seller_per_buyer_signals, direct_from_seller_auction_signals, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_recency, browser_signal_for_debugging_only_sampling, bidding_browser_signals, auction_start_time, requested_ad_size, multi_bid_limit, group_by_origin_id, trace_id, generate_bid_client, bid_finalizer) {
    // Method: BeginGenerateBid
    // Call: BeginGenerateBid(bidder_worklet_non_shared_params, key_value_signals_cache_key, kanon_mode, interest_group_join_origin, direct_from_seller_per_buyer_signals, direct_from_seller_auction_signals, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_recency, browser_signal_for_debugging_only_sampling, bidding_browser_signals, auction_start_time, requested_ad_size, multi_bid_limit, group_by_origin_id, trace_id, generate_bid_client, bid_finalizer)
  }

  sendPendingSignalsRequests() {
    // Method: SendPendingSignalsRequests
    // Call: SendPendingSignalsRequests()
  }

  reportWin(is_for_additional_bid, interest_group_name_reporting_id, buyer_reporting_id, buyer_and_seller_reporting_id, selected_buyer_and_seller_reporting_id, auction_signals_json, per_buyer_signals_json, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, seller_signals_json, kanon_status, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signal_made_highest_scoring_other_bid, browser_signal_ad_cost, browser_signal_modeling_signals, browser_signal_join_count, browser_signal_recency, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_reporting_timeout, bidding_signals_data_version, aggregate_win_signals, trace_id) {
    // Method: ReportWin
    return new Promise((resolve) => {
      // Call: ReportWin(is_for_additional_bid, interest_group_name_reporting_id, buyer_reporting_id, buyer_and_seller_reporting_id, selected_buyer_and_seller_reporting_id, auction_signals_json, per_buyer_signals_json, direct_from_seller_per_buyer_signals, direct_from_seller_per_buyer_signals_header_ad_slot, direct_from_seller_auction_signals, direct_from_seller_auction_signals_header_ad_slot, seller_signals_json, kanon_status, browser_signal_render_url, browser_signal_bid, browser_signal_bid_currency, browser_signal_highest_scoring_other_bid, browser_signal_highest_scoring_other_bid_currency, browser_signal_made_highest_scoring_other_bid, browser_signal_ad_cost, browser_signal_modeling_signals, browser_signal_join_count, browser_signal_recency, browser_signal_seller_origin, browser_signal_top_level_seller_origin, browser_signal_reporting_timeout, bidding_signals_data_version, aggregate_win_signals, trace_id)
      resolve({});
    });
  }

  connectDevToolsAgent(agent, thread_index) {
    // Method: ConnectDevToolsAgent
    // Call: ConnectDevToolsAgent(agent, thread_index)
  }

};

auction_worklet.mojom.BidderWorkletRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
