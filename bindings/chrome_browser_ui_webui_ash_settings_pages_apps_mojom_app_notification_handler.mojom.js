// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/apps/mojom/app_notification_handler.mojom
// Module: ash.settings.app_notification.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_notification = ash.settings.app_notification || {};
ash.settings.app_notification.mojom = ash.settings.app_notification.mojom || {};
var ui = ui || {};

ash.settings.app_notification.mojom.ReadinessSpec = { $: mojo.internal.Enum() };
ash.settings.app_notification.mojom.AppSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsHandler = {};
ash.settings.app_notification.mojom.AppNotificationsHandler.$interfaceName = 'ash.settings.app_notification.mojom.AppNotificationsHandler';
ash.settings.app_notification.mojom.AppNotificationsHandler_SetQuietMode_ParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_ParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_ParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ResponseParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ResponseParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsHandler_OpenBrowserNotificationSettings_ParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsObserver = {};
ash.settings.app_notification.mojom.AppNotificationsObserver.$interfaceName = 'ash.settings.app_notification.mojom.AppNotificationsObserver';
ash.settings.app_notification.mojom.AppNotificationsObserver_OnNotificationAppChanged_ParamsSpec = { $: {} };
ash.settings.app_notification.mojom.AppNotificationsObserver_OnQuietModeChanged_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppSpec, 'ash.settings.app_notification.mojom.App', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('readiness', 16, 0, ash.settings.app_notification.mojom.ReadinessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('notification_permission', 24, 0, app_management.mojom.PermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AppNotificationsHandler
mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsHandler_SetQuietMode_ParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsHandler_SetQuietMode_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_ParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.app_notification.mojom.AppNotificationsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_ParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permission', 8, 0, app_management.mojom.PermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ResponseParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.settings.app_notification.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ResponseParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsHandler_OpenBrowserNotificationSettings_ParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsHandler_OpenBrowserNotificationSettings_Params', [
    ],
    [[0, 8]]);

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
      [enabled],
      false);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setNotificationPermission(app_id, permission) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_ParamsSpec,
      null,
      [app_id, permission],
      false);
  }

  getApps() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ParamsSpec,
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getQuietMode() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ParamsSpec,
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ResponseParamsSpec,
      [],
      false);
  }

  openBrowserNotificationSettings() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_OpenBrowserNotificationSettings_ParamsSpec,
      null,
      [],
      false);
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

ash.settings.app_notification.mojom.AppNotificationsHandlerPtr = ash.settings.app_notification.mojom.AppNotificationsHandlerRemote;
ash.settings.app_notification.mojom.AppNotificationsHandlerRequest = ash.settings.app_notification.mojom.AppNotificationsHandlerPendingReceiver;


// Interface: AppNotificationsObserver
mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsObserver_OnNotificationAppChanged_ParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsObserver_OnNotificationAppChanged_Params', [
      mojo.internal.StructField('app', 0, 0, ash.settings.app_notification.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_notification.mojom.AppNotificationsObserver_OnQuietModeChanged_ParamsSpec, 'ash.settings.app_notification.mojom.AppNotificationsObserver_OnQuietModeChanged_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [app],
      false);
  }

  onQuietModeChanged(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsObserver_OnQuietModeChanged_ParamsSpec,
      null,
      [enabled],
      false);
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

ash.settings.app_notification.mojom.AppNotificationsObserverPtr = ash.settings.app_notification.mojom.AppNotificationsObserverRemote;
ash.settings.app_notification.mojom.AppNotificationsObserverRequest = ash.settings.app_notification.mojom.AppNotificationsObserverPendingReceiver;

