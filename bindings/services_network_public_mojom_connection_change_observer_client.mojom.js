// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_change_observer_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: NetworkChangeEvent
network.mojom.NetworkChangeEvent = {
};

// Struct: ConnectionKeepAliveConfig
network.mojom.ConnectionKeepAliveConfig = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : 0;
    this.comma = values.comma !== undefined ? values.comma : null;
    this."" = values."" !== undefined ? values."" : 0;
  }
};

// Interface: ConnectionChangeObserverClient
network.mojom.ConnectionChangeObserverClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.ConnectionChangeObserverClient';
  }

  onSessionClosed() {
    // Method: OnSessionClosed
    // Call: OnSessionClosed()
  }

  onNetworkEvent(event) {
    // Method: OnNetworkEvent
    // Call: OnNetworkEvent(event)
  }

  onConnectionFailed() {
    // Method: OnConnectionFailed
    // Call: OnConnectionFailed()
  }

};

network.mojom.ConnectionChangeObserverClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
