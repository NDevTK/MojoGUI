// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_connections.mojom
// Module: nearby.connections.mojom

'use strict';

// Module namespace
var nearby = nearby || {};
nearby.connections = nearby.connections || {};
nearby.connections.mojom = nearby.connections.mojom || {};


// Interface: EndpointDiscoveryListener
nearby.connections.mojom.EndpointDiscoveryListener = {};

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
      [endpoint_id, info]);
  }

  onEndpointLost(endpoint_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec,
      null,
      [endpoint_id]);
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

// ParamsSpec for OnEndpointFound
nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.EndpointDiscoveryListener.OnEndpointFound_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'info', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.DiscoveredEndpointInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnEndpointLost
nearby.connections.mojom.EndpointDiscoveryListener_OnEndpointLost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.EndpointDiscoveryListener.OnEndpointLost_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
nearby.connections.mojom.EndpointDiscoveryListenerPtr = nearby.connections.mojom.EndpointDiscoveryListenerRemote;
nearby.connections.mojom.EndpointDiscoveryListenerRequest = nearby.connections.mojom.EndpointDiscoveryListenerPendingReceiver;


// Interface: ConnectionLifecycleListener
nearby.connections.mojom.ConnectionLifecycleListener = {};

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
      [endpoint_id, info]);
  }

  onConnectionAccepted(endpoint_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec,
      null,
      [endpoint_id]);
  }

  onConnectionRejected(endpoint_id, status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec,
      null,
      [endpoint_id, status]);
  }

  onDisconnected(endpoint_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec,
      null,
      [endpoint_id]);
  }

  onBandwidthChanged(endpoint_id, medium) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec,
      null,
      [endpoint_id, medium]);
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

// ParamsSpec for OnConnectionInitiated
nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionInitiated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionLifecycleListener.OnConnectionInitiated_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'info', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.ConnectionInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectionAccepted
nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionAccepted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionLifecycleListener.OnConnectionAccepted_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectionRejected
nearby.connections.mojom.ConnectionLifecycleListener_OnConnectionRejected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionLifecycleListener.OnConnectionRejected_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDisconnected
nearby.connections.mojom.ConnectionLifecycleListener_OnDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionLifecycleListener.OnDisconnected_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBandwidthChanged
nearby.connections.mojom.ConnectionLifecycleListener_OnBandwidthChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionLifecycleListener.OnBandwidthChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'medium', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.MediumSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
nearby.connections.mojom.ConnectionLifecycleListenerPtr = nearby.connections.mojom.ConnectionLifecycleListenerRemote;
nearby.connections.mojom.ConnectionLifecycleListenerRequest = nearby.connections.mojom.ConnectionLifecycleListenerPendingReceiver;


// Interface: PayloadListener
nearby.connections.mojom.PayloadListener = {};

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
      [endpoint_id, payload]);
  }

  onPayloadTransferUpdate(endpoint_id, update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec,
      null,
      [endpoint_id, update]);
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

// ParamsSpec for OnPayloadReceived
nearby.connections.mojom.PayloadListener_OnPayloadReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.PayloadListener.OnPayloadReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payload', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.PayloadSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPayloadTransferUpdate
nearby.connections.mojom.PayloadListener_OnPayloadTransferUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.PayloadListener.OnPayloadTransferUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'update', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.PayloadTransferUpdateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
nearby.connections.mojom.PayloadListenerPtr = nearby.connections.mojom.PayloadListenerRemote;
nearby.connections.mojom.PayloadListenerRequest = nearby.connections.mojom.PayloadListenerPendingReceiver;


// Interface: ConnectionListenerV3
nearby.connections.mojom.ConnectionListenerV3 = {};

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
      [endpoint_id, info]);
  }

  onConnectionResultV3(endpoint_id, resolution) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec,
      null,
      [endpoint_id, resolution]);
  }

  onDisconnectedV3(endpoint_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec,
      null,
      [endpoint_id]);
  }

  onBandwidthChangedV3(endpoint_id, bandwidth_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec,
      null,
      [endpoint_id, bandwidth_info]);
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

