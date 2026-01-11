// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_connections.mojom
// Module: nearby.connections.mojom

// Module namespace
var nearby = nearby || {};
nearby.connections = nearby.connections || {};
nearby.connections.mojom = nearby.connections.mojom || {};
var ash = ash || {};
var mojo_base = mojo_base || {};

nearby.connections.mojom.EndpointDiscoveryListener = {};
nearby.connections.mojom.EndpointDiscoveryListener.$interfaceName = 'nearby.connections.mojom.EndpointDiscoveryListener';
nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec = { $: {} };
nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionLifecycleListener = {};
nearby.connections.mojom.ConnectionLifecycleListener.$interfaceName = 'nearby.connections.mojom.ConnectionLifecycleListener';
nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec = { $: {} };
nearby.connections.mojom.PayloadListener = {};
nearby.connections.mojom.PayloadListener.$interfaceName = 'nearby.connections.mojom.PayloadListener';
nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec = { $: {} };
nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionListenerV3 = {};
nearby.connections.mojom.ConnectionListenerV3.$interfaceName = 'nearby.connections.mojom.ConnectionListenerV3';
nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec = { $: {} };
nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec = { $: {} };
nearby.connections.mojom.PayloadListenerV3 = {};
nearby.connections.mojom.PayloadListenerV3.$interfaceName = 'nearby.connections.mojom.PayloadListenerV3';
nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec = { $: {} };
nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections = {};
nearby.connections.mojom.NearbyConnections.$interfaceName = 'nearby.connections.mojom.NearbyConnections';
nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec = { $: {} };
nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec = { $: {} };

// Interface: EndpointDiscoveryListener
mojo.internal.Struct(
    nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec, 'nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, nearby.connections.mojom.DiscoveredEndpointInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec, 'nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

nearby.connections.mojom.EndpointDiscoveryListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby.connections.mojom.EndpointDiscoveryListenerRemote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.EndpointDiscoveryListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby.connections.mojom.EndpointDiscoveryListenerPendingReceiver,
      handle);
    this.$ = new nearby.connections.mojom.EndpointDiscoveryListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onEndpointFound(endpoint_id, info) {
    return this.$.onEndpointFound(endpoint_id, info);
  }
  onEndpointLost(endpoint_id) {
    return this.$.onEndpointLost(endpoint_id);
  }
};

nearby.connections.mojom.EndpointDiscoveryListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EndpointDiscoveryListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onEndpointFound(endpoint_id, info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec,
      null,
      [endpoint_id, info],
      false);
  }

  onEndpointLost(endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec,
      null,
      [endpoint_id],
      false);
  }

};

nearby.connections.mojom.EndpointDiscoveryListener.getRemote = function() {
  let remote = new nearby.connections.mojom.EndpointDiscoveryListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.EndpointDiscoveryListener',
    'context');
  return remote.$;
};

nearby.connections.mojom.EndpointDiscoveryListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EndpointDiscoveryListener', [
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
             decoder.decodeStructInline(nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec.$.structSpec);
          const result = this.impl.onEndpointFound(params.endpoint_id, params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec.$.structSpec);
          const result = this.impl.onEndpointLost(params.endpoint_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby.connections.mojom.EndpointDiscoveryListenerReceiver = nearby.connections.mojom.EndpointDiscoveryListenerReceiver;

nearby.connections.mojom.EndpointDiscoveryListenerPtr = nearby.connections.mojom.EndpointDiscoveryListenerRemote;
nearby.connections.mojom.EndpointDiscoveryListenerRequest = nearby.connections.mojom.EndpointDiscoveryListenerPendingReceiver;


// Interface: ConnectionLifecycleListener
mojo.internal.Struct(
    nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, nearby.connections.mojom.ConnectionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec, 'nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('medium', 8, 0, nearby.connections.mojom.MediumSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

nearby.connections.mojom.ConnectionLifecycleListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby.connections.mojom.ConnectionLifecycleListenerRemote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.ConnectionLifecycleListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby.connections.mojom.ConnectionLifecycleListenerPendingReceiver,
      handle);
    this.$ = new nearby.connections.mojom.ConnectionLifecycleListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConnectionInitiated(endpoint_id, info) {
    return this.$.onConnectionInitiated(endpoint_id, info);
  }
  onConnectionAccepted(endpoint_id) {
    return this.$.onConnectionAccepted(endpoint_id);
  }
  onConnectionRejected(endpoint_id, status) {
    return this.$.onConnectionRejected(endpoint_id, status);
  }
  onDisconnected(endpoint_id) {
    return this.$.onDisconnected(endpoint_id);
  }
  onBandwidthChanged(endpoint_id, medium) {
    return this.$.onBandwidthChanged(endpoint_id, medium);
  }
};

