// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.PersistentNotificationErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.NonPersistentNotificationListener = {};
blink.mojom.NonPersistentNotificationListener.$interfaceName = 'blink.mojom.NonPersistentNotificationListener';
blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec = { $: {} };
blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec = { $: {} };
blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec = { $: {} };
blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec = { $: {} };
blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParamsSpec = { $: {} };
blink.mojom.NotificationService = {};
blink.mojom.NotificationService.$interfaceName = 'blink.mojom.NotificationService';
blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec = { $: {} };
blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec = { $: {} };
blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec = { $: {} };
blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec = { $: {} };
blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec = { $: {} };
blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec = { $: {} };
blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec = { $: {} };
blink.mojom.NotificationService_GetNotifications_ParamsSpec = { $: {} };
blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec = { $: {} };

// Enum: PersistentNotificationError
blink.mojom.PersistentNotificationError = {
  NONE: 0,
  INTERNAL_ERROR: 1,
  PERMISSION_DENIED: 2,
};

// Interface: NonPersistentNotificationListener
mojo.internal.Struct(
    blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParamsSpec, 'blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParams', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  onClick() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec,
      blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec,
      [],
      false);
  }

  onClose() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec,
      blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.NonPersistentNotificationListenerPtr = blink.mojom.NonPersistentNotificationListenerRemote;
blink.mojom.NonPersistentNotificationListenerRequest = blink.mojom.NonPersistentNotificationListenerPendingReceiver;


// Interface: NotificationService
mojo.internal.Struct(
    blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec, 'blink.mojom.NotificationService_GetPermissionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec, 'blink.mojom.NotificationService_GetPermissionStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec, 'blink.mojom.NotificationService_DisplayNonPersistentNotification_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('notification_data', 8, 0, blink.mojom.NotificationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('notification_resources', 16, 0, blink.mojom.NotificationResourcesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_listener', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.NonPersistentNotificationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec, 'blink.mojom.NotificationService_CloseNonPersistentNotification_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec, 'blink.mojom.NotificationService_DisplayPersistentNotification_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('notification_data', 8, 0, blink.mojom.NotificationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('notification_resources', 16, 0, blink.mojom.NotificationResourcesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec, 'blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.PersistentNotificationErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec, 'blink.mojom.NotificationService_ClosePersistentNotification_Params', [
      mojo.internal.StructField('notification_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.NotificationService_GetNotifications_ParamsSpec, 'blink.mojom.NotificationService_GetNotifications_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('filter_tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('include_triggered', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec, 'blink.mojom.NotificationService_GetNotifications_ResponseParams', [
      mojo.internal.StructField('notification_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('notification_datas', 8, 0, mojo.internal.Array(blink.mojom.NotificationDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  displayNonPersistentNotification(token, notification_data, notification_resources, event_listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec,
      null,
      [token, notification_data, notification_resources, event_listener],
      false);
  }

  closeNonPersistentNotification(token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec,
      null,
      [token],
      false);
  }

  displayPersistentNotification(service_worker_registration_id, notification_data, notification_resources) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec,
      blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec,
      [service_worker_registration_id, notification_data, notification_resources],
      false);
  }

  closePersistentNotification(notification_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec,
      null,
      [notification_id],
      false);
  }

  getNotifications(service_worker_registration_id, filter_tag, include_triggered) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.NotificationService_GetNotifications_ParamsSpec,
      blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec,
      [service_worker_registration_id, filter_tag, include_triggered],
      false);
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

blink.mojom.NotificationServicePtr = blink.mojom.NotificationServiceRemote;
blink.mojom.NotificationServiceRequest = blink.mojom.NotificationServicePendingReceiver;

