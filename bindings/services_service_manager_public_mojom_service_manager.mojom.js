// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_manager.mojom
// Module: service_manager.mojom

'use strict';

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
};

service_manager.mojom.ServiceManagerListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onInit(running_services) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec,
      null,
      [running_services],
      false);
  }

  onServiceCreated(service) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec,
      null,
      [service],
      false);
  }

  onServiceStarted(identity, pid_deprecated) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec,
      null,
      [identity, pid_deprecated],
      false);
  }

  onServicePIDReceived(identity, pid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec,
      null,
      [identity, pid],
      false);
  }

  onServiceFailedToStart(identity) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec,
      null,
      [identity],
      false);
  }

  onServiceStopped(identity) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        
        // Try Method 0: OnInit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInit (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnServiceCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnServiceCreated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnServiceStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnServiceStarted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: OnServicePIDReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnServicePIDReceived (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: OnServiceFailedToStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnServiceFailedToStart (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OnServiceStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnServiceStopped (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnInit_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onInit');
          const result = this.impl.onInit(params.running_services);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServiceCreated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onServiceCreated');
          const result = this.impl.onServiceCreated(params.service);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServiceStarted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onServiceStarted');
          const result = this.impl.onServiceStarted(params.identity, params.pid_deprecated);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServicePIDReceived_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onServicePIDReceived');
          const result = this.impl.onServicePIDReceived(params.identity, params.pid);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServiceFailedToStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onServiceFailedToStart');
          const result = this.impl.onServiceFailedToStart(params.identity);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(service_manager.mojom.ServiceManagerListener_OnServiceStopped_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onServiceStopped');
          const result = this.impl.onServiceStopped(params.identity);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

service_manager.mojom.ServiceManagerListenerReceiver = service_manager.mojom.ServiceManagerListenerReceiver;

service_manager.mojom.ServiceManagerListenerPtr = service_manager.mojom.ServiceManagerListenerRemote;
service_manager.mojom.ServiceManagerListenerRequest = service_manager.mojom.ServiceManagerListenerPendingReceiver;


// Interface: ServiceManager
mojo.internal.Struct(
    service_manager.mojom.ServiceManager_AddListener_ParamsSpec, 'service_manager.mojom.ServiceManager_AddListener_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(service_manager.mojom.ServiceManagerListenerSpec), null, false, 0, undefined),
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
};

service_manager.mojom.ServiceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addListener(listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: AddListener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(service_manager.mojom.ServiceManager_AddListener_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddListener (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(service_manager.mojom.ServiceManager_AddListener_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addListener');
          const result = this.impl.addListener(params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

service_manager.mojom.ServiceManagerReceiver = service_manager.mojom.ServiceManagerReceiver;

service_manager.mojom.ServiceManagerPtr = service_manager.mojom.ServiceManagerRemote;
service_manager.mojom.ServiceManagerRequest = service_manager.mojom.ServiceManagerPendingReceiver;

