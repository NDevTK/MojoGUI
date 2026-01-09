// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/crostini_installer/crostini_installer.mojom
// Module: ash.crostini_installer.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.crostini_installer = ash.crostini_installer || {};
ash.crostini_installer.mojom = ash.crostini_installer.mojom || {};


// Interface: PageHandlerFactory
ash.crostini_installer.mojom.PageHandlerFactory = {};

ash.crostini_installer.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.crostini_installer.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.crostini_installer.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.crostini_installer.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.crostini_installer.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.crostini_installer.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

ash.crostini_installer.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.crostini_installer.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.crostini_installer.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.PageHandlerFactory.CreatePageHandler_Params',
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
ash.crostini_installer.mojom.PageHandlerFactoryPtr = ash.crostini_installer.mojom.PageHandlerFactoryRemote;
ash.crostini_installer.mojom.PageHandlerFactoryRequest = ash.crostini_installer.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.crostini_installer.mojom.PageHandler = {};

ash.crostini_installer.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.crostini_installer.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.crostini_installer.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.crostini_installer.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.crostini_installer.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.crostini_installer.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  install(disk_size, username) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec,
      null,
      [disk_size, username]);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      []);
  }

  cancelBeforeStart() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec,
      null,
      []);
  }

  onPageClosed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec,
      null,
      []);
  }

  requestAmountOfFreeDiskSpace() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec,
      ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParamsSpec,
      []);
  }

};

ash.crostini_installer.mojom.PageHandler.getRemote = function() {
  let remote = new ash.crostini_installer.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.crostini_installer.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Install
ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.PageHandler.Install_Params',
      packedSize: 24,
      fields: [
        { name: 'disk_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'username', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Cancel
ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.PageHandler.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelBeforeStart
ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.PageHandler.CancelBeforeStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPageClosed
ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.PageHandler.OnPageClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestAmountOfFreeDiskSpace
ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.PageHandler.RequestAmountOfFreeDiskSpace_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.PageHandler.RequestAmountOfFreeDiskSpace_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'ticks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'default_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false },
        { name: 'is_low_space_available', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.crostini_installer.mojom.PageHandlerPtr = ash.crostini_installer.mojom.PageHandlerRemote;
ash.crostini_installer.mojom.PageHandlerRequest = ash.crostini_installer.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.crostini_installer.mojom.Page = {};

ash.crostini_installer.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.crostini_installer.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.crostini_installer.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.crostini_installer.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.crostini_installer.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.crostini_installer.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProgressUpdate(install_state, progress_fraction) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec,
      null,
      [install_state, progress_fraction]);
  }

  onInstallFinished(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec,
      null,
      [error]);
  }

  onCanceled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec,
      null,
      []);
  }

  requestClose() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec,
      null,
      []);
  }

};

ash.crostini_installer.mojom.Page.getRemote = function() {
  let remote = new ash.crostini_installer.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.crostini_installer.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnProgressUpdate
ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.Page.OnProgressUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'install_state', packedOffset: 0, packedBitOffset: 0, type: crostini.mojom.InstallerStateSpec, nullable: false },
        { name: 'progress_fraction', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnInstallFinished
ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.Page.OnInstallFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: crostini.mojom.InstallerErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCanceled
ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.Page.OnCanceled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestClose
ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.crostini_installer.mojom.Page.RequestClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.crostini_installer.mojom.PagePtr = ash.crostini_installer.mojom.PageRemote;
ash.crostini_installer.mojom.PageRequest = ash.crostini_installer.mojom.PagePendingReceiver;

