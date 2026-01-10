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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetPendingBackend
        try {
             decoder.decodeStruct(blink.mojom.CodeCacheHost_GetPendingBackend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPendingBackend (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: DidGenerateCacheableMetadata
        try {
             decoder.decodeStruct(blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidGenerateCacheableMetadata (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: FetchCachedCode
        try {
             decoder.decodeStruct(blink.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchCachedCode (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ClearCodeCacheEntry
        try {
             decoder.decodeStruct(blink.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearCodeCacheEntry (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: DidGenerateCacheableMetadataInCacheStorage
        try {
             decoder.decodeStruct(blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidGenerateCacheableMetadataInCacheStorage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.CodeCacheHost_GetPendingBackend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPendingBackend');
          const result = this.impl.getPendingBackend(params.cache_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CodeCacheHost_GetPendingBackend_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.CodeCacheHost_DidGenerateCacheableMetadata_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didGenerateCacheableMetadata');
          const result = this.impl.didGenerateCacheableMetadata(params.cache_type, params.url, params.expected_response_time, params.data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.CodeCacheHost_FetchCachedCode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fetchCachedCode');
          const result = this.impl.fetchCachedCode(params.cache_type, params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CodeCacheHost_FetchCachedCode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.CodeCacheHost_ClearCodeCacheEntry_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearCodeCacheEntry');
          const result = this.impl.clearCodeCacheEntry(params.cache_type, params.url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didGenerateCacheableMetadataInCacheStorage');
          const result = this.impl.didGenerateCacheableMetadataInCacheStorage(params.url, params.expected_response_time, params.data, params.cache_storage_cache_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.CodeCacheHostReceiver = blink.mojom.CodeCacheHostReceiver;

blink.mojom.CodeCacheHostPtr = blink.mojom.CodeCacheHostRemote;
blink.mojom.CodeCacheHostRequest = blink.mojom.CodeCacheHostPendingReceiver;

