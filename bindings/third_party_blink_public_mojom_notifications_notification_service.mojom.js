// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification_service.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

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
  onShow() {
    return this.$.onShow();
  }
  onClick() {
    return this.$.onClick();
  }
  onClose() {
    return this.$.onClose();
  }
};

blink.mojom.NonPersistentNotificationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NonPersistentNotificationListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onShow() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec,
      null,
      [],
      false);
  }

  onClick() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec,
      blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec,
      [],
      false);
  }

  onClose() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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

blink.mojom.NonPersistentNotificationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NonPersistentNotificationListener', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec.$.structSpec);
          const result = this.impl.onShow();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec.$.structSpec);
          const result = this.impl.onClick();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.NonPersistentNotificationListener_OnClick_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec.$.structSpec);
          const result = this.impl.onClose();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.NonPersistentNotificationListener_OnClose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.NonPersistentNotificationListenerReceiver = blink.mojom.NonPersistentNotificationListenerReceiver;

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
  getPermissionStatus() {
    return this.$.getPermissionStatus();
  }
  displayNonPersistentNotification(token, notification_data, notification_resources, event_listener) {
    return this.$.displayNonPersistentNotification(token, notification_data, notification_resources, event_listener);
  }
  closeNonPersistentNotification(token) {
    return this.$.closeNonPersistentNotification(token);
  }
  displayPersistentNotification(service_worker_registration_id, notification_data, notification_resources) {
    return this.$.displayPersistentNotification(service_worker_registration_id, notification_data, notification_resources);
  }
  closePersistentNotification(notification_id) {
    return this.$.closePersistentNotification(notification_id);
  }
  getNotifications(service_worker_registration_id, filter_tag, include_triggered) {
    return this.$.getNotifications(service_worker_registration_id, filter_tag, include_triggered);
  }
};

blink.mojom.NotificationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NotificationService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getPermissionStatus() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec,
      blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec,
      [],
      false);
  }

  displayNonPersistentNotification(token, notification_data, notification_resources, event_listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec,
      null,
      [token, notification_data, notification_resources, event_listener],
      false);
  }

  closeNonPersistentNotification(token) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec,
      null,
      [token],
      false);
  }

  displayPersistentNotification(service_worker_registration_id, notification_data, notification_resources) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec,
      blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec,
      [service_worker_registration_id, notification_data, notification_resources],
      false);
  }

  closePersistentNotification(notification_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec,
      null,
      [notification_id],
      false);
  }

  getNotifications(service_worker_registration_id, filter_tag, include_triggered) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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

blink.mojom.NotificationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NotificationService', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.NotificationService_GetNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec.$.structSpec);
          const result = this.impl.getPermissionStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.NotificationService_GetPermissionStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec.$.structSpec);
          const result = this.impl.displayNonPersistentNotification(params.token, params.notification_data, params.notification_resources, params.event_listener);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec.$.structSpec);
          const result = this.impl.closeNonPersistentNotification(params.token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec.$.structSpec);
          const result = this.impl.displayPersistentNotification(params.service_worker_registration_id, params.notification_data, params.notification_resources);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.NotificationService_DisplayPersistentNotification_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec.$.structSpec);
          const result = this.impl.closePersistentNotification(params.notification_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.NotificationService_GetNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.getNotifications(params.service_worker_registration_id, params.filter_tag, params.include_triggered);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.NotificationService_GetNotifications_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.NotificationServiceReceiver = blink.mojom.NotificationServiceReceiver;

blink.mojom.NotificationServicePtr = blink.mojom.NotificationServiceRemote;
blink.mojom.NotificationServiceRequest = blink.mojom.NotificationServicePendingReceiver;

