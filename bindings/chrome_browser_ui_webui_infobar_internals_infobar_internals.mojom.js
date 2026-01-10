// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/infobar_internals/infobar_internals.mojom
// Module: infobar_internals.mojom

'use strict';

// Module namespace
var infobar_internals = infobar_internals || {};
infobar_internals.mojom = infobar_internals.mojom || {};


// Enum: InfoBarType
infobar_internals.mojom.InfoBarType = {
};
infobar_internals.mojom.InfoBarTypeSpec = { $: mojo.internal.Enum() };

// Struct: InfoBarEntry
infobar_internals.mojom.InfoBarEntrySpec = {
  $: {
    structSpec: {
      name: 'infobar_internals.mojom.InfoBarEntry',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: infobar_internals.mojom.InfoBarTypeSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: Page
infobar_internals.mojom.Page = {};

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

// Legacy compatibility
infobar_internals.mojom.PagePtr = infobar_internals.mojom.PageRemote;
infobar_internals.mojom.PageRequest = infobar_internals.mojom.PagePendingReceiver;


// Interface: PageHandler
infobar_internals.mojom.PageHandler = {};

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

// ParamsSpec for GetInfoBars
infobar_internals.mojom.PageHandler_GetInfoBars_ParamsSpec = {
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

infobar_internals.mojom.PageHandler_GetInfoBars_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'infobars', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(infobar_internals.mojom.InfoBarEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TriggerInfoBar
infobar_internals.mojom.PageHandler_TriggerInfoBar_ParamsSpec = {
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

infobar_internals.mojom.PageHandler_TriggerInfoBar_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
infobar_internals.mojom.PageHandlerPtr = infobar_internals.mojom.PageHandlerRemote;
infobar_internals.mojom.PageHandlerRequest = infobar_internals.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
infobar_internals.mojom.PageHandlerFactory = {};

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

// ParamsSpec for CreatePageHandler
infobar_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'infobar_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
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
infobar_internals.mojom.PageHandlerFactoryPtr = infobar_internals.mojom.PageHandlerFactoryRemote;
infobar_internals.mojom.PageHandlerFactoryRequest = infobar_internals.mojom.PageHandlerFactoryPendingReceiver;

