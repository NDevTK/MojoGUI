// Auto-generated MojoJS binding
// Source: chromium_src/components/history_clusters/history_clusters_internals/webui/history_clusters_internals.mojom
// Module: history_clusters_internals.mojom

'use strict';

// Module namespace
var history_clusters_internals = history_clusters_internals || {};
history_clusters_internals.mojom = history_clusters_internals.mojom || {};


// Interface: PageHandlerFactory
history_clusters_internals.mojom.mojom.PageHandlerFactory = {};

history_clusters_internals.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_clusters_internals.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'history_clusters_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_clusters_internals.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new history_clusters_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history_clusters_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, page_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_clusters_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, page_handler]);
  }

};

history_clusters_internals.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new history_clusters_internals.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
history_clusters_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(history_clusters_internals.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'page_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(history_clusters_internals.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
history_clusters_internals.mojom.mojom.PageHandlerFactoryPtr = history_clusters_internals.mojom.mojom.PageHandlerFactoryRemote;
history_clusters_internals.mojom.mojom.PageHandlerFactoryRequest = history_clusters_internals.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
history_clusters_internals.mojom.mojom.PageHandler = {};

history_clusters_internals.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_clusters_internals.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_clusters_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_clusters_internals.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history_clusters_internals.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history_clusters_internals.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getContextClustersJson() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_clusters_internals.mojom.mojom.PageHandler_GetContextClustersJson_ParamsSpec,
      history_clusters_internals.mojom.mojom.PageHandler_GetContextClustersJson_ResponseParamsSpec,
      []);
  }

  printKeywordBagStateToLogMessages() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_clusters_internals.mojom.mojom.PageHandler_PrintKeywordBagStateToLogMessages_ParamsSpec,
      null,
      []);
  }

};

history_clusters_internals.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new history_clusters_internals.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetContextClustersJson
history_clusters_internals.mojom.mojom.PageHandler_GetContextClustersJson_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters_internals.mojom.PageHandler.GetContextClustersJson_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

history_clusters_internals.mojom.mojom.PageHandler_GetContextClustersJson_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters_internals.mojom.PageHandler.GetContextClustersJson_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'context_clusters_json', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrintKeywordBagStateToLogMessages
history_clusters_internals.mojom.mojom.PageHandler_PrintKeywordBagStateToLogMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters_internals.mojom.PageHandler.PrintKeywordBagStateToLogMessages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
history_clusters_internals.mojom.mojom.PageHandlerPtr = history_clusters_internals.mojom.mojom.PageHandlerRemote;
history_clusters_internals.mojom.mojom.PageHandlerRequest = history_clusters_internals.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
history_clusters_internals.mojom.mojom.Page = {};

history_clusters_internals.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_clusters_internals.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_clusters_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_clusters_internals.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new history_clusters_internals.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history_clusters_internals.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogMessageAdded(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_clusters_internals.mojom.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [message]);
  }

};

history_clusters_internals.mojom.mojom.Page.getRemote = function() {
  let remote = new history_clusters_internals.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_clusters_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnLogMessageAdded
history_clusters_internals.mojom.mojom.Page_OnLogMessageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_clusters_internals.mojom.Page.OnLogMessageAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
history_clusters_internals.mojom.mojom.PagePtr = history_clusters_internals.mojom.mojom.PageRemote;
history_clusters_internals.mojom.mojom.PageRequest = history_clusters_internals.mojom.mojom.PagePendingReceiver;

