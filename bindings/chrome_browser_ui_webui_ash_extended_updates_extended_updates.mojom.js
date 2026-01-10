// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/extended_updates/extended_updates.mojom
// Module: ash.extended_updates.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.extended_updates = ash.extended_updates || {};
ash.extended_updates.mojom = ash.extended_updates.mojom || {};

ash.extended_updates.mojom.AppSpec = { $: {} };
ash.extended_updates.mojom.PageHandlerFactory = {};
ash.extended_updates.mojom.PageHandlerFactory.$interfaceName = 'ash.extended_updates.mojom.PageHandlerFactory';
ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler = {};
ash.extended_updates.mojom.PageHandler.$interfaceName = 'ash.extended_updates.mojom.PageHandler';
ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec = { $: {} };
ash.extended_updates.mojom.Page = {};
ash.extended_updates.mojom.Page.$interfaceName = 'ash.extended_updates.mojom.Page';

// Struct: App
mojo.internal.Struct(
    ash.extended_updates.mojom.AppSpec, 'ash.extended_updates.mojom.App', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.extended_updates.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.extended_updates.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.extended_updates.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.extended_updates.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.extended_updates.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.extended_updates.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.extended_updates.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.extended_updates.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

ash.extended_updates.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.extended_updates.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.extended_updates.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.extended_updates.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    }});
  }
};

ash.extended_updates.mojom.PageHandlerFactoryReceiver = ash.extended_updates.mojom.PageHandlerFactoryReceiver;

ash.extended_updates.mojom.PageHandlerFactoryPtr = ash.extended_updates.mojom.PageHandlerFactoryRemote;
ash.extended_updates.mojom.PageHandlerFactoryRequest = ash.extended_updates.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec, 'ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec, 'ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec, 'ash.extended_updates.mojom.PageHandler_CloseDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec, 'ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec, 'ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.extended_updates.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.extended_updates.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.extended_updates.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.extended_updates.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.extended_updates.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.extended_updates.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.extended_updates.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  optInToExtendedUpdates() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec,
      ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec,
      [],
      false);
  }

  closeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec,
      null,
      [],
      false);
  }

  getInstalledAndroidApps() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec,
      ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec,
      [],
      false);
  }

};

ash.extended_updates.mojom.PageHandler.getRemote = function() {
  let remote = new ash.extended_updates.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.extended_updates.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.extended_updates.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec.$.decode(message.payload);
          const result = this.impl.optInToExtendedUpdates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeDialog();
          break;
        }
        case 2: {
          const params = ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getInstalledAndroidApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.extended_updates.mojom.PageHandlerReceiver = ash.extended_updates.mojom.PageHandlerReceiver;

ash.extended_updates.mojom.PageHandlerPtr = ash.extended_updates.mojom.PageHandlerRemote;
ash.extended_updates.mojom.PageHandlerRequest = ash.extended_updates.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.extended_updates.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.extended_updates.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.extended_updates.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.extended_updates.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.extended_updates.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.extended_updates.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.extended_updates.mojom.Page.getRemote = function() {
  let remote = new ash.extended_updates.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.extended_updates.mojom.Page',
    'context');
  return remote.$;
};

ash.extended_updates.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
      }
    }});
  }
};

ash.extended_updates.mojom.PageReceiver = ash.extended_updates.mojom.PageReceiver;

ash.extended_updates.mojom.PagePtr = ash.extended_updates.mojom.PageRemote;
ash.extended_updates.mojom.PageRequest = ash.extended_updates.mojom.PagePendingReceiver;

