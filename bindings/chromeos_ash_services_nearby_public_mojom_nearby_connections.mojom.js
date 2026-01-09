// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_connections.mojom
// Module: nearby.connections.mojom

'use strict';

// Module namespace
var nearby = nearby || {};
nearby.connections = nearby.connections || {};
nearby.connections.mojom = nearby.connections.mojom || {};


// Interface: EndpointDiscoveryListener
nearby.connections.mojom.EndpointDiscoveryListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby.connections.mojom.EndpointDiscoveryListener';
  }

  onEndpointFound(endpoint_id, info) {
    // Method: OnEndpointFound
    // Call: OnEndpointFound(endpoint_id, info)
  }

  onEndpointFound() {
    // Method: OnEndpointFound
    // Call: OnEndpointFound()
  }

  onEndpointLost(endpoint_id) {
    // Method: OnEndpointLost
    // Call: OnEndpointLost(endpoint_id)
  }

};

nearby.connections.mojom.EndpointDiscoveryListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConnectionLifecycleListener
nearby.connections.mojom.ConnectionLifecycleListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby.connections.mojom.ConnectionLifecycleListener';
  }

  acceptConnection() {
    // Method: AcceptConnection
    // Call: AcceptConnection()
  }

  rejectConnection() {
    // Method: RejectConnection
    // Call: RejectConnection()
  }

  onConnectionInitiated(endpoint_id, info) {
    // Method: OnConnectionInitiated
    // Call: OnConnectionInitiated(endpoint_id, info)
  }

  onConnectionAccepted(endpoint_id) {
    // Method: OnConnectionAccepted
    // Call: OnConnectionAccepted(endpoint_id)
  }

  disconnectFromEndpoint() {
    // Method: DisconnectFromEndpoint
    // Call: DisconnectFromEndpoint()
  }

};

nearby.connections.mojom.ConnectionLifecycleListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PayloadListener
nearby.connections.mojom.PayloadListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby.connections.mojom.PayloadListener';
  }

  onPayloadTransferUpdate() {
    // Method: OnPayloadTransferUpdate
    // Call: OnPayloadTransferUpdate()
  }

  onPayloadReceived(endpoint_id, payload) {
    // Method: OnPayloadReceived
    // Call: OnPayloadReceived(endpoint_id, payload)
  }

  onPayloadTransferUpdate(endpoint_id, update) {
    // Method: OnPayloadTransferUpdate
    // Call: OnPayloadTransferUpdate(endpoint_id, update)
  }

};

nearby.connections.mojom.PayloadListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConnectionListenerV3
nearby.connections.mojom.ConnectionListenerV3Ptr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby.connections.mojom.ConnectionListenerV3';
  }

  see() {
    // Method: See
    // Call: See()
  }

  take(other) {
    // Method: take
    // Call: take(other)
  }

  acceptConnectionV3() {
    // Method: AcceptConnectionV3
    // Call: AcceptConnectionV3()
  }

  rejectConnectionV3() {
    // Method: RejectConnectionV3
    // Call: RejectConnectionV3()
  }

  onConnectionInitiatedV3(endpoint_id, info) {
    // Method: OnConnectionInitiatedV3
    // Call: OnConnectionInitiatedV3(endpoint_id, info)
  }

  connection(rejected) {
    // Method: connection
    // Call: connection(rejected)
  }

  onConnectionResultV3(endpoint_id, resolution) {
    // Method: OnConnectionResultV3
    // Call: OnConnectionResultV3(endpoint_id, resolution)
  }

  service() {
    // Method: service
    // Call: service()
  }

  onDisconnectedV3(endpoint_id) {
    // Method: OnDisconnectedV3
    // Call: OnDisconnectedV3(endpoint_id)
  }

  onBandwidthChangedV3(endpoint_id, bandwidth_info) {
    // Method: OnBandwidthChangedV3
    // Call: OnBandwidthChangedV3(endpoint_id, bandwidth_info)
  }

};