nearby.connections.mojom.ConnectionLifecycleListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConnectionLifecycleListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onConnectionInitiated(endpoint_id, info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec,
      null,
      [endpoint_id, info],
      false);
  }

  onConnectionAccepted(endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec,
      null,
      [endpoint_id],
      false);
  }

  onConnectionRejected(endpoint_id, status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec,
      null,
      [endpoint_id, status],
      false);
  }

  onDisconnected(endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec,
      null,
      [endpoint_id],
      false);
  }

  onBandwidthChanged(endpoint_id, medium) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec,
      null,
      [endpoint_id, medium],
      false);
  }

};

nearby.connections.mojom.ConnectionLifecycleListener.getRemote = function() {
  let remote = new nearby.connections.mojom.ConnectionLifecycleListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.ConnectionLifecycleListener',
    'context');
  return remote.$;
};

nearby.connections.mojom.ConnectionLifecycleListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ConnectionLifecycleListener', [
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
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionInitiated(params.endpoint_id, params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionAccepted(params.endpoint_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionRejected(params.endpoint_id, params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec.$.structSpec);
          const result = this.impl.onDisconnected(params.endpoint_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onBandwidthChanged(params.endpoint_id, params.medium);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby.connections.mojom.ConnectionLifecycleListenerReceiver = nearby.connections.mojom.ConnectionLifecycleListenerReceiver;

nearby.connections.mojom.ConnectionLifecycleListenerPtr = nearby.connections.mojom.ConnectionLifecycleListenerRemote;
nearby.connections.mojom.ConnectionLifecycleListenerRequest = nearby.connections.mojom.ConnectionLifecycleListenerPendingReceiver;


// Interface: PayloadListener
mojo.internal.Struct(
    nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec, 'nearby.connections.mojom.PayloadListener_OnPayloadReceived_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payload', 8, 0, nearby.connections.mojom.PayloadSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec, 'nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update', 8, 0, nearby.connections.mojom.PayloadTransferUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

nearby.connections.mojom.PayloadListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby.connections.mojom.PayloadListenerRemote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.PayloadListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby.connections.mojom.PayloadListenerPendingReceiver,
      handle);
    this.$ = new nearby.connections.mojom.PayloadListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPayloadReceived(endpoint_id, payload) {
    return this.$.onPayloadReceived(endpoint_id, payload);
  }
  onPayloadTransferUpdate(endpoint_id, update) {
    return this.$.onPayloadTransferUpdate(endpoint_id, update);
  }
};

nearby.connections.mojom.PayloadListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PayloadListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPayloadReceived(endpoint_id, payload) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec,
      null,
      [endpoint_id, payload],
      false);
  }

  onPayloadTransferUpdate(endpoint_id, update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec,
      null,
      [endpoint_id, update],
      false);
  }

};

nearby.connections.mojom.PayloadListener.getRemote = function() {
  let remote = new nearby.connections.mojom.PayloadListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.PayloadListener',
    'context');
  return remote.$;
};

nearby.connections.mojom.PayloadListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PayloadListener', [
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
             decoder.decodeStructInline(nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onPayloadReceived(params.endpoint_id, params.payload);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onPayloadTransferUpdate(params.endpoint_id, params.update);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby.connections.mojom.PayloadListenerReceiver = nearby.connections.mojom.PayloadListenerReceiver;

nearby.connections.mojom.PayloadListenerPtr = nearby.connections.mojom.PayloadListenerRemote;
nearby.connections.mojom.PayloadListenerRequest = nearby.connections.mojom.PayloadListenerPendingReceiver;


// Interface: ConnectionListenerV3
mojo.internal.Struct(
    nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec, 'nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, nearby.connections.mojom.InitialConnectionInfoV3Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec, 'nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resolution', 8, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec, 'nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec, 'nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bandwidth_info', 8, 0, nearby.connections.mojom.BandwidthInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

nearby.connections.mojom.ConnectionListenerV3PendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby.connections.mojom.ConnectionListenerV3Remote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.ConnectionListenerV3';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby.connections.mojom.ConnectionListenerV3PendingReceiver,
      handle);
    this.$ = new nearby.connections.mojom.ConnectionListenerV3RemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConnectionInitiatedV3(endpoint_id, info) {
    return this.$.onConnectionInitiatedV3(endpoint_id, info);
  }
  onConnectionResultV3(endpoint_id, resolution) {
    return this.$.onConnectionResultV3(endpoint_id, resolution);
  }
  onDisconnectedV3(endpoint_id) {
    return this.$.onDisconnectedV3(endpoint_id);
  }
  onBandwidthChangedV3(endpoint_id, bandwidth_info) {
    return this.$.onBandwidthChangedV3(endpoint_id, bandwidth_info);
  }
};

