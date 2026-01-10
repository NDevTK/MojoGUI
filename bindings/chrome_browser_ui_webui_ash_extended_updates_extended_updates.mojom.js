// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/extended_updates/extended_updates.mojom
// Module: ash.extended_updates.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.extended_updates = ash.extended_updates || {};
ash.extended_updates.mojom = ash.extended_updates.mojom || {};


// Struct: App
ash.extended_updates.mojom.AppSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.App',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PageHandlerFactory
ash.extended_updates.mojom.PageHandlerFactory = {};

ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.extended_updates.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.extended_updates.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [page, handler]);
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

// ParamsSpec for CreatePageHandler
ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.extended_updates.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.extended_updates.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.extended_updates.mojom.PageHandlerFactoryPtr = ash.extended_updates.mojom.PageHandlerFactoryRemote;
ash.extended_updates.mojom.PageHandlerFactoryRequest = ash.extended_updates.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.extended_updates.mojom.PageHandler = {};

ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandler_CloseDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
  }

  closeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec,
      null,
      []);
  }

  getInstalledAndroidApps() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec,
      ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec,
      []);
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

// ParamsSpec for OptInToExtendedUpdates
ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandler.OptInToExtendedUpdates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandler.OptInToExtendedUpdates_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseDialog
ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandler.CloseDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetInstalledAndroidApps
ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandler.GetInstalledAndroidApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.extended_updates.mojom.PageHandler.GetInstalledAndroidApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.extended_updates.mojom.AppSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.extended_updates.mojom.PageHandlerPtr = ash.extended_updates.mojom.PageHandlerRemote;
ash.extended_updates.mojom.PageHandlerRequest = ash.extended_updates.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.extended_updates.mojom.Page = {};

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

// Legacy compatibility
ash.extended_updates.mojom.PagePtr = ash.extended_updates.mojom.PageRemote;
ash.extended_updates.mojom.PageRequest = ash.extended_updates.mojom.PagePendingReceiver;

