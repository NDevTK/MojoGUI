// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/mac_notifications/public/mojom/mac_notifications.mojom
// Module: mac_notifications.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mac_notifications = mac_notifications || {};
mac_notifications.mojom = mac_notifications.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var gfx = gfx || {};
var url = url || {};

mac_notifications.mojom.NotificationOperationSpec = { $: mojo.internal.Enum() };
mac_notifications.mojom.RequestPermissionResultSpec = { $: mojo.internal.Enum() };
mac_notifications.mojom.PermissionStatusSpec = { $: mojo.internal.Enum() };
mac_notifications.mojom.ProfileIdentifierSpec = { $: {} };
mac_notifications.mojom.NotificationIdentifierSpec = { $: {} };
mac_notifications.mojom.NotificationMetadataSpec = { $: {} };
mac_notifications.mojom.NotificationActionInfoSpec = { $: {} };
mac_notifications.mojom.NotificationActionButtonSpec = { $: {} };
mac_notifications.mojom.NotificationSpec = { $: {} };
mac_notifications.mojom.MacNotificationService = {};
mac_notifications.mojom.MacNotificationService.$interfaceName = 'mac_notifications.mojom.MacNotificationService';
mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationActionHandler = {};
mac_notifications.mojom.MacNotificationActionHandler.$interfaceName = 'mac_notifications.mojom.MacNotificationActionHandler';
mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec = { $: {} };
mac_notifications.mojom.MacNotificationProvider = {};
mac_notifications.mojom.MacNotificationProvider.$interfaceName = 'mac_notifications.mojom.MacNotificationProvider';
mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec = { $: {} };

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
  kNotDetermined: 1,
  kPromptPending: 2,
  kDenied: 3,
  kGranted: 4,
};

