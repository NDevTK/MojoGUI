// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/app_home/app_home.mojom
// Module: app_home.mojom

'use strict';

// Module namespace
var app_home = app_home || {};
app_home.mojom = app_home.mojom || {};
var url = url || {};
var web_app = web_app || {};

app_home.mojom.RunOnOsLoginModeSpec = { $: mojo.internal.Enum() };
app_home.mojom.AppTypeSpec = { $: mojo.internal.Enum() };
app_home.mojom.AppInfoSpec = { $: {} };
app_home.mojom.ClickEventSpec = { $: {} };
app_home.mojom.PageHandlerFactory = {};
app_home.mojom.PageHandlerFactory.$interfaceName = 'app_home.mojom.PageHandlerFactory';
app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
app_home.mojom.PageHandler = {};
app_home.mojom.PageHandler.$interfaceName = 'app_home.mojom.PageHandler';
app_home.mojom.PageHandler_GetApps_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_GetApps_ResponseParamsSpec = { $: {} };
app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec = { $: {} };
app_home.mojom.PageHandler_UninstallApp_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec = { $: {} };
app_home.mojom.PageHandler_LaunchApp_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec = { $: {} };
app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec = { $: {} };
app_home.mojom.Page = {};
app_home.mojom.Page.$interfaceName = 'app_home.mojom.Page';
app_home.mojom.Page_AddApp_ParamsSpec = { $: {} };
app_home.mojom.Page_RemoveApp_ParamsSpec = { $: {} };
app_home.mojom.Page_UpdateApp_ParamsSpec = { $: {} };

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

// Struct: AppInfo
mojo.internal.Struct(
    app_home.mojom.AppInfoSpec, 'app_home.mojom.AppInfo', [
      mojo.internal.StructField('app_type', 0, 0, app_home.mojom.AppTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('run_on_os_login_mode', 40, 0, app_home.mojom.RunOnOsLoginModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('store_page_url', 48, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('may_show_run_on_os_login_mode', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('may_toggle_run_on_os_login_mode', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_locally_installed', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('open_in_window', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('may_uninstall', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ClickEvent
mojo.internal.Struct(
    app_home.mojom.ClickEventSpec, 'app_home.mojom.ClickEvent', [
      mojo.internal.StructField('button', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('alt_key', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ctrl_key', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta_key', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift_key', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'app_home.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(app_home.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(app_home.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
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
};

app_home.mojom.PageHandlerFactoryReceiver = class {
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
          const params = app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    });
  }
};

app_home.mojom.PageHandlerFactoryReceiver = app_home.mojom.PageHandlerFactoryReceiver;

app_home.mojom.PageHandlerFactoryPtr = app_home.mojom.PageHandlerFactoryRemote;
app_home.mojom.PageHandlerFactoryRequest = app_home.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    app_home.mojom.PageHandler_GetApps_ParamsSpec, 'app_home.mojom.PageHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_GetApps_ResponseParamsSpec, 'app_home.mojom.PageHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('app_list', 0, 0, mojo.internal.Array(app_home.mojom.AppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec, 'app_home.mojom.PageHandler_GetDeprecationLinkString_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec, 'app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParams', [
      mojo.internal.StructField('link_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_UninstallApp_ParamsSpec, 'app_home.mojom.PageHandler_UninstallApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec, 'app_home.mojom.PageHandler_ShowAppSettings_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec, 'app_home.mojom.PageHandler_CreateAppShortcut_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec, 'app_home.mojom.PageHandler_CreateAppShortcut_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_LaunchApp_ParamsSpec, 'app_home.mojom.PageHandler_LaunchApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('click_event', 8, 0, app_home.mojom.ClickEventSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec, 'app_home.mojom.PageHandler_SetRunOnOsLoginMode_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('run_on_os_login_mode', 8, 0, app_home.mojom.RunOnOsLoginModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec, 'app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec, 'app_home.mojom.PageHandler_InstallAppLocally_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec, 'app_home.mojom.PageHandler_SetUserDisplayMode_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_mode', 8, 0, web_app.mojom.UserDisplayModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      app_home.mojom.PageHandler_GetApps_ParamsSpec,
      app_home.mojom.PageHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getDeprecationLinkString() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec,
      app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec,
      [],
      false);
  }

  uninstallApp(app_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_home.mojom.PageHandler_UninstallApp_ParamsSpec,
      null,
      [app_id],
      false);
  }

  showAppSettings(app_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec,
      null,
      [app_id],
      false);
  }

  createAppShortcut(app_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec,
      app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec,
      [app_id],
      false);
  }

  launchApp(app_id, click_event) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      app_home.mojom.PageHandler_LaunchApp_ParamsSpec,
      null,
      [app_id, click_event],
      false);
  }

  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec,
      null,
      [app_id, run_on_os_login_mode],
      false);
  }

  launchDeprecatedAppDialog() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec,
      null,
      [],
      false);
  }

  installAppLocally(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setUserDisplayMode(app_id, display_mode) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec,
      null,
      [app_id, display_mode],
      false);
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
};

app_home.mojom.PageHandlerReceiver = class {
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
          const params = app_home.mojom.PageHandler_GetApps_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, app_home.mojom.PageHandler_GetApps_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDeprecationLinkString();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 2: {
          const params = app_home.mojom.PageHandler_UninstallApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.uninstallApp(params.app_id);
          break;
        }
        case 3: {
          const params = app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showAppSettings(params.app_id);
          break;
        }
        case 4: {
          const params = app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createAppShortcut(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = app_home.mojom.PageHandler_LaunchApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.launchApp(params.app_id, params.click_event);
          break;
        }
        case 6: {
          const params = app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setRunOnOsLoginMode(params.app_id, params.run_on_os_login_mode);
          break;
        }
        case 7: {
          const params = app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.launchDeprecatedAppDialog();
          break;
        }
        case 8: {
          const params = app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec.$.decode(message.payload);
          const result = this.impl.installAppLocally(params.app_id);
          break;
        }
        case 9: {
          const params = app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUserDisplayMode(params.app_id, params.display_mode);
          break;
        }
      }
    });
  }
};

