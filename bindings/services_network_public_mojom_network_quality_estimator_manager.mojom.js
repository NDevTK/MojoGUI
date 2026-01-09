// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_quality_estimator_manager.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: NetworkQualityEstimatorManagerClient
network.mojom.NetworkQualityEstimatorManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkQualityEstimatorManagerClient';
  }

  events(change) {
    // Method: events
    // Call: events(change)
  }

  sent(after) {
    // Method: sent
    // Call: sent(after)
  }

  estimate() {
    // Method: estimate
    // Call: estimate()
  }

  onNetworkQualityChanged(type, http_rtt, transport_rtt, downlink_bandwidth_kbps) {
    // Method: OnNetworkQualityChanged
    // Call: OnNetworkQualityChanged(type, http_rtt, transport_rtt, downlink_bandwidth_kbps)
  }

};

network.mojom.NetworkQualityEstimatorManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkQualityEstimatorManager
network.mojom.NetworkQualityEstimatorManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.NetworkQualityEstimatorManager';
  }

  requestNotifications(client) {
    // Method: RequestNotifications
    // Call: RequestNotifications(client)
  }

};

network.mojom.NetworkQualityEstimatorManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
