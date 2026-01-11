// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_manager.mojom
// Module: service_manager.mojom

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.InstanceStateSpec = { $: mojo.internal.Enum() };
service_manager.mojom.RunningServiceInfoSpec = { $: {} };
service_manager.mojom.ServiceManagerListener = {};
service_manager.mojom.ServiceManagerListener.$interfaceName = 'service_manager.mojom.ServiceManagerListener';
service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec = { $: {} };
service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec = { $: {} };
service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec = { $: {} };
service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec = { $: {} };
service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec = { $: {} };
service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec = { $: {} };
service_manager.mojom.ServiceManager = {};
service_manager.mojom.ServiceManager.$interfaceName = 'service_manager.mojom.ServiceManager';
service_manager.mojom.ServiceManager_AddListener_ParamsSpec = { $: {} };

// Enum: InstanceState
service_manager.mojom.InstanceState = {
  kCreated: 0,
  kStarted: 1,
  kUnreachable: 2,
};

// Struct: RunningServiceInfo
mojo.internal.Struct(
    service_manager.mojom.RunningServiceInfoSpec, 'service_manager.mojom.RunningServiceInfo', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, service_manager.mojom.InstanceStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pid', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ServiceManagerListener
mojo.internal.Struct(
    service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec, 'service_manager.mojom.ServiceManagerListener_OnInit_Params', [
      mojo.internal.StructField('running_services', 0, 0, mojo.internal.Array(service_manager.mojom.RunningServiceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec, 'service_manager.mojom.ServiceManagerListener_OnServiceCreated_Params', [
      mojo.internal.StructField('service', 0, 0, service_manager.mojom.RunningServiceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec, 'service_manager.mojom.ServiceManagerListener_OnServiceStarted_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pid_deprecated', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec, 'service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec, 'service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec, 'service_manager.mojom.ServiceManagerListener_OnServiceStopped_Params', [
      mojo.internal.StructField('identity', 0, 0, service_manager.mojom.IdentitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

service_manager.mojom.ServiceManagerListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceManagerListenerRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ServiceManagerListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServiceManagerListenerPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceManagerListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onInit(running_services) {
    return this.$.onInit(running_services);
  }
  onServiceCreated(service) {
    return this.$.onServiceCreated(service);
  }
  onServiceStarted(identity, pid_deprecated) {
    return this.$.onServiceStarted(identity, pid_deprecated);
  }
  onServicePIDReceived(identity, pid) {
    return this.$.onServicePIDReceived(identity, pid);
  }
  onServiceFailedToStart(identity) {
    return this.$.onServiceFailedToStart(identity);
  }
  onServiceStopped(identity) {
    return this.$.onServiceStopped(identity);
  }
};

service_manager.mojom.ServiceManagerListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceManagerListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onInit(running_services) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec,
      null,
      [running_services],
      false);
  }

  onServiceCreated(service) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec,
      null,
      [service],
      false);
  }

  onServiceStarted(identity, pid_deprecated) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec,
      null,
      [identity, pid_deprecated],
      false);
  }

  onServicePIDReceived(identity, pid) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec,
      null,
      [identity, pid],
      false);
  }

  onServiceFailedToStart(identity) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec,
      null,
      [identity],
      false);
  }

  onServiceStopped(identity) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec,
      null,
      [identity],
      false);
  }

};

service_manager.mojom.ServiceManagerListener.getRemote = function() {
  let remote = new service_manager.mojom.ServiceManagerListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ServiceManagerListener',
    'context');
  return remote.$;
};

service_manager.mojom.ServiceManagerListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceManagerListener', [
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
             decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec.$.structSpec);
          const result = this.impl.onInit(params.running_services);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onServiceCreated(params.service);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onServiceStarted(params.identity, params.pid_deprecated);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onServicePIDReceived(params.identity, params.pid);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec.$.structSpec);
          const result = this.impl.onServiceFailedToStart(params.identity);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec.$.structSpec);
          const result = this.impl.onServiceStopped(params.identity);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

service_manager.mojom.ServiceManagerListenerReceiver = service_manager.mojom.ServiceManagerListenerReceiver;

service_manager.mojom.ServiceManagerListenerPtr = service_manager.mojom.ServiceManagerListenerRemote;
service_manager.mojom.ServiceManagerListenerRequest = service_manager.mojom.ServiceManagerListenerPendingReceiver;


// Interface: ServiceManager
mojo.internal.Struct(
    service_manager.mojom.ServiceManager_AddListener_ParamsSpec, 'service_manager.mojom.ServiceManager_AddListener_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(service_manager.mojom.ServiceManagerListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

service_manager.mojom.ServiceManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

service_manager.mojom.ServiceManagerRemote = class {
  static get $interfaceName() {
    return 'service_manager.mojom.ServiceManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      service_manager.mojom.ServiceManagerPendingReceiver,
      handle);
    this.$ = new service_manager.mojom.ServiceManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addListener(listener) {
    return this.$.addListener(listener);
  }
};

service_manager.mojom.ServiceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceManager', [
      { explicit: null },
    ]);
  }

  addListener(listener) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      service_manager.mojom.ServiceManager_AddListener_ParamsSpec,
      null,
      [listener],
      false);
  }

};

service_manager.mojom.ServiceManager.getRemote = function() {
  let remote = new service_manager.mojom.ServiceManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'service_manager.mojom.ServiceManager',
    'context');
  return remote.$;
};

service_manager.mojom.ServiceManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceManager', [
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
             decoder.decodeStructInline(service_manager.mojom.ServiceManager_AddListener_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(service_manager.mojom.ServiceManager_AddListener_ParamsSpec.$.structSpec);
          const result = this.impl.addListener(params.listener);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

service_manager.mojom.ServiceManagerReceiver = service_manager.mojom.ServiceManagerReceiver;

service_manager.mojom.ServiceManagerPtr = service_manager.mojom.ServiceManagerRemote;
service_manager.mojom.ServiceManagerRequest = service_manager.mojom.ServiceManagerPendingReceiver;

