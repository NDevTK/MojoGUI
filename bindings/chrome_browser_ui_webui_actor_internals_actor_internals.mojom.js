// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/actor_internals/actor_internals.mojom
// Module: actor_internals.mojom

'use strict';

// Module namespace
var actor_internals = actor_internals || {};
actor_internals.mojom = actor_internals.mojom || {};


// Struct: JournalEntry
actor_internals.mojom.mojom.JournalEntrySpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.JournalEntry',
      packedSize: 72,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: false, minVersion: 0 },
        { name: 'task_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'track', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'screenshot', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: Page
actor_internals.mojom.mojom.Page = {};

actor_internals.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  journalEntryAdded(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.mojom.Page_JournalEntryAdded_ParamsSpec,
      null,
      [entry]);
  }

};

actor_internals.mojom.mojom.Page.getRemote = function() {
  let remote = new actor_internals.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for JournalEntryAdded
actor_internals.mojom.mojom.Page_JournalEntryAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.Page.JournalEntryAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'entry', packedOffset: 0, packedBitOffset: 0, type: actor_internals.mojom.JournalEntrySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
actor_internals.mojom.mojom.PagePtr = actor_internals.mojom.mojom.PageRemote;
actor_internals.mojom.mojom.PageRequest = actor_internals.mojom.mojom.PagePendingReceiver;


// Interface: PageHandler
actor_internals.mojom.mojom.PageHandler = {};

actor_internals.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startLogging() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.mojom.PageHandler_StartLogging_ParamsSpec,
      null,
      []);
  }

  stopLogging() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor_internals.mojom.mojom.PageHandler_StopLogging_ParamsSpec,
      null,
      []);
  }

};

actor_internals.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new actor_internals.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for StartLogging
actor_internals.mojom.mojom.PageHandler_StartLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.PageHandler.StartLogging_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StopLogging
actor_internals.mojom.mojom.PageHandler_StopLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.PageHandler.StopLogging_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
actor_internals.mojom.mojom.PageHandlerPtr = actor_internals.mojom.mojom.PageHandlerRemote;
actor_internals.mojom.mojom.PageHandlerRequest = actor_internals.mojom.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
actor_internals.mojom.mojom.PageHandlerFactory = {};

actor_internals.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

actor_internals.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new actor_internals.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
actor_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
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
actor_internals.mojom.mojom.PageHandlerFactoryPtr = actor_internals.mojom.mojom.PageHandlerFactoryRemote;
actor_internals.mojom.mojom.PageHandlerFactoryRequest = actor_internals.mojom.mojom.PageHandlerFactoryPendingReceiver;

