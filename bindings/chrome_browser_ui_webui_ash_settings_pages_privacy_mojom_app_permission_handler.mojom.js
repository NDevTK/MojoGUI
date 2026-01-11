// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/privacy/mojom/app_permission_handler.mojom
// Module: ash.settings.app_permission.mojom

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_permission = ash.settings.app_permission || {};
ash.settings.app_permission.mojom = ash.settings.app_permission.mojom || {};
var app_management = app_management || {};

ash.settings.app_permission.mojom.AppSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler = {};
ash.settings.app_permission.mojom.AppPermissionsHandler.$interfaceName = 'ash.settings.app_permission.mojom.AppPermissionsHandler';
ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsObserver = {};
ash.settings.app_permission.mojom.AppPermissionsObserver.$interfaceName = 'ash.settings.app_permission.mojom.AppPermissionsObserver';
ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec = { $: {} };
ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec = { $: {} };

// Struct: App
mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppSpec, 'ash.settings.app_permission.mojom.App', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, app_management.mojom.AppTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permissions', 24, 0, mojo.internal.Map(app_management.mojom.PermissionTypeSpec.$, app_management.mojom.PermissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AppPermissionsHandler
mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.app_permission.mojom.AppPermissionsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.settings.app_permission.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_Params', [
      mojo.internal.StructField('permission_type', 0, 0, app_management.mojom.PermissionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permission', 8, 0, app_management.mojom.PermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_permission.mojom.AppPermissionsHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_permission.mojom.AppPermissionsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.app_permission.mojom.AppPermissionsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  getApps() {
    return this.$.getApps();
  }
  getSystemAppsThatUseCamera() {
    return this.$.getSystemAppsThatUseCamera();
  }
  getSystemAppsThatUseMicrophone() {
    return this.$.getSystemAppsThatUseMicrophone();
  }
  openBrowserPermissionSettings(permission_type) {
    return this.$.openBrowserPermissionSettings(permission_type);
  }
  openNativeSettings(app_id) {
    return this.$.openNativeSettings(app_id);
  }
  setPermission(app_id, permission) {
    return this.$.setPermission(app_id, permission);
  }
};

ash.settings.app_permission.mojom.AppPermissionsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppPermissionsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getApps() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getSystemAppsThatUseCamera() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec,
      [],
      false);
  }

  getSystemAppsThatUseMicrophone() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec,
      [],
      false);
  }

  openBrowserPermissionSettings(permission_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec,
      null,
      [permission_type],
      false);
  }

  openNativeSettings(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setPermission(app_id, permission) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec,
      null,
      [app_id, permission],
      false);
  }

};

ash.settings.app_permission.mojom.AppPermissionsHandler.getRemote = function() {
  let remote = new ash.settings.app_permission.mojom.AppPermissionsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_permission.mojom.AppPermissionsHandler',
    'context');
  return remote.$;
};

ash.settings.app_permission.mojom.AppPermissionsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppPermissionsHandler', [
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec.$.structSpec);
          const result = this.impl.getApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec.$.structSpec);
          const result = this.impl.getSystemAppsThatUseCamera();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec.$.structSpec);
          const result = this.impl.getSystemAppsThatUseMicrophone();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec.$.structSpec);
          const result = this.impl.openBrowserPermissionSettings(params.permission_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec.$.structSpec);
          const result = this.impl.openNativeSettings(params.app_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec.$.structSpec);
          const result = this.impl.setPermission(params.app_id, params.permission);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.app_permission.mojom.AppPermissionsHandlerReceiver = ash.settings.app_permission.mojom.AppPermissionsHandlerReceiver;

ash.settings.app_permission.mojom.AppPermissionsHandlerPtr = ash.settings.app_permission.mojom.AppPermissionsHandlerRemote;
ash.settings.app_permission.mojom.AppPermissionsHandlerRequest = ash.settings.app_permission.mojom.AppPermissionsHandlerPendingReceiver;


// Interface: AppPermissionsObserver
mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec, 'ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_Params', [
      mojo.internal.StructField('app', 0, 0, ash.settings.app_permission.mojom.AppSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.app_permission.mojom.AppPermissionsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.app_permission.mojom.AppPermissionsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.app_permission.mojom.AppPermissionsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAppRemoved(app_id) {
    return this.$.onAppRemoved(app_id);
  }
  onAppUpdated(app) {
    return this.$.onAppUpdated(app);
  }
};

ash.settings.app_permission.mojom.AppPermissionsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppPermissionsObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAppRemoved(app_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec,
      null,
      [app_id],
      false);
  }

  onAppUpdated(app) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec,
      null,
      [app],
      false);
  }

};

ash.settings.app_permission.mojom.AppPermissionsObserver.getRemote = function() {
  let remote = new ash.settings.app_permission.mojom.AppPermissionsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.app_permission.mojom.AppPermissionsObserver',
    'context');
  return remote.$;
};

ash.settings.app_permission.mojom.AppPermissionsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppPermissionsObserver', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onAppRemoved(params.app_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onAppUpdated(params.app);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.settings.app_permission.mojom.AppPermissionsObserverReceiver = ash.settings.app_permission.mojom.AppPermissionsObserverReceiver;

ash.settings.app_permission.mojom.AppPermissionsObserverPtr = ash.settings.app_permission.mojom.AppPermissionsObserverRemote;
ash.settings.app_permission.mojom.AppPermissionsObserverRequest = ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver;

