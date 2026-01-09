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
};

// Enum: ConnectionStateType
arc.mojom.ConnectionStateType = {
  or: 0,
  or: 1,
  but: 2,
  kStateIdle: 3,
  but: 4,
  and: 5,
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
};

// Enum: Flag
arc.mojom.Flag = {
  b: 0,
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
  but: 4,
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
arc.mojom.VisibleNetworkDetails = class {
  constructor(values = {}) {
    this.bssid = values.bssid !== undefined ? values.bssid : 0;
  }
};

// Struct: ConfiguredNetworkDetails
arc.mojom.ConfiguredNetworkDetails = class {
  constructor(values = {}) {
    this.autoconnect = values.autoconnect !== undefined ? values.autoconnect : false;
    this.bssid = values.bssid !== undefined ? values.bssid : "";
  }
};

// Struct: PasspointCredentials
arc.mojom.PasspointCredentials = class {
  constructor(values = {}) {
  }
};

// Struct: PasspointRemovalProperties
arc.mojom.PasspointRemovalProperties = class {
  constructor(values = {}) {
  }
};

// Struct: EapCredentials
arc.mojom.EapCredentials = class {
  constructor(values = {}) {
    this.will = values.will !== undefined ? values.will : null;
  }
};

// Struct: IPConfiguration
arc.mojom.IPConfiguration = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : 0;
  }
};

// Struct: WiFi
arc.mojom.WiFi = class {
  constructor(values = {}) {
    this.bssid = values.bssid !== undefined ? values.bssid : "";
    this.rssi = values.rssi !== undefined ? values.rssi : 0;
  }
};

// Struct: NetworkConfiguration
arc.mojom.NetworkConfiguration = class {
  constructor(values = {}) {
    this.service_name = values.service_name !== undefined ? values.service_name : 0;
    this.host_mtu = values.host_mtu !== undefined ? values.host_mtu : 0;
    this.host_ipv4_prefix_length = values.host_ipv4_prefix_length !== undefined ? values.host_ipv4_prefix_length : 0;
    this.host_ipv4_address = values.host_ipv4_address !== undefined ? values.host_ipv4_address : "";
    this.host_ipv4_gateway = values.host_ipv4_gateway !== undefined ? values.host_ipv4_gateway : "";
    this.host_ipv6_prefix_length = values.host_ipv6_prefix_length !== undefined ? values.host_ipv6_prefix_length : 0;
    this.host_ipv6_global_addresses = values.host_ipv6_global_addresses !== undefined ? values.host_ipv6_global_addresses : "";
    this.host_ipv6_gateway = values.host_ipv6_gateway !== undefined ? values.host_ipv6_gateway : "";
    this.RDNSS = values.RDNSS !== undefined ? values.RDNSS : null;
    this.host_dns_addresses = values.host_dns_addresses !== undefined ? values.host_dns_addresses : "";
    this.by = values.by !== undefined ? values.by : null;
    this.DNSSL = values.DNSSL !== undefined ? values.DNSSL : null;
    this.host_search_domains = values.host_search_domains !== undefined ? values.host_search_domains : "";
    this.is_metered = values.is_metered !== undefined ? values.is_metered : 0;
    this.link_speed = values.link_speed !== undefined ? values.link_speed : "";
  }
};

// Struct: LinkSpeed
arc.mojom.LinkSpeed = class {
  constructor(values = {}) {
  }
};

// Struct: WifiConfiguration
arc.mojom.WifiConfiguration = class {
  constructor(values = {}) {
  }
};

// Struct: StaticIpv4Configuration
arc.mojom.StaticIpv4Configuration = class {
  constructor(values = {}) {
  }
};

// Struct: PacUrlProxyConfig
arc.mojom.PacUrlProxyConfig = class {
  constructor(values = {}) {
  }
};

// Struct: ManualProxyConfig
arc.mojom.ManualProxyConfig = class {
  constructor(values = {}) {
  }
};

// Struct: GetNetworksResponseType
arc.mojom.GetNetworksResponseType = class {
  constructor(values = {}) {
    this.networks = values.networks !== undefined ? values.networks : [];
  }
};

// Struct: AndroidVpnConfiguration
arc.mojom.AndroidVpnConfiguration = class {
  constructor(values = {}) {
  }
};

// Struct: ArcDnsResolutionTestResult
arc.mojom.ArcDnsResolutionTestResult = class {
  constructor(values = {}) {
    this.duration_ms = values.duration_ms !== undefined ? values.duration_ms : 0;
  }
};

// Struct: ArcHttpTestResult
arc.mojom.ArcHttpTestResult = class {
  constructor(values = {}) {
    this.duration_ms = values.duration_ms !== undefined ? values.duration_ms : 0;
  }
};

// Struct: ArcPingTestResult
arc.mojom.ArcPingTestResult = class {
  constructor(values = {}) {
    this.duration_ms = values.duration_ms !== undefined ? values.duration_ms : 0;
  }
};

// Struct: LohsConfig
arc.mojom.LohsConfig = class {
  constructor(values = {}) {
  }
};

// Struct: PasspointApprovalRequest
arc.mojom.PasspointApprovalRequest = class {
  constructor(values = {}) {
    this.app_name = values.app_name !== undefined ? values.app_name : "";
    this.friendly_name = values.friendly_name !== undefined ? values.friendly_name : "";
    this.subscription_expiration_time_ms = values.subscription_expiration_time_ms !== undefined ? values.subscription_expiration_time_ms : 0;
  }
};

// Struct: PasspointApprovalResponse
arc.mojom.PasspointApprovalResponse = class {
  constructor(values = {}) {
    this.allowed = values.allowed !== undefined ? values.allowed : false;
  }
};

// Struct: SocketConnectionEvent
arc.mojom.SocketConnectionEvent = class {
  constructor(values = {}) {
  }
};

// Interface: NetHost
arc.mojom.NetHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NetHost';
  }

};

arc.mojom.NetHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NetInstance
arc.mojom.NetInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NetInstance';
  }

};

arc.mojom.NetInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