// ParamsSpec for OnConnectionInitiatedV3
nearby.connections.mojom.ConnectionListenerV3_OnConnectionInitiatedV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionListenerV3.OnConnectionInitiatedV3_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'info', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.InitialConnectionInfoV3Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnConnectionResultV3
nearby.connections.mojom.ConnectionListenerV3_OnConnectionResultV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionListenerV3.OnConnectionResultV3_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'resolution', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDisconnectedV3
nearby.connections.mojom.ConnectionListenerV3_OnDisconnectedV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionListenerV3.OnDisconnectedV3_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBandwidthChangedV3
nearby.connections.mojom.ConnectionListenerV3_OnBandwidthChangedV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionListenerV3.OnBandwidthChangedV3_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'bandwidth_info', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.BandwidthInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
nearby.connections.mojom.ConnectionListenerV3Ptr = nearby.connections.mojom.ConnectionListenerV3Remote;
nearby.connections.mojom.ConnectionListenerV3Request = nearby.connections.mojom.ConnectionListenerV3PendingReceiver;


// Interface: PayloadListenerV3
nearby.connections.mojom.PayloadListenerV3 = {};

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
      [endpoint_id, payload]);
  }

  onPayloadTransferUpdateV3(endpoint_id, update) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec,
      null,
      [endpoint_id, update]);
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

// ParamsSpec for OnPayloadReceivedV3
nearby.connections.mojom.PayloadListenerV3_OnPayloadReceivedV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.PayloadListenerV3.OnPayloadReceivedV3_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payload', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.PayloadSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPayloadTransferUpdateV3
nearby.connections.mojom.PayloadListenerV3_OnPayloadTransferUpdateV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.PayloadListenerV3.OnPayloadTransferUpdateV3_Params',
      packedSize: 24,
      fields: [
        { name: 'endpoint_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'update', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.PayloadTransferUpdateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
nearby.connections.mojom.PayloadListenerV3Ptr = nearby.connections.mojom.PayloadListenerV3Remote;
nearby.connections.mojom.PayloadListenerV3Request = nearby.connections.mojom.PayloadListenerV3PendingReceiver;


// Interface: NearbyConnections
nearby.connections.mojom.NearbyConnections = {};

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
      [service_id, endpoint_info, options, listener]);
  }

  stopAdvertising(service_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec,
      [service_id]);
  }

  startDiscovery(service_id, options, listener) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec,
      [service_id, options, listener]);
  }

  stopDiscovery(service_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec,
      [service_id]);
  }

  injectBluetoothEndpoint(service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec,
      [service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address]);
  }

  requestConnection(service_id, endpoint_info, endpoint_id, options, listener) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec,
      [service_id, endpoint_info, endpoint_id, options, listener]);
  }

  acceptConnection(service_id, endpoint_id, listener) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec,
      [service_id, endpoint_id, listener]);
  }

  rejectConnection(service_id, endpoint_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec,
      [service_id, endpoint_id]);
  }

  disconnectFromEndpoint(service_id, endpoint_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec,
      [service_id, endpoint_id]);
  }

  sendPayload(service_id, endpoint_ids, payload) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec,
      [service_id, endpoint_ids, payload]);
  }

  cancelPayload(service_id, payload_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec,
      [service_id, payload_id]);
  }

  stopAllEndpoints(service_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec,
      [service_id]);
  }

  initiateBandwidthUpgrade(service_id, endpoint_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec,
      [service_id, endpoint_id]);
  }

  registerPayloadFile(service_id, payload_id, input_file, output_file) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec,
      [service_id, payload_id, input_file, output_file]);
  }

  requestConnectionV3(service_id, remote_device, connection_options, listener) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec,
      [service_id, remote_device, connection_options, listener]);
  }

  acceptConnectionV3(service_id, remote_device, listener) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec,
      [service_id, remote_device, listener]);
  }

  rejectConnectionV3(service_id, remote_device) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec,
      [service_id, remote_device]);
  }

  disconnectFromDeviceV3(service_id, remote_device) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec,
      nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec,
      [service_id, remote_device]);
  }

  registerServiceWithPresenceDeviceProvider(service_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec,
      null,
      [service_id]);
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

