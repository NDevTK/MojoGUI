// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/privacy/mojom/app_permission_handler.mojom
// Module: ash.settings.app_permission.mojom

'use strict';

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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.app_permission.mojom.AppPermissionsObserverSpec), null, false, 0, undefined),
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
};

ash.settings.app_permission.mojom.AppPermissionsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getApps() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ResponseParamsSpec,
      [],
      false);
  }

  getSystemAppsThatUseCamera() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ResponseParamsSpec,
      [],
      false);
  }

  getSystemAppsThatUseMicrophone() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec,
      ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ResponseParamsSpec,
      [],
      false);
  }

  openBrowserPermissionSettings(permission_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec,
      null,
      [permission_type],
      false);
  }

  openNativeSettings(app_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec,
      null,
      [app_id],
      false);
  }

  setPermission(app_id, permission) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetApps (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSystemAppsThatUseCamera
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSystemAppsThatUseCamera (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetSystemAppsThatUseMicrophone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSystemAppsThatUseMicrophone (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenBrowserPermissionSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenBrowserPermissionSettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenNativeSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenNativeSettings (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPermission (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
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
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_GetApps_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getApps');
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
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseCamera_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSystemAppsThatUseCamera');
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
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_GetSystemAppsThatUseMicrophone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSystemAppsThatUseMicrophone');
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
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_OpenBrowserPermissionSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openBrowserPermissionSettings');
          const result = this.impl.openBrowserPermissionSettings(params.permission_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_OpenNativeSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openNativeSettings');
          const result = this.impl.openNativeSettings(params.app_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsHandler_SetPermission_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPermission');
          const result = this.impl.setPermission(params.app_id, params.permission);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

ash.settings.app_permission.mojom.AppPermissionsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAppRemoved(app_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec,
      null,
      [app_id],
      false);
  }

  onAppUpdated(app) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: OnAppRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppRemoved (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAppUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAppUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
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
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppRemoved_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppRemoved');
          const result = this.impl.onAppRemoved(params.app_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.settings.app_permission.mojom.AppPermissionsObserver_OnAppUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAppUpdated');
          const result = this.impl.onAppUpdated(params.app);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.app_permission.mojom.AppPermissionsObserverReceiver = ash.settings.app_permission.mojom.AppPermissionsObserverReceiver;

ash.settings.app_permission.mojom.AppPermissionsObserverPtr = ash.settings.app_permission.mojom.AppPermissionsObserverRemote;
ash.settings.app_permission.mojom.AppPermissionsObserverRequest = ash.settings.app_permission.mojom.AppPermissionsObserverPendingReceiver;

