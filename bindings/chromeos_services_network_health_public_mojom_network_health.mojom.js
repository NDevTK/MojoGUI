// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_health.mojom
// Module: chromeos.network_health.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_health = chromeos.network_health || {};
chromeos.network_health.mojom = chromeos.network_health.mojom || {};

chromeos.network_health.mojom.NetworkEventsObserver = {};
chromeos.network_health.mojom.NetworkEventsObserver.$interfaceName = 'chromeos.network_health.mojom.NetworkEventsObserver';
chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService = {};
chromeos.network_health.mojom.NetworkHealthService.$interfaceName = 'chromeos.network_health.mojom.NetworkHealthService';
chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec = { $: {} };

// Interface: NetworkEventsObserver
mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, chromeos.network_health.mojom.NetworkStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 8, 0, chromeos.network_health.mojom.UInt32ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_health.mojom.NetworkEventsObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_health.mojom.NetworkEventsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver,
      handle);
    this.$ = new chromeos.network_health.mojom.NetworkEventsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_health.mojom.NetworkEventsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnectionStateChanged(guid, state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec,
      null,
      [guid, state],
      false);
  }

  onSignalStrengthChanged(guid, signal_strength) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec,
      null,
      [guid, signal_strength],
      false);
  }

  onNetworkListChanged(networks) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec,
      null,
      [networks],
      false);
  }

};

chromeos.network_health.mojom.NetworkEventsObserver.getRemote = function() {
  let remote = new chromeos.network_health.mojom.NetworkEventsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_health.mojom.NetworkEventsObserver',
    'context');
  return remote.$;
};

chromeos.network_health.mojom.NetworkEventsObserverReceiver = class {
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
        
        // Try Method 0: OnConnectionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSignalStrengthChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSignalStrengthChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnNetworkListChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkListChanged (2)');
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
          const params = decoder.decodeStruct(chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnectionStateChanged');
          const result = this.impl.onConnectionStateChanged(params.guid, params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSignalStrengthChanged');
          const result = this.impl.onSignalStrengthChanged(params.guid, params.signal_strength);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNetworkListChanged');
          const result = this.impl.onNetworkListChanged(params.networks);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.network_health.mojom.NetworkEventsObserverReceiver = chromeos.network_health.mojom.NetworkEventsObserverReceiver;

chromeos.network_health.mojom.NetworkEventsObserverPtr = chromeos.network_health.mojom.NetworkEventsObserverRemote;
chromeos.network_health.mojom.NetworkEventsObserverRequest = chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver;


// Interface: NetworkHealthService
mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.network_health.mojom.NetworkEventsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParams', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, chromeos.network_health.mojom.NetworkHealthStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParams', [
      mojo.internal.StructField('guids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.network_health.mojom.NetworkHealthServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_health.mojom.NetworkHealthServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_health.mojom.NetworkHealthService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_health.mojom.NetworkHealthServicePendingReceiver,
      handle);
    this.$ = new chromeos.network_health.mojom.NetworkHealthServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_health.mojom.NetworkHealthServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getNetworkList() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec,
      [],
      false);
  }

  getHealthSnapshot() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec,
      [],
      false);
  }

  getRecentlyActiveNetworks() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec,
      [],
      false);
  }

};

chromeos.network_health.mojom.NetworkHealthService.getRemote = function() {
  let remote = new chromeos.network_health.mojom.NetworkHealthServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_health.mojom.NetworkHealthService',
    'context');
  return remote.$;
};

chromeos.network_health.mojom.NetworkHealthServiceReceiver = class {
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
             decoder.decodeStruct(chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetNetworkList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkList (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetHealthSnapshot
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHealthSnapshot (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetRecentlyActiveNetworks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRecentlyActiveNetworks (3)');
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
          const params = decoder.decodeStruct(chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNetworkList');
          const result = this.impl.getNetworkList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHealthSnapshot');
          const result = this.impl.getHealthSnapshot();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRecentlyActiveNetworks');
          const result = this.impl.getRecentlyActiveNetworks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec);
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

chromeos.network_health.mojom.NetworkHealthServiceReceiver = chromeos.network_health.mojom.NetworkHealthServiceReceiver;

chromeos.network_health.mojom.NetworkHealthServicePtr = chromeos.network_health.mojom.NetworkHealthServiceRemote;
chromeos.network_health.mojom.NetworkHealthServiceRequest = chromeos.network_health.mojom.NetworkHealthServicePendingReceiver;

