// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/optimization_guide_internals/webui/optimization_guide_internals.mojom
// Module: optimization_guide_internals.mojom

'use strict';

// Module namespace
var optimization_guide_internals = optimization_guide_internals || {};
optimization_guide_internals.mojom = optimization_guide_internals.mojom || {};


// Struct: DownloadedModelInfo
optimization_guide_internals.mojom.DownloadedModelInfoSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.DownloadedModelInfo',
      packedSize: 32,
      fields: [
        { name: 'optimization_target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'file_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: LoggedClientIds
optimization_guide_internals.mojom.LoggedClientIdsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.LoggedClientIds',
      packedSize: 16,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MqlsLog
optimization_guide_internals.mojom.MqlsLogSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.MqlsLog',
      packedSize: 32,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'proto', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PageHandlerFactory
optimization_guide_internals.mojom.PageHandlerFactory = {};

optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(optimization_guide_internals.mojom.PageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

optimization_guide_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'optimization_guide_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new optimization_guide_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page]);
  }

  requestDownloadedModelsInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec,
      optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ResponseParamsSpec,
      []);
  }

  requestLoggedModelQualityClientIds() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec,
      optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ResponseParamsSpec,
      []);
  }

  requestMqlsLogs() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec,
      optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ResponseParamsSpec,
      []);
  }

};

optimization_guide_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new optimization_guide_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(optimization_guide_internals.mojom.PageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestDownloadedModelsInfo
optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory.RequestDownloadedModelsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory.RequestDownloadedModelsInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'downloaded_models_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(optimization_guide_internals.mojom.DownloadedModelInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestLoggedModelQualityClientIds
optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory.RequestLoggedModelQualityClientIds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory.RequestLoggedModelQualityClientIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'logged_client_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(optimization_guide_internals.mojom.LoggedClientIdsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestMqlsLogs
optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory.RequestMqlsLogs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.PageHandlerFactory.RequestMqlsLogs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mqls_logs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(optimization_guide_internals.mojom.MqlsLogSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
optimization_guide_internals.mojom.PageHandlerFactoryPtr = optimization_guide_internals.mojom.PageHandlerFactoryRemote;
optimization_guide_internals.mojom.PageHandlerFactoryRequest = optimization_guide_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: Page
optimization_guide_internals.mojom.Page = {};

optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.Page_OnLogMessageAdded_Params',
      packedSize: 48,
      fields: [
        { name: 'event_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'log_source', packedOffset: 32, packedBitOffset: 0, type: optimization_guide_common.mojom.LogSourceSpec, nullable: false, minVersion: 0 },
        { name: 'source_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_line', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

optimization_guide_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'optimization_guide_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new optimization_guide_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [event_time, log_source, source_file, source_line, message]);
  }

};

optimization_guide_internals.mojom.Page.getRemote = function() {
  let remote = new optimization_guide_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnLogMessageAdded
optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'optimization_guide_internals.mojom.Page.OnLogMessageAdded_Params',
      packedSize: 48,
      fields: [
        { name: 'event_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'log_source', packedOffset: 32, packedBitOffset: 0, type: optimization_guide_common.mojom.LogSourceSpec, nullable: false, minVersion: 0 },
        { name: 'source_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_line', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
optimization_guide_internals.mojom.PagePtr = optimization_guide_internals.mojom.PageRemote;
optimization_guide_internals.mojom.PageRequest = optimization_guide_internals.mojom.PagePendingReceiver;