nearby.connections.mojom.ConnectionListenerV3RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConnectionListenerV3', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onConnectionInitiatedV3(endpoint_id, info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec,
      null,
      [endpoint_id, info],
      false);
  }

  onConnectionResultV3(endpoint_id, resolution) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec,
      null,
      [endpoint_id, resolution],
      false);
  }

  onDisconnectedV3(endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec,
      null,
      [endpoint_id],
      false);
  }

  onBandwidthChangedV3(endpoint_id, bandwidth_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec,
      null,
      [endpoint_id, bandwidth_info],
      false);
  }

};

nearby.connections.mojom.ConnectionListenerV3.getRemote = function() {
  let remote = new nearby.connections.mojom.ConnectionListenerV3Remote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.ConnectionListenerV3',
    'context');
  return remote.$;
};

nearby.connections.mojom.ConnectionListenerV3Receiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ConnectionListenerV3', [
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
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionInitiatedV3(params.endpoint_id, params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionResultV3(params.endpoint_id, params.resolution);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec.$.structSpec);
          const result = this.impl.onDisconnectedV3(params.endpoint_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec.$.structSpec);
          const result = this.impl.onBandwidthChangedV3(params.endpoint_id, params.bandwidth_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby.connections.mojom.ConnectionListenerV3Receiver = nearby.connections.mojom.ConnectionListenerV3Receiver;

nearby.connections.mojom.ConnectionListenerV3Ptr = nearby.connections.mojom.ConnectionListenerV3Remote;
nearby.connections.mojom.ConnectionListenerV3Request = nearby.connections.mojom.ConnectionListenerV3PendingReceiver;


// Interface: PayloadListenerV3
mojo.internal.Struct(
    nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec, 'nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payload', 8, 0, nearby.connections.mojom.PayloadSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec, 'nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_Params', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update', 8, 0, nearby.connections.mojom.PayloadTransferUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

nearby.connections.mojom.PayloadListenerV3PendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby.connections.mojom.PayloadListenerV3Remote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.PayloadListenerV3';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby.connections.mojom.PayloadListenerV3PendingReceiver,
      handle);
    this.$ = new nearby.connections.mojom.PayloadListenerV3RemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPayloadReceivedV3(endpoint_id, payload) {
    return this.$.onPayloadReceivedV3(endpoint_id, payload);
  }
  onPayloadTransferUpdateV3(endpoint_id, update) {
    return this.$.onPayloadTransferUpdateV3(endpoint_id, update);
  }
};

nearby.connections.mojom.PayloadListenerV3RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PayloadListenerV3', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPayloadReceivedV3(endpoint_id, payload) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec,
      null,
      [endpoint_id, payload],
      false);
  }

  onPayloadTransferUpdateV3(endpoint_id, update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec,
      null,
      [endpoint_id, update],
      false);
  }

};

nearby.connections.mojom.PayloadListenerV3.getRemote = function() {
  let remote = new nearby.connections.mojom.PayloadListenerV3Remote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.PayloadListenerV3',
    'context');
  return remote.$;
};

nearby.connections.mojom.PayloadListenerV3Receiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PayloadListenerV3', [
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
             decoder.decodeStructInline(nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec.$.structSpec);
          const result = this.impl.onPayloadReceivedV3(params.endpoint_id, params.payload);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec.$.structSpec);
          const result = this.impl.onPayloadTransferUpdateV3(params.endpoint_id, params.update);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby.connections.mojom.PayloadListenerV3Receiver = nearby.connections.mojom.PayloadListenerV3Receiver;

nearby.connections.mojom.PayloadListenerV3Ptr = nearby.connections.mojom.PayloadListenerV3Remote;
nearby.connections.mojom.PayloadListenerV3Request = nearby.connections.mojom.PayloadListenerV3PendingReceiver;


