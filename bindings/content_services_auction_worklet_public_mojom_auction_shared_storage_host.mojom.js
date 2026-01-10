// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/auction_shared_storage_host.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};
var services = services || {};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'auction_worklet.mojom.AuctionSharedStorageHost',
    'context');
  return remote.$;
};

auction_worklet.mojom.AuctionSharedStorageHostPtr = auction_worklet.mojom.AuctionSharedStorageHostRemote;
auction_worklet.mojom.AuctionSharedStorageHostRequest = auction_worklet.mojom.AuctionSharedStorageHostPendingReceiver;

