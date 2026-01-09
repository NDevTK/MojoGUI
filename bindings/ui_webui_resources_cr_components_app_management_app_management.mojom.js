// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/app_management/app_management.mojom
// Module: app_management.mojom

'use strict';

// Module namespace
var app_management = app_management || {};
app_management.mojom = app_management.mojom || {};


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

// Struct: Permission
app_management.mojom.PermissionSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Permission',
      packedSize: 40,
      fields: [
        { name: 'permission_type', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.PermissionTypeSpec, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: app_management.mojom.PermissionValueSpec, nullable: false },
        { name: 'is_managed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'details', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RunOnOsLogin
app_management.mojom.RunOnOsLoginSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.RunOnOsLogin',
      packedSize: 24,
      fields: [
        { name: 'login_mode', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.RunOnOsLoginModeSpec, nullable: false },
        { name: 'is_managed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Locale
app_management.mojom.LocaleSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Locale',
      packedSize: 32,
      fields: [
        { name: 'locale_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'native_display_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: App
app_management.mojom.AppSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.App',
      packedSize: 200,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: app_management.mojom.AppTypeSpec, nullable: false },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'description', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_pinned', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'is_policy_pinned', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: true },
        { name: 'version', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'size', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'permissions', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'install_reason', packedOffset: 72, packedBitOffset: 0, type: app_management.mojom.InstallReasonSpec, nullable: false },
        { name: 'install_source', packedOffset: 80, packedBitOffset: 0, type: app_management.mojom.InstallSourceSpec, nullable: false },
        { name: 'hide_more_settings', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'hide_pin_to_shelf', packedOffset: 88, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_preferred_app', packedOffset: 88, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'window_mode', packedOffset: 96, packedBitOffset: 0, type: app_management.mojom.WindowModeSpec, nullable: false },
        { name: 'hide_window_mode', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'resize_locked', packedOffset: 104, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'hide_resize_locked', packedOffset: 104, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'supported_links', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'run_on_os_login', packedOffset: 120, packedBitOffset: 0, type: app_management.mojom.RunOnOsLoginSpec, nullable: true },
        { name: 'file_handling_state', packedOffset: 128, packedBitOffset: 0, type: app_management.mojom.FileHandlingStateSpec, nullable: true },
        { name: 'app_size', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'data_size', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'publisher_id', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'formatted_origin', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'scope_extensions', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'supported_locales', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'selected_locale', packedOffset: 184, packedBitOffset: 0, type: app_management.mojom.LocaleSpec, nullable: true },
        { name: 'show_system_notifications_settings_link', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_uninstall', packedOffset: 192, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_user_choice_navigation_capturing', packedOffset: 192, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExtensionAppPermissionMessage
app_management.mojom.ExtensionAppPermissionMessageSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.ExtensionAppPermissionMessage',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'submessages', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileHandlingState
app_management.mojom.FileHandlingStateSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.FileHandlingState',
      packedSize: 40,
      fields: [
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_managed', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'user_visible_types', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'user_visible_types_label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'learn_more_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
app_management.mojom.PageHandlerFactory = {};

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
      [page, handler]);
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

// ParamsSpec for CreatePageHandler
app_management.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
app_management.mojom.PageHandlerFactoryPtr = app_management.mojom.PageHandlerFactoryRemote;
app_management.mojom.PageHandlerFactoryRequest = app_management.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
app_management.mojom.PageHandler = {};

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
      []);
  }

  getApp(app_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_management.mojom.PageHandler_GetApp_ParamsSpec,
      app_management.mojom.PageHandler_GetApp_ResponseParamsSpec,
      [app_id]);
  }

  getSubAppToParentMap() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec,
      app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec,
      []);
  }

  getExtensionAppPermissionMessages(app_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec,
      app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec,
      [app_id]);
  }

  setPinned(app_id, pinned) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      app_management.mojom.PageHandler_SetPinned_ParamsSpec,
      null,
      [app_id, pinned]);
  }

  setPermission(app_id, permission) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      app_management.mojom.PageHandler_SetPermission_ParamsSpec,
      null,
      [app_id, permission]);
  }

  setResizeLocked(app_id, locked) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec,
      null,
      [app_id, locked]);
  }

  uninstall(app_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      app_management.mojom.PageHandler_Uninstall_ParamsSpec,
      null,
      [app_id]);
  }

  openNativeSettings(app_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec,
      null,
      [app_id]);
  }

  setPreferredApp(app_id, is_preferred_app) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec,
      null,
      [app_id, is_preferred_app]);
  }

  getOverlappingPreferredApps(app_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec,
      app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec,
      [app_id]);
  }

  updateAppSize(app_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec,
      null,
      [app_id]);
  }

  setWindowMode(app_id, window_mode) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      app_management.mojom.PageHandler_SetWindowMode_ParamsSpec,
      null,
      [app_id, window_mode]);
  }

  setRunOnOsLoginMode(app_id, run_on_os_login_mode) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec,
      null,
      [app_id, run_on_os_login_mode]);
  }

  setFileHandlingEnabled(app_id, enabled) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec,
      null,
      [app_id, enabled]);
  }

  showDefaultAppAssociationsUi() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec,
      null,
      []);
  }

  openStorePage(app_id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      app_management.mojom.PageHandler_OpenStorePage_ParamsSpec,
      null,
      [app_id]);
  }

  setAppLocale(app_id, locale_tag) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      app_management.mojom.PageHandler_SetAppLocale_ParamsSpec,
      null,
      [app_id, locale_tag]);
  }

  openSystemNotificationSettings(app_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec,
      null,
      [app_id]);
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

