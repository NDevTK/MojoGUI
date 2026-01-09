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
  kRemoved: 2,
  kUninstalledByNonUser: 3,
  kDisabledByLocalSettings: 4,
};

// Struct: App
ash.settings.app_notification.mojom.App = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : "";
    this.title = values.title !== undefined ? values.title : "";
    this.notification_permission = values.notification_permission !== undefined ? values.notification_permission : null;
  }
};

// Interface: AppNotificationsHandler
ash.settings.app_notification.mojom.AppNotificationsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.app_notification.mojom.AppNotificationsHandler';
  }

  setQuietMode(enabled) {
    // Method: SetQuietMode
    // Call: SetQuietMode(enabled)
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  app(app_id) {
    // Method: app
    // Call: app(app_id)
  }

  setNotificationPermission(app_id, permission) {
    // Method: SetNotificationPermission
    // Call: SetNotificationPermission(app_id, permission)
  }

  getApps() {
    // Method: GetApps
    return new Promise((resolve) => {
      // Call: GetApps()
      resolve({});
    });
  }

  getQuietMode() {
    // Method: GetQuietMode
    return new Promise((resolve) => {
      // Call: GetQuietMode()
      resolve({});
    });
  }

  openBrowserNotificationSettings() {
    // Method: OpenBrowserNotificationSettings
    // Call: OpenBrowserNotificationSettings()
  }

};

ash.settings.app_notification.mojom.AppNotificationsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppNotificationsObserver
ash.settings.app_notification.mojom.AppNotificationsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.app_notification.mojom.AppNotificationsObserver';
  }

  onNotificationAppChanged(app) {
    // Method: OnNotificationAppChanged
    // Call: OnNotificationAppChanged(app)
  }

  doNotDisturb() {
    // Method: DoNotDisturb
    // Call: DoNotDisturb()
  }

  onQuietModeChanged(enabled) {
    // Method: OnQuietModeChanged
    // Call: OnQuietModeChanged(enabled)
  }

};

ash.settings.app_notification.mojom.AppNotificationsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
