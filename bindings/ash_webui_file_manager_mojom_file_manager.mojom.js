// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/file_manager/mojom/file_manager.mojom
// Module: ash.file_manager.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.file_manager = ash.file_manager || {};
ash.file_manager.file_manager.mojom = ash.file_manager.file_manager.mojom || {};


// Interface: PageHandlerFactory
ash.file_manager.file_manager.mojom.mojom.PageHandlerFactory = {};

ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.file_manager.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.file_manager.file_manager.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

ash.file_manager.file_manager.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.file_manager.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.file_manager.file_manager.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.file_manager.mojom.PageHandlerFactory.CreatePageHandler_Params',
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
ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryPtr = ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryRemote;
ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryRequest = ash.file_manager.file_manager.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.file_manager.file_manager.mojom.mojom.PageHandler = {};

ash.file_manager.file_manager.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.file_manager.file_manager.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.file_manager.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.file_manager.file_manager.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.file_manager.file_manager.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.file_manager.file_manager.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.file_manager.file_manager.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.file_manager.file_manager.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.file_manager.mojom.PageHandler',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.file_manager.file_manager.mojom.mojom.PageHandlerPtr = ash.file_manager.file_manager.mojom.mojom.PageHandlerRemote;
ash.file_manager.file_manager.mojom.mojom.PageHandlerRequest = ash.file_manager.file_manager.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.file_manager.file_manager.mojom.mojom.Page = {};

ash.file_manager.file_manager.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.file_manager.file_manager.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.file_manager.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.file_manager.file_manager.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.file_manager.file_manager.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.file_manager.file_manager.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.file_manager.file_manager.mojom.mojom.Page.getRemote = function() {
  let remote = new ash.file_manager.file_manager.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.file_manager.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.file_manager.file_manager.mojom.mojom.PagePtr = ash.file_manager.file_manager.mojom.mojom.PageRemote;
ash.file_manager.file_manager.mojom.mojom.PageRequest = ash.file_manager.file_manager.mojom.mojom.PagePendingReceiver;

