// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/logger.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};

media_router.mojom.LogCategorySpec = { $: mojo.internal.Enum() };
media_router.mojom.Logger = {};
media_router.mojom.Logger.$interfaceName = 'media_router.mojom.Logger';
media_router.mojom.Logger_LogInfo_ParamsSpec = { $: {} };
media_router.mojom.Logger_LogWarning_ParamsSpec = { $: {} };
media_router.mojom.Logger_LogError_ParamsSpec = { $: {} };
media_router.mojom.Logger_BindReceiver_ParamsSpec = { $: {} };

// Enum: LogCategory
media_router.mojom.LogCategory = {
  kDiscovery: 0,
  kRoute: 1,
  kMirroring: 2,
  kUi: 3,
};

// Interface: Logger
mojo.internal.Struct(
    media_router.mojom.Logger_LogInfo_ParamsSpec, 'media_router.mojom.Logger_LogInfo_Params', [
      mojo.internal.StructField('category', 0, 0, media_router.mojom.LogCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('component', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_source', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media_router.mojom.Logger_LogWarning_ParamsSpec, 'media_router.mojom.Logger_LogWarning_Params', [
      mojo.internal.StructField('category', 0, 0, media_router.mojom.LogCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('component', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_source', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media_router.mojom.Logger_LogError_ParamsSpec, 'media_router.mojom.Logger_LogError_Params', [
      mojo.internal.StructField('category', 0, 0, media_router.mojom.LogCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('component', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('media_source', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media_router.mojom.Logger_BindReceiver_ParamsSpec, 'media_router.mojom.Logger_BindReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_router.mojom.LoggerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

media_router.mojom.LoggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.LoggerRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.Logger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.LoggerPendingReceiver,
      handle);
    this.$ = new media_router.mojom.LoggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.LoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logInfo(category, component, message, sink_id, media_source, session_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.Logger_LogInfo_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id],
      false);
  }

  logWarning(category, component, message, sink_id, media_source, session_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.Logger_LogWarning_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id],
      false);
  }

  logError(category, component, message, sink_id, media_source, session_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.Logger_LogError_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id],
      false);
  }

  bindReceiver(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_router.mojom.Logger_BindReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

media_router.mojom.Logger.getRemote = function() {
  let remote = new media_router.mojom.LoggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.Logger',
    'context');
  return remote.$;
};

media_router.mojom.LoggerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: LogInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_router.mojom.Logger_LogInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: LogWarning
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_router.mojom.Logger_LogWarning_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogWarning (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: LogError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_router.mojom.Logger_LogError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: BindReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_router.mojom.Logger_BindReceiver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindReceiver (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_router.mojom.Logger_LogInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logInfo');
          const result = this.impl.logInfo(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_router.mojom.Logger_LogWarning_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logWarning');
          const result = this.impl.logWarning(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_router.mojom.Logger_LogError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logError');
          const result = this.impl.logError(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_router.mojom.Logger_BindReceiver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindReceiver');
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_router.mojom.LoggerReceiver = media_router.mojom.LoggerReceiver;

media_router.mojom.LoggerPtr = media_router.mojom.LoggerRemote;
media_router.mojom.LoggerRequest = media_router.mojom.LoggerPendingReceiver;

