// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_worklet_service.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Struct: BrowserSignals
auction_worklet.mojom.BrowserSignals = class {
  constructor(values = {}) {
    this.seller = values.seller !== undefined ? values.seller : null;
  }
};

// Struct: AuctionWorkletPermissionsPolicyState
auction_worklet.mojom.AuctionWorkletPermissionsPolicyState = class {
  constructor(values = {}) {
    this.shared_storage_allowed = values.shared_storage_allowed !== undefined ? values.shared_storage_allowed : false;
  }
};

// Struct: TrustedSignalsPublicKey
auction_worklet.mojom.TrustedSignalsPublicKey = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
  }
};

// Interface: LoadSellerWorkletClient
auction_worklet.mojom.LoadSellerWorkletClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.LoadSellerWorkletClient';
  }

  sellerWorkletLoaded(trusted_signals_url_allowed) {
    // Method: SellerWorkletLoaded
    // Call: SellerWorkletLoaded(trusted_signals_url_allowed)
  }

};

auction_worklet.mojom.LoadSellerWorkletClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AuctionWorkletService
auction_worklet.mojom.AuctionWorkletServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.AuctionWorkletService';
  }

  setTrustedSignalsCache(trusted_signals_cache) {
    // Method: SetTrustedSignalsCache
    // Call: SetTrustedSignalsCache(trusted_signals_cache)
  }

  loadBidderWorklet(bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key) {
    // Method: LoadBidderWorklet
    // Call: LoadBidderWorklet(bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key)
  }

  loadSellerWorklet(seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client) {
    // Method: LoadSellerWorklet
    // Call: LoadSellerWorklet(seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client)
  }

};

auction_worklet.mojom.AuctionWorkletServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
