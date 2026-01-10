// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/demo_mode_app_ui/mojom/demo_mode_app_untrusted_ui.mojom
// Module: ash.mojom.demo_mode

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.demo_mode = ash.mojom.demo_mode || {};

ash.mojom.demo_mode.UntrustedPageHandlerFactory = {};
ash.mojom.demo_mode.UntrustedPageHandlerFactory.$interfaceName = 'ash.mojom.demo_mode.UntrustedPageHandlerFactory';
ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.mojom.demo_mode.UntrustedPageHandler = {};
ash.mojom.demo_mode.UntrustedPageHandler.$interfaceName = 'ash.mojom.demo_mode.UntrustedPageHandler';
ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec = { $: {} };
ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec = { $: {} };

// Interface: UntrustedPageHandlerFactory
mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.mojom.demo_mode.UntrustedPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [handler],
      false);
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

ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
    });
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver = ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver;

ash.mojom.demo_mode.UntrustedPageHandlerFactoryPtr = ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote;
ash.mojom.demo_mode.UntrustedPageHandlerFactoryRequest = ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver;


// Interface: UntrustedPageHandler
mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  launchApp(app_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec,
      null,
      [app_id],
      false);
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

ash.mojom.demo_mode.UntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleFullscreen();
          break;
        }
        case 1: {
          const params = ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.launchApp(params.app_id);
          break;
        }
      }
    });
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerReceiver = ash.mojom.demo_mode.UntrustedPageHandlerReceiver;

ash.mojom.demo_mode.UntrustedPageHandlerPtr = ash.mojom.demo_mode.UntrustedPageHandlerRemote;
ash.mojom.demo_mode.UntrustedPageHandlerRequest = ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver;

