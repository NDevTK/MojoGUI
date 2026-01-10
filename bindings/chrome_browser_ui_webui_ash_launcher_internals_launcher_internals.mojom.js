// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/launcher_internals/launcher_internals.mojom
// Module: launcher_internals.mojom

'use strict';

// Module namespace
var launcher_internals = launcher_internals || {};
launcher_internals.mojom = launcher_internals.mojom || {};

launcher_internals.mojom.ResultSpec = { $: {} };
launcher_internals.mojom.PageHandlerFactory = {};
launcher_internals.mojom.PageHandlerFactory.$interfaceName = 'launcher_internals.mojom.PageHandlerFactory';
launcher_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
launcher_internals.mojom.Page = {};
launcher_internals.mojom.Page.$interfaceName = 'launcher_internals.mojom.Page';
launcher_internals.mojom.Page_UpdateResults_ParamsSpec = { $: {} };

// Struct: Result
mojo.internal.Struct(
    launcher_internals.mojom.ResultSpec, 'launcher_internals.mojom.Result', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('metrics_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('score', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('ranker_scores', 56, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Double, false), null, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    launcher_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'launcher_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(launcher_internals.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [page],
      false);
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

launcher_internals.mojom.PageHandlerFactoryPtr = launcher_internals.mojom.PageHandlerFactoryRemote;
launcher_internals.mojom.PageHandlerFactoryRequest = launcher_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    launcher_internals.mojom.Page_UpdateResults_ParamsSpec, 'launcher_internals.mojom.Page_UpdateResults_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('keywords', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('results', 16, 0, mojo.internal.Array(launcher_internals.mojom.ResultSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [query, keywords, results],
      false);
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

launcher_internals.mojom.PagePtr = launcher_internals.mojom.PageRemote;
launcher_internals.mojom.PageRequest = launcher_internals.mojom.PagePendingReceiver;

