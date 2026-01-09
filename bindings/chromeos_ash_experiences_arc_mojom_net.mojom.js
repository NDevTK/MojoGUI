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
    this.friendly_name@8 = values.friendly_name@8 !== undefined ? values.friendly_name@8 : 0;
    this.subscription_expiration_time_ms@9 = values.subscription_expiration_time_ms@9 !== undefined ? values.subscription_expiration_time_ms@9 : 0;
  }
};

// Struct: PasspointRemovalProperties
arc.mojom.PasspointRemovalProperties = class {
  constructor(values = {}) {
    this.package_name@1 = values.package_name@1 !== undefined ? values.package_name@1 : "";
  }
};

// Struct: EapCredentials
arc.mojom.EapCredentials = class {
  constructor(values = {}) {
    this.phase2_method@1 = values.phase2_method@1 !== undefined ? values.phase2_method@1 : null;
    this.client_certificate_key@8 = values.client_certificate_key@8 !== undefined ? values.client_certificate_key@8 : "";
    this.subject_match@9 = values.subject_match@9 !== undefined ? values.subject_match@9 : "";
    this.subject_alternative_name_match_list@10 = values.subject_alternative_name_match_list@10 !== undefined ? values.subject_alternative_name_match_list@10 : "";
    this.will = values.will !== undefined ? values.will : null;
    this.tls_version_max@12 = values.tls_version_max@12 !== undefined ? values.tls_version_max@12 : "";
    this.use_system_cas@13 = values.use_system_cas@13 !== undefined ? values.use_system_cas@13 : false;
    this.use_proactive_key_caching@14 = values.use_proactive_key_caching@14 !== undefined ? values.use_proactive_key_caching@14 : false;
    this.use_login_password@15 = values.use_login_password@15 !== undefined ? values.use_login_password@15 : false;
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
    this.downlink_speed_kbps@1 = values.downlink_speed_kbps@1 !== undefined ? values.downlink_speed_kbps@1 : 0;
  }
};

// Struct: WifiConfiguration
arc.mojom.WifiConfiguration = class {
  constructor(values = {}) {
    this.bssid@3 = values.bssid@3 !== undefined ? values.bssid@3 : 0;
    this.static_ipv4_config@11 = values.static_ipv4_config@11 !== undefined ? values.static_ipv4_config@11 : "";
    this.dns_servers@13 = values.dns_servers@13 !== undefined ? values.dns_servers@13 : "";
    this.ignored. = values.ignored. !== undefined ? values.ignored. : null;
    this.to. = values.to. !== undefined ? values.to. : null;
    this.bssid_allowlist@14 = values.bssid_allowlist@14 !== undefined ? values.bssid_allowlist@14 : "";
  }
};

// Struct: StaticIpv4Configuration
arc.mojom.StaticIpv4Configuration = class {
  constructor(values = {}) {
    this.prefix_length@2 = values.prefix_length@2 !== undefined ? values.prefix_length@2 : 0;
  }
};

// Struct: PacUrlProxyConfig
arc.mojom.PacUrlProxyConfig = class {
  constructor(values = {}) {
    this.pac_url@0 = values.pac_url@0 !== undefined ? values.pac_url@0 : null;
  }
};

// Struct: ManualProxyConfig
arc.mojom.ManualProxyConfig = class {
  constructor(values = {}) {
    this.exclusion_list@2 = values.exclusion_list@2 !== undefined ? values.exclusion_list@2 : 0;
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
    this.app_label@1 = values.app_label@1 !== undefined ? values.app_label@1 : "";
    this.split_include@5 = values.split_include@5 !== undefined ? values.split_include@5 : false;
    this.domains@8 = values.domains@8 !== undefined ? values.domains@8 : "";
    this.mtu@10 = values.mtu@10 !== undefined ? values.mtu@10 : 0;
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
    this.passphrase@3 = values.passphrase@3 !== undefined ? values.passphrase@3 : "";
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
    this.proto@4 = values.proto@4 !== undefined ? values.proto@4 : 0;
    this.qos_category@7 = values.qos_category@7 !== undefined ? values.qos_category@7 : null;
  }
};

// Interface: NetHost
arc.mojom.NetHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NetHost';
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  4(is_enabled) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(is_enabled)
      resolve({});
    });
  }

  5(cfg) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(cfg)
      resolve({});
    });
  }

  6(guid) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(guid)
      resolve({});
    });
  }

  20(guid, cfg) {
    // Method: 20
    return new Promise((resolve) => {
      // Call: 20(guid, cfg)
      resolve({});
    });
  }

  7(guid) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(guid)
      resolve({});
    });
  }

  8(guid) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(guid)
      resolve({});
    });
  }

  10(type) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(type)
      resolve({});
    });
  }

  design(NetInstance) {
    // Method: design
    // Call: design(NetInstance)
  }

  11(cfg) {
    // Method: 11
    // Call: 11(cfg)
  }

  25(cfg) {
    // Method: 25
    // Call: 25(cfg)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  12(state) {
    // Method: 12
    // Call: 12(state)
  }

  26() {
    // Method: 26
    // Call: 26()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  13(vpnPackage, lockdown) {
    // Method: 13
    // Call: 13(vpnPackage, lockdown)
  }

  21(request) {
    // Method: 21
    return new Promise((resolve) => {
      // Call: 21(request)
      resolve({});
    });
  }

  14(credentials) {
    // Method: 14
    // Call: 14(credentials)
  }

  16(properties) {
    // Method: 16
    // Call: 16(properties)
  }

  17() {
    // Method: 17
    // Call: 17()
  }

  18(config) {
    // Method: 18
    return new Promise((resolve) => {
      // Call: 18(config)
      resolve({});
    });
  }

  19() {
    // Method: 19
    // Call: 19()
  }

  22(is_held) {
    // Method: 22
    // Call: 22(is_held)
  }

  23(msg) {
    // Method: 23
    // Call: 23(msg)
  }

  24(msg) {
    // Method: 24
    // Call: 24(msg)
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

  6(host_remote) {
    // Method: 6
    // Call: 6(host_remote)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  3(is_enabled) {
    // Method: 3
    // Call: 3(is_enabled)
  }

  design(NetHost) {
    // Method: design
    // Call: design(NetHost)
  }

  4() {
    // Method: 4
    // Call: 4()
  }

  5() {
    // Method: 5
    // Call: 5()
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  7(network) {
    // Method: 7
    // Call: 7(network)
  }

  8(transport_name, host_name) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(transport_name, host_name)
      resolve({});
    });
  }

  9(transport_name, url) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(transport_name, url)
      resolve({});
    });
  }

  10(transport_name, ip_address) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(transport_name, ip_address)
      resolve({});
    });
  }

  11(flag, value) {
    // Method: 11
    // Call: 11(flag, value)
  }

};

arc.mojom.NetInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
