// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/infobar_internals/infobar_internals.mojom
// Module: infobar_internals.mojom

'use strict';

// Module namespace
var infobar_internals = infobar_internals || {};
infobar_internals.mojom = infobar_internals.mojom || {};


// Enum: InfoBarType
infobar_internals.mojom.mojom.InfoBarType = {
};
infobar_internals.mojom.mojom.InfoBarTypeSpec = { $: mojo.internal.Enum() };

// Struct: InfoBarEntry
infobar_internals.mojom.mojom.InfoBarEntrySpec = {
  $: {
    structSpec: {
      name: 'infobar_internals.mojom.InfoBarEntry',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: infobar_internals.mojom.InfoBarTypeSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: Page
infobar_internals.mojom.mojom.Page = {};

infobar_internals.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

infobar_internals.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

infobar_internals.mojom.mojom.Page.getRemote = function() {
  let remote = new infobar_internals.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
infobar_internals.mojom.mojom.PagePtr = infobar_internals.mojom.mojom.PageRemote;
infobar_internals.mojom.mojom.PageRequest = infobar_internals.mojom.mojom.PagePendingReceiver;


// Interface: PageHandler
infobar_internals.mojom.mojom.PageHandler = {};

infobar_internals.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

infobar_internals.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInfoBars() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      infobar_internals.mojom.mojom.PageHandler_GetInfoBars_ParamsSpec,
      infobar_internals.mojom.mojom.PageHandler_GetInfoBars_ResponseParamsSpec,
      []);
  }

  triggerInfoBar(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      infobar_internals.mojom.mojom.PageHandler_TriggerInfoBar_ParamsSpec,
      infobar_internals.mojom.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec,
      [type]);
  }

};

infobar_internals.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new infobar_internals.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetInfoBars
infobar_internals.mojom.mojom.PageHandler_GetInfoBars_ParamsSpec = {
  $: {
    structSpec: {
      name: 'infobar_internals.mojom.PageHandler.GetInfoBars_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

infobar_internals.mojom.mojom.PageHandler_GetInfoBars_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'infobar_internals.mojom.PageHandler.GetInfoBars_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'infobars', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(infobar_internals.mojom.InfoBarEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TriggerInfoBar
infobar_internals.mojom.mojom.PageHandler_TriggerInfoBar_ParamsSpec = {
  $: {
    structSpec: {
      name: 'infobar_internals.mojom.PageHandler.TriggerInfoBar_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: infobar_internals.mojom.InfoBarTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

infobar_internals.mojom.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'infobar_internals.mojom.PageHandler.TriggerInfoBar_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
infobar_internals.mojom.mojom.PageHandlerPtr = infobar_internals.mojom.mojom.PageHandlerRemote;
infobar_internals.mojom.mojom.PageHandlerRequest = infobar_internals.mojom.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
infobar_internals.mojom.mojom.PageHandlerFactory = {};

infobar_internals.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

infobar_internals.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'infobar_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      infobar_internals.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new infobar_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

infobar_internals.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      infobar_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

infobar_internals.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new infobar_internals.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'infobar_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
infobar_internals.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'infobar_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(infobar_internals.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(infobar_internals.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
infobar_internals.mojom.mojom.PageHandlerFactoryPtr = infobar_internals.mojom.mojom.PageHandlerFactoryRemote;
infobar_internals.mojom.mojom.PageHandlerFactoryRequest = infobar_internals.mojom.mojom.PageHandlerFactoryPendingReceiver;