nearby.connections.mojom.ConnectionListenerV3Request = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PayloadListenerV3
nearby.connections.mojom.PayloadListenerV3Ptr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby.connections.mojom.PayloadListenerV3';
  }

  onPayloadTransferUpdateV3() {
    // Method: OnPayloadTransferUpdateV3
    // Call: OnPayloadTransferUpdateV3()
  }

  onPayloadReceivedV3(endpoint_id, payload) {
    // Method: OnPayloadReceivedV3
    // Call: OnPayloadReceivedV3(endpoint_id, payload)
  }

  onPayloadTransferUpdateV3(endpoint_id, update) {
    // Method: OnPayloadTransferUpdateV3
    // Call: OnPayloadTransferUpdateV3(endpoint_id, update)
  }

};

nearby.connections.mojom.PayloadListenerV3Request = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyConnections
nearby.connections.mojom.NearbyConnectionsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby.connections.mojom.NearbyConnections';
  }

  startAdvertising() {
    // Method: StartAdvertising
    // Call: StartAdvertising()
  }

  startAdvertising(service_id, endpoint_info, options, listener) {
    // Method: StartAdvertising
    return new Promise((resolve) => {
      // Call: StartAdvertising(service_id, endpoint_info, options, listener)
      resolve({});
    });
  }

  startAdvertising() {
    // Method: StartAdvertising
    // Call: StartAdvertising()
  }

  stopAdvertising(service_id) {
    // Method: StopAdvertising
    return new Promise((resolve) => {
      // Call: StopAdvertising(service_id)
      resolve({});
    });
  }

  startDiscovery(service_id, options, listener) {
    // Method: StartDiscovery
    return new Promise((resolve) => {
      // Call: StartDiscovery(service_id, options, listener)
      resolve({});
    });
  }

  startDiscovery() {
    // Method: StartDiscovery
    // Call: StartDiscovery()
  }

  stopDiscovery(service_id) {
    // Method: StopDiscovery
    return new Promise((resolve) => {
      // Call: StopDiscovery(service_id)
      resolve({});
    });
  }

  startDiscovery() {
    // Method: StartDiscovery
    // Call: StartDiscovery()
  }

  onEndpointFound() {
    // Method: OnEndpointFound
    // Call: OnEndpointFound()
  }

  startDiscovery() {
    // Method: StartDiscovery
    // Call: StartDiscovery()
  }

  startDiscovery() {
    // Method: StartDiscovery
    // Call: StartDiscovery()
  }

  stopDiscovery() {
    // Method: StopDiscovery
    // Call: StopDiscovery()
  }

  startDiscovery() {
    // Method: StartDiscovery
    // Call: StartDiscovery()
  }

  onEndpointFound() {
    // Method: OnEndpointFound
    // Call: OnEndpointFound()
  }

  injectBluetoothEndpoint(service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address) {
    // Method: InjectBluetoothEndpoint
    return new Promise((resolve) => {
      // Call: InjectBluetoothEndpoint(service_id, endpoint_id, endpoint_info, remote_bluetooth_mac_address)
      resolve({});
    });
  }

  onEndpointFound() {
    // Method: OnEndpointFound
    // Call: OnEndpointFound()
  }

  requestConnection(service_id, endpoint_info, endpoint_id, options, listener) {
    // Method: RequestConnection
    return new Promise((resolve) => {
      // Call: RequestConnection(service_id, endpoint_info, endpoint_id, options, listener)
      resolve({});
    });
  }

  onConnectionInitiated() {
    // Method: OnConnectionInitiated
    // Call: OnConnectionInitiated()
  }

  onConnectionInitiated() {
    // Method: OnConnectionInitiated
    // Call: OnConnectionInitiated()
  }

  acceptConnection(service_id, endpoint_id, listener) {
    // Method: AcceptConnection
    return new Promise((resolve) => {
      // Call: AcceptConnection(service_id, endpoint_id, listener)
      resolve({});
    });
  }

  onConnectionInitiated() {
    // Method: OnConnectionInitiated
    // Call: OnConnectionInitiated()
  }

  onConnectionInitiated() {
    // Method: OnConnectionInitiated
    // Call: OnConnectionInitiated()
  }

  rejectConnection(service_id, endpoint_id) {
    // Method: RejectConnection
    return new Promise((resolve) => {
      // Call: RejectConnection(service_id, endpoint_id)
      resolve({});
    });
  }

  disconnectFromEndpoint(service_id, endpoint_id) {
    // Method: DisconnectFromEndpoint
    return new Promise((resolve) => {
      // Call: DisconnectFromEndpoint(service_id, endpoint_id)
      resolve({});
    });
  }

  onConnectionResult() {
    // Method: OnConnectionResult
    // Call: OnConnectionResult()
  }

  discovery(Strategy) {
    // Method: discovery
    // Call: discovery(Strategy)
  }

  active(pending) {
    // Method: active
    // Call: active(pending)
  }

  transmission(different) {
    // Method: transmission
    // Call: transmission(different)
  }

  onPayloadTransferUpdate() {
    // Method: OnPayloadTransferUpdate
    // Call: OnPayloadTransferUpdate()
  }

  sendPayload(service_id, endpoint_ids, payload) {
    // Method: SendPayload
    return new Promise((resolve) => {
      // Call: SendPayload(service_id, endpoint_ids, payload)
      resolve({});
    });
  }

  endpoint() {
    // Method: endpoint
    // Call: endpoint()
  }

  cancelPayload(service_id, payload_id) {
    // Method: CancelPayload
    return new Promise((resolve) => {
      // Call: CancelPayload(service_id, payload_id)
      resolve({});
    });
  }

  stopAllEndpoints(service_id) {
    // Method: StopAllEndpoints
    return new Promise((resolve) => {
      // Call: StopAllEndpoints(service_id)
      resolve({});
    });
  }

  advertising(device) {
    // Method: advertising
    // Call: advertising(device)
  }

  startAdvertising() {
    // Method: StartAdvertising
    // Call: StartAdvertising()
  }

  initiateBandwidthUpgrade(service_id, endpoint_id) {
    // Method: InitiateBandwidthUpgrade
    return new Promise((resolve) => {
      // Call: InitiateBandwidthUpgrade(service_id, endpoint_id)
      resolve({});
    });
  }

  registerPayloadFile(service_id, payload_id, input_file, output_file) {
    // Method: RegisterPayloadFile
    return new Promise((resolve) => {
      // Call: RegisterPayloadFile(service_id, payload_id, input_file, output_file)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  requestConnectionV3(service_id, remote_device, connection_options, listener) {
    // Method: RequestConnectionV3
    return new Promise((resolve) => {
      // Call: RequestConnectionV3(service_id, remote_device, connection_options, listener)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  acceptConnectionV3(service_id, remote_device, listener) {
    // Method: AcceptConnectionV3
    return new Promise((resolve) => {
      // Call: AcceptConnectionV3(service_id, remote_device, listener)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  rejectConnectionV3(service_id, remote_device) {
    // Method: RejectConnectionV3
    return new Promise((resolve) => {
      // Call: RejectConnectionV3(service_id, remote_device)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  disconnectFromDeviceV3(service_id, remote_device) {
    // Method: DisconnectFromDeviceV3
    return new Promise((resolve) => {
      // Call: DisconnectFromDeviceV3(service_id, remote_device)
      resolve({});
    });
  }

  connectV3() {
    // Method: ConnectV3
    // Call: ConnectV3()
  }

  device() {
    // Method: device
    // Call: device()
  }

  registerServiceWithPresenceDeviceProvider(service_id) {
    // Method: RegisterServiceWithPresenceDeviceProvider
    // Call: RegisterServiceWithPresenceDeviceProvider(service_id)
  }

};

nearby.connections.mojom.NearbyConnectionsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
