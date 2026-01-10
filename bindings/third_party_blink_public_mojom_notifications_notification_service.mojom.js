// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Enum: PersistentNotificationError
blink.mojom.PersistentNotificationError = {
  NONE: 0,
  INTERNAL_ERROR: 1,
  PERMISSION_DENIED: 2,
};
blink.mojom.PersistentNotificationErrorSpec = { $: mojo.internal.Enum() };

// Interface: NonPersistentNotificationListener
blink.mojom.NonPersistentNotificationListener = {};

blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NonPersistentNotificationListener_OnShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NonPersistentNotificationListener_OnClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NonPersistentNotificationListener_OnClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.NonPersistentNotificationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.NonPersistentNotificationListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NonPersistentNotificationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.NonPersistentNotificationListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.NonPersistentNotificationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.NonPersistentNotificationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShow() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec,
      null,
      []);
  }

  onClick() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec,
      null,
      []);
  }

  onClose() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.NonPersistentNotificationListener.getRemote = function() {
  let remote = new blink.mojom.NonPersistentNotificationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NonPersistentNotificationListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnShow
blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NonPersistentNotificationListener.OnShow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnClick
blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NonPersistentNotificationListener.OnClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnClose
blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NonPersistentNotificationListener.OnClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.NonPersistentNotificationListenerPtr = blink.mojom.NonPersistentNotificationListenerRemote;
blink.mojom.NonPersistentNotificationListenerRequest = blink.mojom.NonPersistentNotificationListenerPendingReceiver;


// Interface: NotificationService
blink.mojom.NotificationService = {};

blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService_GetPermissionStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService_DisplayNonPersistentNotification_Params',
      packedSize: 40,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'notification_data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NotificationDataSpec, nullable: false, minVersion: 0 },
        { name: 'notification_resources', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.NotificationResourcesSpec, nullable: false, minVersion: 0 },
        { name: 'event_listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.NonPersistentNotificationListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService_CloseNonPersistentNotification_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService_DisplayPersistentNotification_Params',
      packedSize: 32,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'notification_data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NotificationDataSpec, nullable: false, minVersion: 0 },
        { name: 'notification_resources', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.NotificationResourcesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService_ClosePersistentNotification_Params',
      packedSize: 16,
      fields: [
        { name: 'notification_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.NotificationService_GetNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService_GetNotifications_Params',
      packedSize: 32,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'filter_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'include_triggered', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.NotificationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.NotificationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NotificationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.NotificationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.NotificationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.NotificationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPermissionStatus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec,
      blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec,
      []);
  }

  displayNonPersistentNotification(token, notification_data, notification_resources, event_listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec,
      null,
      [token, notification_data, notification_resources, event_listener]);
  }

  closeNonPersistentNotification(token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec,
      null,
      [token]);
  }

  displayPersistentNotification(service_worker_registration_id, notification_data, notification_resources) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec,
      blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec,
      [service_worker_registration_id, notification_data, notification_resources]);
  }

  closePersistentNotification(notification_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec,
      null,
      [notification_id]);
  }

  getNotifications(service_worker_registration_id, filter_tag, include_triggered) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.NotificationService_GetNotifications_ParamsSpec,
      blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec,
      [service_worker_registration_id, filter_tag, include_triggered]);
  }

};

blink.mojom.NotificationService.getRemote = function() {
  let remote = new blink.mojom.NotificationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NotificationService',
    'context');
  return remote.$;
};

// ParamsSpec for GetPermissionStatus
blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.GetPermissionStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.GetPermissionStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PermissionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisplayNonPersistentNotification
blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.DisplayNonPersistentNotification_Params',
      packedSize: 40,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'notification_data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NotificationDataSpec, nullable: false, minVersion: 0 },
        { name: 'notification_resources', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.NotificationResourcesSpec, nullable: false, minVersion: 0 },
        { name: 'event_listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.NonPersistentNotificationListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for CloseNonPersistentNotification
blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.CloseNonPersistentNotification_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisplayPersistentNotification
blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.DisplayPersistentNotification_Params',
      packedSize: 32,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'notification_data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NotificationDataSpec, nullable: false, minVersion: 0 },
        { name: 'notification_resources', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.NotificationResourcesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.DisplayPersistentNotification_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PersistentNotificationErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClosePersistentNotification
blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.ClosePersistentNotification_Params',
      packedSize: 16,
      fields: [
        { name: 'notification_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNotifications
blink.mojom.NotificationService_GetNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.GetNotifications_Params',
      packedSize: 32,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'filter_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'include_triggered', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationService.GetNotifications_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'notification_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'notification_datas', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.NotificationDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.NotificationServicePtr = blink.mojom.NotificationServiceRemote;
blink.mojom.NotificationServiceRequest = blink.mojom.NotificationServicePendingReceiver;

