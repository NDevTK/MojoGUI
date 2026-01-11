// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/device/device.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DeviceAttributeResultSpec = { $: {} };
blink.mojom.ManagedConfigurationObserver = {};
blink.mojom.ManagedConfigurationObserver.$interfaceName = 'blink.mojom.ManagedConfigurationObserver';
blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService = {};
blink.mojom.DeviceAPIService.$interfaceName = 'blink.mojom.DeviceAPIService';
blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetHostname_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec = { $: {} };
blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec = { $: {} };
blink.mojom.ManagedConfigurationService = {};
blink.mojom.ManagedConfigurationService.$interfaceName = 'blink.mojom.ManagedConfigurationService';
blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec = { $: {} };
blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec = { $: {} };
blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec = { $: {} };

// Union: DeviceAttributeResult
mojo.internal.Union(
    blink.mojom.DeviceAttributeResultSpec, 'blink.mojom.DeviceAttributeResult', {
      'error_message': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'attribute': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      },
    });

// Interface: ManagedConfigurationObserver
mojo.internal.Struct(
    blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec, 'blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_Params', [
    ],
    [[0, 8]]);

blink.mojom.ManagedConfigurationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManagedConfigurationObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManagedConfigurationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManagedConfigurationObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ManagedConfigurationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConfigurationChanged() {
    return this.$.onConfigurationChanged();
  }
};

blink.mojom.ManagedConfigurationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ManagedConfigurationObserver', [
      { explicit: null },
    ]);
  }

  onConfigurationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.ManagedConfigurationObserver.getRemote = function() {
  let remote = new blink.mojom.ManagedConfigurationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManagedConfigurationObserver',
    'context');
  return remote.$;
};

blink.mojom.ManagedConfigurationObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ManagedConfigurationObserver', [
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
             decoder.decodeStructInline(blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ManagedConfigurationObserver_OnConfigurationChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onConfigurationChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ManagedConfigurationObserverReceiver = blink.mojom.ManagedConfigurationObserverReceiver;

blink.mojom.ManagedConfigurationObserverPtr = blink.mojom.ManagedConfigurationObserverRemote;
blink.mojom.ManagedConfigurationObserverRequest = blink.mojom.ManagedConfigurationObserverPendingReceiver;


// Interface: DeviceAPIService
mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec, 'blink.mojom.DeviceAPIService_GetDirectoryId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetHostname_ParamsSpec, 'blink.mojom.DeviceAPIService_GetHostname_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetHostname_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec, 'blink.mojom.DeviceAPIService_GetSerialNumber_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedAssetId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedLocation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec, 'blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.DeviceAttributeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DeviceAPIServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DeviceAPIServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DeviceAPIService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DeviceAPIServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.DeviceAPIServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDirectoryId() {
    return this.$.getDirectoryId();
  }
  getHostname() {
    return this.$.getHostname();
  }
  getSerialNumber() {
    return this.$.getSerialNumber();
  }
  getAnnotatedAssetId() {
    return this.$.getAnnotatedAssetId();
  }
  getAnnotatedLocation() {
    return this.$.getAnnotatedLocation();
  }
};

blink.mojom.DeviceAPIServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DeviceAPIService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDirectoryId() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec,
      blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec,
      [],
      false);
  }

  getHostname() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DeviceAPIService_GetHostname_ParamsSpec,
      blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec,
      [],
      false);
  }

  getSerialNumber() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec,
      blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec,
      [],
      false);
  }

  getAnnotatedAssetId() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec,
      blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec,
      [],
      false);
  }

  getAnnotatedLocation() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec,
      blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.DeviceAPIService.getRemote = function() {
  let remote = new blink.mojom.DeviceAPIServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DeviceAPIService',
    'context');
  return remote.$;
};

blink.mojom.DeviceAPIServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DeviceAPIService', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetHostname_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetDirectoryId_ParamsSpec.$.structSpec);
          const result = this.impl.getDirectoryId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetDirectoryId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetHostname_ParamsSpec.$.structSpec);
          const result = this.impl.getHostname();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetHostname_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetSerialNumber_ParamsSpec.$.structSpec);
          const result = this.impl.getSerialNumber();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetSerialNumber_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ParamsSpec.$.structSpec);
          const result = this.impl.getAnnotatedAssetId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetAnnotatedAssetId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DeviceAPIService_GetAnnotatedLocation_ParamsSpec.$.structSpec);
          const result = this.impl.getAnnotatedLocation();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DeviceAPIService_GetAnnotatedLocation_ResponseParamsSpec);
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

blink.mojom.DeviceAPIServiceReceiver = blink.mojom.DeviceAPIServiceReceiver;

blink.mojom.DeviceAPIServicePtr = blink.mojom.DeviceAPIServiceRemote;
blink.mojom.DeviceAPIServiceRequest = blink.mojom.DeviceAPIServicePendingReceiver;


// Interface: ManagedConfigurationService
mojo.internal.Struct(
    blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec, 'blink.mojom.ManagedConfigurationService_GetManagedConfiguration_Params', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec, 'blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParams', [
      mojo.internal.StructField('configurations', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec, 'blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ManagedConfigurationObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ManagedConfigurationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManagedConfigurationServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManagedConfigurationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManagedConfigurationServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.ManagedConfigurationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getManagedConfiguration(keys) {
    return this.$.getManagedConfiguration(keys);
  }
  subscribeToManagedConfiguration(observer) {
    return this.$.subscribeToManagedConfiguration(observer);
  }
};

blink.mojom.ManagedConfigurationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ManagedConfigurationService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getManagedConfiguration(keys) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec,
      blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec,
      [keys],
      false);
  }

  subscribeToManagedConfiguration(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec,
      null,
      [observer],
      false);
  }

};

blink.mojom.ManagedConfigurationService.getRemote = function() {
  let remote = new blink.mojom.ManagedConfigurationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManagedConfigurationService',
    'context');
  return remote.$;
};

blink.mojom.ManagedConfigurationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ManagedConfigurationService', [
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
             decoder.decodeStructInline(blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.getManagedConfiguration(params.keys);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ManagedConfigurationService_GetManagedConfiguration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ManagedConfigurationService_SubscribeToManagedConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.subscribeToManagedConfiguration(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ManagedConfigurationServiceReceiver = blink.mojom.ManagedConfigurationServiceReceiver;

blink.mojom.ManagedConfigurationServicePtr = blink.mojom.ManagedConfigurationServiceRemote;
blink.mojom.ManagedConfigurationServiceRequest = blink.mojom.ManagedConfigurationServicePendingReceiver;

