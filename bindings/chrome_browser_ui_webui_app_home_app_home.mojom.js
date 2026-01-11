// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/app_home/app_home.mojom
// Module: app_home.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(app_home.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(app_home.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

app_home.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
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
  getApps() {
    return this.$.getApps();
  }
  getDeprecationLinkString() {
    return this.$.getDeprecationLinkString();
  }
  uninstallApp(app_id) {
    return this.$.uninstallApp(app_id);
  }
  showAppSettings(app_id) {
    return this.$.showAppSettings(app_id);
  }
  createAppShortcut(app_id) {
    return this.$.createAppShortcut(app_id);
  }
  launchApp(app_id, click_event) {
    return this.$.launchApp(app_id, click_event);
  }
  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    return this.$.setRunOnOsLoginMode(app_id, run_on_os_login_mode);
  }
  launchDeprecatedAppDialog() {
    return this.$.launchDeprecatedAppDialog();
  }
  installAppLocally(app_id) {
    return this.$.installAppLocally(app_id);
  }
  setUserDisplayMode(app_id, display_mode) {
    return this.$.setUserDisplayMode(app_id, display_mode);
  }
};

app_home.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getApps() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      app_home.mojom.PageHandler_GetApps_ParamsSpec,
      app_home.mojom.PageHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getDeprecationLinkString() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec,
      app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec,
      [],
      false);
  }

  uninstallApp(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      app_home.mojom.PageHandler_UninstallApp_ParamsSpec,
      null,
      [app_id],
      false);
  }

  showAppSettings(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec,
      null,
      [app_id],
      false);
  }

  createAppShortcut(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec,
      app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec,
      [app_id],
      false);
  }

  launchApp(app_id, click_event) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      app_home.mojom.PageHandler_LaunchApp_ParamsSpec,
      null,
      [app_id, click_event],
      false);
  }

  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec,
      null,
      [app_id, run_on_os_login_mode],
      false);
  }

  launchDeprecatedAppDialog() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec,
      null,
      [],
      false);
  }

  installAppLocally(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setUserDisplayMode(app_id, display_mode) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_GetApps_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_UninstallApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_LaunchApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_GetApps_ParamsSpec.$.structSpec);
          const result = this.impl.getApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, app_home.mojom.PageHandler_GetApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec.$.structSpec);
          const result = this.impl.getDeprecationLinkString();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, app_home.mojom.PageHandler_GetDeprecationLinkString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_UninstallApp_ParamsSpec.$.structSpec);
          const result = this.impl.uninstallApp(params.app_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec.$.structSpec);
          const result = this.impl.showAppSettings(params.app_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec.$.structSpec);
          const result = this.impl.createAppShortcut(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, app_home.mojom.PageHandler_CreateAppShortcut_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_LaunchApp_ParamsSpec.$.structSpec);
          const result = this.impl.launchApp(params.app_id, params.click_event);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$.structSpec);
          const result = this.impl.setRunOnOsLoginMode(params.app_id, params.run_on_os_login_mode);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec.$.structSpec);
          const result = this.impl.launchDeprecatedAppDialog();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec.$.structSpec);
          const result = this.impl.installAppLocally(params.app_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec.$.structSpec);
          const result = this.impl.setUserDisplayMode(params.app_id, params.display_mode);
          break;
        }
      }
      } catch (err) {}
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
  addApp(app_info) {
    return this.$.addApp(app_info);
  }
  removeApp(app_info) {
    return this.$.removeApp(app_info);
  }
  updateApp(app_info) {
    return this.$.updateApp(app_info);
  }
};

app_home.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addApp(app_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      app_home.mojom.Page_AddApp_ParamsSpec,
      null,
      [app_info],
      false);
  }

  removeApp(app_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      app_home.mojom.Page_RemoveApp_ParamsSpec,
      null,
      [app_info],
      false);
  }

  updateApp(app_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.Page_AddApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.Page_RemoveApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(app_home.mojom.Page_UpdateApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.Page_AddApp_ParamsSpec.$.structSpec);
          const result = this.impl.addApp(params.app_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.Page_RemoveApp_ParamsSpec.$.structSpec);
          const result = this.impl.removeApp(params.app_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(app_home.mojom.Page_UpdateApp_ParamsSpec.$.structSpec);
          const result = this.impl.updateApp(params.app_info);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

app_home.mojom.PageReceiver = app_home.mojom.PageReceiver;

app_home.mojom.PagePtr = app_home.mojom.PageRemote;
app_home.mojom.PageRequest = app_home.mojom.PagePendingReceiver;

