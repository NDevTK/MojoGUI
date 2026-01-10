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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkSendRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkSendRequest(params.request, params.timestamp);
          break;
        }
        case 1: {
          const params = auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkResponseReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkResponseReceived(params.request_id, params.loader_id, params.request_url, params.headers);
          break;
        }
        case 2: {
          const params = auction_worklet.mojom.AuctionNetworkEventsHandler_OnNetworkRequestComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNetworkRequestComplete(params.request_id, params.status);
          break;
        }
        case 3: {
          const params = auction_worklet.mojom.AuctionNetworkEventsHandler_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
    });
  }
};

auction_worklet.mojom.AuctionNetworkEventsHandlerReceiver = auction_worklet.mojom.AuctionNetworkEventsHandlerReceiver;

auction_worklet.mojom.AuctionNetworkEventsHandlerPtr = auction_worklet.mojom.AuctionNetworkEventsHandlerRemote;
auction_worklet.mojom.AuctionNetworkEventsHandlerRequest = auction_worklet.mojom.AuctionNetworkEventsHandlerPendingReceiver;

