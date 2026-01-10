// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/data_sharing_internals/webui/data_sharing_internals.mojom
// Module: data_sharing_internals.mojom

'use strict';

// Module namespace
var data_sharing_internals = data_sharing_internals || {};
data_sharing_internals.mojom = data_sharing_internals.mojom || {};


// Interface: PageHandlerFactory
data_sharing_internals.mojom.mojom.PageHandlerFactory = {};

data_sharing_internals.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

data_sharing_internals.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new data_sharing_internals.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
data_sharing_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
data_sharing_internals.mojom.mojom.PageHandlerFactoryPtr = data_sharing_internals.mojom.mojom.PageHandlerFactoryRemote;
data_sharing_internals.mojom.mojom.PageHandlerFactoryRequest = data_sharing_internals.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
data_sharing_internals.mojom.mojom.PageHandler = {};

data_sharing_internals.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isEmptyService() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.mojom.PageHandler_IsEmptyService_ParamsSpec,
      data_sharing_internals.mojom.mojom.PageHandler_IsEmptyService_ResponseParamsSpec,
      []);
  }

  getAllGroups() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_sharing_internals.mojom.mojom.PageHandler_GetAllGroups_ParamsSpec,
      data_sharing_internals.mojom.mojom.PageHandler_GetAllGroups_ResponseParamsSpec,
      []);
  }

};

data_sharing_internals.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new data_sharing_internals.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for IsEmptyService
data_sharing_internals.mojom.mojom.PageHandler_IsEmptyService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandler.IsEmptyService_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

data_sharing_internals.mojom.mojom.PageHandler_IsEmptyService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandler.IsEmptyService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_empty', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllGroups
data_sharing_internals.mojom.mojom.PageHandler_GetAllGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandler.GetAllGroups_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

data_sharing_internals.mojom.mojom.PageHandler_GetAllGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandler.GetAllGroups_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(data_sharing.mojom.GroupDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
data_sharing_internals.mojom.mojom.PageHandlerPtr = data_sharing_internals.mojom.mojom.PageHandlerRemote;
data_sharing_internals.mojom.mojom.PageHandlerRequest = data_sharing_internals.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
data_sharing_internals.mojom.mojom.Page = {};

data_sharing_internals.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [event_time, log_source, source_file, source_line, message]);
  }

};

data_sharing_internals.mojom.mojom.Page.getRemote = function() {
  let remote = new data_sharing_internals.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnLogMessageAdded
data_sharing_internals.mojom.mojom.Page_OnLogMessageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.Page.OnLogMessageAdded_Params',
      packedSize: 40,
      fields: [
        { name: 'event_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'log_source', packedOffset: 24, packedBitOffset: 0, type: logger_common.mojom.LogSourceSpec, nullable: false, minVersion: 0 },
        { name: 'source_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_line', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
data_sharing_internals.mojom.mojom.PagePtr = data_sharing_internals.mojom.mojom.PageRemote;
data_sharing_internals.mojom.mojom.PageRequest = data_sharing_internals.mojom.mojom.PagePendingReceiver;

