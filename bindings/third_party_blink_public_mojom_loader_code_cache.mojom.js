// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/code_cache.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var components = components || {};
var url = url || {};
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
      mojo.internal.StructField('cache_type', 0, 0, blink.mojom.CodeCacheTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_GetPendingBackend_ResponseParamsSpec, 'blink.mojom.CodeCacheHost_GetPendingBackend_ResponseParams', [
      mojo.internal.StructField('pending_backend', 0, 0, persistent_cache.mojom.PendingReadOnlyBackendSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec, 'blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_Params', [
      mojo.internal.StructField('cache_type', 0, 0, blink.mojom.CodeCacheTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('expected_response_time', 16, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 24, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec, 'blink.mojom.CodeCacheHost_FetchCachedCode_Params', [
      mojo.internal.StructField('cache_type', 0, 0, blink.mojom.CodeCacheTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_FetchCachedCode_ResponseParamsSpec, 'blink.mojom.CodeCacheHost_FetchCachedCode_ResponseParams', [
      mojo.internal.StructField('response_time', 0, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec, 'blink.mojom.CodeCacheHost_ClearCodeCacheEntry_Params', [
      mojo.internal.StructField('cache_type', 0, 0, blink.mojom.CodeCacheTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec, 'blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('expected_response_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('cache_storage_cache_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

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

blink.mojom.CodeCacheHostPtr = blink.mojom.CodeCacheHostRemote;
blink.mojom.CodeCacheHostRequest = blink.mojom.CodeCacheHostPendingReceiver;