// Interface: NearbyConnections
mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StartAdvertising_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_info', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, nearby.connections.mojom.AdvertisingOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 24, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.ConnectionLifecycleListenerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopAdvertising_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StartDiscovery_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, nearby.connections.mojom.DiscoveryOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.EndpointDiscoveryListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopDiscovery_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_info', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('remote_bluetooth_mac_address', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RequestConnection_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_info', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('endpoint_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('options', 24, 0, nearby.connections.mojom.ConnectionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 32, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.ConnectionLifecycleListenerRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_AcceptConnection_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.PayloadListenerRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RejectConnection_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_SendPayload_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_ids', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('payload', 16, 0, nearby.connections.mojom.PayloadSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_CancelPayload_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payload_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopAllEndpoints_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payload_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('input_file', 16, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 24, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RequestConnectionV3_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_device', 8, 0, ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_options', 16, 0, nearby.connections.mojom.ConnectionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 24, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.ConnectionListenerV3Remote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_device', 8, 0, ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.PayloadListenerV3Remote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RejectConnectionV3_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_device', 8, 0, ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_device', 8, 0, ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec, 'nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, nearby.connections.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec, 'nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_Params', [
      mojo.internal.StructField('service_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

nearby.connections.mojom.NearbyConnectionsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby.connections.mojom.NearbyConnectionsRemote = class {
  static get $interfaceName() {
    return 'nearby.connections.mojom.NearbyConnections';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby.connections.mojom.NearbyConnectionsPendingReceiver,
      handle);
    this.$ = new nearby.connections.mojom.NearbyConnectionsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startAdvertising(service_id, endpoint_info, options, listener) {
    return this.$.startAdvertising(service_id, endpoint_info, options, listener);
  }
  stopAdvertising(service_id) {
    return this.$.stopAdvertising(service_id);
  }
  startDiscovery(service_id, options, listener) {
    return this.$.startDiscovery(service_id, options, listener);
  }
  stopDiscovery(service_id) {
    return this.$.stopDiscovery(service_id);
  }
  injectBluetoothEndpoint(service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address) {
    return this.$.injectBluetoothEndpoint(service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address);
  }
  requestConnection(service_id, endpoint_info, endpoint_id, options, listener) {
    return this.$.requestConnection(service_id, endpoint_info, endpoint_id, options, listener);
  }
  acceptConnection(service_id, endpoint_id, listener) {
    return this.$.acceptConnection(service_id, endpoint_id, listener);
  }
  rejectConnection(service_id, endpoint_id) {
    return this.$.rejectConnection(service_id, endpoint_id);
  }
  disconnectFromEndpoint(service_id, endpoint_id) {
    return this.$.disconnectFromEndpoint(service_id, endpoint_id);
  }
  sendPayload(service_id, endpoint_ids, payload) {
    return this.$.sendPayload(service_id, endpoint_ids, payload);
  }
  cancelPayload(service_id, payload_id) {
    return this.$.cancelPayload(service_id, payload_id);
  }
  stopAllEndpoints(service_id) {
    return this.$.stopAllEndpoints(service_id);
  }
  initiateBandwidthUpgrade(service_id, endpoint_id) {
    return this.$.initiateBandwidthUpgrade(service_id, endpoint_id);
  }
  registerPayloadFile(service_id, payload_id, input_file, output_file) {
    return this.$.registerPayloadFile(service_id, payload_id, input_file, output_file);
  }
  requestConnectionV3(service_id, remote_device, connection_options, listener) {
    return this.$.requestConnectionV3(service_id, remote_device, connection_options, listener);
  }
  acceptConnectionV3(service_id, remote_device, listener) {
    return this.$.acceptConnectionV3(service_id, remote_device, listener);
  }
  rejectConnectionV3(service_id, remote_device) {
    return this.$.rejectConnectionV3(service_id, remote_device);
  }
  disconnectFromDeviceV3(service_id, remote_device) {
    return this.$.disconnectFromDeviceV3(service_id, remote_device);
  }
  registerServiceWithPresenceDeviceProvider(service_id) {
    return this.$.registerServiceWithPresenceDeviceProvider(service_id);
  }
};

nearby.connections.mojom.NearbyConnectionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NearbyConnections', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startAdvertising(service_id, endpoint_info, options, listener) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec,
      [service_id, endpoint_info, options, listener],
      false);
  }

  stopAdvertising(service_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec,
      [service_id],
      false);
  }

  startDiscovery(service_id, options, listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec,
      [service_id, options, listener],
      false);
  }

  stopDiscovery(service_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec,
      [service_id],
      false);
  }

  injectBluetoothEndpoint(service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec,
      [service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address],
      false);
  }

  requestConnection(service_id, endpoint_info, endpoint_id, options, listener) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec,
      [service_id, endpoint_info, endpoint_id, options, listener],
      false);
  }

  acceptConnection(service_id, endpoint_id, listener) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec,
      [service_id, endpoint_id, listener],
      false);
  }

  rejectConnection(service_id, endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec,
      [service_id, endpoint_id],
      false);
  }

  disconnectFromEndpoint(service_id, endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec,
      [service_id, endpoint_id],
      false);
  }

  sendPayload(service_id, endpoint_ids, payload) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec,
      [service_id, endpoint_ids, payload],
      false);
  }

  cancelPayload(service_id, payload_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec,
      [service_id, payload_id],
      false);
  }

  stopAllEndpoints(service_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec,
      [service_id],
      false);
  }

  initiateBandwidthUpgrade(service_id, endpoint_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec,
      [service_id, endpoint_id],
      false);
  }

  registerPayloadFile(service_id, payload_id, input_file, output_file) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec,
      [service_id, payload_id, input_file, output_file],
      false);
  }

  requestConnectionV3(service_id, remote_device, connection_options, listener) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec,
      [service_id, remote_device, connection_options, listener],
      false);
  }

  acceptConnectionV3(service_id, remote_device, listener) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec,
      [service_id, remote_device, listener],
      false);
  }

  rejectConnectionV3(service_id, remote_device) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec,
      [service_id, remote_device],
      false);
  }

  disconnectFromDeviceV3(service_id, remote_device) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec,
      [service_id, remote_device],
      false);
  }

  registerServiceWithPresenceDeviceProvider(service_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec,
      null,
      [service_id],
      false);
  }

};

