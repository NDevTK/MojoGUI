// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ChangedServiceWorkerObjectsMaskSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectInfoSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost = {};
blink.mojom.ServiceWorkerRegistrationObjectHost.$interfaceName = 'blink.mojom.ServiceWorkerRegistrationObjectHost';
blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObject = {};
blink.mojom.ServiceWorkerRegistrationObject.$interfaceName = 'blink.mojom.ServiceWorkerRegistrationObject';
blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec = { $: {} };

// Struct: ChangedServiceWorkerObjectsMask
mojo.internal.Struct(
    blink.mojom.ChangedServiceWorkerObjectsMaskSpec, 'blink.mojom.ChangedServiceWorkerObjectsMask', [
      mojo.internal.StructField('installing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('waiting', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('active', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceWorkerRegistrationObjectInfo
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, 'blink.mojom.ServiceWorkerRegistrationObjectInfo', [
      mojo.internal.StructField('registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('scope', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('update_via_cache', 16, 0, blink.mojom.ServiceWorkerUpdateViaCacheSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_remote', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('installing', 40, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('waiting', 48, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('active', 56, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Interface: ServiceWorkerRegistrationObjectHost
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_Update_Params', [
      mojo.internal.StructField('outside_fetch_client_settings_object', 0, 0, blink.mojom.FetchClientSettingsObjectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('state', 16, 0, blink.mojom.NavigationPreloadStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerRegistrationObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRegistrationObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(outside_fetch_client_settings_object) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec,
      [outside_fetch_client_settings_object],
      false);
  }

  unregister() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec,
      [],
      false);
  }

  enableNavigationPreload(enable) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec,
      [enable],
      false);
  }

  getNavigationPreloadState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec,
      [],
      false);
  }

  setNavigationPreloadHeader(value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec,
      [value],
      false);
  }

};

blink.mojom.ServiceWorkerRegistrationObjectHost.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerRegistrationObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRegistrationObjectHost',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerRegistrationObjectHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Unregister
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Unregister (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EnableNavigationPreload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableNavigationPreload (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetNavigationPreloadState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNavigationPreloadState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetNavigationPreloadHeader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNavigationPreloadHeader (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.outside_fetch_client_settings_object);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.unregister');
          const result = this.impl.unregister();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableNavigationPreload');
          const result = this.impl.enableNavigationPreload(params.enable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNavigationPreloadState');
          const result = this.impl.getNavigationPreloadState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setNavigationPreloadHeader');
          const result = this.impl.setNavigationPreloadHeader(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ResponseParamsSpec);
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

blink.mojom.ServiceWorkerRegistrationObjectHostReceiver = blink.mojom.ServiceWorkerRegistrationObjectHostReceiver;

blink.mojom.ServiceWorkerRegistrationObjectHostPtr = blink.mojom.ServiceWorkerRegistrationObjectHostRemote;
blink.mojom.ServiceWorkerRegistrationObjectHostRequest = blink.mojom.ServiceWorkerRegistrationObjectHostPendingReceiver;


// Interface: ServiceWorkerRegistrationObject
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_Params', [
      mojo.internal.StructField('changed_mask', 0, 0, blink.mojom.ChangedServiceWorkerObjectsMaskSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('installing', 8, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('waiting', 16, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('active', 24, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_Params', [
      mojo.internal.StructField('update_via_cache', 0, 0, blink.mojom.ServiceWorkerUpdateViaCacheSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec, 'blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_Params', [
    ],
    [[0, 8]]);

blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerRegistrationObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRegistrationObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setServiceWorkerObjects(changed_mask, installing, waiting, active) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec,
      null,
      [changed_mask, installing, waiting, active],
      false);
  }

  setUpdateViaCache(update_via_cache) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec,
      null,
      [update_via_cache],
      false);
  }

  updateFound() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.ServiceWorkerRegistrationObject.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerRegistrationObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRegistrationObject',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerRegistrationObjectReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: SetServiceWorkerObjects
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetServiceWorkerObjects (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetUpdateViaCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpdateViaCache (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFound (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setServiceWorkerObjects');
          const result = this.impl.setServiceWorkerObjects(params.changed_mask, params.installing, params.waiting, params.active);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUpdateViaCache');
          const result = this.impl.setUpdateViaCache(params.update_via_cache);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateFound');
          const result = this.impl.updateFound();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerRegistrationObjectReceiver = blink.mojom.ServiceWorkerRegistrationObjectReceiver;

blink.mojom.ServiceWorkerRegistrationObjectPtr = blink.mojom.ServiceWorkerRegistrationObjectRemote;
blink.mojom.ServiceWorkerRegistrationObjectRequest = blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver;

