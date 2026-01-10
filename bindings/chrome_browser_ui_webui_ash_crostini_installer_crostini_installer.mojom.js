// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/crostini_installer/crostini_installer.mojom
// Module: ash.crostini_installer.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.crostini_installer = ash.crostini_installer || {};
ash.crostini_installer.mojom = ash.crostini_installer.mojom || {};
var ash = ash || {};

ash.crostini_installer.mojom.PageHandlerFactory = {};
ash.crostini_installer.mojom.PageHandlerFactory.$interfaceName = 'ash.crostini_installer.mojom.PageHandlerFactory';
ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler = {};
ash.crostini_installer.mojom.PageHandler.$interfaceName = 'ash.crostini_installer.mojom.PageHandler';
ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParamsSpec = { $: {} };
ash.crostini_installer.mojom.Page = {};
ash.crostini_installer.mojom.Page.$interfaceName = 'ash.crostini_installer.mojom.Page';
ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec = { $: {} };
ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.crostini_installer.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.crostini_installer.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.crostini_installer.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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

ash.crostini_installer.mojom.PageHandlerFactoryPtr = ash.crostini_installer.mojom.PageHandlerFactoryRemote;
ash.crostini_installer.mojom.PageHandlerFactoryRequest = ash.crostini_installer.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_Install_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_Install_Params', [
      mojo.internal.StructField('disk_size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('username', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_Cancel_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_Cancel_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_CancelBeforeStart_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_OnPageClosed_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_OnPageClosed_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ParamsSpec, 'ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParamsSpec, 'ash.crostini_installer.mojom.PageHandler_RequestAmountOfFreeDiskSpace_ResponseParams', [
      mojo.internal.StructField('ticks', 0, 0, mojo.internal.Array(crostini.mojom.DiskSliderTickSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('default_index', 8, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('is_low_space_available', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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

ash.crostini_installer.mojom.PageHandlerPtr = ash.crostini_installer.mojom.PageHandlerRemote;
ash.crostini_installer.mojom.PageHandlerRequest = ash.crostini_installer.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.crostini_installer.mojom.Page_OnProgressUpdate_ParamsSpec, 'ash.crostini_installer.mojom.Page_OnProgressUpdate_Params', [
      mojo.internal.StructField('install_state', 8, 0, crostini.mojom.InstallerStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('progress_fraction', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.Page_OnInstallFinished_ParamsSpec, 'ash.crostini_installer.mojom.Page_OnInstallFinished_Params', [
      mojo.internal.StructField('error', 0, 0, crostini.mojom.InstallerErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.Page_OnCanceled_ParamsSpec, 'ash.crostini_installer.mojom.Page_OnCanceled_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    ash.crostini_installer.mojom.Page_RequestClose_ParamsSpec, 'ash.crostini_installer.mojom.Page_RequestClose_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

ash.crostini_installer.mojom.PagePtr = ash.crostini_installer.mojom.PageRemote;
ash.crostini_installer.mojom.PageRequest = ash.crostini_installer.mojom.PagePendingReceiver;

