// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/borealis_installer/borealis_installer.mojom
// Module: ash.borealis_installer.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.borealis_installer = ash.borealis_installer || {};
ash.borealis_installer.mojom = ash.borealis_installer.mojom || {};


// Interface: PageHandlerFactory
ash.borealis_installer.mojom.PageHandlerFactory = {};

ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.borealis_installer.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

ash.borealis_installer.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.borealis_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.borealis_installer.mojom.PageHandlerFactoryPtr = ash.borealis_installer.mojom.PageHandlerFactoryRemote;
ash.borealis_installer.mojom.PageHandlerFactoryRequest = ash.borealis_installer.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.borealis_installer.mojom.PageHandler = {};

ash.borealis_installer.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.borealis_installer.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  install() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec,
      null,
      []);
  }

  shutDown() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec,
      null,
      []);
  }

  launch() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec,
      null,
      []);
  }

  cancelInstall() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec,
      null,
      []);
  }

  onPageClosed() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec,
      null,
      []);
  }

  openStoragePage() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec,
      null,
      []);
  }

};

ash.borealis_installer.mojom.PageHandler.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Install
ash.borealis_installer.mojom.PageHandler_Install_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.PageHandler.Install_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShutDown
ash.borealis_installer.mojom.PageHandler_ShutDown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.PageHandler.ShutDown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Launch
ash.borealis_installer.mojom.PageHandler_Launch_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.PageHandler.Launch_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelInstall
ash.borealis_installer.mojom.PageHandler_CancelInstall_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.PageHandler.CancelInstall_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPageClosed
ash.borealis_installer.mojom.PageHandler_OnPageClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.PageHandler.OnPageClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenStoragePage
ash.borealis_installer.mojom.PageHandler_OpenStoragePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.PageHandler.OpenStoragePage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.borealis_installer.mojom.PageHandlerPtr = ash.borealis_installer.mojom.PageHandlerRemote;
ash.borealis_installer.mojom.PageHandlerRequest = ash.borealis_installer.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.borealis_installer.mojom.Page = {};

ash.borealis_installer.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.borealis_installer.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.borealis_installer.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.borealis_installer.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.borealis_installer.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.borealis_installer.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgressUpdate(progress_fraction, label) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec,
      null,
      [progress_fraction, label]);
  }

  onInstallFinished(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec,
      null,
      [error]);
  }

  requestClose() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec,
      null,
      []);
  }

};

ash.borealis_installer.mojom.Page.getRemote = function() {
  let remote = new ash.borealis_installer.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.borealis_installer.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgressUpdate
ash.borealis_installer.mojom.Page_OnProgressUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.Page.OnProgressUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'progress_fraction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnInstallFinished
ash.borealis_installer.mojom.Page_OnInstallFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.Page.OnInstallFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: borealis.mojom.InstallResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestClose
ash.borealis_installer.mojom.Page_RequestClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.borealis_installer.mojom.Page.RequestClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.borealis_installer.mojom.PagePtr = ash.borealis_installer.mojom.PageRemote;
ash.borealis_installer.mojom.PageRequest = ash.borealis_installer.mojom.PagePendingReceiver;

