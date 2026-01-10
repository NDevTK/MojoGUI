// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_change_observer_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.NetworkChangeEventSpec = { $: mojo.internal.Enum() };
network.mojom.ConnectionKeepAliveConfigSpec = { $: {} };
network.mojom.ConnectionChangeObserverClient = {};
network.mojom.ConnectionChangeObserverClient.$interfaceName = 'network.mojom.ConnectionChangeObserverClient';
network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec = { $: {} };
network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec = { $: {} };
network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec = { $: {} };

// Enum: NetworkChangeEvent
network.mojom.NetworkChangeEvent = {
  kSoonToDisconnect: 0,
  kDisconnected: 1,
  kConnected: 2,
  kDefaultNetworkChanged: 3,
};

// Struct: ConnectionKeepAliveConfig
mojo.internal.Struct(
    network.mojom.ConnectionKeepAliveConfigSpec, 'network.mojom.ConnectionKeepAliveConfig', [
      mojo.internal.StructField('quic_connection_options', 0, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('idle_timeout_in_seconds', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('ping_interval_in_seconds', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_connection_keep_alive', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ConnectionChangeObserverClient
mojo.internal.Struct(
    network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec, 'network.mojom.ConnectionChangeObserverClient_OnSessionClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec, 'network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_Params', [
      mojo.internal.StructField('event', 0, 0, network.mojom.NetworkChangeEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec, 'network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_Params', [
    ],
    [[0, 8]]);

network.mojom.ConnectionChangeObserverClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ConnectionChangeObserverClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ConnectionChangeObserverClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ConnectionChangeObserverClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ConnectionChangeObserverClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ConnectionChangeObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSessionClosed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onNetworkEvent(event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onConnectionFailed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec,
      null,
      [],
      false);
  }

};

network.mojom.ConnectionChangeObserverClient.getRemote = function() {
  let remote = new network.mojom.ConnectionChangeObserverClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ConnectionChangeObserverClient',
    'context');
  return remote.$;
};

network.mojom.ConnectionChangeObserverClientReceiver = class {
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
        
        // Try Method 0: OnSessionClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionClosed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNetworkEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkEvent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnConnectionFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConnectionFailed (2)');
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
          const params = decoder.decodeStruct(network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSessionClosed');
          const result = this.impl.onSessionClosed();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNetworkEvent');
          const result = this.impl.onNetworkEvent(params.event);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onConnectionFailed');
          const result = this.impl.onConnectionFailed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.ConnectionChangeObserverClientReceiver = network.mojom.ConnectionChangeObserverClientReceiver;

network.mojom.ConnectionChangeObserverClientPtr = network.mojom.ConnectionChangeObserverClientRemote;
network.mojom.ConnectionChangeObserverClientRequest = network.mojom.ConnectionChangeObserverClientPendingReceiver;

