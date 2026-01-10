// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/code_cache.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var url = url || {};


// Enum: CodeCacheType
blink.mojom.mojom.CodeCacheType = {
  kJavascript: 0,
  kWebAssembly: 1,
};
blink.mojom.mojom.CodeCacheTypeSpec = { $: mojo.internal.Enum() };

// Interface: CodeCacheHost
blink.mojom.mojom.CodeCacheHost = {};

blink.mojom.mojom.CodeCacheHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.CodeCacheHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CodeCacheHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.CodeCacheHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.CodeCacheHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.CodeCacheHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPendingBackend(cache_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.CodeCacheHost_GetPendingBackend_ParamsSpec,
      blink.mojom.mojom.CodeCacheHost_GetPendingBackend_ResponseParamsSpec,
      [cache_type]);
  }

  didGenerateCacheableMetadata(cache_type, url, expected_response_time, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec,
      null,
      [cache_type, url, expected_response_time, data]);
  }

  fetchCachedCode(cache_type, url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec,
      blink.mojom.mojom.CodeCacheHost_FetchCachedCode_ResponseParamsSpec,
      [cache_type, url]);
  }

  clearCodeCacheEntry(cache_type, url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec,
      null,
      [cache_type, url]);
  }

  didGenerateCacheableMetadataInCacheStorage(url, expected_response_time, data, cache_storage_cache_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec,
      null,
      [url, expected_response_time, data, cache_storage_cache_name]);
  }

};

blink.mojom.mojom.CodeCacheHost.getRemote = function() {
  let remote = new blink.mojom.mojom.CodeCacheHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CodeCacheHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetPendingBackend
blink.mojom.mojom.CodeCacheHost_GetPendingBackend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CodeCacheHost.GetPendingBackend_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CodeCacheTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.CodeCacheHost_GetPendingBackend_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CodeCacheHost.GetPendingBackend_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending_backend', packedOffset: 0, packedBitOffset: 0, type: persistent_cache.mojom.PendingReadOnlyBackendSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidGenerateCacheableMetadata
blink.mojom.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CodeCacheHost.DidGenerateCacheableMetadata_Params',
      packedSize: 48,
      fields: [
        { name: 'cache_type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.CodeCacheTypeSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'expected_response_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for FetchCachedCode
blink.mojom.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CodeCacheHost.FetchCachedCode_Params',
      packedSize: 24,
      fields: [
        { name: 'cache_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CodeCacheTypeSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.CodeCacheHost_FetchCachedCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CodeCacheHost.FetchCachedCode_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'response_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ClearCodeCacheEntry
blink.mojom.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CodeCacheHost.ClearCodeCacheEntry_Params',
      packedSize: 24,
      fields: [
        { name: 'cache_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CodeCacheTypeSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidGenerateCacheableMetadataInCacheStorage
blink.mojom.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CodeCacheHost.DidGenerateCacheableMetadataInCacheStorage_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'expected_response_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
        { name: 'cache_storage_cache_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.CodeCacheHostPtr = blink.mojom.mojom.CodeCacheHostRemote;
blink.mojom.mojom.CodeCacheHostRequest = blink.mojom.mojom.CodeCacheHostPendingReceiver;

