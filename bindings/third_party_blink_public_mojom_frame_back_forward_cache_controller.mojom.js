// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/back_forward_cache_controller.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: BlockingDetails
blink.mojom.BlockingDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlockingDetails',
      packedSize: 24,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebSchedulerTrackedFeatureSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScriptSourceLocationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: BackForwardCacheControllerHost
blink.mojom.BackForwardCacheControllerHost = {};

blink.mojom.BackForwardCacheControllerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BackForwardCacheControllerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BackForwardCacheControllerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BackForwardCacheControllerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BackForwardCacheControllerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BackForwardCacheControllerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  evictFromBackForwardCache(reason, source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec,
      null,
      [reason, source]);
  }

  didChangeBackForwardCacheDisablingFeatures(details) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec,
      null,
      [details]);
  }

};

blink.mojom.BackForwardCacheControllerHost.getRemote = function() {
  let remote = new blink.mojom.BackForwardCacheControllerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BackForwardCacheControllerHost',
    'context');
  return remote.$;
};

// ParamsSpec for EvictFromBackForwardCache
blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackForwardCacheControllerHost.EvictFromBackForwardCache_Params',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RendererEvictionReasonSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScriptSourceLocationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidChangeBackForwardCacheDisablingFeatures
blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackForwardCacheControllerHost.DidChangeBackForwardCacheDisablingFeatures_Params',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.BlockingDetailsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.BackForwardCacheControllerHostPtr = blink.mojom.BackForwardCacheControllerHostRemote;
blink.mojom.BackForwardCacheControllerHostRequest = blink.mojom.BackForwardCacheControllerHostPendingReceiver;

