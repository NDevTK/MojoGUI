// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/launcher_internals/launcher_internals.mojom
// Module: launcher_internals.mojom

'use strict';

// Module namespace
var launcher_internals = launcher_internals || {};
launcher_internals.mojom = launcher_internals.mojom || {};


// Struct: Result
launcher_internals.mojom.mojom.ResultSpec = {
  $: {
    structSpec: {
      name: 'launcher_internals.mojom.Result',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'result_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'metrics_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'score', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'ranker_scores', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Double, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: PageHandlerFactory
launcher_internals.mojom.mojom.PageHandlerFactory = {};

launcher_internals.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

launcher_internals.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'launcher_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      launcher_internals.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new launcher_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

launcher_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      launcher_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page]);
  }

};

launcher_internals.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new launcher_internals.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'launcher_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
launcher_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'launcher_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
launcher_internals.mojom.mojom.PageHandlerFactoryPtr = launcher_internals.mojom.mojom.PageHandlerFactoryRemote;
launcher_internals.mojom.mojom.PageHandlerFactoryRequest = launcher_internals.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: Page
launcher_internals.mojom.mojom.Page = {};

launcher_internals.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

launcher_internals.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'launcher_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      launcher_internals.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new launcher_internals.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

launcher_internals.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateResults(query, keywords, results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      launcher_internals.mojom.mojom.Page_UpdateResults_ParamsSpec,
      null,
      [query, keywords, results]);
  }

};

launcher_internals.mojom.mojom.Page.getRemote = function() {
  let remote = new launcher_internals.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'launcher_internals.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateResults
launcher_internals.mojom.mojom.Page_UpdateResults_ParamsSpec = {
  $: {
    structSpec: {
      name: 'launcher_internals.mojom.Page.UpdateResults_Params',
      packedSize: 32,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'keywords', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'results', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(launcher_internals.mojom.ResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
launcher_internals.mojom.mojom.PagePtr = launcher_internals.mojom.mojom.PageRemote;
launcher_internals.mojom.mojom.PageRequest = launcher_internals.mojom.mojom.PagePendingReceiver;

