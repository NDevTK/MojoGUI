// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_worklet_service.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Interface: LoadSellerWorkletClient
auction_worklet.mojom.LoadSellerWorkletClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.LoadSellerWorkletClientRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.LoadSellerWorkletClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.LoadSellerWorkletClientPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.LoadSellerWorkletClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.LoadSellerWorkletClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sellerWorkletLoaded(trusted_signals_url_allowed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec.$,
      null,
      [trusted_signals_url_allowed]);
  }

};

auction_worklet.mojom.LoadSellerWorkletClient.getRemote = function() {
  let remote = new auction_worklet.mojom.LoadSellerWorkletClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.LoadSellerWorkletClient',
    'context');
  return remote.$;
}};

// ParamsSpec for SellerWorkletLoaded
auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.LoadSellerWorkletClient.SellerWorkletLoaded_Params',
      packedSize: 16,
      fields: [
        { name: 'trusted_signals_url_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
auction_worklet.mojom.LoadSellerWorkletClientPtr = auction_worklet.mojom.LoadSellerWorkletClientRemote;
auction_worklet.mojom.LoadSellerWorkletClientRequest = auction_worklet.mojom.LoadSellerWorkletClientPendingReceiver;


// Interface: AuctionWorkletService
auction_worklet.mojom.AuctionWorkletServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.AuctionWorkletServiceRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.AuctionWorkletService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.AuctionWorkletServicePendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.AuctionWorkletServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.AuctionWorkletServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTrustedSignalsCache(trusted_signals_cache) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec.$,
      null,
      [trusted_signals_cache]);
  }

  loadBidderWorklet(bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec.$,
      null,
      [bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key]);
  }

  loadSellerWorklet(seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec.$,
      null,
      [seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client]);
  }

};

auction_worklet.mojom.AuctionWorkletService.getRemote = function() {
  let remote = new auction_worklet.mojom.AuctionWorkletServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.AuctionWorkletService',
    'context');
  return remote.$;
}};

// ParamsSpec for SetTrustedSignalsCache
auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService.SetTrustedSignalsCache_Params',
      packedSize: 16,
      fields: [
        { name: 'trusted_signals_cache', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LoadBidderWorklet
auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService.LoadBidderWorklet_Params',
      packedSize: 112,
      fields: [
        { name: 'bidder_worklet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shared_storage_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pause_for_debugger_on_start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url_loader_factory', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'auction_network_events_handler', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'script_source_load', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'wasm_helper_load', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trusted_bidding_signals_url', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trusted_bidding_signals_slot_size_param', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'top_window_origin', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'permissions_policy_state', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'experiment_group_id', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'public_key', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LoadSellerWorklet
auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService.LoadSellerWorklet_Params',
      packedSize: 112,
      fields: [
        { name: 'seller_worklet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shared_storage_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pause_for_debugger_on_start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url_loader_factory', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'auction_network_events_handler', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'script_source_load', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'trusted_scoring_signals_url', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'top_window_origin', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'permissions_policy_state', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'experiment_group_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'send_creative_scanning_metadata', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'public_key', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'load_seller_worklet_client', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
auction_worklet.mojom.AuctionWorkletServicePtr = auction_worklet.mojom.AuctionWorkletServiceRemote;
auction_worklet.mojom.AuctionWorkletServiceRequest = auction_worklet.mojom.AuctionWorkletServicePendingReceiver;

