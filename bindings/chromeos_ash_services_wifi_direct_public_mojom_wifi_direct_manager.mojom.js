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
  kNotAllowed: 1,
  kNotSupported: 2,
  kNotConnected: 3,
  kConcurrencyNotSupported: 4,
  kFrequencyNotSupported: 5,
  kAuthFailure: 6,
  kGroupNotFound: 7,
  kAlreadyConnected: 8,
  kOperationInProgress: 9,
  kInvalidArguments: 10,
  kTimeout: 11,
  kInvalidResultCode: 12,
  kInvalidGroupProperties: 13,
  kUnknownFailure: 14,
};

// Struct: WifiP2PCapabilities
ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiP2PCapabilities',
      packedSize: 16,
      fields: [
        { name: 'is_owner_ready', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_client_ready', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_p2p_supported', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WifiCredentials
ash.wifi_direct.mojom.WifiCredentialsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiCredentials',
      packedSize: 24,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'passphrase', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WifiDirectConnectionProperties
ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnectionProperties',
      packedSize: 32,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiCredentialsSpec, nullable: false },
        { name: 'frequency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'ipv4_address', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: WifiDirectManager
ash.wifi_direct.mojom.WifiDirectManager = {};

ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.wifi_direct.mojom.WifiDirectManagerRemote = class {
  static get $interfaceName() {
    return 'ash.wifi_direct.mojom.WifiDirectManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver,
      handle);
    this.$ = new ash.wifi_direct.mojom.WifiDirectManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.wifi_direct.mojom.WifiDirectManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWifiDirectGroup(credentials) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec,
      [credentials]);
  }

  connectToWifiDirectGroup(credentials, frequency) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec,
      [credentials, frequency]);
  }

  getWifiP2PCapabilities() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec,
      []);
  }

};

ash.wifi_direct.mojom.WifiDirectManager.getRemote = function() {
  let remote = new ash.wifi_direct.mojom.WifiDirectManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.wifi_direct.mojom.WifiDirectManager',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWifiDirectGroup
ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.CreateWifiDirectGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiCredentialsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.wifi_direct.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.CreateWifiDirectGroup_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiDirectOperationResultSpec, nullable: false },
        { name: 'wifi_direct_connection', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToWifiDirectGroup
ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.ConnectToWifiDirectGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiCredentialsSpec, nullable: false },
        { name: 'frequency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.wifi_direct.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.ConnectToWifiDirectGroup_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiDirectOperationResultSpec, nullable: false },
        { name: 'wifi_direct_connection', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetWifiP2PCapabilities
ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.GetWifiP2PCapabilities_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.wifi_direct.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.GetWifiP2PCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.wifi_direct.mojom.WifiDirectManagerPtr = ash.wifi_direct.mojom.WifiDirectManagerRemote;
ash.wifi_direct.mojom.WifiDirectManagerRequest = ash.wifi_direct.mojom.WifiDirectManagerPendingReceiver;


// Interface: WifiDirectConnection
ash.wifi_direct.mojom.WifiDirectConnection = {};

ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.wifi_direct.mojom.WifiDirectConnectionRemote = class {
  static get $interfaceName() {
    return 'ash.wifi_direct.mojom.WifiDirectConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver,
      handle);
    this.$ = new ash.wifi_direct.mojom.WifiDirectConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.wifi_direct.mojom.WifiDirectConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProperties() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec,
      []);
  }

  associateSocket(socket) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec,
      ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec,
      [socket]);
  }

};

ash.wifi_direct.mojom.WifiDirectConnection.getRemote = function() {
  let remote = new ash.wifi_direct.mojom.WifiDirectConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.wifi_direct.mojom.WifiDirectConnection',
    'context');
  return remote.$;
};

// ParamsSpec for GetProperties
ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnection.GetProperties_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.wifi_direct.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnection.GetProperties_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AssociateSocket
ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnection.AssociateSocket_Params',
      packedSize: 16,
      fields: [
        { name: 'socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.wifi_direct.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnection.AssociateSocket_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.wifi_direct.mojom.WifiDirectConnectionPtr = ash.wifi_direct.mojom.WifiDirectConnectionRemote;
ash.wifi_direct.mojom.WifiDirectConnectionRequest = ash.wifi_direct.mojom.WifiDirectConnectionPendingReceiver;

