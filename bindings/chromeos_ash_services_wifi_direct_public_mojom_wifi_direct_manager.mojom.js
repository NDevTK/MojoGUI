// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/wifi_direct/public/mojom/wifi_direct_manager.mojom
// Module: ash.wifi_direct.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.wifi_direct = ash.wifi_direct || {};
ash.wifi_direct.wifi_direct.mojom = ash.wifi_direct.wifi_direct.mojom || {};


// Enum: WifiDirectOperationResult
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectOperationResult = {
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
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectOperationResultSpec = { $: mojo.internal.Enum() };

// Struct: WifiP2PCapabilities
ash.wifi_direct.wifi_direct.mojom.mojom.WifiP2PCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiP2PCapabilities',
      packedSize: 16,
      fields: [
        { name: 'is_owner_ready', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_client_ready', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_p2p_supported', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WifiCredentials
ash.wifi_direct.wifi_direct.mojom.mojom.WifiCredentialsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiCredentials',
      packedSize: 24,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'passphrase', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WifiDirectConnectionProperties
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnectionProperties',
      packedSize: 32,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiCredentialsSpec, nullable: false, minVersion: 0 },
        { name: 'frequency', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'ipv4_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: WifiDirectManager
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager = {};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerRemote = class {
  static get $interfaceName() {
    return 'ash.wifi_direct.mojom.WifiDirectManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerPendingReceiver,
      handle);
    this.$ = new ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWifiDirectGroup(credentials) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec,
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec,
      [credentials]);
  }

  connectToWifiDirectGroup(credentials, frequency) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec,
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec,
      [credentials, frequency]);
  }

  getWifiP2PCapabilities() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec,
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec,
      []);
  }

};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager.getRemote = function() {
  let remote = new ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.wifi_direct.mojom.WifiDirectManager',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWifiDirectGroup
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_CreateWifiDirectGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.CreateWifiDirectGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiCredentialsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_CreateWifiDirectGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.CreateWifiDirectGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiDirectOperationResultSpec, nullable: false, minVersion: 0 },
        { name: 'wifi_direct_connection', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConnectToWifiDirectGroup
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.ConnectToWifiDirectGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiCredentialsSpec, nullable: false, minVersion: 0 },
        { name: 'frequency_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'frequency_$value', originalFieldName: 'frequency' } },
        { name: 'frequency_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'frequency_$flag', originalFieldName: 'frequency' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_ConnectToWifiDirectGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.ConnectToWifiDirectGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiDirectOperationResultSpec, nullable: false, minVersion: 0 },
        { name: 'wifi_direct_connection', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetWifiP2PCapabilities
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_GetWifiP2PCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.GetWifiP2PCapabilities_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManager_GetWifiP2PCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectManager.GetWifiP2PCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiP2PCapabilitiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerPtr = ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerRemote;
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerRequest = ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectManagerPendingReceiver;


// Interface: WifiDirectConnection
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection = {};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionRemote = class {
  static get $interfaceName() {
    return 'ash.wifi_direct.mojom.WifiDirectConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionPendingReceiver,
      handle);
    this.$ = new ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProperties() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection_GetProperties_ParamsSpec,
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec,
      []);
  }

  associateSocket(socket) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec,
      ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec,
      [socket]);
  }

};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection.getRemote = function() {
  let remote = new ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.wifi_direct.mojom.WifiDirectConnection',
    'context');
  return remote.$;
};

// ParamsSpec for GetProperties
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection_GetProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnection.GetProperties_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection_GetProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnection.GetProperties_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: ash.wifi_direct.mojom.WifiDirectConnectionPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AssociateSocket
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection_AssociateSocket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnection.AssociateSocket_Params',
      packedSize: 16,
      fields: [
        { name: 'socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnection_AssociateSocket_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.wifi_direct.mojom.WifiDirectConnection.AssociateSocket_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionPtr = ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionRemote;
ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionRequest = ash.wifi_direct.wifi_direct.mojom.mojom.WifiDirectConnectionPendingReceiver;

