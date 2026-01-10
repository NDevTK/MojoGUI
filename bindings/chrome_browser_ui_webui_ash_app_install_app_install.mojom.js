// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/app_install/app_install.mojom
// Module: ash.app_install.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.app_install = ash.app_install || {};
ash.app_install.app_install.mojom = ash.app_install.app_install.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Union: DialogArgs
ash.app_install.app_install.mojom.mojom.DialogArgsSpec = { $: mojo.internal.Union(
    'ash.app_install.mojom.DialogArgs', {
      'app_info_args': {
        'ordinal': 0,
        'type': ash.app_install.mojom.AppInfoArgsSpec,
      }},
      'no_app_error_args': {
        'ordinal': 1,
        'type': ash.app_install.mojom.NoAppErrorArgsSpec,
      }},
      'connection_error_actions': {
        'ordinal': 2,
        'type': mojo.internal.InterfaceProxy(ash.app_install.mojom.ConnectionErrorActionsRemote),
      }},
    })
};

// Struct: AppInfoArgs
ash.app_install.app_install.mojom.mojom.AppInfoArgsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.AppInfoArgs',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: ash.app_install.mojom.AppInfoDataSpec, nullable: false, minVersion: 0 },
        { name: 'actions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.app_install.mojom.AppInfoActionsRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AppInfoData
ash.app_install.app_install.mojom.mojom.AppInfoDataSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.AppInfoData',
      packedSize: 56,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'screenshots', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(ash.app_install.mojom.ScreenshotSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_already_installed', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: Screenshot
ash.app_install.app_install.mojom.mojom.ScreenshotSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.Screenshot',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NoAppErrorArgs
ash.app_install.app_install.mojom.mojom.NoAppErrorArgsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.NoAppErrorArgs',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Interface: AppInfoActions
ash.app_install.app_install.mojom.mojom.AppInfoActions = {};

ash.app_install.app_install.mojom.mojom.AppInfoActionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.app_install.mojom.mojom.AppInfoActionsRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.AppInfoActions';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.app_install.mojom.mojom.AppInfoActionsPendingReceiver,
      handle);
    this.$ = new ash.app_install.app_install.mojom.mojom.AppInfoActionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.app_install.mojom.mojom.AppInfoActionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  installApp() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.app_install.mojom.mojom.AppInfoActions_InstallApp_ParamsSpec,
      ash.app_install.app_install.mojom.mojom.AppInfoActions_InstallApp_ResponseParamsSpec,
      []);
  }

  launchApp() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.app_install.app_install.mojom.mojom.AppInfoActions_LaunchApp_ParamsSpec,
      null,
      []);
  }

};

ash.app_install.app_install.mojom.mojom.AppInfoActions.getRemote = function() {
  let remote = new ash.app_install.app_install.mojom.mojom.AppInfoActionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.AppInfoActions',
    'context');
  return remote.$;
};

// ParamsSpec for InstallApp
ash.app_install.app_install.mojom.mojom.AppInfoActions_InstallApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.AppInfoActions.InstallApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.app_install.app_install.mojom.mojom.AppInfoActions_InstallApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.AppInfoActions.InstallApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'installed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LaunchApp
ash.app_install.app_install.mojom.mojom.AppInfoActions_LaunchApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.AppInfoActions.LaunchApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.app_install.app_install.mojom.mojom.AppInfoActionsPtr = ash.app_install.app_install.mojom.mojom.AppInfoActionsRemote;
ash.app_install.app_install.mojom.mojom.AppInfoActionsRequest = ash.app_install.app_install.mojom.mojom.AppInfoActionsPendingReceiver;


// Interface: ConnectionErrorActions
ash.app_install.app_install.mojom.mojom.ConnectionErrorActions = {};

ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.ConnectionErrorActions';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsPendingReceiver,
      handle);
    this.$ = new ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  tryAgain() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.app_install.mojom.mojom.ConnectionErrorActions_TryAgain_ParamsSpec,
      null,
      []);
  }

};

ash.app_install.app_install.mojom.mojom.ConnectionErrorActions.getRemote = function() {
  let remote = new ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.ConnectionErrorActions',
    'context');
  return remote.$;
};

// ParamsSpec for TryAgain
ash.app_install.app_install.mojom.mojom.ConnectionErrorActions_TryAgain_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.ConnectionErrorActions.TryAgain_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsPtr = ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsRemote;
ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsRequest = ash.app_install.app_install.mojom.mojom.ConnectionErrorActionsPendingReceiver;


// Interface: PageHandlerFactory
ash.app_install.app_install.mojom.mojom.PageHandlerFactory = {};

ash.app_install.app_install.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.app_install.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.app_install.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.app_install.app_install.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.app_install.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.app_install.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

ash.app_install.app_install.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.app_install.app_install.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.app_install.app_install.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.app_install.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.app_install.app_install.mojom.mojom.PageHandlerFactoryPtr = ash.app_install.app_install.mojom.mojom.PageHandlerFactoryRemote;
ash.app_install.app_install.mojom.mojom.PageHandlerFactoryRequest = ash.app_install.app_install.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.app_install.app_install.mojom.mojom.PageHandler = {};

ash.app_install.app_install.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.app_install.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.app_install.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.app_install.app_install.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.app_install.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDialogArgs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.app_install.mojom.mojom.PageHandler_GetDialogArgs_ParamsSpec,
      ash.app_install.app_install.mojom.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec,
      []);
  }

  closeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.app_install.app_install.mojom.mojom.PageHandler_CloseDialog_ParamsSpec,
      null,
      []);
  }

};

ash.app_install.app_install.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.app_install.app_install.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDialogArgs
ash.app_install.app_install.mojom.mojom.PageHandler_GetDialogArgs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.PageHandler.GetDialogArgs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.app_install.app_install.mojom.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.PageHandler.GetDialogArgs_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'dialog_args', packedOffset: 0, packedBitOffset: 0, type: ash.app_install.mojom.DialogArgsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseDialog
ash.app_install.app_install.mojom.mojom.PageHandler_CloseDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.PageHandler.CloseDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.app_install.app_install.mojom.mojom.PageHandlerPtr = ash.app_install.app_install.mojom.mojom.PageHandlerRemote;
ash.app_install.app_install.mojom.mojom.PageHandlerRequest = ash.app_install.app_install.mojom.mojom.PageHandlerPendingReceiver;

