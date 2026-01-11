// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/logger.mojom
// Module: media_router.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_router.mojom.LoggerRemote), null, false, 0, undefined),
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
  logInfo(category, component, message, sink_id, media_source, session_id) {
    return this.$.logInfo(category, component, message, sink_id, media_source, session_id);
  }
  logWarning(category, component, message, sink_id, media_source, session_id) {
    return this.$.logWarning(category, component, message, sink_id, media_source, session_id);
  }
  logError(category, component, message, sink_id, media_source, session_id) {
    return this.$.logError(category, component, message, sink_id, media_source, session_id);
  }
  bindReceiver(receiver) {
    return this.$.bindReceiver(receiver);
  }
};

media_router.mojom.LoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Logger', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  logInfo(category, component, message, sink_id, media_source, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_router.mojom.Logger_LogInfo_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id],
      false);
  }

  logWarning(category, component, message, sink_id, media_source, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_router.mojom.Logger_LogWarning_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id],
      false);
  }

  logError(category, component, message, sink_id, media_source, session_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media_router.mojom.Logger_LogError_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id],
      false);
  }

  bindReceiver(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Logger', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(media_router.mojom.Logger_LogInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.Logger_LogWarning_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.Logger_LogError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_router.mojom.Logger_BindReceiver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.Logger_LogInfo_ParamsSpec.$.structSpec);
          const result = this.impl.logInfo(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.Logger_LogWarning_ParamsSpec.$.structSpec);
          const result = this.impl.logWarning(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.Logger_LogError_ParamsSpec.$.structSpec);
          const result = this.impl.logError(params.category, params.component, params.message, params.sink_id, params.media_source, params.session_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_router.mojom.Logger_BindReceiver_ParamsSpec.$.structSpec);
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media_router.mojom.LoggerReceiver = media_router.mojom.LoggerReceiver;

media_router.mojom.LoggerPtr = media_router.mojom.LoggerRemote;
media_router.mojom.LoggerRequest = media_router.mojom.LoggerPendingReceiver;

