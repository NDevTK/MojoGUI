// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_change_observer_client.mojom
// Module: network.mojom

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
  onSessionClosed() {
    return this.$.onSessionClosed();
  }
  onNetworkEvent(event) {
    return this.$.onNetworkEvent(event);
  }
  onConnectionFailed() {
    return this.$.onConnectionFailed();
  }
};

network.mojom.ConnectionChangeObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConnectionChangeObserverClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSessionClosed() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onNetworkEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onConnectionFailed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ConnectionChangeObserverClient', [
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
             decoder.decodeStructInline(network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ConnectionChangeObserverClient_OnSessionClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onSessionClosed();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ConnectionChangeObserverClient_OnNetworkEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onNetworkEvent(params.event);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ConnectionChangeObserverClient_OnConnectionFailed_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionFailed();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.ConnectionChangeObserverClientReceiver = network.mojom.ConnectionChangeObserverClientReceiver;

network.mojom.ConnectionChangeObserverClientPtr = network.mojom.ConnectionChangeObserverClientRemote;
network.mojom.ConnectionChangeObserverClientRequest = network.mojom.ConnectionChangeObserverClientPendingReceiver;

