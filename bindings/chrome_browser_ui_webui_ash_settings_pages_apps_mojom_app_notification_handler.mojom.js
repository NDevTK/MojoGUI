// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/apps/mojom/app_notification_handler.mojom
// Module: ash.settings.app_notification.mojom

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_notification = ash.settings.app_notification || {};
ash.settings.app_notification.mojom = ash.settings.app_notification.mojom || {};
var app_management = app_management || {};

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
  setQuietMode(enabled) {
    return this.$.setQuietMode(enabled);
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  setNotificationPermission(app_id, permission) {
    return this.$.setNotificationPermission(app_id, permission);
  }
  getApps() {
    return this.$.getApps();
  }
  getQuietMode() {
    return this.$.getQuietMode();
  }
  openBrowserNotificationSettings() {
    return this.$.openBrowserNotificationSettings();
  }
};

ash.settings.app_notification.mojom.AppNotificationsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppNotificationsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setQuietMode(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_SetQuietMode_ParamsSpec,
      null,
      [enabled],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setNotificationPermission(app_id, permission) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_ParamsSpec,
      null,
      [app_id, permission],
      false);
  }

  getApps() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ParamsSpec,
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getQuietMode() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ParamsSpec,
      ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ResponseParamsSpec,
      [],
      false);
  }

  openBrowserNotificationSettings() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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

ash.settings.app_notification.mojom.AppNotificationsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppNotificationsHandler', [
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
             decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_SetQuietMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_OpenBrowserNotificationSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_SetQuietMode_ParamsSpec.$.structSpec);
          const result = this.impl.setQuietMode(params.enabled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_SetNotificationPermission_ParamsSpec.$.structSpec);
          const result = this.impl.setNotificationPermission(params.app_id, params.permission);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ParamsSpec.$.structSpec);
          const result = this.impl.getApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_notification.mojom.AppNotificationsHandler_GetApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ParamsSpec.$.structSpec);
          const result = this.impl.getQuietMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_notification.mojom.AppNotificationsHandler_GetQuietMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsHandler_OpenBrowserNotificationSettings_ParamsSpec.$.structSpec);
          const result = this.impl.openBrowserNotificationSettings();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.app_notification.mojom.AppNotificationsHandlerReceiver = ash.settings.app_notification.mojom.AppNotificationsHandlerReceiver;

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
  onNotificationAppChanged(app) {
    return this.$.onNotificationAppChanged(app);
  }
  onQuietModeChanged(enabled) {
    return this.$.onQuietModeChanged(enabled);
  }
};

ash.settings.app_notification.mojom.AppNotificationsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppNotificationsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNotificationAppChanged(app) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.app_notification.mojom.AppNotificationsObserver_OnNotificationAppChanged_ParamsSpec,
      null,
      [app],
      false);
  }

  onQuietModeChanged(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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

ash.settings.app_notification.mojom.AppNotificationsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppNotificationsObserver', [
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
             decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsObserver_OnNotificationAppChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsObserver_OnQuietModeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsObserver_OnNotificationAppChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onNotificationAppChanged(params.app);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_notification.mojom.AppNotificationsObserver_OnQuietModeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onQuietModeChanged(params.enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.app_notification.mojom.AppNotificationsObserverReceiver = ash.settings.app_notification.mojom.AppNotificationsObserverReceiver;

ash.settings.app_notification.mojom.AppNotificationsObserverPtr = ash.settings.app_notification.mojom.AppNotificationsObserverRemote;
ash.settings.app_notification.mojom.AppNotificationsObserverRequest = ash.settings.app_notification.mojom.AppNotificationsObserverPendingReceiver;

