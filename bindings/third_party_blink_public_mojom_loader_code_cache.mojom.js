// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/code_cache.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var persistent_cache = persistent_cache || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.CodeCacheTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.CodeCacheHost = {};
blink.mojom.CodeCacheHost.$interfaceName = 'blink.mojom.CodeCacheHost';
blink.mojom.CodeCacheHost_GetPendingBackend_ParamsSpec = { $: {} };
blink.mojom.CodeCacheHost_GetPendingBackend_ResponseParamsSpec = { $: {} };
blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec = { $: {} };
blink.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec = { $: {} };
blink.mojom.CodeCacheHost_FetchCachedCode_ResponseParamsSpec = { $: {} };
blink.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec = { $: {} };
blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec = { $: {} };

// Enum: CodeCacheType
blink.mojom.CodeCacheType = {
  kJavascript: 0,
  kWebAssembly: 1,
};

// Interface: CodeCacheHost
mojo.internal.Struct(
    blink.mojom.CodeCacheHost_GetPendingBackend_ParamsSpec, 'blink.mojom.CodeCacheHost_GetPendingBackend_Params', [
      mojo.internal.StructField('cache_type', 0, 0, blink.mojom.CodeCacheTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_GetPendingBackend_ResponseParamsSpec, 'blink.mojom.CodeCacheHost_GetPendingBackend_ResponseParams', [
      mojo.internal.StructField('pending_backend', 0, 0, persistent_cache.mojom.PendingReadOnlyBackendSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec, 'blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_Params', [
      mojo.internal.StructField('cache_type', 0, 0, blink.mojom.CodeCacheTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_response_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec, 'blink.mojom.CodeCacheHost_FetchCachedCode_Params', [
      mojo.internal.StructField('cache_type', 0, 0, blink.mojom.CodeCacheTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_FetchCachedCode_ResponseParamsSpec, 'blink.mojom.CodeCacheHost_FetchCachedCode_ResponseParams', [
      mojo.internal.StructField('response_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec, 'blink.mojom.CodeCacheHost_ClearCodeCacheEntry_Params', [
      mojo.internal.StructField('cache_type', 0, 0, blink.mojom.CodeCacheTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec, 'blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_response_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_storage_cache_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.CodeCacheHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CodeCacheHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CodeCacheHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CodeCacheHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.CodeCacheHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.CodeCacheHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPendingBackend(cache_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.CodeCacheHost_GetPendingBackend_ParamsSpec,
      blink.mojom.CodeCacheHost_GetPendingBackend_ResponseParamsSpec,
      [cache_type],
      false);
  }

  didGenerateCacheableMetadata(cache_type, url, expected_response_time, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec,
      null,
      [cache_type, url, expected_response_time, data],
      false);
  }

  fetchCachedCode(cache_type, url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec,
      blink.mojom.CodeCacheHost_FetchCachedCode_ResponseParamsSpec,
      [cache_type, url],
      false);
  }

  clearCodeCacheEntry(cache_type, url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec,
      null,
      [cache_type, url],
      false);
  }

  didGenerateCacheableMetadataInCacheStorage(url, expected_response_time, data, cache_storage_cache_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec,
      null,
      [url, expected_response_time, data, cache_storage_cache_name],
      false);
  }

};

blink.mojom.CodeCacheHost.getRemote = function() {
  let remote = new blink.mojom.CodeCacheHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CodeCacheHost',
    'context');
  return remote.$;
};

blink.mojom.CodeCacheHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.CodeCacheHost_GetPendingBackend_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPendingBackend(params.cache_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CodeCacheHost_GetPendingBackend_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didGenerateCacheableMetadata(params.cache_type, params.url, params.expected_response_time, params.data);
          break;
        }
        case 2: {
          const params = blink.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchCachedCode(params.cache_type, params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CodeCacheHost_FetchCachedCode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearCodeCacheEntry(params.cache_type, params.url);
          break;
        }
        case 4: {
          const params = blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didGenerateCacheableMetadataInCacheStorage(params.url, params.expected_response_time, params.data, params.cache_storage_cache_name);
          break;
        }
      }
      }
    }});
  }
};

blink.mojom.CodeCacheHostReceiver = blink.mojom.CodeCacheHostReceiver;

blink.mojom.CodeCacheHostPtr = blink.mojom.CodeCacheHostRemote;
blink.mojom.CodeCacheHostRequest = blink.mojom.CodeCacheHostPendingReceiver;

