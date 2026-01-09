// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/wifi_direct/public/mojom/wifi_direct_manager.mojom
// Module: ash.wifi_direct.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.wifi_direct = ash.wifi_direct || {};
ash.wifi_direct.mojom = ash.wifi_direct.mojom || {};


// Enum: WifiDirectOperationResult
ash.wifi_direct.mojom.WifiDirectOperationResult = {
  kSuccess: 0,
  kOperationInProgress: 1,
  kInvalidArguments: 2,
  kUnknownFailure: 3,
};

// Struct: WifiP2PCapabilities
ash.wifi_direct.mojom.WifiP2PCapabilities = class {
  constructor(values = {}) {
    this.is_p2p_supported = values.is_p2p_supported !== undefined ? values.is_p2p_supported : false;
  }
};

// Struct: WifiCredentials
ash.wifi_direct.mojom.WifiCredentials = class {
  constructor(values = {}) {
    this.passphrase = values.passphrase !== undefined ? values.passphrase : "";
  }
};

// Struct: WifiDirectConnectionProperties
ash.wifi_direct.mojom.WifiDirectConnectionProperties = class {
  constructor(values = {}) {
    this.ipv4_address = values.ipv4_address !== undefined ? values.ipv4_address : 0;
  }
};

// Interface: WifiDirectManager
ash.wifi_direct.mojom.WifiDirectManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.wifi_direct.mojom.WifiDirectManager';
  }

  createWifiDirectGroup(credentials) {
    // Method: CreateWifiDirectGroup
    return new Promise((resolve) => {
      // Call: CreateWifiDirectGroup(credentials)
      resolve({});
    });
  }

  connectToWifiDirectGroup(credentials, frequency) {
    // Method: ConnectToWifiDirectGroup
    return new Promise((resolve) => {
      // Call: ConnectToWifiDirectGroup(credentials, frequency)
      resolve({});
    });
  }

  getWifiP2PCapabilities() {
    // Method: GetWifiP2PCapabilities
    return new Promise((resolve) => {
      // Call: GetWifiP2PCapabilities()
      resolve({});
    });
  }

};

ash.wifi_direct.mojom.WifiDirectManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WifiDirectConnection
ash.wifi_direct.mojom.WifiDirectConnectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.wifi_direct.mojom.WifiDirectConnection';
  }

  getProperties() {
    // Method: GetProperties
    return new Promise((resolve) => {
      // Call: GetProperties()
      resolve({});
    });
  }

  associateSocket(socket) {
    // Method: AssociateSocket
    return new Promise((resolve) => {
      // Call: AssociateSocket(socket)
      resolve({});
    });
  }

};

ash.wifi_direct.mojom.WifiDirectConnectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
