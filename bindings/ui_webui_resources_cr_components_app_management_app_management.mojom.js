// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/app_management/app_management.mojom
// Module: app_management.mojom

'use strict';

// Module namespace
var app_management = app_management || {};
app_management.mojom = app_management.mojom || {};
var url = url || {};

app_management.mojom.AppTypeSpec = { $: mojo.internal.Enum() };
app_management.mojom.PermissionTypeSpec = { $: mojo.internal.Enum() };
app_management.mojom.TriStateSpec = { $: mojo.internal.Enum() };
app_management.mojom.InstallReasonSpec = { $: mojo.internal.Enum() };
app_management.mojom.InstallSourceSpec = { $: mojo.internal.Enum() };
app_management.mojom.WindowModeSpec = { $: mojo.internal.Enum() };
app_management.mojom.RunOnOsLoginModeSpec = { $: mojo.internal.Enum() };
app_management.mojom.PermissionValueSpec = { $: {} };
app_management.mojom.PermissionSpec = { $: {} };
app_management.mojom.RunOnOsLoginSpec = { $: {} };
app_management.mojom.LocaleSpec = { $: {} };
app_management.mojom.AppSpec = { $: {} };
app_management.mojom.ExtensionAppPermissionMessageSpec = { $: {} };
app_management.mojom.FileHandlingStateSpec = { $: {} };
app_management.mojom.PageHandlerFactory = {};
app_management.mojom.PageHandlerFactory.$interfaceName = 'app_management.mojom.PageHandlerFactory';
app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
app_management.mojom.PageHandler = {};
app_management.mojom.PageHandler.$interfaceName = 'app_management.mojom.PageHandler';
app_management.mojom.PageHandler_GetApps_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetApps_ResponseParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetApp_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetApp_ResponseParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec = { $: {} };
app_management.mojom.PageHandler_SetPinned_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_SetPermission_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_Uninstall_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec = { $: {} };
app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_SetWindowMode_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_OpenStorePage_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_SetAppLocale_ParamsSpec = { $: {} };
app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec = { $: {} };
app_management.mojom.Page = {};
app_management.mojom.Page.$interfaceName = 'app_management.mojom.Page';
app_management.mojom.Page_OnAppAdded_ParamsSpec = { $: {} };
app_management.mojom.Page_OnAppChanged_ParamsSpec = { $: {} };
app_management.mojom.Page_OnAppRemoved_ParamsSpec = { $: {} };

// Enum: AppType
app_management.mojom.AppType = {
  kUnknown: 0,
  kArc: 1,
  kCrostini: 2,
  kChromeApp: 3,
  kWeb: 4,
  kPluginVm: 5,
  kRemote: 6,
  kBorealis: 7,
  kSystemWeb: 8,
  kExtension: 9,
  kBruschetta: 10,
};

// Enum: PermissionType
app_management.mojom.PermissionType = {
  kUnknown: 0,
  kCamera: 1,
  kLocation: 2,
  kMicrophone: 3,
  kNotifications: 4,
  kContacts: 5,
  kStorage: 6,
  kPrinting: 7,
  kFileHandling: 8,
};

// Enum: TriState
app_management.mojom.TriState = {
  kAllow: 0,
  kBlock: 1,
  kAsk: 2,
};

// Enum: InstallReason
app_management.mojom.InstallReason = {
  kUnknown: 0,
  kSystem: 1,
  kPolicy: 2,
  kOem: 3,
  kDefault: 4,
  kSync: 5,
  kUser: 6,
  kSubApp: 7,
  kKiosk: 8,
  kCommandLine: 9,
};

// Enum: InstallSource
app_management.mojom.InstallSource = {
  kUnknown: 0,
  kSystem: 1,
  kSync: 2,
  kPlayStore: 3,
  kChromeWebStore: 4,
  kBrowser: 5,
};

// Enum: WindowMode
app_management.mojom.WindowMode = {
  kUnknown: 0,
  kWindow: 1,
  kBrowser: 2,
  kTabbedWindow: 3,
};

// Enum: RunOnOsLoginMode
app_management.mojom.RunOnOsLoginMode = {
  kUnknown: 0,
  kNotRun: 1,
  kWindowed: 2,
};

