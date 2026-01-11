// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_worklet_service.mojom
// Module: auction_worklet.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var sandbox = sandbox || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

auction_worklet.mojom.BrowserSignalsSpec = { $: {} };
auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec = { $: {} };
auction_worklet.mojom.TrustedSignalsPublicKeySpec = { $: {} };
auction_worklet.mojom.LoadSellerWorkletClient = {};
auction_worklet.mojom.LoadSellerWorkletClient.$interfaceName = 'auction_worklet.mojom.LoadSellerWorkletClient';
auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionWorkletService = {};
auction_worklet.mojom.AuctionWorkletService.$interfaceName = 'auction_worklet.mojom.AuctionWorkletService';
auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec = { $: {} };

// Struct: BrowserSignals
mojo.internal.Struct(
    auction_worklet.mojom.BrowserSignalsSpec, 'auction_worklet.mojom.BrowserSignals', [
      mojo.internal.StructField('top_frame_origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('seller', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AuctionWorkletPermissionsPolicyState
mojo.internal.Struct(
    auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec, 'auction_worklet.mojom.AuctionWorkletPermissionsPolicyState', [
      mojo.internal.StructField('private_aggregation_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_storage_allowed', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrustedSignalsPublicKey
mojo.internal.Struct(
    auction_worklet.mojom.TrustedSignalsPublicKeySpec, 'auction_worklet.mojom.TrustedSignalsPublicKey', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: LoadSellerWorkletClient
mojo.internal.Struct(
    auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec, 'auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_Params', [
      mojo.internal.StructField('trusted_signals_url_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  sellerWorkletLoaded(trusted_signals_url_allowed) {
    return this.$.sellerWorkletLoaded(trusted_signals_url_allowed);
  }
};

auction_worklet.mojom.LoadSellerWorkletClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LoadSellerWorkletClient', [
      { explicit: null },
    ]);
  }

  sellerWorkletLoaded(trusted_signals_url_allowed) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec,
      null,
      [trusted_signals_url_allowed],
      false);
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

auction_worklet.mojom.LoadSellerWorkletClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LoadSellerWorkletClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.LoadSellerWorkletClient_SellerWorkletLoaded_ParamsSpec.$.structSpec);
          const result = this.impl.sellerWorkletLoaded(params.trusted_signals_url_allowed);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

auction_worklet.mojom.LoadSellerWorkletClientReceiver = auction_worklet.mojom.LoadSellerWorkletClientReceiver;

auction_worklet.mojom.LoadSellerWorkletClientPtr = auction_worklet.mojom.LoadSellerWorkletClientRemote;
auction_worklet.mojom.LoadSellerWorkletClientRequest = auction_worklet.mojom.LoadSellerWorkletClientPendingReceiver;


// Interface: AuctionWorkletService
mojo.internal.Struct(
    auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec, 'auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_Params', [
      mojo.internal.StructField('trusted_signals_cache', 0, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.TrustedSignalsCacheRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec, 'auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_Params', [
      mojo.internal.StructField('bidder_worklet', 0, 0, mojo.internal.InterfaceRequest(auction_worklet.mojom.BidderWorkletRemote), null, false, 0, undefined),
      mojo.internal.StructField('shared_storage_hosts', 8, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionSharedStorageHostRemote), false), null, true, 0, undefined),
      mojo.internal.StructField('url_loader_factory', 16, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('auction_network_events_handler', 24, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('script_source_load', 32, 0, auction_worklet.mojom.InProgressAuctionDownloadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wasm_helper_load', 40, 0, auction_worklet.mojom.InProgressAuctionDownloadSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_url', 48, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trusted_bidding_signals_slot_size_param', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('top_window_origin', 64, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy_state', 72, 0, auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 80, 0, auction_worklet.mojom.TrustedSignalsPublicKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('experiment_group_id_$value', 88, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'experiment_group_id_$flag', originalFieldName: 'experiment_group_id' }),
      mojo.internal.StructField('pause_for_debugger_on_start', 90, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('experiment_group_id_$flag', 90, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'experiment_group_id_$value', originalFieldName: 'experiment_group_id' }),
    ],
    [[0, 104]]);

mojo.internal.Struct(
    auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec, 'auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_Params', [
      mojo.internal.StructField('seller_worklet', 0, 0, mojo.internal.InterfaceRequest(auction_worklet.mojom.SellerWorkletRemote), null, false, 0, undefined),
      mojo.internal.StructField('shared_storage_hosts', 8, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionSharedStorageHostRemote), false), null, true, 0, undefined),
      mojo.internal.StructField('url_loader_factory', 16, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('auction_network_events_handler', 24, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('script_source_load', 32, 0, auction_worklet.mojom.InProgressAuctionDownloadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trusted_scoring_signals_url', 40, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('top_window_origin', 48, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy_state', 56, 0, auction_worklet.mojom.AuctionWorkletPermissionsPolicyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 64, 0, auction_worklet.mojom.TrustedSignalsPublicKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('load_seller_worklet_client', 72, 0, mojo.internal.InterfaceProxy(auction_worklet.mojom.LoadSellerWorkletClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('experiment_group_id_$value', 80, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'experiment_group_id_$flag', originalFieldName: 'experiment_group_id' }),
      mojo.internal.StructField('pause_for_debugger_on_start', 82, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('experiment_group_id_$flag', 82, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'experiment_group_id_$value', originalFieldName: 'experiment_group_id' }),
      mojo.internal.StructField('send_creative_scanning_metadata_$flag', 82, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'send_creative_scanning_metadata_$value', originalFieldName: 'send_creative_scanning_metadata' }),
      mojo.internal.StructField('send_creative_scanning_metadata_$value', 82, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'send_creative_scanning_metadata_$flag', originalFieldName: 'send_creative_scanning_metadata' }),
    ],
    [[0, 96]]);

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
  setTrustedSignalsCache(trusted_signals_cache) {
    return this.$.setTrustedSignalsCache(trusted_signals_cache);
  }
  loadBidderWorklet(bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key) {
    return this.$.loadBidderWorklet(bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key);
  }
  loadSellerWorklet(seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client) {
    return this.$.loadSellerWorklet(seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client);
  }
};

auction_worklet.mojom.AuctionWorkletServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AuctionWorkletService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setTrustedSignalsCache(trusted_signals_cache) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec,
      null,
      [trusted_signals_cache],
      false);
  }

  loadBidderWorklet(bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec,
      null,
      [bidder_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, wasm_helper_load, trusted_bidding_signals_url, trusted_bidding_signals_slot_size_param, top_window_origin, permissions_policy_state, experiment_group_id, public_key],
      false);
  }

  loadSellerWorklet(seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec,
      null,
      [seller_worklet, shared_storage_hosts, pause_for_debugger_on_start, url_loader_factory, auction_network_events_handler, script_source_load, trusted_scoring_signals_url, top_window_origin, permissions_policy_state, experiment_group_id, send_creative_scanning_metadata, public_key, load_seller_worklet_client],
      false);
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

auction_worklet.mojom.AuctionWorkletServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AuctionWorkletService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_SetTrustedSignalsCache_ParamsSpec.$.structSpec);
          const result = this.impl.setTrustedSignalsCache(params.trusted_signals_cache);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_LoadBidderWorklet_ParamsSpec.$.structSpec);
          const result = this.impl.loadBidderWorklet(params.bidder_worklet, params.shared_storage_hosts, params.pause_for_debugger_on_start, params.url_loader_factory, params.auction_network_events_handler, params.script_source_load, params.wasm_helper_load, params.trusted_bidding_signals_url, params.trusted_bidding_signals_slot_size_param, params.top_window_origin, params.permissions_policy_state, params.experiment_group_id, params.public_key);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionWorkletService_LoadSellerWorklet_ParamsSpec.$.structSpec);
          const result = this.impl.loadSellerWorklet(params.seller_worklet, params.shared_storage_hosts, params.pause_for_debugger_on_start, params.url_loader_factory, params.auction_network_events_handler, params.script_source_load, params.trusted_scoring_signals_url, params.top_window_origin, params.permissions_policy_state, params.experiment_group_id, params.send_creative_scanning_metadata, params.public_key, params.load_seller_worklet_client);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

auction_worklet.mojom.AuctionWorkletServiceReceiver = auction_worklet.mojom.AuctionWorkletServiceReceiver;

auction_worklet.mojom.AuctionWorkletServicePtr = auction_worklet.mojom.AuctionWorkletServiceRemote;
auction_worklet.mojom.AuctionWorkletServiceRequest = auction_worklet.mojom.AuctionWorkletServicePendingReceiver;

