// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/infobar_internals/infobar_internals.mojom
// Module: infobar_internals.mojom

'use strict';

// Module namespace
var infobar_internals = infobar_internals || {};
infobar_internals.mojom = infobar_internals.mojom || {};

infobar_internals.mojom.InfoBarTypeSpec = { $: mojo.internal.Enum() };
infobar_internals.mojom.InfoBarEntrySpec = { $: {} };
infobar_internals.mojom.Page = {};
infobar_internals.mojom.Page.$interfaceName = 'infobar_internals.mojom.Page';
infobar_internals.mojom.PageHandler = {};
infobar_internals.mojom.PageHandler.$interfaceName = 'infobar_internals.mojom.PageHandler';
infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec = { $: {} };
infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParamsSpec = { $: {} };
infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec = { $: {} };
infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec = { $: {} };
infobar_internals.mojom.PageHandlerFactory = {};
infobar_internals.mojom.PageHandlerFactory.$interfaceName = 'infobar_internals.mojom.PageHandlerFactory';
infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };

// Enum: InfoBarType
infobar_internals.mojom.InfoBarType = {
  kDefaultBrowser: 0,
  kInstallerDownloader: 1,
  kSessionRestore: 2,
};

// Struct: InfoBarEntry
mojo.internal.Struct(
    infobar_internals.mojom.InfoBarEntrySpec, 'infobar_internals.mojom.InfoBarEntry', [
      mojo.internal.StructField('type', 0, 0, infobar_internals.mojom.InfoBarTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Page
infobar_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

infobar_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

infobar_internals.mojom.Page.getRemote = function() {
  let remote = new infobar_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.Page',
    'context');
  return remote.$;
};

infobar_internals.mojom.PagePtr = infobar_internals.mojom.PageRemote;
infobar_internals.mojom.PageRequest = infobar_internals.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec, 'infobar_internals.mojom.PageHandler_GetInfoBars_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParamsSpec, 'infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParams', [
      mojo.internal.StructField('infobars', 0, 0, mojo.internal.Array(infobar_internals.mojom.InfoBarEntrySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec, 'infobar_internals.mojom.PageHandler_TriggerInfoBar_Params', [
      mojo.internal.StructField('type', 0, 0, infobar_internals.mojom.InfoBarTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec, 'infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

infobar_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

infobar_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInfoBars() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec,
      infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParamsSpec,
      []);
  }

  triggerInfoBar(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec,
      infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec,
      [type]);
  }

};

infobar_internals.mojom.PageHandler.getRemote = function() {
  let remote = new infobar_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

infobar_internals.mojom.PageHandlerPtr = infobar_internals.mojom.PageHandlerRemote;
infobar_internals.mojom.PageHandlerRequest = infobar_internals.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(infobar_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(infobar_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

infobar_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

infobar_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

infobar_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new infobar_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

infobar_internals.mojom.PageHandlerFactoryPtr = infobar_internals.mojom.PageHandlerFactoryRemote;
infobar_internals.mojom.PageHandlerFactoryRequest = infobar_internals.mojom.PageHandlerFactoryPendingReceiver;

