// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/app_home/app_home.mojom
// Module: app_home.mojom

'use strict';

// Module namespace
var app_home = app_home || {};
app_home.mojom = app_home.mojom || {};


// Enum: RunOnOsLoginMode
app_home.mojom.RunOnOsLoginMode = {
  kNotRun: 0,
  kWindowed: 1,
  kMinimized: 2,
};

// Enum: AppType
app_home.mojom.AppType = {
  kWebApp: 0,
  kIsolatedWebApp: 1,
  kDeprecatedChromeApp: 2,
};

// Interface: PageHandlerFactory
app_home.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_home.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'app_home.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_home.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new app_home.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_home.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [page, handler]);
  }

};

app_home.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new app_home.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_home.mojom.PageHandlerFactory',
    'context');
  return remote.$;
}};

// ParamsSpec for CreatePageHandler
app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
app_home.mojom.PageHandlerFactoryPtr = app_home.mojom.PageHandlerFactoryRemote;
app_home.mojom.PageHandlerFactoryRequest = app_home.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
app_home.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_home.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'app_home.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_home.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new app_home.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_home.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getApps() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_home.mojom.PageHandler_GetApps_ParamsSpec.$,
      app_home.mojom.PageHandler_GetApps_ResponseParamsSpec.$,
      []);
  }

  getDeprecationLinkString() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec.$,
      app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec.$,
      []);
  }

  uninstallApp(app_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_home.mojom.PageHandler_UninstallApp_ParamsSpec.$,
      null,
      [app_id]);
  }

  showAppSettings(app_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec.$,
      null,
      [app_id]);
  }

  createAppShortcut(app_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec.$,
      null,
      [app_id]);
  }

  launchApp(app_id, click_event) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      app_home.mojom.PageHandler_LaunchApp_ParamsSpec.$,
      null,
      [app_id, click_event]);
  }

  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$,
      null,
      [app_id, run_on_os_login_mode]);
  }

  launchDeprecatedAppDialog() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec.$,
      null,
      []);
  }

  installAppLocally(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec.$,
      null,
      [app_id]);
  }

  setUserDisplayMode(app_id, display_mode) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec.$,
      null,
      [app_id, display_mode]);
  }

};

app_home.mojom.PageHandler.getRemote = function() {
  let remote = new app_home.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_home.mojom.PageHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for GetApps
app_home.mojom.PageHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

app_home.mojom.PageHandler_GetApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.GetApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetDeprecationLinkString
app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.GetDeprecationLinkString_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.GetDeprecationLinkString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'link_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UninstallApp
app_home.mojom.PageHandler_UninstallApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.UninstallApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShowAppSettings
app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.ShowAppSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateAppShortcut
app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.CreateAppShortcut_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LaunchApp
app_home.mojom.PageHandler_LaunchApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.LaunchApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'click_event', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetRunOnOsLoginMode
app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.SetRunOnOsLoginMode_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'run_on_os_login_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for LaunchDeprecatedAppDialog
app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.LaunchDeprecatedAppDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for InstallAppLocally
app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.InstallAppLocally_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetUserDisplayMode
app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.PageHandler.SetUserDisplayMode_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'display_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
app_home.mojom.PageHandlerPtr = app_home.mojom.PageHandlerRemote;
app_home.mojom.PageHandlerRequest = app_home.mojom.PageHandlerPendingReceiver;


// Interface: Page
app_home.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_home.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'app_home.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_home.mojom.PagePendingReceiver,
      handle);
    this.$ = new app_home.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_home.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addApp(app_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_home.mojom.Page_AddApp_ParamsSpec.$,
      null,
      [app_info]);
  }

  removeApp(app_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_home.mojom.Page_RemoveApp_ParamsSpec.$,
      null,
      [app_info]);
  }

  updateApp(app_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_home.mojom.Page_UpdateApp_ParamsSpec.$,
      null,
      [app_info]);
  }

};

app_home.mojom.Page.getRemote = function() {
  let remote = new app_home.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_home.mojom.Page',
    'context');
  return remote.$;
}};

// ParamsSpec for AddApp
app_home.mojom.Page_AddApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.Page.AddApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RemoveApp
app_home.mojom.Page_RemoveApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.Page.RemoveApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateApp
app_home.mojom.Page_UpdateApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_home.mojom.Page.UpdateApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
app_home.mojom.PagePtr = app_home.mojom.PageRemote;
app_home.mojom.PageRequest = app_home.mojom.PagePendingReceiver;

