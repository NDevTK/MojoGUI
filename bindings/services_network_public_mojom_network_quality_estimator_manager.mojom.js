// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_quality_estimator_manager.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.NetworkQualityEstimatorManagerClient = {};
network.mojom.NetworkQualityEstimatorManagerClient.$interfaceName = 'network.mojom.NetworkQualityEstimatorManagerClient';
network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec = { $: {} };
network.mojom.NetworkQualityEstimatorManager = {};
network.mojom.NetworkQualityEstimatorManager.$interfaceName = 'network.mojom.NetworkQualityEstimatorManager';
network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec = { $: {} };

// Interface: NetworkQualityEstimatorManagerClient
mojo.internal.Struct(
    network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec, 'network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_Params', [
      mojo.internal.StructField('type', 0, 0, network.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_rtt', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transport_rtt', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('downlink_bandwidth_kbps', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

network.mojom.NetworkQualityEstimatorManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkQualityEstimatorManagerClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkQualityEstimatorManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkQualityEstimatorManagerClientPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkQualityEstimatorManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNetworkQualityChanged(type, http_rtt, transport_rtt, downlink_bandwidth_kbps) {
    return this.$.onNetworkQualityChanged(type, http_rtt, transport_rtt, downlink_bandwidth_kbps);
  }
};

network.mojom.NetworkQualityEstimatorManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkQualityEstimatorManagerClient', [
      { explicit: null },
    ]);
  }

  onNetworkQualityChanged(type, http_rtt, transport_rtt, downlink_bandwidth_kbps) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec,
      null,
      [type, http_rtt, transport_rtt, downlink_bandwidth_kbps],
      false);
  }

};

network.mojom.NetworkQualityEstimatorManagerClient.getRemote = function() {
  let remote = new network.mojom.NetworkQualityEstimatorManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkQualityEstimatorManagerClient',
    'context');
  return remote.$;
};

network.mojom.NetworkQualityEstimatorManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkQualityEstimatorManagerClient', [
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
             decoder.decodeStructInline(network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkQualityEstimatorManagerClient_OnNetworkQualityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onNetworkQualityChanged(params.type, params.http_rtt, params.transport_rtt, params.downlink_bandwidth_kbps);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.NetworkQualityEstimatorManagerClientReceiver = network.mojom.NetworkQualityEstimatorManagerClientReceiver;

network.mojom.NetworkQualityEstimatorManagerClientPtr = network.mojom.NetworkQualityEstimatorManagerClientRemote;
network.mojom.NetworkQualityEstimatorManagerClientRequest = network.mojom.NetworkQualityEstimatorManagerClientPendingReceiver;


// Interface: NetworkQualityEstimatorManager
mojo.internal.Struct(
    network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec, 'network.mojom.NetworkQualityEstimatorManager_RequestNotifications_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(network.mojom.NetworkQualityEstimatorManagerClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.NetworkQualityEstimatorManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.NetworkQualityEstimatorManagerRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkQualityEstimatorManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.NetworkQualityEstimatorManagerPendingReceiver,
      handle);
    this.$ = new network.mojom.NetworkQualityEstimatorManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestNotifications(client) {
    return this.$.requestNotifications(client);
  }
};

network.mojom.NetworkQualityEstimatorManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkQualityEstimatorManager', [
      { explicit: null },
    ]);
  }

  requestNotifications(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec,
      null,
      [client],
      false);
  }

};

network.mojom.NetworkQualityEstimatorManager.getRemote = function() {
  let remote = new network.mojom.NetworkQualityEstimatorManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkQualityEstimatorManager',
    'context');
  return remote.$;
};

network.mojom.NetworkQualityEstimatorManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkQualityEstimatorManager', [
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
             decoder.decodeStructInline(network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.NetworkQualityEstimatorManager_RequestNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.requestNotifications(params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.NetworkQualityEstimatorManagerReceiver = network.mojom.NetworkQualityEstimatorManagerReceiver;

network.mojom.NetworkQualityEstimatorManagerPtr = network.mojom.NetworkQualityEstimatorManagerRemote;
network.mojom.NetworkQualityEstimatorManagerRequest = network.mojom.NetworkQualityEstimatorManagerPendingReceiver;

