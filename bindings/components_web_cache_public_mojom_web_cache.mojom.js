// Auto-generated MojoJS binding
// Source: chromium_src/components/web_cache/public/mojom/web_cache.mojom
// Module: web_cache.mojom

'use strict';

// Module namespace
var web_cache = web_cache || {};
web_cache.mojom = web_cache.mojom || {};


// Interface: WebCache
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
      web_cache.mojom.WebCache_ClearCache_ParamsSpec.$,
      null,
      [on_navigation]);
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

// ParamsSpec for ClearCache
web_cache.mojom.WebCache_ClearCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_cache.mojom.WebCache.ClearCache_Params',
      packedSize: 16,
      fields: [
        { name: 'on_navigation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
web_cache.mojom.WebCachePtr = web_cache.mojom.WebCacheRemote;
web_cache.mojom.WebCacheRequest = web_cache.mojom.WebCachePendingReceiver;

