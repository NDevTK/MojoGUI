// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/search/mojom/magic_boost_handler.mojom
// Module: ash.settings.magic_boost_handler.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.magic_boost_handler = ash.settings.magic_boost_handler || {};
ash.settings.magic_boost_handler.mojom = ash.settings.magic_boost_handler.mojom || {};

ash.settings.magic_boost_handler.mojom.PageHandlerFactory = {};
ash.settings.magic_boost_handler.mojom.PageHandlerFactory.$interfaceName = 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory';
ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.settings.magic_boost_handler.mojom.PageHandler = {};
ash.settings.magic_boost_handler.mojom.PageHandler.$interfaceName = 'ash.settings.magic_boost_handler.mojom.PageHandler';
ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.settings.magic_boost_handler.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPtr = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote;
ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRequest = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec, 'ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_Params', [
    ],
    [[0, 8]]);

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

ash.settings.magic_boost_handler.mojom.PageHandlerPtr = ash.settings.magic_boost_handler.mojom.PageHandlerRemote;
ash.settings.magic_boost_handler.mojom.PageHandlerRequest = ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver;

