// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/privacy/mojom/app_permission_handler.mojom
// Module: ash.settings.app_permission.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_permission = ash.settings.app_permission || {};
ash.settings.app_permission.mojom = ash.settings.app_permission.mojom || {};


// Interface: AppPermissionsHandler
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
      ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec.$,
      null,
      [observer]);
  }

  getApps() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec.$,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec.$,
      []);
  }

  getSystemAppsThatUseCamera() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec.$,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec.$,
      []);
  }

  getSystemAppsThatUseMicrophone() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec.$,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec.$,
      []);
  }

  openBrowserPermissionSettings(permission_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec.$,
      null,
      [permission_type]);
  }

  openNativeSettings(app_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec.$,
      null,
      [app_id]);
  }

  setPermission(app_id, permission) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec.$,
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
}};

// ParamsSpec for AddObserver
ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetApps
ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetSystemAppsThatUseCamera
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetSystemAppsThatUseCamera_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetSystemAppsThatUseCamera_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetSystemAppsThatUseMicrophone
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetSystemAppsThatUseMicrophone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.GetSystemAppsThatUseMicrophone_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenBrowserPermissionSettings
ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.OpenBrowserPermissionSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'permission_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OpenNativeSettings
ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.OpenNativeSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPermission
ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsHandler.SetPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.settings.app_permission.mojom.AppPermissionsHandlerPtr = ash.settings.app_permission.mojom.AppPermissionsHandlerRemote;
ash.settings.app_permission.mojom.AppPermissionsHandlerRequest = ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver;


// Interface: AppPermissionsObserver
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
      ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec.$,
      null,
      [app_id]);
  }

  onAppUpdated(app) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec.$,
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
}};

// ParamsSpec for OnAppRemoved
ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsObserver.OnAppRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnAppUpdated
ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_permission.mojom.AppPermissionsObserver.OnAppUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.settings.app_permission.mojom.AppPermissionsObserverPtr = ash.settings.app_permission.mojom.AppPermissionsObserverRemote;
ash.settings.app_permission.mojom.AppPermissionsObserverRequest = ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver;

