// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/contextual_tasks/contextual_tasks_internals.mojom
// Module: contextual_tasks_internals.mojom

'use strict';

// Module namespace
var contextual_tasks_internals = contextual_tasks_internals || {};
contextual_tasks_internals.mojom = contextual_tasks_internals.mojom || {};


// Interface: ContextualTasksInternalsPageHandlerFactory
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [page, handler]);
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory.getRemote = function() {
  let remote = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory.CreatePageHandler_Params',
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
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPtr = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRemote;
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryRequest = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactoryPendingReceiver;


// Interface: ContextualTasksInternalsPageHandler
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRelevantContext(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ParamsSpec.$,
      contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ResponseParamsSpec.$,
      [request]);
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler.getRemote = function() {
  let remote = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetRelevantContext
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler.GetRelevantContext_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler_GetRelevantContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler.GetRelevantContext_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPtr = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRemote;
contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerRequest = contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerPendingReceiver;


// Interface: ContextualTasksInternalsPage
contextual_tasks_internals.mojom.ContextualTasksInternalsPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemote = class {
  static get $interfaceName() {
    return 'contextual_tasks_internals.mojom.ContextualTasksInternalsPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      contextual_tasks_internals.mojom.ContextualTasksInternalsPagePendingReceiver,
      handle);
    this.$ = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogMessageAdded(event_time, source_file, source_line, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      contextual_tasks_internals.mojom.ContextualTasksInternalsPage_OnLogMessageAdded_ParamsSpec.$,
      null,
      [event_time, source_file, source_line, message]);
  }

};

contextual_tasks_internals.mojom.ContextualTasksInternalsPage.getRemote = function() {
  let remote = new contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'contextual_tasks_internals.mojom.ContextualTasksInternalsPage',
    'context');
  return remote.$;
};

// ParamsSpec for OnLogMessageAdded
contextual_tasks_internals.mojom.ContextualTasksInternalsPage_OnLogMessageAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'contextual_tasks_internals.mojom.ContextualTasksInternalsPage.OnLogMessageAdded_Params',
      packedSize: 40,
      fields: [
        { name: 'event_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_line', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
contextual_tasks_internals.mojom.ContextualTasksInternalsPagePtr = contextual_tasks_internals.mojom.ContextualTasksInternalsPageRemote;
contextual_tasks_internals.mojom.ContextualTasksInternalsPageRequest = contextual_tasks_internals.mojom.ContextualTasksInternalsPagePendingReceiver;

