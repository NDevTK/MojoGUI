// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_shared_storage_host.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Enum: AuctionWorkletFunction
auction_worklet.mojom.AuctionWorkletFunction = {
  kBidderGenerateBid: 0,
  kBidderReportWin: 1,
  kSellerScoreAd: 2,
  kSellerReportResult: 3,
};

// Interface: AuctionSharedStorageHost
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
      auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec.$,
      null,
      [method_with_options, source_auction_worklet_function]);
  }

  sharedStorageBatchUpdate(methods_with_options, with_lock, source_auction_worklet_function) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec.$,
      null,
      [methods_with_options, with_lock, source_auction_worklet_function]);
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
}};

// ParamsSpec for SharedStorageUpdate
auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionSharedStorageHost.SharedStorageUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'method_with_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_auction_worklet_function', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SharedStorageBatchUpdate
auction_worklet.mojom.AuctionSharedStorageHost_SharedStorageBatchUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.AuctionSharedStorageHost.SharedStorageBatchUpdate_Params',
      packedSize: 32,
      fields: [
        { name: 'methods_with_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'with_lock', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_auction_worklet_function', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
auction_worklet.mojom.AuctionSharedStorageHostPtr = auction_worklet.mojom.AuctionSharedStorageHostRemote;
auction_worklet.mojom.AuctionSharedStorageHostRequest = auction_worklet.mojom.AuctionSharedStorageHostPendingReceiver;

