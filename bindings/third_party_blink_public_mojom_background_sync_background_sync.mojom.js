// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_sync/background_sync.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BackgroundSyncErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundSyncStateSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundSyncEventLastChanceSpec = { $: mojo.internal.Enum() };
blink.mojom.BackgroundSyncTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.SyncRegistrationOptionsSpec = { $: {} };
blink.mojom.BackgroundSyncRegistrationInfoSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService = {};
blink.mojom.OneShotBackgroundSyncService.$interfaceName = 'blink.mojom.OneShotBackgroundSyncService';
blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec = { $: {} };
blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService = {};
blink.mojom.PeriodicBackgroundSyncService.$interfaceName = 'blink.mojom.PeriodicBackgroundSyncService';
blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec = { $: {} };
blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec = { $: {} };

// Enum: BackgroundSyncError
blink.mojom.BackgroundSyncError = {
  NONE: 0,
  STORAGE: 1,
  NOT_FOUND: 2,
  NO_SERVICE_WORKER: 3,
  NOT_ALLOWED: 4,
  PERMISSION_DENIED: 5,
  MAX: 5,
};

// Enum: BackgroundSyncState
blink.mojom.BackgroundSyncState = {
  PENDING: 0,
  FIRING: 1,
  REREGISTERED_WHILE_FIRING: 2,
};

// Enum: BackgroundSyncEventLastChance
blink.mojom.BackgroundSyncEventLastChance = {
  IS_NOT_LAST_CHANCE: 0,
  IS_LAST_CHANCE: 1,
};

// Enum: BackgroundSyncType
blink.mojom.BackgroundSyncType = {
  ONE_SHOT: 0,
  PERIODIC: 1,
};

// Struct: SyncRegistrationOptions
mojo.internal.Struct(
    blink.mojom.SyncRegistrationOptionsSpec, 'blink.mojom.SyncRegistrationOptions', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('min_interval', 8, 0, mojo.internal.Int64, -1, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundSyncRegistrationInfo
mojo.internal.Struct(
    blink.mojom.BackgroundSyncRegistrationInfoSpec, 'blink.mojom.BackgroundSyncRegistrationInfo', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sync_type', 16, 0, blink.mojom.BackgroundSyncTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: OneShotBackgroundSyncService
mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_Register_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.SyncRegistrationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_registration_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_Register_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.SyncRegistrationOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_Params', [
      mojo.internal.StructField('registration_info', 0, 0, blink.mojom.BackgroundSyncRegistrationInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_GetRegistrations_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec, 'blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registrations', 8, 0, mojo.internal.Array(blink.mojom.SyncRegistrationOptionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.OneShotBackgroundSyncServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.OneShotBackgroundSyncServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OneShotBackgroundSyncService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.OneShotBackgroundSyncServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.OneShotBackgroundSyncServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  register(options, service_worker_registration_id) {
    return this.$.register(options, service_worker_registration_id);
  }
  didResolveRegistration(registration_info) {
    return this.$.didResolveRegistration(registration_info);
  }
  getRegistrations(service_worker_registration_id) {
    return this.$.getRegistrations(service_worker_registration_id);
  }
};

blink.mojom.OneShotBackgroundSyncServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OneShotBackgroundSyncService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  register(options, service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec,
      blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec,
      [options, service_worker_registration_id],
      false);
  }

  didResolveRegistration(registration_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec,
      null,
      [registration_info],
      false);
  }

  getRegistrations(service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec,
      blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

};

blink.mojom.OneShotBackgroundSyncService.getRemote = function() {
  let remote = new blink.mojom.OneShotBackgroundSyncServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OneShotBackgroundSyncService',
    'context');
  return remote.$;
};

blink.mojom.OneShotBackgroundSyncServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OneShotBackgroundSyncService', [
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
             decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec.$.structSpec);
          const result = this.impl.register(params.options, params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec.$.structSpec);
          const result = this.impl.didResolveRegistration(params.registration_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec.$.structSpec);
          const result = this.impl.getRegistrations(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec);
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

blink.mojom.OneShotBackgroundSyncServiceReceiver = blink.mojom.OneShotBackgroundSyncServiceReceiver;

blink.mojom.OneShotBackgroundSyncServicePtr = blink.mojom.OneShotBackgroundSyncServiceRemote;
blink.mojom.OneShotBackgroundSyncServiceRequest = blink.mojom.OneShotBackgroundSyncServicePendingReceiver;


// Interface: PeriodicBackgroundSyncService
mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_Register_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.SyncRegistrationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_registration_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.SyncRegistrationOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_Unregister_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('tag', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec, 'blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParams', [
      mojo.internal.StructField('err', 0, 0, blink.mojom.BackgroundSyncErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('registrations', 8, 0, mojo.internal.Array(blink.mojom.SyncRegistrationOptionsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.PeriodicBackgroundSyncServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PeriodicBackgroundSyncServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeriodicBackgroundSyncService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PeriodicBackgroundSyncServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PeriodicBackgroundSyncServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  register(options, service_worker_registration_id) {
    return this.$.register(options, service_worker_registration_id);
  }
  unregister(service_worker_registration_id, tag) {
    return this.$.unregister(service_worker_registration_id, tag);
  }
  getRegistrations(service_worker_registration_id) {
    return this.$.getRegistrations(service_worker_registration_id);
  }
};

blink.mojom.PeriodicBackgroundSyncServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PeriodicBackgroundSyncService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  register(options, service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec,
      [options, service_worker_registration_id],
      false);
  }

  unregister(service_worker_registration_id, tag) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec,
      [service_worker_registration_id, tag],
      false);
  }

  getRegistrations(service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

};

blink.mojom.PeriodicBackgroundSyncService.getRemote = function() {
  let remote = new blink.mojom.PeriodicBackgroundSyncServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeriodicBackgroundSyncService',
    'context');
  return remote.$;
};

blink.mojom.PeriodicBackgroundSyncServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PeriodicBackgroundSyncService', [
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
             decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec.$.structSpec);
          const result = this.impl.register(params.options, params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec.$.structSpec);
          const result = this.impl.unregister(params.service_worker_registration_id, params.tag);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec.$.structSpec);
          const result = this.impl.getRegistrations(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec);
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

blink.mojom.PeriodicBackgroundSyncServiceReceiver = blink.mojom.PeriodicBackgroundSyncServiceReceiver;

blink.mojom.PeriodicBackgroundSyncServicePtr = blink.mojom.PeriodicBackgroundSyncServiceRemote;
blink.mojom.PeriodicBackgroundSyncServiceRequest = blink.mojom.PeriodicBackgroundSyncServicePendingReceiver;

