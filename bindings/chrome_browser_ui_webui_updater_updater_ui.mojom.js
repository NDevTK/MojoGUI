// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/updater/updater_ui.mojom
// Module: updater_ui.mojom

'use strict';

// Module namespace
var updater_ui = updater_ui || {};
updater_ui.mojom = updater_ui.mojom || {};


// Interface: PageHandlerFactory
updater_ui.mojom.PageHandlerFactory = {};

updater_ui.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

updater_ui.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new updater_ui.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater_ui.mojom.PageHandlerFactory.CreatePageHandler_Params',
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
updater_ui.mojom.PageHandlerFactoryPtr = updater_ui.mojom.PageHandlerFactoryRemote;
updater_ui.mojom.PageHandlerFactoryRequest = updater_ui.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
updater_ui.mojom.PageHandler = {};

updater_ui.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllUpdaterEvents() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec,
      updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec,
      []);
  }

};

updater_ui.mojom.PageHandler.getRemote = function() {
  let remote = new updater_ui.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetAllUpdaterEvents
updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater_ui.mojom.PageHandler.GetAllUpdaterEvents_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater_ui.mojom.PageHandler.GetAllUpdaterEvents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
updater_ui.mojom.PageHandlerPtr = updater_ui.mojom.PageHandlerRemote;
updater_ui.mojom.PageHandlerRequest = updater_ui.mojom.PageHandlerPendingReceiver;


// Interface: Page
updater_ui.mojom.Page = {};

updater_ui.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PagePendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

updater_ui.mojom.Page.getRemote = function() {
  let remote = new updater_ui.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
updater_ui.mojom.PagePtr = updater_ui.mojom.PageRemote;
updater_ui.mojom.PageRequest = updater_ui.mojom.PagePendingReceiver;

