// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/launcher_internals/launcher_internals.mojom
// Module: launcher_internals.mojom

'use strict';

// Module namespace
var launcher_internals = launcher_internals || {};
launcher_internals.mojom = launcher_internals.mojom || {};


// Struct: Result
launcher_internals.mojom.ResultSpec = {
  $: {
    structSpec: {
      name: 'launcher_internals.mojom.Result',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'description', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'result_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'metrics_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'score', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'ranker_scores', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
launcher_internals.mojom.PageHandlerFactory = {};

launcher_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

launcher_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'launcher_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      launcher_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new launcher_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

launcher_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      launcher_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page]);
  }

};

launcher_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new launcher_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'launcher_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
launcher_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'launcher_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
launcher_internals.mojom.PageHandlerFactoryPtr = launcher_internals.mojom.PageHandlerFactoryRemote;
launcher_internals.mojom.PageHandlerFactoryRequest = launcher_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: Page
launcher_internals.mojom.Page = {};

launcher_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

launcher_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'launcher_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      launcher_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new launcher_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

launcher_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateResults(query, keywords, results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      launcher_internals.mojom.Page_UpdateResults_ParamsSpec,
      null,
      [query, keywords, results]);
  }

};

launcher_internals.mojom.Page.getRemote = function() {
  let remote = new launcher_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'launcher_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateResults
launcher_internals.mojom.Page_UpdateResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'launcher_internals.mojom.Page.UpdateResults_Params',
      packedSize: 32,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'keywords', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'results', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
launcher_internals.mojom.PagePtr = launcher_internals.mojom.PageRemote;
launcher_internals.mojom.PageRequest = launcher_internals.mojom.PagePendingReceiver;

