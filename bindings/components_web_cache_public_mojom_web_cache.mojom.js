// Auto-generated MojoJS binding
// Source: chromium_src/components/web_cache/public/mojom/web_cache.mojom
// Module: web_cache.mojom

'use strict';

// Module namespace
var web_cache = web_cache || {};
web_cache.mojom = web_cache.mojom || {};

web_cache.mojom.WebCache = {};
web_cache.mojom.WebCache.$interfaceName = 'web_cache.mojom.WebCache';
web_cache.mojom.WebCache_ClearCache_ParamsSpec = { $: {} };

// Interface: WebCache
mojo.internal.Struct(
    web_cache.mojom.WebCache_ClearCache_ParamsSpec, 'web_cache.mojom.WebCache_ClearCache_Params', [
      mojo.internal.StructField('on_navigation', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

web_cache.mojom.WebCachePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_cache.mojom.WebCacheRemote = class {
  static get $interfaceName() {
    return 'web_cache.mojom.WebCache';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_cache.mojom.WebCachePendingReceiver,
      handle);
    this.$ = new web_cache.mojom.WebCacheRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web_cache.mojom.WebCacheRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clearCache(on_navigation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web_cache.mojom.WebCache_ClearCache_ParamsSpec,
      null,
      [on_navigation],
      false);
  }

};

web_cache.mojom.WebCache.getRemote = function() {
  let remote = new web_cache.mojom.WebCacheRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_cache.mojom.WebCache',
    'context');
  return remote.$;
};

web_cache.mojom.WebCacheReceiver = class {
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
          const params = web_cache.mojom.WebCache_ClearCache_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearCache(params.on_navigation);
          break;
        }
      }
    }});
  }
};

web_cache.mojom.WebCacheReceiver = web_cache.mojom.WebCacheReceiver;

web_cache.mojom.WebCachePtr = web_cache.mojom.WebCacheRemote;
web_cache.mojom.WebCacheRequest = web_cache.mojom.WebCachePendingReceiver;

