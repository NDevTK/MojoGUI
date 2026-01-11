// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_network_events_handler.mojom
// Module: auction_worklet.mojom

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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(auction_worklet.mojom.AuctionNetworkEventsHandlerRemote), null, false, 0, undefined),
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
  onNetworkSendRequest(request, timestamp) {
    return this.$.onNetworkSendRequest(request, timestamp);
  }
  onNetworkResponseReceived(request_id, loader_id, request_url, headers) {
    return this.$.onNetworkResponseReceived(request_id, loader_id, request_url, headers);
  }
  onNetworkRequestComplete(request_id, status) {
    return this.$.onNetworkRequestComplete(request_id, status);
  }
  clone(receiver) {
    return this.$.clone(receiver);
  }
};

auction_worklet.mojom.AuctionNetworkEventsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AuctionNetworkEventsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNetworkSendRequest(request, timestamp) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec,
      null,
      [request, timestamp],
      false);
  }

  onNetworkResponseReceived(request_id, loader_id, request_url, headers) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec,
      null,
      [request_id, loader_id, request_url, headers],
      false);
  }

  onNetworkRequestComplete(request_id, status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec,
      null,
      [request_id, status],
      false);
  }

  clone(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AuctionNetworkEventsHandler', [
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec.$.structSpec);
          const result = this.impl.onNetworkSendRequest(params.request, params.timestamp);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onNetworkResponseReceived(params.request_id, params.loader_id, params.request_url, params.headers);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onNetworkRequestComplete(params.request_id, params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

auction_worklet.mojom.AuctionNetworkEventsHandlerReceiver = auction_worklet.mojom.AuctionNetworkEventsHandlerReceiver;

auction_worklet.mojom.AuctionNetworkEventsHandlerPtr = auction_worklet.mojom.AuctionNetworkEventsHandlerRemote;
auction_worklet.mojom.AuctionNetworkEventsHandlerRequest = auction_worklet.mojom.AuctionNetworkEventsHandlerPendingReceiver;

