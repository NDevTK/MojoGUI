// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_worklet_service.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var content = content || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


// Struct: BrowserSignals
auction_worklet.mojom.BrowserSignalsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.BrowserSignals',
      packedSize: 24,
      fields: [
        { name: 'top_frame_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'seller', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AuctionWorkletPermissionsPolicyState
auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletPermissionsPolicyState',
      packedSize: 16,
      fields: [
        { name: 'private_aggregation_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shared_storage_allowed', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TrustedSignalsPublicKey
auction_worklet.mojom.TrustedSignalsPublicKeySpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.TrustedSignalsPublicKey',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: LoadSellerWorkletClient
auction_worklet.mojom.LoadSellerWorkletClient = {};

auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_Params',
      packedSize: 16,
      fields: [
        { name: 'trusted_signals_url_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec,
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
};

// ParamsSpec for SellerWorkletLoaded
auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.LoadSellerWorkletClient.SellerWorkletLoaded_Params',
      packedSize: 16,
      fields: [
        { name: 'trusted_signals_url_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.LoadSellerWorkletClientPtr = auction_worklet.mojom.LoadSellerWorkletClientRemote;
auction_worklet.mojom.LoadSellerWorkletClientRequest = auction_worklet.mojom.LoadSellerWorkletClientPendingReceiver;


// Interface: AuctionWorkletService
auction_worklet.mojom.AuctionWorkletService = {};

auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_Params',
      packedSize: 16,
      fields: [
        { name: 'trusted_signals_cache', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(auction_worklet.mojom.TrustedSignalsCacheRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_Params',
      packedSize: 104,
      fields: [
        { name: 'bidder_worklet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(auction_worklet.mojom.BidderWorkletRemote), nullable: false, minVersion: 0 },
        { name: 'shared_storage_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionSharedStorageHostRemote), false), nullable: true, minVersion: 0 },
        { name: 'pause_for_debugger_on_start', packedOffset: 90, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'url_loader_factory', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'auction_network_events_handler', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'script_source_load', packedOffset: 32, packedBitOffset: 0, type: auction_worklet.mojom.InProgressAuctionDownloadSpec, nullable: false, minVersion: 0 },
        { name: 'wasm_helper_load', packedOffset: 40, packedBitOffset: 0, type: auction_worklet.mojom.InProgressAuctionDownloadSpec, nullable: true, minVersion: 0 },
        { name: 'trusted_bidding_signals_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'trusted_bidding_signals_slot_size_param', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'top_window_origin', packedOffset: 64, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'permissions_policy_state', packedOffset: 72, packedBitOffset: 0, type: auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec, nullable: false, minVersion: 0 },
        { name: 'experiment_group_id_$flag', packedOffset: 90, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'experiment_group_id_$value', originalFieldName: 'experiment_group_id' } },
        { name: 'experiment_group_id_$value', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'experiment_group_id_$flag', originalFieldName: 'experiment_group_id' } },
        { name: 'public_key', packedOffset: 80, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsPublicKeySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_Params',
      packedSize: 96,
      fields: [
        { name: 'seller_worklet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(auction_worklet.mojom.SellerWorkletRemote), nullable: false, minVersion: 0 },
        { name: 'shared_storage_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionSharedStorageHostRemote), false), nullable: true, minVersion: 0 },
        { name: 'pause_for_debugger_on_start', packedOffset: 82, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'url_loader_factory', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'auction_network_events_handler', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'script_source_load', packedOffset: 32, packedBitOffset: 0, type: auction_worklet.mojom.InProgressAuctionDownloadSpec, nullable: false, minVersion: 0 },
        { name: 'trusted_scoring_signals_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'top_window_origin', packedOffset: 48, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'permissions_policy_state', packedOffset: 56, packedBitOffset: 0, type: auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec, nullable: false, minVersion: 0 },
        { name: 'experiment_group_id_$flag', packedOffset: 82, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'experiment_group_id_$value', originalFieldName: 'experiment_group_id' } },
        { name: 'experiment_group_id_$value', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'experiment_group_id_$flag', originalFieldName: 'experiment_group_id' } },
        { name: 'send_creative_scanning_metadata_$flag', packedOffset: 82, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'send_creative_scanning_metadata_$value', originalFieldName: 'send_creative_scanning_metadata' } },
        { name: 'send_creative_scanning_metadata_$value', packedOffset: 82, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'send_creative_scanning_metadata_$flag', originalFieldName: 'send_creative_scanning_metadata' } },
        { name: 'public_key', packedOffset: 64, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsPublicKeySpec, nullable: true, minVersion: 0 },
        { name: 'load_seller_worklet_client', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(auction_worklet.mojom.LoadSellerWorkletClientRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

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
      auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec,
      null,
      [trusted_signals_cache]);
  }

  loadBidderWorklet(bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec,
      null,
      [bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key]);
  }

  loadSellerWorklet(seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec,
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
};

// ParamsSpec for SetTrustedSignalsCache
auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService.SetTrustedSignalsCache_Params',
      packedSize: 16,
      fields: [
        { name: 'trusted_signals_cache', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(auction_worklet.mojom.TrustedSignalsCacheRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadBidderWorklet
auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService.LoadBidderWorklet_Params',
      packedSize: 104,
      fields: [
        { name: 'bidder_worklet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(auction_worklet.mojom.BidderWorkletRemote), nullable: false, minVersion: 0 },
        { name: 'shared_storage_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionSharedStorageHostRemote), false), nullable: true, minVersion: 0 },
        { name: 'pause_for_debugger_on_start', packedOffset: 90, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'url_loader_factory', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'auction_network_events_handler', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'script_source_load', packedOffset: 32, packedBitOffset: 0, type: auction_worklet.mojom.InProgressAuctionDownloadSpec, nullable: false, minVersion: 0 },
        { name: 'wasm_helper_load', packedOffset: 40, packedBitOffset: 0, type: auction_worklet.mojom.InProgressAuctionDownloadSpec, nullable: true, minVersion: 0 },
        { name: 'trusted_bidding_signals_url', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'trusted_bidding_signals_slot_size_param', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'top_window_origin', packedOffset: 64, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'permissions_policy_state', packedOffset: 72, packedBitOffset: 0, type: auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec, nullable: false, minVersion: 0 },
        { name: 'experiment_group_id_$flag', packedOffset: 90, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'experiment_group_id_$value', originalFieldName: 'experiment_group_id' } },
        { name: 'experiment_group_id_$value', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'experiment_group_id_$flag', originalFieldName: 'experiment_group_id' } },
        { name: 'public_key', packedOffset: 80, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsPublicKeySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// ParamsSpec for LoadSellerWorklet
auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionWorkletService.LoadSellerWorklet_Params',
      packedSize: 96,
      fields: [
        { name: 'seller_worklet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(auction_worklet.mojom.SellerWorkletRemote), nullable: false, minVersion: 0 },
        { name: 'shared_storage_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionSharedStorageHostRemote), false), nullable: true, minVersion: 0 },
        { name: 'pause_for_debugger_on_start', packedOffset: 82, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'url_loader_factory', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), nullable: false, minVersion: 0 },
        { name: 'auction_network_events_handler', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'script_source_load', packedOffset: 32, packedBitOffset: 0, type: auction_worklet.mojom.InProgressAuctionDownloadSpec, nullable: false, minVersion: 0 },
        { name: 'trusted_scoring_signals_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'top_window_origin', packedOffset: 48, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'permissions_policy_state', packedOffset: 56, packedBitOffset: 0, type: auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec, nullable: false, minVersion: 0 },
        { name: 'experiment_group_id_$flag', packedOffset: 82, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'experiment_group_id_$value', originalFieldName: 'experiment_group_id' } },
        { name: 'experiment_group_id_$value', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'experiment_group_id_$flag', originalFieldName: 'experiment_group_id' } },
        { name: 'send_creative_scanning_metadata_$flag', packedOffset: 82, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'send_creative_scanning_metadata_$value', originalFieldName: 'send_creative_scanning_metadata' } },
        { name: 'send_creative_scanning_metadata_$value', packedOffset: 82, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'send_creative_scanning_metadata_$flag', originalFieldName: 'send_creative_scanning_metadata' } },
        { name: 'public_key', packedOffset: 64, packedBitOffset: 0, type: auction_worklet.mojom.TrustedSignalsPublicKeySpec, nullable: true, minVersion: 0 },
        { name: 'load_seller_worklet_client', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(auction_worklet.mojom.LoadSellerWorkletClientRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 96}]
    }
  }
};

// Legacy compatibility
auction_worklet.mojom.AuctionWorkletServicePtr = auction_worklet.mojom.AuctionWorkletServiceRemote;
auction_worklet.mojom.AuctionWorkletServiceRequest = auction_worklet.mojom.AuctionWorkletServicePendingReceiver;