// Union: PermissionValue
mojo.internal.Union(
    app_management.mojom.PermissionValueSpec, 'app_management.mojom.PermissionValue', {
      'bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'tristate_value': {
        'ordinal': 1,
        'type': app_management.mojom.TriStateSpec.$,
        'nullable': false,
      },
    });

// Struct: Permission
mojo.internal.Struct(
    app_management.mojom.PermissionSpec, 'app_management.mojom.Permission', [
      mojo.internal.StructField('permission_type', 0, 0, app_management.mojom.PermissionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, app_management.mojom.PermissionValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_managed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: RunOnOsLogin
mojo.internal.Struct(
    app_management.mojom.RunOnOsLoginSpec, 'app_management.mojom.RunOnOsLogin', [
      mojo.internal.StructField('login_mode', 0, 0, app_management.mojom.RunOnOsLoginModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_managed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Locale
mojo.internal.Struct(
    app_management.mojom.LocaleSpec, 'app_management.mojom.Locale', [
      mojo.internal.StructField('locale_tag', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('native_display_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: App
mojo.internal.Struct(
    app_management.mojom.AppSpec, 'app_management.mojom.App', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, app_management.mojom.AppTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('description', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('version', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('size', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('permissions', 48, 0, mojo.internal.Map(app_management.mojom.PermissionTypeSpec.$, app_management.mojom.PermissionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('install_reason', 56, 0, app_management.mojom.InstallReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('install_source', 64, 0, app_management.mojom.InstallSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_mode', 72, 0, app_management.mojom.WindowModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supported_links', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('run_on_os_login', 88, 0, app_management.mojom.RunOnOsLoginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('file_handling_state', 96, 0, app_management.mojom.FileHandlingStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('app_size', 104, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('data_size', 112, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('publisher_id', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('formatted_origin', 128, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('scope_extensions', 136, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('supported_locales', 144, 0, mojo.internal.Array(app_management.mojom.LocaleSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('selected_locale', 152, 0, app_management.mojom.LocaleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_pinned_$flag', 160, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_pinned_$value', originalFieldName: 'is_pinned' }),
      mojo.internal.StructField('is_pinned_$value', 160, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_pinned_$flag', originalFieldName: 'is_pinned' }),
      mojo.internal.StructField('is_policy_pinned_$flag', 160, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_policy_pinned_$value', originalFieldName: 'is_policy_pinned' }),
      mojo.internal.StructField('is_policy_pinned_$value', 160, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_policy_pinned_$flag', originalFieldName: 'is_policy_pinned' }),
      mojo.internal.StructField('hide_more_settings', 160, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hide_pin_to_shelf', 160, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_preferred_app', 160, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hide_window_mode', 160, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resize_locked', 161, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hide_resize_locked', 161, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_system_notifications_settings_link', 161, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_uninstall', 161, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_user_choice_navigation_capturing', 161, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 176]]);

// Struct: ExtensionAppPermissionMessage
mojo.internal.Struct(
    app_management.mojom.ExtensionAppPermissionMessageSpec, 'app_management.mojom.ExtensionAppPermissionMessage', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('submessages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileHandlingState
mojo.internal.Struct(
    app_management.mojom.FileHandlingStateSpec, 'app_management.mojom.FileHandlingState', [
      mojo.internal.StructField('user_visible_types', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_visible_types_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('learn_more_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_managed', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'app_management.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(app_management.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(app_management.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

app_management.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_management.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_management.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new app_management.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_management.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

app_management.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new app_management.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

app_management.mojom.PageHandlerFactoryReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 0);
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

app_management.mojom.PageHandlerFactoryReceiver = app_management.mojom.PageHandlerFactoryReceiver;

app_management.mojom.PageHandlerFactoryPtr = app_management.mojom.PageHandlerFactoryRemote;
app_management.mojom.PageHandlerFactoryRequest = app_management.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    app_management.mojom.PageHandler_GetApps_ParamsSpec, 'app_management.mojom.PageHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetApps_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(app_management.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetApp_ParamsSpec, 'app_management.mojom.PageHandler_GetApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetApp_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetApp_ResponseParams', [
      mojo.internal.StructField('app', 0, 0, app_management.mojom.AppSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec, 'app_management.mojom.PageHandler_GetSubAppToParentMap_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParams', [
      mojo.internal.StructField('sub_app_to_parent_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec, 'app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParams', [
      mojo.internal.StructField('messages', 0, 0, mojo.internal.Array(app_management.mojom.ExtensionAppPermissionMessageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_SetPinned_ParamsSpec, 'app_management.mojom.PageHandler_SetPinned_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pinned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_SetPermission_ParamsSpec, 'app_management.mojom.PageHandler_SetPermission_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permission', 8, 0, app_management.mojom.PermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec, 'app_management.mojom.PageHandler_SetResizeLocked_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_Uninstall_ParamsSpec, 'app_management.mojom.PageHandler_Uninstall_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec, 'app_management.mojom.PageHandler_OpenNativeSettings_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec, 'app_management.mojom.PageHandler_SetPreferredApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_preferred_app', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec, 'app_management.mojom.PageHandler_GetOverlappingPreferredApps_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec, 'app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParams', [
      mojo.internal.StructField('app_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec, 'app_management.mojom.PageHandler_UpdateAppSize_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_SetWindowMode_ParamsSpec, 'app_management.mojom.PageHandler_SetWindowMode_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('window_mode', 8, 0, app_management.mojom.WindowModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec, 'app_management.mojom.PageHandler_SetRunOnOsLoginMode_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('run_on_os_login_mode', 8, 0, app_management.mojom.RunOnOsLoginModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec, 'app_management.mojom.PageHandler_SetFileHandlingEnabled_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec, 'app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_OpenStorePage_ParamsSpec, 'app_management.mojom.PageHandler_OpenStorePage_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_SetAppLocale_ParamsSpec, 'app_management.mojom.PageHandler_SetAppLocale_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locale_tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec, 'app_management.mojom.PageHandler_OpenSystemNotificationSettings_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

app_management.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_management.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_management.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new app_management.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_management.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getApps() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_management.mojom.PageHandler_GetApps_ParamsSpec,
      app_management.mojom.PageHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getApp(app_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_management.mojom.PageHandler_GetApp_ParamsSpec,
      app_management.mojom.PageHandler_GetApp_ResponseParamsSpec,
      [app_id],
      false);
  }

  getSubAppToParentMap() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec,
      app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec,
      [],
      false);
  }

  getExtensionAppPermissionMessages(app_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec,
      app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec,
      [app_id],
      false);
  }

  setPinned(app_id, pinned) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      app_management.mojom.PageHandler_SetPinned_ParamsSpec,
      null,
      [app_id, pinned],
      false);
  }

  setPermission(app_id, permission) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      app_management.mojom.PageHandler_SetPermission_ParamsSpec,
      null,
      [app_id, permission],
      false);
  }

  setResizeLocked(app_id, locked) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec,
      null,
      [app_id, locked],
      false);
  }

  uninstall(app_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      app_management.mojom.PageHandler_Uninstall_ParamsSpec,
      null,
      [app_id],
      false);
  }

  openNativeSettings(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setPreferredApp(app_id, is_preferred_app) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec,
      null,
      [app_id, is_preferred_app],
      false);
  }

  getOverlappingPreferredApps(app_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec,
      app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec,
      [app_id],
      false);
  }

  updateAppSize(app_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setWindowMode(app_id, window_mode) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      app_management.mojom.PageHandler_SetWindowMode_ParamsSpec,
      null,
      [app_id, window_mode],
      false);
  }

  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec,
      null,
      [app_id, run_on_os_login_mode],
      false);
  }

  setFileHandlingEnabled(app_id, enabled) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec,
      null,
      [app_id, enabled],
      false);
  }

  showDefaultAppAssociationsUi() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec,
      null,
      [],
      false);
  }

  openStorePage(app_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      app_management.mojom.PageHandler_OpenStorePage_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setAppLocale(app_id, locale_tag) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      app_management.mojom.PageHandler_SetAppLocale_ParamsSpec,
      null,
      [app_id, locale_tag],
      false);
  }

  openSystemNotificationSettings(app_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec,
      null,
      [app_id],
      false);
  }

};

app_management.mojom.PageHandler.getRemote = function() {
  let remote = new app_management.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.PageHandler',
    'context');
  return remote.$;
};

app_management.mojom.PageHandlerReceiver = class {
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
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_GetApps_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getApps');
          const result = this.impl.getApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, app_management.mojom.PageHandler_GetApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_GetApp_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getApp');
          const result = this.impl.getApp(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, app_management.mojom.PageHandler_GetApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getSubAppToParentMap');
          const result = this.impl.getSubAppToParentMap();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getExtensionAppPermissionMessages');
          const result = this.impl.getExtensionAppPermissionMessages(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_SetPinned_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setPinned');
          const result = this.impl.setPinned(params.app_id, params.pinned);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_SetPermission_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setPermission');
          const result = this.impl.setPermission(params.app_id, params.permission);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setResizeLocked');
          const result = this.impl.setResizeLocked(params.app_id, params.locked);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_Uninstall_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.uninstall');
          const result = this.impl.uninstall(params.app_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.openNativeSettings');
          const result = this.impl.openNativeSettings(params.app_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setPreferredApp');
          const result = this.impl.setPreferredApp(params.app_id, params.is_preferred_app);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getOverlappingPreferredApps');
          const result = this.impl.getOverlappingPreferredApps(params.app_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateAppSize');
          const result = this.impl.updateAppSize(params.app_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_SetWindowMode_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setWindowMode');
          const result = this.impl.setWindowMode(params.app_id, params.window_mode);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setRunOnOsLoginMode');
          const result = this.impl.setRunOnOsLoginMode(params.app_id, params.run_on_os_login_mode);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setFileHandlingEnabled');
          const result = this.impl.setFileHandlingEnabled(params.app_id, params.enabled);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.showDefaultAppAssociationsUi');
          const result = this.impl.showDefaultAppAssociationsUi();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_OpenStorePage_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.openStorePage');
          const result = this.impl.openStorePage(params.app_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_SetAppLocale_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAppLocale');
          const result = this.impl.setAppLocale(params.app_id, params.locale_tag);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.openSystemNotificationSettings');
          const result = this.impl.openSystemNotificationSettings(params.app_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

app_management.mojom.PageHandlerReceiver = app_management.mojom.PageHandlerReceiver;

app_management.mojom.PageHandlerPtr = app_management.mojom.PageHandlerRemote;
app_management.mojom.PageHandlerRequest = app_management.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    app_management.mojom.Page_OnAppAdded_ParamsSpec, 'app_management.mojom.Page_OnAppAdded_Params', [
      mojo.internal.StructField('app', 0, 0, app_management.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.Page_OnAppChanged_ParamsSpec, 'app_management.mojom.Page_OnAppChanged_Params', [
      mojo.internal.StructField('update', 0, 0, app_management.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    app_management.mojom.Page_OnAppRemoved_ParamsSpec, 'app_management.mojom.Page_OnAppRemoved_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

app_management.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

app_management.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'app_management.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      app_management.mojom.PagePendingReceiver,
      handle);
    this.$ = new app_management.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

app_management.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppAdded(app) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      app_management.mojom.Page_OnAppAdded_ParamsSpec,
      null,
      [app],
      false);
  }

  onAppChanged(update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_management.mojom.Page_OnAppChanged_ParamsSpec,
      null,
      [update],
      false);
  }

  onAppRemoved(app_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_management.mojom.Page_OnAppRemoved_ParamsSpec,
      null,
      [app_id],
      false);
  }

};

app_management.mojom.Page.getRemote = function() {
  let remote = new app_management.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'app_management.mojom.Page',
    'context');
  return remote.$;
};

app_management.mojom.PageReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.Page_OnAppAdded_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAppAdded');
          const result = this.impl.onAppAdded(params.app);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.Page_OnAppChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAppChanged');
          const result = this.impl.onAppChanged(params.update);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(app_management.mojom.Page_OnAppRemoved_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onAppRemoved');
          const result = this.impl.onAppRemoved(params.app_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

app_management.mojom.PageReceiver = app_management.mojom.PageReceiver;

app_management.mojom.PagePtr = app_management.mojom.PageRemote;
app_management.mojom.PageRequest = app_management.mojom.PagePendingReceiver;

