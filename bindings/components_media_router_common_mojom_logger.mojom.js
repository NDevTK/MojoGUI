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
          const params = media_router.mojom.Logger_LogInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.logInfo(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 1: {
          const params = media_router.mojom.Logger_LogWarning_ParamsSpec.$.decode(message.payload);
          const result = this.impl.logWarning(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 2: {
          const params = media_router.mojom.Logger_LogError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.logError(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 3: {
          const params = media_router.mojom.Logger_BindReceiver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
      }
      }
    }});
  }
};

media_router.mojom.LoggerReceiver = media_router.mojom.LoggerReceiver;

media_router.mojom.LoggerPtr = media_router.mojom.LoggerRemote;
media_router.mojom.LoggerRequest = media_router.mojom.LoggerPendingReceiver;

