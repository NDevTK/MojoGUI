// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification_service.mojom
// Module: blink.mojom

'use strict';

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

blink.mojom.NonPersistentNotificationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnShow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClick (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClose (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.NonPersistentNotificationListener_OnShow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onShow');
          const result = this.impl.onShow();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.NonPersistentNotificationListener_OnClick_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClick');
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
          const params = decoder.decodeStruct(blink.mojom.NonPersistentNotificationListener_OnClose_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onClose');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      mojo.internal.StructField('event_listener', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.NonPersistentNotificationListenerSpec), null, false, 0, undefined),
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

blink.mojom.NotificationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetPermissionStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPermissionStatus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DisplayNonPersistentNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayNonPersistentNotification (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: CloseNonPersistentNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseNonPersistentNotification (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: DisplayPersistentNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayPersistentNotification (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: ClosePersistentNotification
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePersistentNotification (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: GetNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NotificationService_GetNotifications_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNotifications (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.NotificationService_GetPermissionStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPermissionStatus');
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
          const params = decoder.decodeStruct(blink.mojom.NotificationService_DisplayNonPersistentNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.displayNonPersistentNotification');
          const result = this.impl.displayNonPersistentNotification(params.token, params.notification_data, params.notification_resources, params.event_listener);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.NotificationService_CloseNonPersistentNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeNonPersistentNotification');
          const result = this.impl.closeNonPersistentNotification(params.token);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.NotificationService_DisplayPersistentNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.displayPersistentNotification');
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
          const params = decoder.decodeStruct(blink.mojom.NotificationService_ClosePersistentNotification_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closePersistentNotification');
          const result = this.impl.closePersistentNotification(params.notification_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.NotificationService_GetNotifications_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNotifications');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.NotificationServiceReceiver = blink.mojom.NotificationServiceReceiver;

blink.mojom.NotificationServicePtr = blink.mojom.NotificationServiceRemote;
blink.mojom.NotificationServiceRequest = blink.mojom.NotificationServicePendingReceiver;

