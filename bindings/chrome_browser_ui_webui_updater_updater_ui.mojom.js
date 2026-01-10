// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/updater/updater_ui.mojom
// Module: updater_ui.mojom

'use strict';

// Module namespace
var updater_ui = updater_ui || {};
updater_ui.mojom = updater_ui.mojom || {};


// Interface: PageHandlerFactory
updater_ui.mojom.mojom.PageHandlerFactory = {};

updater_ui.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater_ui.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

updater_ui.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new updater_ui.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
updater_ui.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater_ui.mojom.PageHandlerFactory.CreatePageHandler_Params',
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
updater_ui.mojom.mojom.PageHandlerFactoryPtr = updater_ui.mojom.mojom.PageHandlerFactoryRemote;
updater_ui.mojom.mojom.PageHandlerFactoryRequest = updater_ui.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
updater_ui.mojom.mojom.PageHandler = {};

updater_ui.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllUpdaterEvents() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater_ui.mojom.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec,
      updater_ui.mojom.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec,
      []);
  }

};

updater_ui.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new updater_ui.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetAllUpdaterEvents
updater_ui.mojom.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater_ui.mojom.PageHandler.GetAllUpdaterEvents_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

updater_ui.mojom.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater_ui.mojom.PageHandler.GetAllUpdaterEvents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
updater_ui.mojom.mojom.PageHandlerPtr = updater_ui.mojom.mojom.PageHandlerRemote;
updater_ui.mojom.mojom.PageHandlerRequest = updater_ui.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
updater_ui.mojom.mojom.Page = {};

updater_ui.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

updater_ui.mojom.mojom.Page.getRemote = function() {
  let remote = new updater_ui.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
updater_ui.mojom.mojom.PagePtr = updater_ui.mojom.mojom.PageRemote;
updater_ui.mojom.mojom.PageRequest = updater_ui.mojom.mojom.PagePendingReceiver;

