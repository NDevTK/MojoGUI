// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/mac_notifications/public/mojom/mac_notifications.mojom
// Module: mac_notifications.mojom

'use strict';

// Module namespace
var mac_notifications = mac_notifications || {};
mac_notifications.mojom = mac_notifications.mojom || {};


// Enum: NotificationOperation
mac_notifications.mojom.NotificationOperation = {
  kClick: 0,
  kClose: 1,
  kSettings: 2,
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
  kNotDetermined: 0,
  kPromptPending: 1,
  kDenied: 2,
  kGranted: 3,
};

// Interface: MacNotificationService
mac_notifications.mojom.MacNotificationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mac_notifications.mojom.MacNotificationServiceRemote = class {
  static get $interfaceName() {
    return 'mac_notifications.mojom.MacNotificationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mac_notifications.mojom.MacNotificationServicePendingReceiver,
      handle);
    this.$ = new mac_notifications.mojom.MacNotificationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mac_notifications.mojom.MacNotificationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  displayNotification(notification) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec.$,
      null,
      [notification]);
  }

  getDisplayedNotifications(profile, origin) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec.$,
      mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec.$,
      [profile, origin]);
  }

  closeNotification(identifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec.$,
      null,
      [identifier]);
  }

  closeNotificationsForProfile(profile) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec.$,
      null,
      [profile]);
  }

  closeAllNotifications() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec.$,
      null,
      []);
  }

  okayToTerminateService() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec.$,
      mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec.$,
      []);
  }

};

mac_notifications.mojom.MacNotificationService.getRemote = function() {
  let remote = new mac_notifications.mojom.MacNotificationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mac_notifications.mojom.MacNotificationService',
    'context');
  return remote.$;
};

// ParamsSpec for DisplayNotification
mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationService.DisplayNotification_Params',
      packedSize: 16,
      fields: [
        { name: 'notification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDisplayedNotifications
mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationService.GetDisplayedNotifications_Params',
      packedSize: 24,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationService.GetDisplayedNotifications_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'notifications', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseNotification
mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationService.CloseNotification_Params',
      packedSize: 16,
      fields: [
        { name: 'identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseNotificationsForProfile
mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationService.CloseNotificationsForProfile_Params',
      packedSize: 16,
      fields: [
        { name: 'profile', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseAllNotifications
mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationService.CloseAllNotifications_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OkayToTerminateService
mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationService.OkayToTerminateService_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationService.OkayToTerminateService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_terminate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mac_notifications.mojom.MacNotificationServicePtr = mac_notifications.mojom.MacNotificationServiceRemote;
mac_notifications.mojom.MacNotificationServiceRequest = mac_notifications.mojom.MacNotificationServicePendingReceiver;


// Interface: MacNotificationActionHandler
mac_notifications.mojom.MacNotificationActionHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mac_notifications.mojom.MacNotificationActionHandlerRemote = class {
  static get $interfaceName() {
    return 'mac_notifications.mojom.MacNotificationActionHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mac_notifications.mojom.MacNotificationActionHandlerPendingReceiver,
      handle);
    this.$ = new mac_notifications.mojom.MacNotificationActionHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mac_notifications.mojom.MacNotificationActionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNotificationAction(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec.$,
      null,
      [info]);
  }

};

mac_notifications.mojom.MacNotificationActionHandler.getRemote = function() {
  let remote = new mac_notifications.mojom.MacNotificationActionHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mac_notifications.mojom.MacNotificationActionHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnNotificationAction
mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationActionHandler.OnNotificationAction_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mac_notifications.mojom.MacNotificationActionHandlerPtr = mac_notifications.mojom.MacNotificationActionHandlerRemote;
mac_notifications.mojom.MacNotificationActionHandlerRequest = mac_notifications.mojom.MacNotificationActionHandlerPendingReceiver;


// Interface: MacNotificationProvider
mac_notifications.mojom.MacNotificationProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mac_notifications.mojom.MacNotificationProviderRemote = class {
  static get $interfaceName() {
    return 'mac_notifications.mojom.MacNotificationProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mac_notifications.mojom.MacNotificationProviderPendingReceiver,
      handle);
    this.$ = new mac_notifications.mojom.MacNotificationProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mac_notifications.mojom.MacNotificationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindNotificationService(service, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec.$,
      null,
      [service, handler]);
  }

};

mac_notifications.mojom.MacNotificationProvider.getRemote = function() {
  let remote = new mac_notifications.mojom.MacNotificationProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mac_notifications.mojom.MacNotificationProvider',
    'context');
  return remote.$;
};

// ParamsSpec for BindNotificationService
mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mac_notifications.mojom.MacNotificationProvider.BindNotificationService_Params',
      packedSize: 24,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mac_notifications.mojom.MacNotificationProviderPtr = mac_notifications.mojom.MacNotificationProviderRemote;
mac_notifications.mojom.MacNotificationProviderRequest = mac_notifications.mojom.MacNotificationProviderPendingReceiver;

