// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/actor_internals/actor_internals.mojom
// Module: actor_internals.mojom

'use strict';

// Module namespace
var actor_internals = actor_internals || {};
actor_internals.mojom = actor_internals.mojom || {};


// Interface: Page
actor_internals.mojom.Page = {};

actor_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  journalEntryAdded(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec,
      null,
      [entry]);
  }

};

actor_internals.mojom.Page.getRemote = function() {
  let remote = new actor_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for JournalEntryAdded
actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.Page.JournalEntryAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
actor_internals.mojom.PagePtr = actor_internals.mojom.PageRemote;
actor_internals.mojom.PageRequest = actor_internals.mojom.PagePendingReceiver;


// Interface: PageHandler
actor_internals.mojom.PageHandler = {};

actor_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startLogging() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.PageHandler_StartLogging_ParamsSpec,
      null,
      []);
  }

  stopLogging() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor_internals.mojom.PageHandler_StopLogging_ParamsSpec,
      null,
      []);
  }

};

actor_internals.mojom.PageHandler.getRemote = function() {
  let remote = new actor_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for StartLogging
actor_internals.mojom.PageHandler_StartLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.PageHandler.StartLogging_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopLogging
actor_internals.mojom.PageHandler_StopLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.PageHandler.StopLogging_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
actor_internals.mojom.PageHandlerPtr = actor_internals.mojom.PageHandlerRemote;
actor_internals.mojom.PageHandlerRequest = actor_internals.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
actor_internals.mojom.PageHandlerFactory = {};

actor_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

actor_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new actor_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
actor_internals.mojom.PageHandlerFactoryPtr = actor_internals.mojom.PageHandlerFactoryRemote;
actor_internals.mojom.PageHandlerFactoryRequest = actor_internals.mojom.PageHandlerFactoryPendingReceiver;

