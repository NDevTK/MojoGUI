// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/back_forward_cache_controller.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BlockingDetailsSpec = { $: {} };
blink.mojom.BackForwardCacheControllerHost = {};
blink.mojom.BackForwardCacheControllerHost.$interfaceName = 'blink.mojom.BackForwardCacheControllerHost';
blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec = { $: {} };
blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec = { $: {} };

// Struct: BlockingDetails
mojo.internal.Struct(
    blink.mojom.BlockingDetailsSpec, 'blink.mojom.BlockingDetails', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebSchedulerTrackedFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, blink.mojom.ScriptSourceLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: BackForwardCacheControllerHost
mojo.internal.Struct(
    blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec, 'blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_Params', [
      mojo.internal.StructField('reason', 0, 0, blink.mojom.RendererEvictionReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, blink.mojom.ScriptSourceLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec, 'blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_Params', [
      mojo.internal.StructField('details', 0, 0, mojo.internal.Array(blink.mojom.BlockingDetailsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [reason, source],
      false);
  }

  didChangeBackForwardCacheDisablingFeatures(details) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec,
      null,
      [details],
      false);
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

blink.mojom.BackForwardCacheControllerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.evictFromBackForwardCache(params.reason, params.source);
          break;
        }
        case 1: {
          const params = blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didChangeBackForwardCacheDisablingFeatures(params.details);
          break;
        }
      }
    }});
  }
};

blink.mojom.BackForwardCacheControllerHostReceiver = blink.mojom.BackForwardCacheControllerHostReceiver;

blink.mojom.BackForwardCacheControllerHostPtr = blink.mojom.BackForwardCacheControllerHostRemote;
blink.mojom.BackForwardCacheControllerHostRequest = blink.mojom.BackForwardCacheControllerHostPendingReceiver;