app_home.mojom.PageHandlerReceiver = app_home.mojom.PageHandlerReceiver;

app_home.mojom.PageHandlerPtr = app_home.mojom.PageHandlerRemote;
app_home.mojom.PageHandlerRequest = app_home.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    app_home.mojom.Page_AddApp_ParamsSpec, 'app_home.mojom.Page_AddApp_Params', [
      mojo.internal.StructField('app_info', 0, 0, app_home.mojom.AppInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_home.mojom.Page_RemoveApp_ParamsSpec, 'app_home.mojom.Page_RemoveApp_Params', [
      mojo.internal.StructField('app_info', 0, 0, app_home.mojom.AppInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_home.mojom.Page_UpdateApp_ParamsSpec, 'app_home.mojom.Page_UpdateApp_Params', [
      mojo.internal.StructField('app_info', 0, 0, app_home.mojom.AppInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      app_home.mojom.Page_AddApp_ParamsSpec,
      null,
      [app_info],
      false);
  }

  removeApp(app_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_home.mojom.Page_RemoveApp_ParamsSpec,
      null,
      [app_info],
      false);
  }

  updateApp(app_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_home.mojom.Page_UpdateApp_ParamsSpec,
      null,
      [app_info],
      false);
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
};

app_home.mojom.PageReceiver = class {
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
          const params = app_home.mojom.Page_AddApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addApp(params.app_info);
          break;
        }
        case 1: {
          const params = app_home.mojom.Page_RemoveApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeApp(params.app_info);
          break;
        }
        case 2: {
          const params = app_home.mojom.Page_UpdateApp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateApp(params.app_info);
          break;
        }
      }
    });
  }
};

app_home.mojom.PageReceiver = app_home.mojom.PageReceiver;

app_home.mojom.PagePtr = app_home.mojom.PageRemote;
app_home.mojom.PageRequest = app_home.mojom.PagePendingReceiver;

