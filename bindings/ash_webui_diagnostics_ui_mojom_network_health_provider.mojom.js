// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/diagnostics_ui/mojom/network_health_provider.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};


// Enum: AuthenticationType
ash.diagnostics.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};

// Enum: NetworkState
ash.diagnostics.mojom.NetworkState = {
  kOnline: 0,
  kConnected: 1,
  kPortal: 2,
  kConnecting: 3,
  kNotConnected: 4,
  kDisabled: 5,
};

// Enum: NetworkType
ash.diagnostics.mojom.NetworkType = {
  kCellular: 0,
  kEthernet: 1,
  kWiFi: 2,
  kUnsupported: 3,
};

// Enum: RoamingState
ash.diagnostics.mojom.RoamingState = {
  kNone: 0,
  kRoaming: 1,
  kHome: 2,
};

// Enum: LockType
ash.diagnostics.mojom.LockType = {
  kNone: 0,
  kSimPin: 1,
  kSimPuk: 2,
  kNetworkPin: 3,
};

// Enum: SecurityType
ash.diagnostics.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};

// Struct: IPConfigProperties
ash.diagnostics.mojom.IPConfigProperties = class {
  constructor(values = {}) {
    this.ip_address = values.ip_address !== undefined ? values.ip_address : 0;
  }
};

// Struct: CellularStateProperties
ash.diagnostics.mojom.CellularStateProperties = class {
  constructor(values = {}) {
    this.lock_type = values.lock_type !== undefined ? values.lock_type : 0;
  }
};

// Struct: EthernetStateProperties
ash.diagnostics.mojom.EthernetStateProperties = class {
  constructor(values = {}) {
    this.authentication = values.authentication !== undefined ? values.authentication : null;
  }
};

// Struct: WiFiStateProperties
ash.diagnostics.mojom.WiFiStateProperties = class {
  constructor(values = {}) {
    this.security = values.security !== undefined ? values.security : 0;
  }
};

// Struct: Network
ash.diagnostics.mojom.Network = class {
  constructor(values = {}) {
    this.ip_config = values.ip_config !== undefined ? values.ip_config : "";
  }
};

// Interface: NetworkListObserver
ash.diagnostics.mojom.NetworkListObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.NetworkListObserver';
  }

  onNetworkListChanged(network_guids, active_guid) {
    // Method: OnNetworkListChanged
    // Call: OnNetworkListChanged(network_guids, active_guid)
  }

};

ash.diagnostics.mojom.NetworkListObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkStateObserver
ash.diagnostics.mojom.NetworkStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.NetworkStateObserver';
  }

  onNetworkStateChanged(network) {
    // Method: OnNetworkStateChanged
    // Call: OnNetworkStateChanged(network)
  }

};

ash.diagnostics.mojom.NetworkStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetworkHealthProvider
ash.diagnostics.mojom.NetworkHealthProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.diagnostics.mojom.NetworkHealthProvider';
  }

  observeNetworkList(observer) {
    // Method: ObserveNetworkList
    // Call: ObserveNetworkList(observer)
  }

  observeNetwork(observer, guid) {
    // Method: ObserveNetwork
    // Call: ObserveNetwork(observer, guid)
  }

};

ash.diagnostics.mojom.NetworkHealthProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
