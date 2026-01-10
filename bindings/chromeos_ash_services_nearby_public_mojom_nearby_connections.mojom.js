// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_connections.mojom
// Module: nearby.connections.mojom

'use strict';

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
};

nearby.connections.mojom.EndpointDiscoveryListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEndpointFound(endpoint_id, info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec,
      null,
      [endpoint_id, info],
      false);
  }

  onEndpointLost(endpoint_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEndpointFound(params.endpoint_id, params.info);
          break;
        }
        case 1: {
          const params = nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEndpointLost(params.endpoint_id);
          break;
        }
      }
      }
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
};

nearby.connections.mojom.ConnectionLifecycleListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnectionInitiated(endpoint_id, info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec,
      null,
      [endpoint_id, info],
      false);
  }

  onConnectionAccepted(endpoint_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec,
      null,
      [endpoint_id],
      false);
  }

  onConnectionRejected(endpoint_id, status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec,
      null,
      [endpoint_id, status],
      false);
  }

  onDisconnected(endpoint_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec,
      null,
      [endpoint_id],
      false);
  }

  onBandwidthChanged(endpoint_id, medium) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionInitiated(params.endpoint_id, params.info);
          break;
        }
        case 1: {
          const params = nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionAccepted(params.endpoint_id);
          break;
        }
        case 2: {
          const params = nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionRejected(params.endpoint_id, params.status);
          break;
        }
        case 3: {
          const params = nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDisconnected(params.endpoint_id);
          break;
        }
        case 4: {
          const params = nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBandwidthChanged(params.endpoint_id, params.medium);
          break;
        }
      }
      }
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
};

nearby.connections.mojom.PayloadListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPayloadReceived(endpoint_id, payload) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec,
      null,
      [endpoint_id, payload],
      false);
  }

  onPayloadTransferUpdate(endpoint_id, update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPayloadReceived(params.endpoint_id, params.payload);
          break;
        }
        case 1: {
          const params = nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPayloadTransferUpdate(params.endpoint_id, params.update);
          break;
        }
      }
      }
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
};

nearby.connections.mojom.ConnectionListenerV3RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConnectionInitiatedV3(endpoint_id, info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec,
      null,
      [endpoint_id, info],
      false);
  }

  onConnectionResultV3(endpoint_id, resolution) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec,
      null,
      [endpoint_id, resolution],
      false);
  }

  onDisconnectedV3(endpoint_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec,
      null,
      [endpoint_id],
      false);
  }

  onBandwidthChangedV3(endpoint_id, bandwidth_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionInitiatedV3(params.endpoint_id, params.info);
          break;
        }
        case 1: {
          const params = nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConnectionResultV3(params.endpoint_id, params.resolution);
          break;
        }
        case 2: {
          const params = nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDisconnectedV3(params.endpoint_id);
          break;
        }
        case 3: {
          const params = nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBandwidthChangedV3(params.endpoint_id, params.bandwidth_info);
          break;
        }
      }
      }
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
};

nearby.connections.mojom.PayloadListenerV3RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPayloadReceivedV3(endpoint_id, payload) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec,
      null,
      [endpoint_id, payload],
      false);
  }

  onPayloadTransferUpdateV3(endpoint_id, update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPayloadReceivedV3(params.endpoint_id, params.payload);
          break;
        }
        case 1: {
          const params = nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPayloadTransferUpdateV3(params.endpoint_id, params.update);
          break;
        }
      }
      }
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
      mojo.internal.StructField('listener', 24, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.ConnectionLifecycleListenerSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.EndpointDiscoveryListenerSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('listener', 32, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.ConnectionLifecycleListenerSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.PayloadListenerSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('listener', 24, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.ConnectionListenerV3Spec), null, false, 0, undefined),
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
      mojo.internal.StructField('listener', 16, 0, mojo.internal.InterfaceProxy(nearby.connections.mojom.PayloadListenerV3Spec), null, false, 0, undefined),
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
};

nearby.connections.mojom.NearbyConnectionsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startAdvertising(service_id, endpoint_info, options, listener) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec,
      [service_id, endpoint_info, options, listener],
      false);
  }

  stopAdvertising(service_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec,
      [service_id],
      false);
  }

  startDiscovery(service_id, options, listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec,
      [service_id, options, listener],
      false);
  }

  stopDiscovery(service_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec,
      [service_id],
      false);
  }

  injectBluetoothEndpoint(service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec,
      [service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address],
      false);
  }

  requestConnection(service_id, endpoint_info, endpoint_id, options, listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec,
      [service_id, endpoint_info, endpoint_id, options, listener],
      false);
  }

  acceptConnection(service_id, endpoint_id, listener) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec,
      [service_id, endpoint_id, listener],
      false);
  }

  rejectConnection(service_id, endpoint_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec,
      [service_id, endpoint_id],
      false);
  }

  disconnectFromEndpoint(service_id, endpoint_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec,
      [service_id, endpoint_id],
      false);
  }

  sendPayload(service_id, endpoint_ids, payload) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec,
      [service_id, endpoint_ids, payload],
      false);
  }

  cancelPayload(service_id, payload_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec,
      [service_id, payload_id],
      false);
  }

  stopAllEndpoints(service_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec,
      [service_id],
      false);
  }

  initiateBandwidthUpgrade(service_id, endpoint_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec,
      [service_id, endpoint_id],
      false);
  }

  registerPayloadFile(service_id, payload_id, input_file, output_file) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec,
      [service_id, payload_id, input_file, output_file],
      false);
  }

  requestConnectionV3(service_id, remote_device, connection_options, listener) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec,
      [service_id, remote_device, connection_options, listener],
      false);
  }

  acceptConnectionV3(service_id, remote_device, listener) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec,
      [service_id, remote_device, listener],
      false);
  }

  rejectConnectionV3(service_id, remote_device) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec,
      [service_id, remote_device],
      false);
  }

  disconnectFromDeviceV3(service_id, remote_device) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec,
      [service_id, remote_device],
      false);
  }

  registerServiceWithPresenceDeviceProvider(service_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec.$.decode(message.payload);
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
          const params = nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerServiceWithPresenceDeviceProvider(params.service_id);
          break;
        }
      }
      }
    }});
  }
};

nearby.connections.mojom.NearbyConnectionsReceiver = nearby.connections.mojom.NearbyConnectionsReceiver;

nearby.connections.mojom.NearbyConnectionsPtr = nearby.connections.mojom.NearbyConnectionsRemote;
nearby.connections.mojom.NearbyConnectionsRequest = nearby.connections.mojom.NearbyConnectionsPendingReceiver;

