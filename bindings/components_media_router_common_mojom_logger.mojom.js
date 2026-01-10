// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/logger.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Enum: LogCategory
media_router.mojom.mojom.LogCategory = {
  kDiscovery: 0,
  kRoute: 1,
  kMirroring: 2,
  kUi: 3,
};
media_router.mojom.mojom.LogCategorySpec = { $: mojo.internal.Enum() };

// Interface: Logger
media_router.mojom.mojom.Logger = {};

media_router.mojom.mojom.LoggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.mojom.LoggerRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.Logger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.mojom.LoggerPendingReceiver,
      handle);
    this.$ = new media_router.mojom.mojom.LoggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.mojom.LoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  logInfo(category, component, message, sink_id, media_source, session_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.mojom.Logger_LogInfo_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id]);
  }

  logWarning(category, component, message, sink_id, media_source, session_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.mojom.Logger_LogWarning_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id]);
  }

  logError(category, component, message, sink_id, media_source, session_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.mojom.Logger_LogError_ParamsSpec,
      null,
      [category, component, message, sink_id, media_source, session_id]);
  }

  bindReceiver(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_router.mojom.mojom.Logger_BindReceiver_ParamsSpec,
      null,
      [receiver]);
  }

};

media_router.mojom.mojom.Logger.getRemote = function() {
  let remote = new media_router.mojom.mojom.LoggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.Logger',
    'context');
  return remote.$;
};

// ParamsSpec for LogInfo
media_router.mojom.mojom.Logger_LogInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Logger.LogInfo_Params',
      packedSize: 56,
      fields: [
        { name: 'category', packedOffset: 40, packedBitOffset: 0, type: media_router.mojom.LogCategorySpec, nullable: false, minVersion: 0 },
        { name: 'component', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sink_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'media_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for LogWarning
media_router.mojom.mojom.Logger_LogWarning_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Logger.LogWarning_Params',
      packedSize: 56,
      fields: [
        { name: 'category', packedOffset: 40, packedBitOffset: 0, type: media_router.mojom.LogCategorySpec, nullable: false, minVersion: 0 },
        { name: 'component', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sink_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'media_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for LogError
media_router.mojom.mojom.Logger_LogError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Logger.LogError_Params',
      packedSize: 56,
      fields: [
        { name: 'category', packedOffset: 40, packedBitOffset: 0, type: media_router.mojom.LogCategorySpec, nullable: false, minVersion: 0 },
        { name: 'component', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sink_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'media_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for BindReceiver
media_router.mojom.mojom.Logger_BindReceiver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.Logger.BindReceiver_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_router.mojom.mojom.LoggerPtr = media_router.mojom.mojom.LoggerRemote;
media_router.mojom.mojom.LoggerRequest = media_router.mojom.mojom.LoggerPendingReceiver;

