// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/mac_notifications/public/mojom/mac_notifications.mojom
// Module: mac_notifications.mojom

'use strict';

// Module namespace
var mac_notifications = mac_notifications || {};
mac_notifications.mojom = mac_notifications.mojom || {};


// Enum: NotificationOperation
mac_notifications.mojom.NotificationOperation = {
};

// Enum: RequestPermissionResult
mac_notifications.mojom.RequestPermissionResult = {
  kRequestFailed: 0,
  kPermissionDenied: 1,
  kPermissionGranted: 2,
  kPermissionPreviouslyDenied: 3,
  kPermissionPreviouslyGranted: 4,
};

// Enum: PermissionStatus
mac_notifications.mojom.PermissionStatus = {
  or: 0,
};

// Struct: ProfileIdentifier
mac_notifications.mojom.ProfileIdentifier = class {
  constructor(values = {}) {
    this.incognito = values.incognito !== undefined ? values.incognito : false;
  }
};

// Struct: NotificationIdentifier
mac_notifications.mojom.NotificationIdentifier = class {
  constructor(values = {}) {
    this.profile = values.profile !== undefined ? values.profile : "";
  }
};

// Struct: NotificationMetadata
mac_notifications.mojom.NotificationMetadata = class {
  constructor(values = {}) {
    this.user_data_dir = values.user_data_dir !== undefined ? values.user_data_dir : 0;
  }
};

// Struct: NotificationActionInfo
mac_notifications.mojom.NotificationActionInfo = class {
  constructor(values = {}) {
    this.reply = values.reply !== undefined ? values.reply : 0;
  }
};

// Struct: NotificationActionButton
mac_notifications.mojom.NotificationActionButton = class {
  constructor(values = {}) {
    this.placeholder = values.placeholder !== undefined ? values.placeholder : "";
  }
};

// Struct: Notification
mac_notifications.mojom.Notification = class {
  constructor(values = {}) {
    this.icon = values.icon !== undefined ? values.icon : false;
  }
};

// Interface: MacNotificationService
mac_notifications.mojom.MacNotificationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mac_notifications.mojom.MacNotificationService';
  }

  displayNotification(notification) {
    // Method: DisplayNotification
    // Call: DisplayNotification(notification)
  }

  getDisplayedNotifications(profile, origin) {
    // Method: GetDisplayedNotifications
    return new Promise((resolve) => {
      // Call: GetDisplayedNotifications(profile, origin)
      resolve({});
    });
  }

  closeNotification(identifier) {
    // Method: CloseNotification
    // Call: CloseNotification(identifier)
  }

  closeNotificationsForProfile(profile) {
    // Method: CloseNotificationsForProfile
    // Call: CloseNotificationsForProfile(profile)
  }

  closeAllNotifications() {
    // Method: CloseAllNotifications
    // Call: CloseAllNotifications()
  }

  okayToTerminateService() {
    // Method: OkayToTerminateService
    return new Promise((resolve) => {
      // Call: OkayToTerminateService()
      resolve({});
    });
  }

};

mac_notifications.mojom.MacNotificationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MacNotificationActionHandler
mac_notifications.mojom.MacNotificationActionHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mac_notifications.mojom.MacNotificationActionHandler';
  }

  onNotificationAction(info) {
    // Method: OnNotificationAction
    // Call: OnNotificationAction(info)
  }

};

mac_notifications.mojom.MacNotificationActionHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MacNotificationProvider
mac_notifications.mojom.MacNotificationProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mac_notifications.mojom.MacNotificationProvider';
  }

  bindNotificationService(service, handler) {
    // Method: BindNotificationService
    // Call: BindNotificationService(service, handler)
  }

};

mac_notifications.mojom.MacNotificationProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
