// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var url = url || {};

device.mojom.GeolocationPermissionLevelSpec = { $: mojo.internal.Enum() };
device.mojom.GeolocationContext = {};
device.mojom.GeolocationContext.$interfaceName = 'device.mojom.GeolocationContext';
device.mojom.GeolocationContext_BindGeolocation_ParamsSpec = { $: {} };
device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec = { $: {} };
device.mojom.GeolocationContext_SetOverride_ParamsSpec = { $: {} };
device.mojom.GeolocationContext_ClearOverride_ParamsSpec = { $: {} };

// Enum: GeolocationPermissionLevel
device.mojom.GeolocationPermissionLevel = {
  kDenied: 0,
  kApproximate: 1,
  kPrecise: 2,
};

// Interface: GeolocationContext
mojo.internal.Struct(
    device.mojom.GeolocationContext_BindGeolocation_ParamsSpec, 'device.mojom.GeolocationContext_BindGeolocation_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationRemote), null, false, 0, undefined),
      mojo.internal.StructField('requesting_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, device.mojom.GeolocationClientIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_precise_permission', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec, 'device.mojom.GeolocationContext_OnPermissionUpdated_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('permission_level', 8, 0, device.mojom.GeolocationPermissionLevelSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.GeolocationContext_SetOverride_ParamsSpec, 'device.mojom.GeolocationContext_SetOverride_Params', [
      mojo.internal.StructField('result', 0, 0, device.mojom.GeopositionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.GeolocationContext_ClearOverride_ParamsSpec, 'device.mojom.GeolocationContext_ClearOverride_Params', [
    ],
    [[0, 8]]);

device.mojom.GeolocationContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.GeolocationContextRemote = class {
  static get $interfaceName() {
    return 'device.mojom.GeolocationContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.GeolocationContextPendingReceiver,
      handle);
    this.$ = new device.mojom.GeolocationContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.GeolocationContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGeolocation(receiver, requesting_url, client_id, has_precise_permission) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.GeolocationContext_BindGeolocation_ParamsSpec,
      null,
      [receiver, requesting_url, client_id, has_precise_permission],
      false);
  }

  onPermissionUpdated(origin, permission_level) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec,
      null,
      [origin, permission_level],
      false);
  }

  setOverride(result) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.GeolocationContext_SetOverride_ParamsSpec,
      null,
      [result],
      false);
  }

  clearOverride() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.GeolocationContext_ClearOverride_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.GeolocationContext.getRemote = function() {
  let remote = new device.mojom.GeolocationContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.GeolocationContext',
    'context');
  return remote.$;
};

device.mojom.GeolocationContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: BindGeolocation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.GeolocationContext_BindGeolocation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGeolocation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPermissionUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPermissionUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetOverride
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.GeolocationContext_SetOverride_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOverride (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClearOverride
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.GeolocationContext_ClearOverride_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearOverride (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStruct(device.mojom.GeolocationContext_BindGeolocation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindGeolocation');
          const result = this.impl.bindGeolocation(params.receiver, params.requesting_url, params.client_id, params.has_precise_permission);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPermissionUpdated');
          const result = this.impl.onPermissionUpdated(params.origin, params.permission_level);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.GeolocationContext_SetOverride_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setOverride');
          const result = this.impl.setOverride(params.result);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.GeolocationContext_ClearOverride_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearOverride');
          const result = this.impl.clearOverride();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.GeolocationContextReceiver = device.mojom.GeolocationContextReceiver;

device.mojom.GeolocationContextPtr = device.mojom.GeolocationContextRemote;
device.mojom.GeolocationContextRequest = device.mojom.GeolocationContextPendingReceiver;