// ParamsSpec for StartAdvertising
nearby.connections.mojom.NearbyConnections_StartAdvertising_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StartAdvertising_Params',
      packedSize: 40,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: nearby.connections.mojom.AdvertisingOptionsSpec, nullable: false },
        { name: 'listener', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_StartAdvertising_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StartAdvertising_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopAdvertising
nearby.connections.mojom.NearbyConnections_StopAdvertising_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StopAdvertising_Params',
      packedSize: 16,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_StopAdvertising_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StopAdvertising_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDiscovery
nearby.connections.mojom.NearbyConnections_StartDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StartDiscovery_Params',
      packedSize: 32,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: nearby.connections.mojom.DiscoveryOptionsSpec, nullable: false },
        { name: 'listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_StartDiscovery_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StartDiscovery_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopDiscovery
nearby.connections.mojom.NearbyConnections_StopDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StopDiscovery_Params',
      packedSize: 16,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_StopDiscovery_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StopDiscovery_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InjectBluetoothEndpoint
nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.InjectBluetoothEndpoint_Params',
      packedSize: 40,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'remote_bluetooth_mac_address', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_InjectBluetoothEndpoint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.InjectBluetoothEndpoint_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestConnection
nearby.connections.mojom.NearbyConnections_RequestConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RequestConnection_Params',
      packedSize: 48,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'endpoint_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'options', packedOffset: 32, packedBitOffset: 0, type: nearby.connections.mojom.ConnectionOptionsSpec, nullable: false },
        { name: 'listener', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_RequestConnection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RequestConnection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AcceptConnection
nearby.connections.mojom.NearbyConnections_AcceptConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.AcceptConnection_Params',
      packedSize: 32,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_AcceptConnection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.AcceptConnection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RejectConnection
nearby.connections.mojom.NearbyConnections_RejectConnection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RejectConnection_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_RejectConnection_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RejectConnection_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisconnectFromEndpoint
nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.DisconnectFromEndpoint_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_DisconnectFromEndpoint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.DisconnectFromEndpoint_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendPayload
nearby.connections.mojom.NearbyConnections_SendPayload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.SendPayload_Params',
      packedSize: 32,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_ids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'payload', packedOffset: 24, packedBitOffset: 0, type: nearby.connections.mojom.PayloadSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_SendPayload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.SendPayload_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelPayload
nearby.connections.mojom.NearbyConnections_CancelPayload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.CancelPayload_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payload_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_CancelPayload_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.CancelPayload_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopAllEndpoints
nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StopAllEndpoints_Params',
      packedSize: 16,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_StopAllEndpoints_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.StopAllEndpoints_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InitiateBandwidthUpgrade
nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.InitiateBandwidthUpgrade_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'endpoint_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_InitiateBandwidthUpgrade_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.InitiateBandwidthUpgrade_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterPayloadFile
nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RegisterPayloadFile_Params',
      packedSize: 40,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payload_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'input_file', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false },
        { name: 'output_file', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_RegisterPayloadFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RegisterPayloadFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestConnectionV3
nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RequestConnectionV3_Params',
      packedSize: 40,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'remote_device', packedOffset: 16, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceSpec, nullable: false },
        { name: 'connection_options', packedOffset: 24, packedBitOffset: 0, type: nearby.connections.mojom.ConnectionOptionsSpec, nullable: false },
        { name: 'listener', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_RequestConnectionV3_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RequestConnectionV3_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AcceptConnectionV3
nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.AcceptConnectionV3_Params',
      packedSize: 32,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'remote_device', packedOffset: 16, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceSpec, nullable: false },
        { name: 'listener', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_AcceptConnectionV3_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.AcceptConnectionV3_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RejectConnectionV3
nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RejectConnectionV3_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'remote_device', packedOffset: 16, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_RejectConnectionV3_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RejectConnectionV3_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisconnectFromDeviceV3
nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.DisconnectFromDeviceV3_Params',
      packedSize: 24,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'remote_device', packedOffset: 16, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

nearby.connections.mojom.NearbyConnections_DisconnectFromDeviceV3_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.DisconnectFromDeviceV3_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.StatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterServiceWithPresenceDeviceProvider
nearby.connections.mojom.NearbyConnections_RegisterServiceWithPresenceDeviceProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.NearbyConnections.RegisterServiceWithPresenceDeviceProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
nearby.connections.mojom.NearbyConnectionsPtr = nearby.connections.mojom.NearbyConnectionsRemote;
nearby.connections.mojom.NearbyConnectionsRequest = nearby.connections.mojom.NearbyConnectionsPendingReceiver;

