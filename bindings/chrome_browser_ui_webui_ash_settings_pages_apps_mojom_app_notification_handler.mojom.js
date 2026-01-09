// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/apps/mojom/app_notification_handler.mojom
// Module: ash.settings.app_notification.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_notification = ash.settings.app_notification || {};
ash.settings.app_notification.mojom = ash.settings.app_notification.mojom || {};


// Enum: Readiness
ash.settings.app_notification.mojom.Readiness = {
  kUnknown: 0,
  kReady: 1,
  kDisabledByBlocklist: 2,
  kDisabledByPolicy: 3,
  kDisabledByUser: 4,
  kTerminated: 5,
  kUninstalledByUser: 6,
  kRemoved: 7,
  kUninstalledByNonUser: 8,
  kDisabledByLocalSettings: 9,
};

// Struct: App
ash.settings.app_notification.mojom.AppSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.App',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'readiness', packedOffset: 16, packedBitOffset: 0, type: ash.settings.app_notification.mojom.ReadinessSpec, nullable: false },
        { name: 'notification_permission', packedOffset: 24, packedBitOffset: 0, type: app_management.mojom.PermissionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AppNotificationsHandler
ash.settings.app_notification.mojom.AppNotificationsHandler = {};

ash.settings.app_notification.mojom.AppNotificationsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_notification.mojom.AppNotificationsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_notification.mojom.AppNotificationsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_notification.mojom.AppNotificationsHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.app_notification.mojom.AppNotificationsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.app_notification.mojom.AppNotificationsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setQuietMode(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_SetQuietMode_ParamsSpec,
      null,
      [enabled]);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  setNotificationPermission(app_id, permission) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_ParamsSpec,
      null,
      [app_id, permission]);
  }

  getApps() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ParamsSpec,
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ResponseParamsSpec,
      []);
  }

  getQuietMode() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ParamsSpec,
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ResponseParamsSpec,
      []);
  }

  openBrowserNotificationSettings() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_OpenBrowserNotificationSettings_ParamsSpec,
      null,
      []);
  }

};

ash.settings.app_notification.mojom.AppNotificationsHandler.getRemote = function() {
  let remote = new ash.settings.app_notification.mojom.AppNotificationsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_notification.mojom.AppNotificationsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetQuietMode
ash.settings.app_notification.mojom.AppNotificationsHandler_SetQuietMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsHandler.SetQuietMode_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddObserver
ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsHandler.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNotificationPermission
ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsHandler.SetNotificationPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: app_management.mojom.PermissionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetApps
ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsHandler.GetApps_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsHandler.GetApps_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'apps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetQuietMode
ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsHandler.GetQuietMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsHandler.GetQuietMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenBrowserNotificationSettings
ash.settings.app_notification.mojom.AppNotificationsHandler_OpenBrowserNotificationSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsHandler.OpenBrowserNotificationSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.app_notification.mojom.AppNotificationsHandlerPtr = ash.settings.app_notification.mojom.AppNotificationsHandlerRemote;
ash.settings.app_notification.mojom.AppNotificationsHandlerRequest = ash.settings.app_notification.mojom.AppNotificationsHandlerPendingReceiver;


// Interface: AppNotificationsObserver
ash.settings.app_notification.mojom.AppNotificationsObserver = {};

ash.settings.app_notification.mojom.AppNotificationsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_notification.mojom.AppNotificationsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_notification.mojom.AppNotificationsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_notification.mojom.AppNotificationsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.app_notification.mojom.AppNotificationsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.app_notification.mojom.AppNotificationsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNotificationAppChanged(app) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsObserver_OnNotificationAppChanged_ParamsSpec,
      null,
      [app]);
  }

  onQuietModeChanged(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsObserver_OnQuietModeChanged_ParamsSpec,
      null,
      [enabled]);
  }

};

ash.settings.app_notification.mojom.AppNotificationsObserver.getRemote = function() {
  let remote = new ash.settings.app_notification.mojom.AppNotificationsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_notification.mojom.AppNotificationsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNotificationAppChanged
ash.settings.app_notification.mojom.AppNotificationsObserver_OnNotificationAppChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsObserver.OnNotificationAppChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'app', packedOffset: 0, packedBitOffset: 0, type: ash.settings.app_notification.mojom.AppSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnQuietModeChanged
ash.settings.app_notification.mojom.AppNotificationsObserver_OnQuietModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.app_notification.mojom.AppNotificationsObserver.OnQuietModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.app_notification.mojom.AppNotificationsObserverPtr = ash.settings.app_notification.mojom.AppNotificationsObserverRemote;
ash.settings.app_notification.mojom.AppNotificationsObserverRequest = ash.settings.app_notification.mojom.AppNotificationsObserverPendingReceiver;

