// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_network_events_handler.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Interface: AuctionNetworkEventsHandler
auction_worklet.mojom.AuctionNetworkEventsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.AuctionNetworkEventsHandler';
  }

  onNetworkSendRequest(request, timestamp) {
    // Method: OnNetworkSendRequest
    // Call: OnNetworkSendRequest(request, timestamp)
  }

  onNetworkResponseReceived(request_id, loader_id, request_url, headers) {
    // Method: OnNetworkResponseReceived
    // Call: OnNetworkResponseReceived(request_id, loader_id, request_url, headers)
  }

  onNetworkRequestComplete(request_id, status) {
    // Method: OnNetworkRequestComplete
    // Call: OnNetworkRequestComplete(request_id, status)
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

};

auction_worklet.mojom.AuctionNetworkEventsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
