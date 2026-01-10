// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/search/mojom/magic_boost_handler.mojom
// Module: ash.settings.magic_boost_handler.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.magic_boost_handler = ash.settings.magic_boost_handler || {};
ash.settings.magic_boost_handler.mojom = ash.settings.magic_boost_handler.mojom || {};


// Interface: PageHandlerFactory
ash.settings.magic_boost_handler.mojom.PageHandlerFactory = {};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

ash.settings.magic_boost_handler.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.magic_boost_handler.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
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
ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPtr = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote;
ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRequest = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.settings.magic_boost_handler.mojom.PageHandler = {};

ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.magic_boost_handler.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.magic_boost_handler.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showNotice() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec,
      null,
      []);
  }

};

ash.settings.magic_boost_handler.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.magic_boost_handler.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.magic_boost_handler.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ShowNotice
ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec = {
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
ash.settings.magic_boost_handler.mojom.PageHandlerPtr = ash.settings.magic_boost_handler.mojom.PageHandlerRemote;
ash.settings.magic_boost_handler.mojom.PageHandlerRequest = ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver;