// Struct: ProfileIdentifier
mojo.internal.Struct(
    mac_notifications.mojom.ProfileIdentifierSpec, 'mac_notifications.mojom.ProfileIdentifier', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('incognito', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NotificationIdentifier
mojo.internal.Struct(
    mac_notifications.mojom.NotificationIdentifierSpec, 'mac_notifications.mojom.NotificationIdentifier', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('profile', 8, 0, mac_notifications.mojom.ProfileIdentifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NotificationMetadata
mojo.internal.Struct(
    mac_notifications.mojom.NotificationMetadataSpec, 'mac_notifications.mojom.NotificationMetadata', [
      mojo.internal.StructField('id', 0, 0, mac_notifications.mojom.NotificationIdentifierSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_data_dir', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NotificationActionInfo
mojo.internal.Struct(
    mac_notifications.mojom.NotificationActionInfoSpec, 'mac_notifications.mojom.NotificationActionInfo', [
      mojo.internal.StructField('meta', 0, 0, mac_notifications.mojom.NotificationMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('operation', 8, 0, mac_notifications.mojom.NotificationOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reply', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('button_index', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NotificationActionButton
mojo.internal.Struct(
    mac_notifications.mojom.NotificationActionButtonSpec, 'mac_notifications.mojom.NotificationActionButton', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('placeholder', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Notification
mojo.internal.Struct(
    mac_notifications.mojom.NotificationSpec, 'mac_notifications.mojom.Notification', [
      mojo.internal.StructField('meta', 0, 0, mac_notifications.mojom.NotificationMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('subtitle', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('body', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('buttons', 32, 0, mojo.internal.Array(mac_notifications.mojom.NotificationActionButtonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('icon', 40, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('renotify', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_settings_button', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: MacNotificationService
mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_DisplayNotification_Params', [
      mojo.internal.StructField('notification', 0, 0, mac_notifications.mojom.NotificationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_Params', [
      mojo.internal.StructField('profile', 0, 0, mac_notifications.mojom.ProfileIdentifierSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec, 'mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParams', [
      mojo.internal.StructField('notifications', 0, 0, mojo.internal.Array(mac_notifications.mojom.NotificationIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_CloseNotification_Params', [
      mojo.internal.StructField('identifier', 0, 0, mac_notifications.mojom.NotificationIdentifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_Params', [
      mojo.internal.StructField('profile', 0, 0, mac_notifications.mojom.ProfileIdentifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_CloseAllNotifications_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec, 'mac_notifications.mojom.MacNotificationService_OkayToTerminateService_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec, 'mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParams', [
      mojo.internal.StructField('can_terminate', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  displayNotification(notification) {
    return this.$.displayNotification(notification);
  }
  getDisplayedNotifications(profile, origin) {
    return this.$.getDisplayedNotifications(profile, origin);
  }
  closeNotification(identifier) {
    return this.$.closeNotification(identifier);
  }
  closeNotificationsForProfile(profile) {
    return this.$.closeNotificationsForProfile(profile);
  }
  closeAllNotifications() {
    return this.$.closeAllNotifications();
  }
  okayToTerminateService() {
    return this.$.okayToTerminateService();
  }
};

mac_notifications.mojom.MacNotificationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MacNotificationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  displayNotification(notification) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec,
      null,
      [notification],
      false);
  }

  getDisplayedNotifications(profile, origin) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec,
      mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec,
      [profile, origin],
      false);
  }

  closeNotification(identifier) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec,
      null,
      [identifier],
      false);
  }

  closeNotificationsForProfile(profile) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec,
      null,
      [profile],
      false);
  }

  closeAllNotifications() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec,
      null,
      [],
      false);
  }

  okayToTerminateService() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec,
      mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec,
      [],
      false);
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

mac_notifications.mojom.MacNotificationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MacNotificationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_DisplayNotification_ParamsSpec.$.structSpec);
          const result = this.impl.displayNotification(params.notification);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.getDisplayedNotifications(params.profile, params.origin);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mac_notifications.mojom.MacNotificationService_GetDisplayedNotifications_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_CloseNotification_ParamsSpec.$.structSpec);
          const result = this.impl.closeNotification(params.identifier);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_CloseNotificationsForProfile_ParamsSpec.$.structSpec);
          const result = this.impl.closeNotificationsForProfile(params.profile);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_CloseAllNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.closeAllNotifications();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ParamsSpec.$.structSpec);
          const result = this.impl.okayToTerminateService();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mac_notifications.mojom.MacNotificationService_OkayToTerminateService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

mac_notifications.mojom.MacNotificationServiceReceiver = mac_notifications.mojom.MacNotificationServiceReceiver;

mac_notifications.mojom.MacNotificationServicePtr = mac_notifications.mojom.MacNotificationServiceRemote;
mac_notifications.mojom.MacNotificationServiceRequest = mac_notifications.mojom.MacNotificationServicePendingReceiver;


// Interface: MacNotificationActionHandler
mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec, 'mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_Params', [
      mojo.internal.StructField('info', 0, 0, mac_notifications.mojom.NotificationActionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onNotificationAction(info) {
    return this.$.onNotificationAction(info);
  }
};

mac_notifications.mojom.MacNotificationActionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MacNotificationActionHandler', [
      { explicit: null },
    ]);
  }

  onNotificationAction(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec,
      null,
      [info],
      false);
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

mac_notifications.mojom.MacNotificationActionHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MacNotificationActionHandler', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mac_notifications.mojom.MacNotificationActionHandler_OnNotificationAction_ParamsSpec.$.structSpec);
          const result = this.impl.onNotificationAction(params.info);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

mac_notifications.mojom.MacNotificationActionHandlerReceiver = mac_notifications.mojom.MacNotificationActionHandlerReceiver;

mac_notifications.mojom.MacNotificationActionHandlerPtr = mac_notifications.mojom.MacNotificationActionHandlerRemote;
mac_notifications.mojom.MacNotificationActionHandlerRequest = mac_notifications.mojom.MacNotificationActionHandlerPendingReceiver;


// Interface: MacNotificationProvider
mojo.internal.Struct(
    mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec, 'mac_notifications.mojom.MacNotificationProvider_BindNotificationService_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceRequest(mac_notifications.mojom.MacNotificationServiceRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceProxy(mac_notifications.mojom.MacNotificationActionHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
  bindNotificationService(service, handler) {
    return this.$.bindNotificationService(service, handler);
  }
};

mac_notifications.mojom.MacNotificationProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MacNotificationProvider', [
      { explicit: null },
    ]);
  }

  bindNotificationService(service, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec,
      null,
      [service, handler],
      false);
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

mac_notifications.mojom.MacNotificationProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MacNotificationProvider', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mac_notifications.mojom.MacNotificationProvider_BindNotificationService_ParamsSpec.$.structSpec);
          const result = this.impl.bindNotificationService(params.service, params.handler);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

mac_notifications.mojom.MacNotificationProviderReceiver = mac_notifications.mojom.MacNotificationProviderReceiver;

mac_notifications.mojom.MacNotificationProviderPtr = mac_notifications.mojom.MacNotificationProviderRemote;
mac_notifications.mojom.MacNotificationProviderRequest = mac_notifications.mojom.MacNotificationProviderPendingReceiver;

