// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PersistentNotificationError
blink.mojom.PersistentNotificationError = {
  NONE: 0,
  INTERNAL_ERROR: 1,
  PERMISSION_DENIED: 2,
};

// Interface: NonPersistentNotificationListener
blink.mojom.NonPersistentNotificationListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.NonPersistentNotificationListener';
  }

  onShow() {
    // Method: OnShow
    // Call: OnShow()
  }

  onClick() {
    // Method: OnClick
    // Call: OnClick()
  }

  onClose() {
    // Method: OnClose
    // Call: OnClose()
  }

};

blink.mojom.NonPersistentNotificationListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NotificationService
blink.mojom.NotificationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.NotificationService';
  }

  displayNonPersistentNotification(token, notification_data, notification_resources, event_listener) {
    // Method: DisplayNonPersistentNotification
    // Call: DisplayNonPersistentNotification(token, notification_data, notification_resources, event_listener)
  }

  closeNonPersistentNotification(token) {
    // Method: CloseNonPersistentNotification
    // Call: CloseNonPersistentNotification(token)
  }

  displayPersistentNotification(service_worker_registration_id, notification_data, notification_resources) {
    // Method: DisplayPersistentNotification
    return new Promise((resolve) => {
      // Call: DisplayPersistentNotification(service_worker_registration_id, notification_data, notification_resources)
      resolve({});
    });
  }

  closePersistentNotification(notification_id) {
    // Method: ClosePersistentNotification
    // Call: ClosePersistentNotification(notification_id)
  }

  getNotifications(service_worker_registration_id, filter_tag, include_triggered) {
    // Method: GetNotifications
    return new Promise((resolve) => {
      // Call: GetNotifications(service_worker_registration_id, filter_tag, include_triggered)
      resolve({});
    });
  }

};

blink.mojom.NotificationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
