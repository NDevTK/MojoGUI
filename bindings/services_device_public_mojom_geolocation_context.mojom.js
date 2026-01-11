// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_context.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  bindGeolocation(receiver, requesting_url, client_id, has_precise_permission) {
    return this.$.bindGeolocation(receiver, requesting_url, client_id, has_precise_permission);
  }
  onPermissionUpdated(origin, permission_level) {
    return this.$.onPermissionUpdated(origin, permission_level);
  }
  setOverride(result) {
    return this.$.setOverride(result);
  }
  clearOverride() {
    return this.$.clearOverride();
  }
};

device.mojom.GeolocationContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GeolocationContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindGeolocation(receiver, requesting_url, client_id, has_precise_permission) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.GeolocationContext_BindGeolocation_ParamsSpec,
      null,
      [receiver, requesting_url, client_id, has_precise_permission],
      false);
  }

  onPermissionUpdated(origin, permission_level) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec,
      null,
      [origin, permission_level],
      false);
  }

  setOverride(result) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.GeolocationContext_SetOverride_ParamsSpec,
      null,
      [result],
      false);
  }

  clearOverride() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('GeolocationContext', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GeolocationContext_BindGeolocation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GeolocationContext_SetOverride_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.GeolocationContext_ClearOverride_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GeolocationContext_BindGeolocation_ParamsSpec.$.structSpec);
          const result = this.impl.bindGeolocation(params.receiver, params.requesting_url, params.client_id, params.has_precise_permission);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GeolocationContext_OnPermissionUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onPermissionUpdated(params.origin, params.permission_level);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GeolocationContext_SetOverride_ParamsSpec.$.structSpec);
          const result = this.impl.setOverride(params.result);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.GeolocationContext_ClearOverride_ParamsSpec.$.structSpec);
          const result = this.impl.clearOverride();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.GeolocationContextReceiver = device.mojom.GeolocationContextReceiver;

device.mojom.GeolocationContextPtr = device.mojom.GeolocationContextRemote;
device.mojom.GeolocationContextRequest = device.mojom.GeolocationContextPendingReceiver;

