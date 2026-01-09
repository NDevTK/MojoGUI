// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/net.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: NetworkResult
arc.mojom.NetworkResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: GetNetworksRequestType
arc.mojom.GetNetworksRequestType = {
  CONFIGURED_ONLY: 0,
  VISIBLE_ONLY: 1,
};

// Enum: ConnectionStateType
arc.mojom.ConnectionStateType = {
  CONNECTED: 0,
  CONNECTING: 1,
  NOT_CONNECTED: 2,
  PORTAL: 3,
  ONLINE: 4,
};

// Enum: EapMethod
arc.mojom.EapMethod = {
  kNone: 0,
  kLeap: 1,
  kPeap: 2,
  kTls: 3,
  kTtls: 4,
};

// Enum: EapPhase2Method
arc.mojom.EapPhase2Method = {
  kNone: 0,
  kPap: 1,
  kMschap: 2,
  kMschapv2: 3,
};

// Enum: KeyManagement
arc.mojom.KeyManagement = {
  kNone: 0,
  kIeee8021X: 1,
  kFtEap: 2,
  kFtPsk: 3,
  kFtSae: 4,
  kWpaEap: 5,
  kWpaEapSha256: 6,
  kWpaPsk: 7,
  kSae: 8,
};

// Enum: IPAddressType
arc.mojom.IPAddressType = {
  IPV4: 0,
  IPV6: 1,
};

// Enum: TetheringClientState
arc.mojom.TetheringClientState = {
  CONFIRMED: 0,
  NOT_DETECTED: 1,
  SUSPECTED: 2,
};

// Enum: NetworkType
arc.mojom.NetworkType = {
  CELLULAR: 0,
  ETHERNET: 1,
  VPN: 2,
  WIFI: 3,
};

// Enum: MeteredOverride
arc.mojom.MeteredOverride = {
  kMetered: 0,
  kNotmetered: 1,
};

// Enum: Flag
arc.mojom.Flag = {
  DEPRECATED_ENABLE_ARC_HOST_VPN: 0,
};

// Enum: WifiBand
arc.mojom.WifiBand = {
  k2Ghz: 0,
  k5Ghz: 1,
  k6Ghz: 2,
  k60Ghz: 3,
};

// Enum: LohsStatus
arc.mojom.LohsStatus = {
  kSuccess: 0,
  kErrorGeneric: 1,
  kErrorIncompatibleMode: 2,
  kErrorTetheringDisallowed: 3,
};

// Enum: IpProtocol
arc.mojom.IpProtocol = {
  kTcp: 0,
  kUdp: 1,
};

// Enum: SocketEvent
arc.mojom.SocketEvent = {
  kOpen: 0,
  kClose: 1,
};

// Enum: QosCategory
arc.mojom.QosCategory = {
  kRealtimeInteractive: 0,
  kMultimediaConferencing: 1,
};

// Struct: VisibleNetworkDetails
arc.mojom.VisibleNetworkDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VisibleNetworkDetails',
      packedSize: 24,
      fields: [
        { name: 'frequency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'signal_strength', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bssid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConfiguredNetworkDetails
arc.mojom.ConfiguredNetworkDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ConfiguredNetworkDetails',
      packedSize: 24,
      fields: [
        { name: 'passphrase', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'autoconnect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PasspointCredentials
arc.mojom.PasspointCredentialsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PasspointCredentials',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PasspointRemovalProperties
arc.mojom.PasspointRemovalPropertiesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PasspointRemovalProperties',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EapCredentials
arc.mojom.EapCredentialsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.EapCredentials',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IPConfiguration
arc.mojom.IPConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IPConfiguration',
      packedSize: 48,
      fields: [
        { name: 'gateway', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'ip_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name_servers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'routing_prefix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.IPAddressTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WiFi
arc.mojom.WiFiSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WiFi',
      packedSize: 56,
      fields: [
        { name: 'bssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'frequency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'hex_ssid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'hidden_ssid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'security', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.SecurityTypeSpec, nullable: false },
        { name: 'signal_strength', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkConfiguration
arc.mojom.NetworkConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetworkConfiguration',
      packedSize: 56,
      fields: [
        { name: 'connection_state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ConnectionStateTypeSpec, nullable: false },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'deprecated_ip_configs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'deprecated_mac_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.NetworkTypeSpec, nullable: false },
        { name: 'wifi', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.WiFiSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LinkSpeed
arc.mojom.LinkSpeedSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LinkSpeed',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WifiConfiguration
arc.mojom.WifiConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WifiConfiguration',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StaticIpv4Configuration
arc.mojom.StaticIpv4ConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.StaticIpv4Configuration',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PacUrlProxyConfig
arc.mojom.PacUrlProxyConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PacUrlProxyConfig',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManualProxyConfig
arc.mojom.ManualProxyConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ManualProxyConfig',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetNetworksResponseType
arc.mojom.GetNetworksResponseTypeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.GetNetworksResponseType',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NetworkResultSpec, nullable: false },
        { name: 'networks', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AndroidVpnConfiguration
arc.mojom.AndroidVpnConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AndroidVpnConfiguration',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcDnsResolutionTestResult
arc.mojom.ArcDnsResolutionTestResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcDnsResolutionTestResult',
      packedSize: 32,
      fields: [
        { name: 'is_successful', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'response_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'duration_ms', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcHttpTestResult
arc.mojom.ArcHttpTestResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcHttpTestResult',
      packedSize: 40,
      fields: [
        { name: 'is_successful', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'status_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'response_header_fields', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'duration_ms', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcPingTestResult
arc.mojom.ArcPingTestResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcPingTestResult',
      packedSize: 24,
      fields: [
        { name: 'is_successful', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'duration_ms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LohsConfig
arc.mojom.LohsConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LohsConfig',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PasspointApprovalRequest
arc.mojom.PasspointApprovalRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PasspointApprovalRequest',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'app_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PasspointApprovalResponse
arc.mojom.PasspointApprovalResponseSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PasspointApprovalResponse',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SocketConnectionEvent
arc.mojom.SocketConnectionEventSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SocketConnectionEvent',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NetHost
arc.mojom.NetHost = {};

arc.mojom.NetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NetHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NetHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.NetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.NetHost.getRemote = function() {
  let remote = new arc.mojom.NetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NetHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.NetHostPtr = arc.mojom.NetHostRemote;
arc.mojom.NetHostRequest = arc.mojom.NetHostPendingReceiver;


// Interface: NetInstance
arc.mojom.NetInstance = {};

arc.mojom.NetInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NetInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NetInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NetInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.NetInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NetInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.NetInstance.getRemote = function() {
  let remote = new arc.mojom.NetInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NetInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.NetInstancePtr = arc.mojom.NetInstanceRemote;
arc.mojom.NetInstanceRequest = arc.mojom.NetInstancePendingReceiver;

