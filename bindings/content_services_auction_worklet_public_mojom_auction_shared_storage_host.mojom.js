// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_shared_storage_host.mojom
// Module: auction_worklet.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var network = network || {};

auction_worklet.mojom.AuctionWorkletFunctionSpec = { $: mojo.internal.Enum() };
auction_worklet.mojom.AuctionSharedStorageHost = {};
auction_worklet.mojom.AuctionSharedStorageHost.$interfaceName = 'auction_worklet.mojom.AuctionSharedStorageHost';
auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec = { $: {} };

// Enum: AuctionWorkletFunction
auction_worklet.mojom.AuctionWorkletFunction = {
  kBidderGenerateBid: 0,
  kBidderReportWin: 1,
  kSellerScoreAd: 2,
  kSellerReportResult: 3,
};

// Interface: AuctionSharedStorageHost
mojo.internal.Struct(
    auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec, 'auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_Params', [
      mojo.internal.StructField('method_with_options', 0, 0, network.mojom.SharedStorageModifierMethodWithOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_auction_worklet_function', 8, 0, auction_worklet.mojom.AuctionWorkletFunctionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec, 'auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_Params', [
      mojo.internal.StructField('methods_with_options', 0, 0, network.mojom.SharedStorageBatchUpdateMethodsArgumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('with_lock', 8, 0, network.mojom.LockNameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_auction_worklet_function', 16, 0, auction_worklet.mojom.AuctionWorkletFunctionSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

auction_worklet.mojom.AuctionSharedStorageHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.AuctionSharedStorageHostRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.AuctionSharedStorageHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.AuctionSharedStorageHostPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.AuctionSharedStorageHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sharedStorageUpdate(method_with_options, source_auction_worklet_function) {
    return this.$.sharedStorageUpdate(method_with_options, source_auction_worklet_function);
  }
  sharedStorageBatchUpdate(methods_with_options, with_lock, source_auction_worklet_function) {
    return this.$.sharedStorageBatchUpdate(methods_with_options, with_lock, source_auction_worklet_function);
  }
};

auction_worklet.mojom.AuctionSharedStorageHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AuctionSharedStorageHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  sharedStorageUpdate(method_with_options, source_auction_worklet_function) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec,
      null,
      [method_with_options, source_auction_worklet_function],
      false);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock, source_auction_worklet_function) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec,
      null,
      [methods_with_options, with_lock, source_auction_worklet_function],
      false);
  }

};

auction_worklet.mojom.AuctionSharedStorageHost.getRemote = function() {
  let remote = new auction_worklet.mojom.AuctionSharedStorageHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.AuctionSharedStorageHost',
    'context');
  return remote.$;
};

auction_worklet.mojom.AuctionSharedStorageHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AuctionSharedStorageHost', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.sharedStorageUpdate(params.method_with_options, params.source_auction_worklet_function);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.sharedStorageBatchUpdate(params.methods_with_options, params.with_lock, params.source_auction_worklet_function);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

auction_worklet.mojom.AuctionSharedStorageHostReceiver = auction_worklet.mojom.AuctionSharedStorageHostReceiver;

auction_worklet.mojom.AuctionSharedStorageHostPtr = auction_worklet.mojom.AuctionSharedStorageHostRemote;
auction_worklet.mojom.AuctionSharedStorageHostRequest = auction_worklet.mojom.AuctionSharedStorageHostPendingReceiver;

