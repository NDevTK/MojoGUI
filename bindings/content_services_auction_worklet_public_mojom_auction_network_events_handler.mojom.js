// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_network_events_handler.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var network = network || {};

auction_worklet.mojom.AuctionNetworkEventsHandler = {};
auction_worklet.mojom.AuctionNetworkEventsHandler.$interfaceName = 'auction_worklet.mojom.AuctionNetworkEventsHandler';
auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec = { $: {} };
auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_ParamsSpec = { $: {} };

// Interface: AuctionNetworkEventsHandler
mojo.internal.Struct(
    auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec, 'auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_Params', [
      mojo.internal.StructField('request', 0, 0, network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec, 'auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('loader_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('headers', 24, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec, 'auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, network.mojom.URLLoaderCompletionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_ParamsSpec, 'auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(auction_worklet.mojom.AuctionNetworkEventsHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

auction_worklet.mojom.AuctionNetworkEventsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

auction_worklet.mojom.AuctionNetworkEventsHandlerRemote = class {
  static get $interfaceName() {
    return 'auction_worklet.mojom.AuctionNetworkEventsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      auction_worklet.mojom.AuctionNetworkEventsHandlerPendingReceiver,
      handle);
    this.$ = new auction_worklet.mojom.AuctionNetworkEventsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

auction_worklet.mojom.AuctionNetworkEventsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNetworkSendRequest(request, timestamp) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec,
      null,
      [request, timestamp],
      false);
  }

  onNetworkResponseReceived(request_id, loader_id, request_url, headers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec,
      null,
      [request_id, loader_id, request_url, headers],
      false);
  }

  onNetworkRequestComplete(request_id, status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec,
      null,
      [request_id, status],
      false);
  }

  clone(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

auction_worklet.mojom.AuctionNetworkEventsHandler.getRemote = function() {
  let remote = new auction_worklet.mojom.AuctionNetworkEventsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'auction_worklet.mojom.AuctionNetworkEventsHandler',
    'context');
  return remote.$;
};

auction_worklet.mojom.AuctionNetworkEventsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnNetworkSendRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkSendRequest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNetworkResponseReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkResponseReceived (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnNetworkRequestComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkRequestComplete (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onNetworkSendRequest');
          const result = this.impl.onNetworkSendRequest(params.request, params.timestamp);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onNetworkResponseReceived');
          const result = this.impl.onNetworkResponseReceived(params.request_id, params.loader_id, params.request_url, params.headers);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onNetworkRequestComplete');
          const result = this.impl.onNetworkRequestComplete(params.request_id, params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

auction_worklet.mojom.AuctionNetworkEventsHandlerReceiver = auction_worklet.mojom.AuctionNetworkEventsHandlerReceiver;

auction_worklet.mojom.AuctionNetworkEventsHandlerPtr = auction_worklet.mojom.AuctionNetworkEventsHandlerRemote;
auction_worklet.mojom.AuctionNetworkEventsHandlerRequest = auction_worklet.mojom.AuctionNetworkEventsHandlerPendingReceiver;

