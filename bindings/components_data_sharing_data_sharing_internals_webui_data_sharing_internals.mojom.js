// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/data_sharing_internals/webui/data_sharing_internals.mojom
// Module: data_sharing_internals.mojom

'use strict';

// Module namespace
var data_sharing_internals = data_sharing_internals || {};
data_sharing_internals.mojom = data_sharing_internals.mojom || {};


// Interface: PageHandlerFactory
data_sharing_internals.mojom.PageHandlerFactory = {};

data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [page, handler]);
  }

};

data_sharing_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
data_sharing_internals.mojom.PageHandlerFactoryPtr = data_sharing_internals.mojom.PageHandlerFactoryRemote;
data_sharing_internals.mojom.PageHandlerFactoryRequest = data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
data_sharing_internals.mojom.PageHandler = {};

data_sharing_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isEmptyService() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec.$,
      data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec.$,
      []);
  }

  getAllGroups() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec.$,
      data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec.$,
      []);
  }

};

data_sharing_internals.mojom.PageHandler.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for IsEmptyService
data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandler.IsEmptyService_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandler.IsEmptyService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_empty', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllGroups
data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandler.GetAllGroups_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.PageHandler.GetAllGroups_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'is_success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
data_sharing_internals.mojom.PageHandlerPtr = data_sharing_internals.mojom.PageHandlerRemote;
data_sharing_internals.mojom.PageHandlerRequest = data_sharing_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
data_sharing_internals.mojom.Page = {};

data_sharing_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$,
      null,
      [event_time, log_source, source_file, source_line, message]);
  }

};

data_sharing_internals.mojom.Page.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnLogMessageAdded
data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_sharing_internals.mojom.Page.OnLogMessageAdded_Params',
      packedSize: 48,
      fields: [
        { name: 'event_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'log_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_file', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_line', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
data_sharing_internals.mojom.PagePtr = data_sharing_internals.mojom.PageRemote;
data_sharing_internals.mojom.PageRequest = data_sharing_internals.mojom.PagePendingReceiver;

