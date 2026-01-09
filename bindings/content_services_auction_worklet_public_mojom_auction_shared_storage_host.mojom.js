// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_shared_storage_host.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Enum: AuctionWorkletFunction
auction_worklet.mojom.AuctionWorkletFunction = {
};

// Interface: AuctionSharedStorageHost
auction_worklet.mojom.AuctionSharedStorageHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'auction_worklet.mojom.AuctionSharedStorageHost';
  }

  sharedStorageUpdate(method_with_options, source_auction_worklet_function) {
    // Method: SharedStorageUpdate
    // Call: SharedStorageUpdate(method_with_options, source_auction_worklet_function)
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock, source_auction_worklet_function) {
    // Method: SharedStorageBatchUpdate
    // Call: SharedStorageBatchUpdate(methods_with_options, with_lock, source_auction_worklet_function)
  }

};

auction_worklet.mojom.AuctionSharedStorageHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
