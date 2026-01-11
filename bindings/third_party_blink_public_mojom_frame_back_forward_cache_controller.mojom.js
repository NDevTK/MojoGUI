// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/back_forward_cache_controller.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  evictFromBackForwardCache(reason, source) {
    return this.$.evictFromBackForwardCache(reason, source);
  }
  didChangeBackForwardCacheDisablingFeatures(details) {
    return this.$.didChangeBackForwardCacheDisablingFeatures(details);
  }
};

blink.mojom.BackForwardCacheControllerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BackForwardCacheControllerHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  evictFromBackForwardCache(reason, source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec,
      null,
      [reason, source],
      false);
  }

  didChangeBackForwardCacheDisablingFeatures(details) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BackForwardCacheControllerHost', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackForwardCacheControllerHost_EvictFromBackForwardCache_ParamsSpec.$.structSpec);
          const result = this.impl.evictFromBackForwardCache(params.reason, params.source);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.BackForwardCacheControllerHost_DidChangeBackForwardCacheDisablingFeatures_ParamsSpec.$.structSpec);
          const result = this.impl.didChangeBackForwardCacheDisablingFeatures(params.details);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.BackForwardCacheControllerHostReceiver = blink.mojom.BackForwardCacheControllerHostReceiver;

blink.mojom.BackForwardCacheControllerHostPtr = blink.mojom.BackForwardCacheControllerHostRemote;
blink.mojom.BackForwardCacheControllerHostRequest = blink.mojom.BackForwardCacheControllerHostPendingReceiver;