nearby.connections.mojom.NearbyConnections.getRemote = function() {
  let remote = new nearby.connections.mojom.NearbyConnectionsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby.connections.mojom.NearbyConnections',
    'context');
  return remote.$;
};

nearby.connections.mojom.NearbyConnectionsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NearbyConnections', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec.$.structSpec);
          const result = this.impl.startAdvertising(params.service_id, params.endpoint_info, params.options, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec.$.structSpec);
          const result = this.impl.stopAdvertising(params.service_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec.$.structSpec);
          const result = this.impl.startDiscovery(params.service_id, params.options, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec.$.structSpec);
          const result = this.impl.stopDiscovery(params.service_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec.$.structSpec);
          const result = this.impl.injectBluetoothEndpoint(params.service_id, params.endpoint_id, params.endpoint_info, params.remote_bluetooth_mac_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec.$.structSpec);
          const result = this.impl.requestConnection(params.service_id, params.endpoint_info, params.endpoint_id, params.options, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec.$.structSpec);
          const result = this.impl.acceptConnection(params.service_id, params.endpoint_id, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec.$.structSpec);
          const result = this.impl.rejectConnection(params.service_id, params.endpoint_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec.$.structSpec);
          const result = this.impl.disconnectFromEndpoint(params.service_id, params.endpoint_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec.$.structSpec);
          const result = this.impl.sendPayload(params.service_id, params.endpoint_ids, params.payload);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec.$.structSpec);
          const result = this.impl.cancelPayload(params.service_id, params.payload_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec.$.structSpec);
          const result = this.impl.stopAllEndpoints(params.service_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec.$.structSpec);
          const result = this.impl.initiateBandwidthUpgrade(params.service_id, params.endpoint_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec.$.structSpec);
          const result = this.impl.registerPayloadFile(params.service_id, params.payload_id, params.input_file, params.output_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec.$.structSpec);
          const result = this.impl.requestConnectionV3(params.service_id, params.remote_device, params.connection_options, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec.$.structSpec);
          const result = this.impl.acceptConnectionV3(params.service_id, params.remote_device, params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec.$.structSpec);
          const result = this.impl.rejectConnectionV3(params.service_id, params.remote_device);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec.$.structSpec);
          const result = this.impl.disconnectFromDeviceV3(params.service_id, params.remote_device);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec.$.structSpec);
          const result = this.impl.registerServiceWithPresenceDeviceProvider(params.service_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby.connections.mojom.NearbyConnectionsReceiver = nearby.connections.mojom.NearbyConnectionsReceiver;

nearby.connections.mojom.NearbyConnectionsPtr = nearby.connections.mojom.NearbyConnectionsRemote;
nearby.connections.mojom.NearbyConnectionsRequest = nearby.connections.mojom.NearbyConnectionsPendingReceiver;

