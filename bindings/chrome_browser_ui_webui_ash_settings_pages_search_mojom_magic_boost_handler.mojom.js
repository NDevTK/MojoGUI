// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/search/mojom/magic_boost_handler.mojom
// Module: ash.settings.magic_boost_handler.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.magic_boost_handler = ash.settings.settings.magic_boost_handler || {};
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom = ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom || {};


// Interface: PageHandlerFactory
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactory = {};

ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.magic_boost_handler.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryPtr = ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryRemote;
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryRequest = ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandler = {};

ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.magic_boost_handler.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showNotice() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandler_ShowNotice_ParamsSpec,
      null,
      []);
  }

};

ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.magic_boost_handler.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ShowNotice
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandler_ShowNotice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.magic_boost_handler.mojom.PageHandler.ShowNotice_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerPtr = ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerRemote;
ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerRequest = ash.settings.settings.magic_boost_handler.magic_boost_handler.mojom.mojom.PageHandlerPendingReceiver;

