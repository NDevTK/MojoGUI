// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/demo_mode_app_ui/mojom/demo_mode_app_untrusted_ui.mojom
// Module: ash.mojom.demo_mode

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.demo_mode = ash.mojom.demo_mode || {};


// Interface: UntrustedPageHandlerFactory
ash.mojom.demo_mode.UntrustedPageHandlerFactory = {};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.demo_mode.UntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

ash.mojom.demo_mode.UntrustedPageHandlerFactory.getRemote = function() {
  let remote = new ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.demo_mode.UntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.demo_mode.UntrustedPageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.demo_mode.UntrustedPageHandlerFactoryPtr = ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote;
ash.mojom.demo_mode.UntrustedPageHandlerFactoryRequest = ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver;


// Interface: UntrustedPageHandler
ash.mojom.demo_mode.UntrustedPageHandler = {};

ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.demo_mode.UntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.demo_mode.UntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  toggleFullscreen() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec,
      null,
      []);
  }

  launchApp(app_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec,
      null,
      [app_id]);
  }

};

ash.mojom.demo_mode.UntrustedPageHandler.getRemote = function() {
  let remote = new ash.mojom.demo_mode.UntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.demo_mode.UntrustedPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for ToggleFullscreen
ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.demo_mode.UntrustedPageHandler.ToggleFullscreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LaunchApp
ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.demo_mode.UntrustedPageHandler.LaunchApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.demo_mode.UntrustedPageHandlerPtr = ash.mojom.demo_mode.UntrustedPageHandlerRemote;
ash.mojom.demo_mode.UntrustedPageHandlerRequest = ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver;

