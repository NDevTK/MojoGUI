// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/mdns.mojom
// Module: sharing.mojom

'use strict';

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};

sharing.mojom.NsdServiceInfoSpec = { $: {} };
sharing.mojom.MdnsObserver = {};
sharing.mojom.MdnsObserver.$interfaceName = 'sharing.mojom.MdnsObserver';
sharing.mojom.MdnsObserver_ServiceFound_ParamsSpec = { $: {} };
sharing.mojom.MdnsObserver_ServiceLost_ParamsSpec = { $: {} };
sharing.mojom.MdnsManager = {};
sharing.mojom.MdnsManager.$interfaceName = 'sharing.mojom.MdnsManager';
sharing.mojom.MdnsManager_AddObserver_ParamsSpec = { $: {} };
sharing.mojom.MdnsManager_StartDiscoverySession_ParamsSpec = { $: {} };
sharing.mojom.MdnsManager_StartDiscoverySession_ResponseParamsSpec = { $: {} };
sharing.mojom.MdnsManager_StopDiscoverySession_ParamsSpec = { $: {} };
sharing.mojom.MdnsManager_StopDiscoverySession_ResponseParamsSpec = { $: {} };

// Struct: NsdServiceInfo
mojo.internal.Struct(
    sharing.mojom.NsdServiceInfoSpec, 'sharing.mojom.NsdServiceInfo', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('service_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('txt_records', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('ip_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('port_$value', 32, 0, mojo.internal.Int16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'port_$flag', originalFieldName: 'port' }),
      mojo.internal.StructField('port_$flag', 34, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'port_$value', originalFieldName: 'port' }),
    ],
    [[0, 48]]);

// Interface: MdnsObserver
mojo.internal.Struct(
    sharing.mojom.MdnsObserver_ServiceFound_ParamsSpec, 'sharing.mojom.MdnsObserver_ServiceFound_Params', [
      mojo.internal.StructField('service_info', 0, 0, sharing.mojom.NsdServiceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.MdnsObserver_ServiceLost_ParamsSpec, 'sharing.mojom.MdnsObserver_ServiceLost_Params', [
      mojo.internal.StructField('service_info', 0, 0, sharing.mojom.NsdServiceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

sharing.mojom.MdnsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.MdnsObserverRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.MdnsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.MdnsObserverPendingReceiver,
      handle);
    this.$ = new sharing.mojom.MdnsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.MdnsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  serviceFound(service_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.MdnsObserver_ServiceFound_ParamsSpec,
      null,
      [service_info],
      false);
  }

  serviceLost(service_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.MdnsObserver_ServiceLost_ParamsSpec,
      null,
      [service_info],
      false);
  }

};

sharing.mojom.MdnsObserver.getRemote = function() {
  let remote = new sharing.mojom.MdnsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.MdnsObserver',
    'context');
  return remote.$;
};

sharing.mojom.MdnsObserverReceiver = class {
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
        
        // Try Method 0: ServiceFound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(sharing.mojom.MdnsObserver_ServiceFound_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ServiceFound (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ServiceLost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(sharing.mojom.MdnsObserver_ServiceLost_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ServiceLost (1)');
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
          const params = decoder.decodeStruct(sharing.mojom.MdnsObserver_ServiceFound_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.serviceFound');
          const result = this.impl.serviceFound(params.service_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(sharing.mojom.MdnsObserver_ServiceLost_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.serviceLost');
          const result = this.impl.serviceLost(params.service_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

sharing.mojom.MdnsObserverReceiver = sharing.mojom.MdnsObserverReceiver;

sharing.mojom.MdnsObserverPtr = sharing.mojom.MdnsObserverRemote;
sharing.mojom.MdnsObserverRequest = sharing.mojom.MdnsObserverPendingReceiver;


// Interface: MdnsManager
mojo.internal.Struct(
    sharing.mojom.MdnsManager_AddObserver_ParamsSpec, 'sharing.mojom.MdnsManager_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(sharing.mojom.MdnsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.MdnsManager_StartDiscoverySession_ParamsSpec, 'sharing.mojom.MdnsManager_StartDiscoverySession_Params', [
      mojo.internal.StructField('service_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.MdnsManager_StartDiscoverySession_ResponseParamsSpec, 'sharing.mojom.MdnsManager_StartDiscoverySession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.MdnsManager_StopDiscoverySession_ParamsSpec, 'sharing.mojom.MdnsManager_StopDiscoverySession_Params', [
      mojo.internal.StructField('service_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    sharing.mojom.MdnsManager_StopDiscoverySession_ResponseParamsSpec, 'sharing.mojom.MdnsManager_StopDiscoverySession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

sharing.mojom.MdnsManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.MdnsManagerRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.MdnsManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.MdnsManagerPendingReceiver,
      handle);
    this.$ = new sharing.mojom.MdnsManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sharing.mojom.MdnsManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sharing.mojom.MdnsManager_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  startDiscoverySession(service_type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      sharing.mojom.MdnsManager_StartDiscoverySession_ParamsSpec,
      sharing.mojom.MdnsManager_StartDiscoverySession_ResponseParamsSpec,
      [service_type],
      false);
  }

  stopDiscoverySession(service_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      sharing.mojom.MdnsManager_StopDiscoverySession_ParamsSpec,
      sharing.mojom.MdnsManager_StopDiscoverySession_ResponseParamsSpec,
      [service_type],
      false);
  }

};

sharing.mojom.MdnsManager.getRemote = function() {
  let remote = new sharing.mojom.MdnsManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.MdnsManager',
    'context');
  return remote.$;
};

sharing.mojom.MdnsManagerReceiver = class {
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(sharing.mojom.MdnsManager_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartDiscoverySession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(sharing.mojom.MdnsManager_StartDiscoverySession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDiscoverySession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StopDiscoverySession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(sharing.mojom.MdnsManager_StopDiscoverySession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDiscoverySession (2)');
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
          const params = decoder.decodeStruct(sharing.mojom.MdnsManager_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(sharing.mojom.MdnsManager_StartDiscoverySession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDiscoverySession');
          const result = this.impl.startDiscoverySession(params.service_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.MdnsManager_StartDiscoverySession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(sharing.mojom.MdnsManager_StopDiscoverySession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopDiscoverySession');
          const result = this.impl.stopDiscoverySession(params.service_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.MdnsManager_StopDiscoverySession_ResponseParamsSpec);
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

sharing.mojom.MdnsManagerReceiver = sharing.mojom.MdnsManagerReceiver;

sharing.mojom.MdnsManagerPtr = sharing.mojom.MdnsManagerRemote;
sharing.mojom.MdnsManagerRequest = sharing.mojom.MdnsManagerPendingReceiver;

