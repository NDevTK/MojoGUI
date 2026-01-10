// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_shared_storage_host.mojom
// Module: auction_worklet.mojom

'use strict';

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
};

auction_worklet.mojom.AuctionSharedStorageHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sharedStorageUpdate(method_with_options, source_auction_worklet_function) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec,
      null,
      [method_with_options, source_auction_worklet_function],
      false);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock, source_auction_worklet_function) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SharedStorageUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageUpdate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SharedStorageBatchUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SharedStorageBatchUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageUpdate');
          const result = this.impl.sharedStorageUpdate(params.method_with_options, params.source_auction_worklet_function);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sharedStorageBatchUpdate');
          const result = this.impl.sharedStorageBatchUpdate(params.methods_with_options, params.with_lock, params.source_auction_worklet_function);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.AuctionSharedStorageHostReceiver = auction_worklet.mojom.AuctionSharedStorageHostReceiver;

auction_worklet.mojom.AuctionSharedStorageHostPtr = auction_worklet.mojom.AuctionSharedStorageHostRemote;
auction_worklet.mojom.AuctionSharedStorageHostRequest = auction_worklet.mojom.AuctionSharedStorageHostPendingReceiver;