// ParamsSpec for GetApps
app_management.mojom.PageHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

app_management.mojom.PageHandler_GetApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetApp
app_management.mojom.PageHandler_GetApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetApp_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

app_management.mojom.PageHandler_GetApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.AppSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSubAppToParentMap
app_management.mojom.PageHandler_GetSubAppToParentMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetSubAppToParentMap_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

app_management.mojom.PageHandler_GetSubAppToParentMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetSubAppToParentMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'sub_app_to_parent_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetExtensionAppPermissionMessages
app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetExtensionAppPermissionMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

app_management.mojom.PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetExtensionAppPermissionMessages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'messages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPinned
app_management.mojom.PageHandler_SetPinned_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetPinned_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'pinned', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPermission
app_management.mojom.PageHandler_SetPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'permission', packedOffset: 16, packedBitOffset: 0, type: app_management.mojom.PermissionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetResizeLocked
app_management.mojom.PageHandler_SetResizeLocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetResizeLocked_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'locked', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Uninstall
app_management.mojom.PageHandler_Uninstall_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.Uninstall_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenNativeSettings
app_management.mojom.PageHandler_OpenNativeSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.OpenNativeSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPreferredApp
app_management.mojom.PageHandler_SetPreferredApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetPreferredApp_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_preferred_app', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetOverlappingPreferredApps
app_management.mojom.PageHandler_GetOverlappingPreferredApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetOverlappingPreferredApps_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

app_management.mojom.PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.GetOverlappingPreferredApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'app_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateAppSize
app_management.mojom.PageHandler_UpdateAppSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.UpdateAppSize_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetWindowMode
app_management.mojom.PageHandler_SetWindowMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetWindowMode_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'window_mode', packedOffset: 16, packedBitOffset: 0, type: app_management.mojom.WindowModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetRunOnOsLoginMode
app_management.mojom.PageHandler_SetRunOnOsLoginMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetRunOnOsLoginMode_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'run_on_os_login_mode', packedOffset: 16, packedBitOffset: 0, type: app_management.mojom.RunOnOsLoginModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFileHandlingEnabled
app_management.mojom.PageHandler_SetFileHandlingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetFileHandlingEnabled_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowDefaultAppAssociationsUi
app_management.mojom.PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.ShowDefaultAppAssociationsUi_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenStorePage
app_management.mojom.PageHandler_OpenStorePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.OpenStorePage_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAppLocale
app_management.mojom.PageHandler_SetAppLocale_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.SetAppLocale_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'locale_tag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenSystemNotificationSettings
app_management.mojom.PageHandler_OpenSystemNotificationSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.PageHandler.OpenSystemNotificationSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
app_management.mojom.PageHandlerPtr = app_management.mojom.PageHandlerRemote;
app_management.mojom.PageHandlerRequest = app_management.mojom.PageHandlerPendingReceiver;


// Interface: Page
app_management.mojom.Page = {};

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
      [app]);
  }

  onAppChanged(update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      app_management.mojom.Page_OnAppChanged_ParamsSpec,
      null,
      [update]);
  }

  onAppRemoved(app_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      app_management.mojom.Page_OnAppRemoved_ParamsSpec,
      null,
      [app_id]);
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

// ParamsSpec for OnAppAdded
app_management.mojom.Page_OnAppAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page.OnAppAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.AppSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAppChanged
app_management.mojom.Page_OnAppChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page.OnAppChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.AppSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAppRemoved
app_management.mojom.Page_OnAppRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'app_management.mojom.Page.OnAppRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
app_management.mojom.PagePtr = app_management.mojom.PageRemote;
app_management.mojom.PageRequest = app_management.mojom.PagePendingReceiver;

