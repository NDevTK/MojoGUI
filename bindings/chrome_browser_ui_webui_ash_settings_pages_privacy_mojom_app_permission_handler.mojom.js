// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/privacy/mojom/app_permission_handler.mojom
// Module: ash.settings.app_permission.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.app_permission = ash.settings.settings.app_permission || {};
ash.settings.settings.app_permission.app_permission.mojom = ash.settings.settings.app_permission.app_permission.mojom || {};
var ui = ui || {};


// Struct: App
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.App',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: app_management.mojom.AppTypeSpec, nullable: false, minVersion: 0 },
        { name: 'permissions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(app_management.mojom.PermissionTypeSpec, app_management.mojom.PermissionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: AppPermissionsHandler
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler = {};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_permission.mojom.AppPermissionsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  getApps() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetApps_ParamsSpec,
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec,
      []);
  }

  getSystemAppsThatUseCamera() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec,
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec,
      []);
  }

  getSystemAppsThatUseMicrophone() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec,
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec,
      []);
  }

  openBrowserPermissionSettings(permission_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec,
      null,
      [permission_type]);
  }

  openNativeSettings(app_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec,
      null,
      [app_id]);
  }

  setPermission(app_id, permission) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_SetPermission_ParamsSpec,
      null,
      [app_id, permission]);
  }

};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler.getRemote = function() {
  let remote = new ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_permission.mojom.AppPermissionsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetApps
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSystemAppsThatUseCamera
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetSystemAppsThatUseCamera_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetSystemAppsThatUseCamera_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSystemAppsThatUseMicrophone
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetSystemAppsThatUseMicrophone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetSystemAppsThatUseMicrophone_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenBrowserPermissionSettings
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.OpenBrowserPermissionSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'permission_type', packedOffset: 0, packedBitOffset: 0, type: app_management.mojom.PermissionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenNativeSettings
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.OpenNativeSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPermission
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandler_SetPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.SetPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.PermissionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerPtr = ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerRemote;
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerRequest = ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsHandlerPendingReceiver;


// Interface: AppPermissionsObserver
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserver = {};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_permission.mojom.AppPermissionsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppRemoved(app_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec,
      null,
      [app_id]);
  }

  onAppUpdated(app) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec,
      null,
      [app]);
  }

};

ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserver.getRemote = function() {
  let remote = new ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_permission.mojom.AppPermissionsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAppRemoved
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsObserver.OnAppRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAppUpdated
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsObserver.OnAppUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: ash.settings.app_permission.mojom.AppSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverPtr = ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverRemote;
ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverRequest = ash.settings.settings.app_permission.app_permission.mojom.mojom.AppPermissionsObserverPendingReceiver;

