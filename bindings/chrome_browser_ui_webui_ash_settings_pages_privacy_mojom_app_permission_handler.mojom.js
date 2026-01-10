// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/privacy/mojom/app_permission_handler.mojom
// Module: ash.settings.app_permission.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_permission = ash.settings.app_permission || {};
ash.settings.app_permission.mojom = ash.settings.app_permission.mojom || {};
var ui = ui || {};

ash.settings.app_permission.mojom.AppSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler = {};
ash.settings.app_permission.mojom.AppPermissionsHandler.$interfaceName = 'ash.settings.app_permission.mojom.AppPermissionsHandler';
ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsObserver = {};
ash.settings.app_permission.mojom.AppPermissionsObserver.$interfaceName = 'ash.settings.app_permission.mojom.AppPermissionsObserver';
ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec = { $: {} };

// Struct: App
mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppSpec, 'ash.settings.app_permission.mojom.App', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, app_management.mojom.AppTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('permissions', 16, 0, mojo.internal.Map(app_management.mojom.PermissionTypeSpec, app_management.mojom.PermissionSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AppPermissionsHandler
mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.app_permission.mojom.AppPermissionsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_Params', [
      mojo.internal.StructField('permission_type', 0, 0, app_management.mojom.PermissionTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permission', 8, 0, app_management.mojom.PermissionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_permission.mojom.AppPermissionsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_permission.mojom.AppPermissionsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.app_permission.mojom.AppPermissionsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.app_permission.mojom.AppPermissionsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  getApps() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec,
      []);
  }

  getSystemAppsThatUseCamera() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec,
      []);
  }

  getSystemAppsThatUseMicrophone() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec,
      []);
  }

  openBrowserPermissionSettings(permission_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec,
      null,
      [permission_type]);
  }

  openNativeSettings(app_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec,
      null,
      [app_id]);
  }

  setPermission(app_id, permission) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec,
      null,
      [app_id, permission]);
  }

};

ash.settings.app_permission.mojom.AppPermissionsHandler.getRemote = function() {
  let remote = new ash.settings.app_permission.mojom.AppPermissionsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_permission.mojom.AppPermissionsHandler',
    'context');
  return remote.$;
};

ash.settings.app_permission.mojom.AppPermissionsHandlerPtr = ash.settings.app_permission.mojom.AppPermissionsHandlerRemote;
ash.settings.app_permission.mojom.AppPermissionsHandlerRequest = ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver;


// Interface: AppPermissionsObserver
mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_Params', [
      mojo.internal.StructField('app', 0, 0, ash.settings.app_permission.mojom.AppSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_permission.mojom.AppPermissionsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_permission.mojom.AppPermissionsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.app_permission.mojom.AppPermissionsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.app_permission.mojom.AppPermissionsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppRemoved(app_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec,
      null,
      [app_id]);
  }

  onAppUpdated(app) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec,
      null,
      [app]);
  }

};

ash.settings.app_permission.mojom.AppPermissionsObserver.getRemote = function() {
  let remote = new ash.settings.app_permission.mojom.AppPermissionsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_permission.mojom.AppPermissionsObserver',
    'context');
  return remote.$;
};

ash.settings.app_permission.mojom.AppPermissionsObserverPtr = ash.settings.app_permission.mojom.AppPermissionsObserverRemote;
ash.settings.app_permission.mojom.AppPermissionsObserverRequest = ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver;

