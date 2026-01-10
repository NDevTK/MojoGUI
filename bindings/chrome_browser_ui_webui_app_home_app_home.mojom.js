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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_GetApps_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetApps (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDeprecationLinkString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeprecationLinkString (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UninstallApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_UninstallApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UninstallApp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShowAppSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowAppSettings (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateAppShortcut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAppShortcut (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LaunchApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_LaunchApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchApp (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetRunOnOsLoginMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRunOnOsLoginMode (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: LaunchDeprecatedAppDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchDeprecatedAppDialog (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: InstallAppLocally
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallAppLocally (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetUserDisplayMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserDisplayMode (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_GetApps_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getApps');
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
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_GetDeprecationLinkString_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDeprecationLinkString');
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
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_UninstallApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.uninstallApp');
          const result = this.impl.uninstallApp(params.app_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_ShowAppSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showAppSettings');
          const result = this.impl.showAppSettings(params.app_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_CreateAppShortcut_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createAppShortcut');
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
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_LaunchApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchApp');
          const result = this.impl.launchApp(params.app_id, params.click_event);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setRunOnOsLoginMode');
          const result = this.impl.setRunOnOsLoginMode(params.app_id, params.run_on_os_login_mode);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_LaunchDeprecatedAppDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchDeprecatedAppDialog');
          const result = this.impl.launchDeprecatedAppDialog();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_InstallAppLocally_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.installAppLocally');
          const result = this.impl.installAppLocally(params.app_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.PageHandler_SetUserDisplayMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUserDisplayMode');
          const result = this.impl.setUserDisplayMode(params.app_id, params.display_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.Page_AddApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddApp (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemoveApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.Page_RemoveApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveApp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(app_home.mojom.Page_UpdateApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateApp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.Page_AddApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addApp');
          const result = this.impl.addApp(params.app_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.Page_RemoveApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeApp');
          const result = this.impl.removeApp(params.app_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_home.mojom.Page_UpdateApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateApp');
          const result = this.impl.updateApp(params.app_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

app_home.mojom.PageReceiver = app_home.mojom.PageReceiver;

app_home.mojom.PagePtr = app_home.mojom.PageRemote;
app_home.mojom.PageRequest = app_home.mojom.PagePendingReceiver;

