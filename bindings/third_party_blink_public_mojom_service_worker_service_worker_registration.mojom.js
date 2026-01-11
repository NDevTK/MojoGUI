// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration.mojom
// Module: blink.mojom

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
  update(outside_fetch_client_settings_object) {
    return this.$.update(outside_fetch_client_settings_object);
  }
  unregister() {
    return this.$.unregister();
  }
  enableNavigationPreload(enable) {
    return this.$.enableNavigationPreload(enable);
  }
  getNavigationPreloadState() {
    return this.$.getNavigationPreloadState();
  }
  setNavigationPreloadHeader(value) {
    return this.$.setNavigationPreloadHeader(value);
  }
};

blink.mojom.ServiceWorkerRegistrationObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRegistrationObjectHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  update(outside_fetch_client_settings_object) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ResponseParamsSpec,
      [outside_fetch_client_settings_object],
      false);
  }

  unregister() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ResponseParamsSpec,
      [],
      false);
  }

  enableNavigationPreload(enable) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ResponseParamsSpec,
      [enable],
      false);
  }

  getNavigationPreloadState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec,
      blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ResponseParamsSpec,
      [],
      false);
  }

  setNavigationPreloadHeader(value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRegistrationObjectHost', [
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
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_Update_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_Unregister_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_EnableNavigationPreload_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_GetNavigationPreloadState_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObjectHost_SetNavigationPreloadHeader_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  setServiceWorkerObjects(changed_mask, installing, waiting, active) {
    return this.$.setServiceWorkerObjects(changed_mask, installing, waiting, active);
  }
  setUpdateViaCache(update_via_cache) {
    return this.$.setUpdateViaCache(update_via_cache);
  }
  updateFound() {
    return this.$.updateFound();
  }
};

blink.mojom.ServiceWorkerRegistrationObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRegistrationObject', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setServiceWorkerObjects(changed_mask, installing, waiting, active) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec,
      null,
      [changed_mask, installing, waiting, active],
      false);
  }

  setUpdateViaCache(update_via_cache) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec,
      null,
      [update_via_cache],
      false);
  }

  updateFound() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRegistrationObject', [
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
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObject_SetServiceWorkerObjects_ParamsSpec.$.structSpec);
          const result = this.impl.setServiceWorkerObjects(params.changed_mask, params.installing, params.waiting, params.active);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObject_SetUpdateViaCache_ParamsSpec.$.structSpec);
          const result = this.impl.setUpdateViaCache(params.update_via_cache);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRegistrationObject_UpdateFound_ParamsSpec.$.structSpec);
          const result = this.impl.updateFound();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ServiceWorkerRegistrationObjectReceiver = blink.mojom.ServiceWorkerRegistrationObjectReceiver;

blink.mojom.ServiceWorkerRegistrationObjectPtr = blink.mojom.ServiceWorkerRegistrationObjectRemote;
blink.mojom.ServiceWorkerRegistrationObjectRequest = blink.mojom.ServiceWorkerRegistrationObjectPendingReceiver;

