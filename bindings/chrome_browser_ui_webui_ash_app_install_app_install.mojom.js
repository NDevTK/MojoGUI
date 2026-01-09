// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/app_install/app_install.mojom
// Module: ash.app_install.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.app_install = ash.app_install || {};
ash.app_install.mojom = ash.app_install.mojom || {};


// Interface: AppInfoActions
ash.app_install.mojom.AppInfoActions = {};

ash.app_install.mojom.AppInfoActionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.mojom.AppInfoActionsRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.AppInfoActions';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.mojom.AppInfoActionsPendingReceiver,
      handle);
    this.$ = new ash.app_install.mojom.AppInfoActionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.mojom.AppInfoActionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  installApp() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.mojom.AppInfoActions_InstallApp_ParamsSpec,
      ash.app_install.mojom.AppInfoActions_InstallApp_ResponseParamsSpec,
      []);
  }

  launchApp() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.app_install.mojom.AppInfoActions_LaunchApp_ParamsSpec,
      null,
      []);
  }

};

ash.app_install.mojom.AppInfoActions.getRemote = function() {
  let remote = new ash.app_install.mojom.AppInfoActionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.AppInfoActions',
    'context');
  return remote.$;
};

// ParamsSpec for InstallApp
ash.app_install.mojom.AppInfoActions_InstallApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.AppInfoActions.InstallApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.app_install.mojom.AppInfoActions_InstallApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.AppInfoActions.InstallApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'installed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LaunchApp
ash.app_install.mojom.AppInfoActions_LaunchApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.AppInfoActions.LaunchApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.app_install.mojom.AppInfoActionsPtr = ash.app_install.mojom.AppInfoActionsRemote;
ash.app_install.mojom.AppInfoActionsRequest = ash.app_install.mojom.AppInfoActionsPendingReceiver;


// Interface: ConnectionErrorActions
ash.app_install.mojom.ConnectionErrorActions = {};

ash.app_install.mojom.ConnectionErrorActionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.mojom.ConnectionErrorActionsRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.ConnectionErrorActions';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.mojom.ConnectionErrorActionsPendingReceiver,
      handle);
    this.$ = new ash.app_install.mojom.ConnectionErrorActionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.mojom.ConnectionErrorActionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  tryAgain() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.mojom.ConnectionErrorActions_TryAgain_ParamsSpec,
      null,
      []);
  }

};

ash.app_install.mojom.ConnectionErrorActions.getRemote = function() {
  let remote = new ash.app_install.mojom.ConnectionErrorActionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.ConnectionErrorActions',
    'context');
  return remote.$;
};

// ParamsSpec for TryAgain
ash.app_install.mojom.ConnectionErrorActions_TryAgain_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.ConnectionErrorActions.TryAgain_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.app_install.mojom.ConnectionErrorActionsPtr = ash.app_install.mojom.ConnectionErrorActionsRemote;
ash.app_install.mojom.ConnectionErrorActionsRequest = ash.app_install.mojom.ConnectionErrorActionsPendingReceiver;


// Interface: PageHandlerFactory
ash.app_install.mojom.PageHandlerFactory = {};

ash.app_install.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.app_install.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

ash.app_install.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.app_install.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.app_install.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.app_install.mojom.PageHandlerFactoryPtr = ash.app_install.mojom.PageHandlerFactoryRemote;
ash.app_install.mojom.PageHandlerFactoryRequest = ash.app_install.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.app_install.mojom.PageHandler = {};

ash.app_install.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.app_install.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.app_install.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.app_install.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.app_install.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.app_install.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDialogArgs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.app_install.mojom.PageHandler_GetDialogArgs_ParamsSpec,
      ash.app_install.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec,
      []);
  }

  closeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.app_install.mojom.PageHandler_CloseDialog_ParamsSpec,
      null,
      []);
  }

};

ash.app_install.mojom.PageHandler.getRemote = function() {
  let remote = new ash.app_install.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.app_install.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDialogArgs
ash.app_install.mojom.PageHandler_GetDialogArgs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.PageHandler.GetDialogArgs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.app_install.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.PageHandler.GetDialogArgs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dialog_args', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseDialog
ash.app_install.mojom.PageHandler_CloseDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.app_install.mojom.PageHandler.CloseDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.app_install.mojom.PageHandlerPtr = ash.app_install.mojom.PageHandlerRemote;
ash.app_install.mojom.PageHandlerRequest = ash.app_install.mojom.PageHandlerPendingReceiver;

