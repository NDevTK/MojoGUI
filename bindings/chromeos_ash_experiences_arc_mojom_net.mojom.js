// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/net.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};
var url = url || {};

arc.mojom.NetworkResultSpec = { $: mojo.internal.Enum() };
arc.mojom.GetNetworksRequestTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ConnectionStateTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.EapMethodSpec = { $: mojo.internal.Enum() };
arc.mojom.EapPhase2MethodSpec = { $: mojo.internal.Enum() };
arc.mojom.KeyManagementSpec = { $: mojo.internal.Enum() };
arc.mojom.IPAddressTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.TetheringClientStateSpec = { $: mojo.internal.Enum() };
arc.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.MeteredOverrideSpec = { $: mojo.internal.Enum() };
arc.mojom.FlagSpec = { $: mojo.internal.Enum() };
arc.mojom.WifiBandSpec = { $: mojo.internal.Enum() };
arc.mojom.LohsStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.IpProtocolSpec = { $: mojo.internal.Enum() };
arc.mojom.SocketEventSpec = { $: mojo.internal.Enum() };
arc.mojom.QosCategorySpec = { $: mojo.internal.Enum() };
arc.mojom.NetworkDetailsSpec = { $: {} };
arc.mojom.ArcProxyInfoSpec = { $: {} };
arc.mojom.VisibleNetworkDetailsSpec = { $: {} };
arc.mojom.ConfiguredNetworkDetailsSpec = { $: {} };
arc.mojom.PasspointCredentialsSpec = { $: {} };
arc.mojom.PasspointRemovalPropertiesSpec = { $: {} };
arc.mojom.EapCredentialsSpec = { $: {} };
arc.mojom.IPConfigurationSpec = { $: {} };
arc.mojom.WiFiSpec = { $: {} };
arc.mojom.NetworkConfigurationSpec = { $: {} };
arc.mojom.LinkSpeedSpec = { $: {} };
arc.mojom.WifiConfigurationSpec = { $: {} };
arc.mojom.StaticIpv4ConfigurationSpec = { $: {} };
arc.mojom.PacUrlProxyConfigSpec = { $: {} };
arc.mojom.ManualProxyConfigSpec = { $: {} };
arc.mojom.GetNetworksResponseTypeSpec = { $: {} };
arc.mojom.AndroidVpnConfigurationSpec = { $: {} };
arc.mojom.ArcDnsResolutionTestResultSpec = { $: {} };
arc.mojom.ArcHttpTestResultSpec = { $: {} };
arc.mojom.ArcPingTestResultSpec = { $: {} };
arc.mojom.LohsConfigSpec = { $: {} };
arc.mojom.PasspointApprovalRequestSpec = { $: {} };
arc.mojom.PasspointApprovalResponseSpec = { $: {} };
arc.mojom.SocketConnectionEventSpec = { $: {} };
arc.mojom.NetHost = {};
arc.mojom.NetHost.$interfaceName = 'arc.mojom.NetHost';
arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec = { $: {} };
arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_StartScan_ParamsSpec = { $: {} };
arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec = { $: {} };
arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_CreateNetwork_ParamsSpec = { $: {} };
arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_ForgetNetwork_ParamsSpec = { $: {} };
arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec = { $: {} };
arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_StartConnect_ParamsSpec = { $: {} };
arc.mojom.NetHost_StartConnect_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_StartDisconnect_ParamsSpec = { $: {} };
arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_GetNetworks_ParamsSpec = { $: {} };
arc.mojom.NetHost_GetNetworks_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec = { $: {} };
arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec = { $: {} };
arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec = { $: {} };
arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec = { $: {} };
arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec = { $: {} };
arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec = { $: {} };
arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec = { $: {} };
arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec = { $: {} };
arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec = { $: {} };
arc.mojom.NetHost_StartLohs_ParamsSpec = { $: {} };
arc.mojom.NetHost_StartLohs_ResponseParamsSpec = { $: {} };
arc.mojom.NetHost_StopLohs_ParamsSpec = { $: {} };
arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec = { $: {} };
arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec = { $: {} };
arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec = { $: {} };
arc.mojom.NetInstance = {};
arc.mojom.NetInstance.$interfaceName = 'arc.mojom.NetInstance';
arc.mojom.NetInstance_Init_ParamsSpec = { $: {} };
arc.mojom.NetInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.NetInstance_ScanCompleted_ParamsSpec = { $: {} };
arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec = { $: {} };
arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec = { $: {} };
arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec = { $: {} };
arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec = { $: {} };
arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec = { $: {} };
arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec = { $: {} };
arc.mojom.NetInstance_HttpTest_ParamsSpec = { $: {} };
arc.mojom.NetInstance_HttpTest_ResponseParamsSpec = { $: {} };
arc.mojom.NetInstance_PingTest_ParamsSpec = { $: {} };
arc.mojom.NetInstance_PingTest_ResponseParamsSpec = { $: {} };
arc.mojom.NetInstance_SetUpFlag_ParamsSpec = { $: {} };

// Enum: NetworkResult
arc.mojom.NetworkResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: GetNetworksRequestType
arc.mojom.GetNetworksRequestType = {
  CONFIGURED_ONLY: 0,
  VISIBLE_ONLY: 1,
  MinVersion: 1,
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
  kNone: 0,
  kMetered: 1,
  kNotmetered: 2,
};

// Enum: Flag
arc.mojom.Flag = {
  UNKNOWN: 0,
  DEPRECATED_ENABLE_ARC_HOST_VPN: 1,
};

// Enum: WifiBand
arc.mojom.WifiBand = {
  kUnknown: 0,
  k2Ghz: 1,
  k5Ghz: 2,
  k6Ghz: 3,
  k60Ghz: 4,
};

// Enum: LohsStatus
arc.mojom.LohsStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kErrorGeneric: 2,
  kErrorIncompatibleMode: 3,
  kErrorTetheringDisallowed: 4,
  MinVersion: 4,
  MinVersion: 4,
};

// Enum: IpProtocol
arc.mojom.IpProtocol = {
  kUnknown: 0,
  kTcp: 1,
  kUdp: 2,
};

// Enum: SocketEvent
arc.mojom.SocketEvent = {
  kUnknown: 0,
  kOpen: 1,
  kClose: 2,
};

// Enum: QosCategory
arc.mojom.QosCategory = {
  kUnknown: 0,
  kRealtimeInteractive: 1,
  kMultimediaConferencing: 2,
};

// Union: NetworkDetails
mojo.internal.Union(
    arc.mojom.NetworkDetailsSpec, 'arc.mojom.NetworkDetails', {
      'visible': {
        'ordinal': 0,
        'type': arc.mojom.VisibleNetworkDetailsSpec,
        'nullable': false,
      },
      'configured': {
        'ordinal': 1,
        'type': arc.mojom.ConfiguredNetworkDetailsSpec,
        'nullable': false,
      },
    });

// Union: ArcProxyInfo
mojo.internal.Union(
    arc.mojom.ArcProxyInfoSpec, 'arc.mojom.ArcProxyInfo', {
      'manual_proxy': {
        'ordinal': 0,
        'type': arc.mojom.ManualProxyConfigSpec,
        'nullable': false,
      },
      'pac_url_proxy': {
        'ordinal': 1,
        'type': arc.mojom.PacUrlProxyConfigSpec,
        'nullable': false,
      },
    });

// Struct: VisibleNetworkDetails
mojo.internal.Struct(
    arc.mojom.VisibleNetworkDetailsSpec, 'arc.mojom.VisibleNetworkDetails', [
      mojo.internal.StructField('frequency', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ConfiguredNetworkDetails
mojo.internal.Struct(
    arc.mojom.ConfiguredNetworkDetailsSpec, 'arc.mojom.ConfiguredNetworkDetails', [
      mojo.internal.StructField('passphrase', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('autoconnect', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bssid', 16, 0, mojo.internal.String, null, true, 33, undefined),
    ],
    [[0, 24], [33, 32]]);

// Struct: PasspointCredentials
mojo.internal.Struct(
    arc.mojom.PasspointCredentialsSpec, 'arc.mojom.PasspointCredentials', [
      mojo.internal.StructField('domains', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('realm', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('home_ois', 16, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('required_home_ois', 24, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('roaming_consortium_ois', 32, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('eap', 40, 0, arc.mojom.EapCredentialsSpec, null, false, 0, undefined),
      mojo.internal.StructField('metered', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('package_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('friendly_name', 64, 0, mojo.internal.String, null, true, 22, undefined),
      mojo.internal.StructField('subscription_expiration_time_ms', 72, 0, mojo.internal.Int64, 0, false, 22, undefined),
    ],
    [[0, 72], [22, 88]]);

// Struct: PasspointRemovalProperties
mojo.internal.Struct(
    arc.mojom.PasspointRemovalPropertiesSpec, 'arc.mojom.PasspointRemovalProperties', [
      mojo.internal.StructField('fqdn', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('package_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EapCredentials
mojo.internal.Struct(
    arc.mojom.EapCredentialsSpec, 'arc.mojom.EapCredentials', [
      mojo.internal.StructField('method', 80, 0, arc.mojom.EapMethodSpec, null, false, 0, undefined),
      mojo.internal.StructField('phase2_method', 84, 0, arc.mojom.EapPhase2MethodSpec, null, false, 0, undefined),
      mojo.internal.StructField('anonymous_identity', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('identity', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('key_management', 88, 0, arc.mojom.KeyManagementSpec, null, false, 0, undefined),
      mojo.internal.StructField('ca_certificate_pem', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('client_certificate_pem', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('client_certificate_key', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('subject_match', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('subject_alternative_name_match_list', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('domain_suffix_match_list', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('tls_version_max', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('use_system_cas', 92, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_proactive_key_caching', 92, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_login_password', 92, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: IPConfiguration
mojo.internal.Struct(
    arc.mojom.IPConfigurationSpec, 'arc.mojom.IPConfiguration', [
      mojo.internal.StructField('gateway', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ip_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name_servers', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('routing_prefix', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('type', 28, 0, arc.mojom.IPAddressTypeSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WiFi
mojo.internal.Struct(
    arc.mojom.WiFiSpec, 'arc.mojom.WiFi', [
      mojo.internal.StructField('bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('hex_ssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('security', 20, 0, arc.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_passpoint', 28, 1, mojo.internal.Bool, false, false, 16, undefined),
      mojo.internal.StructField('fqdn', 32, 0, mojo.internal.String, null, true, 16, undefined),
      mojo.internal.StructField('rssi', 30, 0, mojo.internal.Int16, 0, false, 23, undefined),
    ],
    [[0, 40], [16, 48], [23, 40]]);

// Struct: NetworkConfiguration
mojo.internal.Struct(
    arc.mojom.NetworkConfigurationSpec, 'arc.mojom.NetworkConfiguration', [
      mojo.internal.StructField('connection_state', 32, 0, arc.mojom.ConnectionStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_ip_configs', 8, 0, mojo.internal.Array(arc.mojom.IPConfigurationSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('deprecated_mac_address', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('type', 36, 0, arc.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('wifi', 24, 0, arc.mojom.WiFiSpec, null, true, 0, undefined),
      mojo.internal.StructField('deprecated_tethering_client_state', 40, 0, arc.mojom.TetheringClientStateSpec, null, false, 8, undefined),
      mojo.internal.StructField('network_interface', 48, 0, mojo.internal.String, null, true, 10, undefined),
      mojo.internal.StructField('is_default_network', 44, 0, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('service_name', 56, 0, mojo.internal.String, null, true, 12, undefined),
      mojo.internal.StructField('host_mtu', 136, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('host_ipv4_prefix_length', 140, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('host_ipv4_address', 64, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('host_ipv4_gateway', 72, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('host_ipv6_prefix_length', 144, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('host_ipv6_global_addresses', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('host_ipv6_gateway', 88, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('host_dns_addresses', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('host_search_domains', 104, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('arc_ipv4_prefix_length', 148, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('arc_ipv4_address', 112, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arc_ipv4_gateway', 120, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arc_network_interface', 128, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('is_metered', 44, 1, mojo.internal.Bool, false, false, 14, undefined),
      mojo.internal.StructField('include_routes', 152, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 15, undefined),
      mojo.internal.StructField('exclude_routes', 160, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 15, undefined),
      mojo.internal.StructField('dns_proxy_addresses', 168, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 19, undefined),
      mojo.internal.StructField('link_speed', 176, 0, arc.mojom.LinkSpeedSpec, null, true, 28, undefined),
    ],
    [[0, 48], [8, 56], [10, 64], [11, 56], [12, 72], [13, 160], [14, 56], [15, 176], [19, 184], [28, 192]]);

// Struct: LinkSpeed
mojo.internal.Struct(
    arc.mojom.LinkSpeedSpec, 'arc.mojom.LinkSpeed', [
      mojo.internal.StructField('uplink_speed_kbps', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('downlink_speed_kbps', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WifiConfiguration
mojo.internal.Struct(
    arc.mojom.WifiConfigurationSpec, 'arc.mojom.WifiConfiguration', [
      mojo.internal.StructField('ssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('guid', 32, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('hexssid', 56, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('details', 40, 0, arc.mojom.NetworkDetailsSpec, null, true, 2, undefined),
      mojo.internal.StructField('eap', 64, 0, arc.mojom.EapCredentialsSpec, null, true, 16, undefined),
      mojo.internal.StructField('metered_override', 112, 0, arc.mojom.MeteredOverrideSpec, null, false, 20, undefined),
      mojo.internal.StructField('http_proxy', 72, 0, arc.mojom.ArcProxyInfoSpec, null, true, 20, undefined),
      mojo.internal.StructField('static_ipv4_config', 88, 0, arc.mojom.StaticIpv4ConfigurationSpec, null, true, 20, undefined),
      mojo.internal.StructField('domains', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 20, undefined),
      mojo.internal.StructField('dns_servers', 104, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 20, undefined),
      mojo.internal.StructField('bssid_allowlist', 120, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 26, undefined),
    ],
    [[0, 40], [1, 48], [2, 72], [16, 80], [20, 128], [26, 136]]);

// Struct: StaticIpv4Configuration
mojo.internal.Struct(
    arc.mojom.StaticIpv4ConfigurationSpec, 'arc.mojom.StaticIpv4Configuration', [
      mojo.internal.StructField('ipv4_addr', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('gateway_ipv4_addr', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('prefix_length', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PacUrlProxyConfig
mojo.internal.Struct(
    arc.mojom.PacUrlProxyConfigSpec, 'arc.mojom.PacUrlProxyConfig', [
      mojo.internal.StructField('pac_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManualProxyConfig
mojo.internal.Struct(
    arc.mojom.ManualProxyConfigSpec, 'arc.mojom.ManualProxyConfig', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('exclusion_list', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetNetworksResponseType
mojo.internal.Struct(
    arc.mojom.GetNetworksResponseTypeSpec, 'arc.mojom.GetNetworksResponseType', [
      mojo.internal.StructField('status', 8, 0, arc.mojom.NetworkResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(arc.mojom.NetworkConfigurationSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AndroidVpnConfiguration
mojo.internal.Struct(
    arc.mojom.AndroidVpnConfigurationSpec, 'arc.mojom.AndroidVpnConfiguration', [
      mojo.internal.StructField('app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('tunnel_chrome_traffic', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ipv4_gateway', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('split_include', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('split_exclude', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('nameservers', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('domains', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('http_proxy', 72, 0, arc.mojom.ArcProxyInfoSpec, null, true, 21, undefined),
      mojo.internal.StructField('mtu', 68, 0, mojo.internal.Int32, 0, false, 38, undefined),
    ],
    [[0, 80], [21, 96], [38, 80]]);

// Struct: ArcDnsResolutionTestResult
mojo.internal.Struct(
    arc.mojom.ArcDnsResolutionTestResultSpec, 'arc.mojom.ArcDnsResolutionTestResult', [
      mojo.internal.StructField('is_successful', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('response_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcHttpTestResult
mojo.internal.Struct(
    arc.mojom.ArcHttpTestResultSpec, 'arc.mojom.ArcHttpTestResult', [
      mojo.internal.StructField('is_successful', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('status_code', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('response_header_fields', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ArcPingTestResult
mojo.internal.Struct(
    arc.mojom.ArcPingTestResultSpec, 'arc.mojom.ArcPingTestResult', [
      mojo.internal.StructField('is_successful', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LohsConfig
mojo.internal.Struct(
    arc.mojom.LohsConfigSpec, 'arc.mojom.LohsConfig', [
      mojo.internal.StructField('band', 16, 0, arc.mojom.WifiBandSpec, null, false, 0, undefined),
      mojo.internal.StructField('security_type', 20, 0, arc.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('hexssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('passphrase', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PasspointApprovalRequest
mojo.internal.Struct(
    arc.mojom.PasspointApprovalRequestSpec, 'arc.mojom.PasspointApprovalRequest', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('friendly_name', 16, 0, mojo.internal.String, null, true, 31, undefined),
      mojo.internal.StructField('subscription_expiration_time_ms', 24, 0, mojo.internal.Int64, 0, false, 31, undefined),
    ],
    [[0, 24], [31, 40]]);

// Struct: PasspointApprovalResponse
mojo.internal.Struct(
    arc.mojom.PasspointApprovalResponseSpec, 'arc.mojom.PasspointApprovalResponse', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SocketConnectionEvent
mojo.internal.Struct(
    arc.mojom.SocketConnectionEventSpec, 'arc.mojom.SocketConnectionEvent', [
      mojo.internal.StructField('src_addr', 0, 0, network.mojom.IPAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('dst_addr', 8, 0, network.mojom.IPAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('src_port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('dst_port', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('proto', 24, 0, arc.mojom.IpProtocolSpec, null, false, 0, undefined),
      mojo.internal.StructField('event', 28, 0, arc.mojom.SocketEventSpec, null, false, 0, undefined),
      mojo.internal.StructField('app_category', 32, 0, arc.mojom.AppCategorySpec, null, false, 0, undefined),
      mojo.internal.StructField('qos_category', 36, 0, arc.mojom.QosCategorySpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: NetHost
mojo.internal.Struct(
    arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec, 'arc.mojom.NetHost_GetWifiEnabledState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.NetHost_GetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartScan_ParamsSpec, 'arc.mojom.NetHost_StartScan_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec, 'arc.mojom.NetHost_SetWifiEnabledState_Params', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.NetHost_SetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_CreateNetwork_ParamsSpec, 'arc.mojom.NetHost_CreateNetwork_Params', [
      mojo.internal.StructField('cfg', 0, 0, arc.mojom.WifiConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_CreateNetwork_ResponseParams', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_ForgetNetwork_ParamsSpec, 'arc.mojom.NetHost_ForgetNetwork_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_ForgetNetwork_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec, 'arc.mojom.NetHost_UpdateWifiNetwork_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cfg', 8, 0, arc.mojom.WifiConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_UpdateWifiNetwork_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartConnect_ParamsSpec, 'arc.mojom.NetHost_StartConnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartConnect_ResponseParamsSpec, 'arc.mojom.NetHost_StartConnect_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartDisconnect_ParamsSpec, 'arc.mojom.NetHost_StartDisconnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec, 'arc.mojom.NetHost_StartDisconnect_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_GetNetworks_ParamsSpec, 'arc.mojom.NetHost_GetNetworks_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.GetNetworksRequestTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_GetNetworks_ResponseParamsSpec, 'arc.mojom.NetHost_GetNetworks_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.GetNetworksResponseTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnConnected_Params', [
      mojo.internal.StructField('cfg', 0, 0, arc.mojom.AndroidVpnConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnUpdated_Params', [
      mojo.internal.StructField('cfg', 0, 0, arc.mojom.AndroidVpnConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec, 'arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.ConnectionStateTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnDisconnected_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec, 'arc.mojom.NetHost_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('vpnPackage', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lockdown', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec, 'arc.mojom.NetHost_RequestPasspointAppApproval_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.PasspointApprovalRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec, 'arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.PasspointApprovalResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec, 'arc.mojom.NetHost_AddPasspointCredentials_Params', [
      mojo.internal.StructField('credentials', 0, 0, arc.mojom.PasspointCredentialsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec, 'arc.mojom.NetHost_RemovePasspointCredentials_Params', [
      mojo.internal.StructField('properties', 0, 0, arc.mojom.PasspointRemovalPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec, 'arc.mojom.NetHost_DisconnectHostVpn_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartLohs_ParamsSpec, 'arc.mojom.NetHost_StartLohs_Params', [
      mojo.internal.StructField('config', 0, 0, arc.mojom.LohsConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartLohs_ResponseParamsSpec, 'arc.mojom.NetHost_StartLohs_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.LohsStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StopLohs_ParamsSpec, 'arc.mojom.NetHost_StopLohs_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec, 'arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_Params', [
      mojo.internal.StructField('is_held', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec, 'arc.mojom.NetHost_NotifySocketConnectionEvent_Params', [
      mojo.internal.StructField('msg', 0, 0, arc.mojom.SocketConnectionEventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec, 'arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_Params', [
      mojo.internal.StructField('msg', 0, 0, arc.mojom.SocketConnectionEventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

  getWifiEnabledState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec,
      arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec,
      []);
  }

  startScan() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.NetHost_StartScan_ParamsSpec,
      null,
      []);
  }

  setWifiEnabledState(is_enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec,
      arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec,
      [is_enabled]);
  }

  createNetwork(cfg) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.NetHost_CreateNetwork_ParamsSpec,
      arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec,
      [cfg]);
  }

  forgetNetwork(guid) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.NetHost_ForgetNetwork_ParamsSpec,
      arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec,
      [guid]);
  }

  updateWifiNetwork(guid, cfg) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec,
      arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec,
      [guid, cfg]);
  }

  startConnect(guid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.NetHost_StartConnect_ParamsSpec,
      arc.mojom.NetHost_StartConnect_ResponseParamsSpec,
      [guid]);
  }

  startDisconnect(guid) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.NetHost_StartDisconnect_ParamsSpec,
      arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec,
      [guid]);
  }

  getNetworks(type) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.NetHost_GetNetworks_ParamsSpec,
      arc.mojom.NetHost_GetNetworks_ResponseParamsSpec,
      [type]);
  }

  androidVpnConnected(cfg) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec,
      null,
      [cfg]);
  }

  androidVpnUpdated(cfg) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec,
      null,
      [cfg]);
  }

  dEPRECATED_AndroidVpnStateChanged(state) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec,
      null,
      [state]);
  }

  androidVpnDisconnected() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec,
      null,
      []);
  }

  setAlwaysOnVpn(vpnPackage, lockdown) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec,
      null,
      [vpnPackage, lockdown]);
  }

  requestPasspointAppApproval(request) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec,
      arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec,
      [request]);
  }

  addPasspointCredentials(credentials) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec,
      null,
      [credentials]);
  }

  removePasspointCredentials(properties) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec,
      null,
      [properties]);
  }

  disconnectHostVpn() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec,
      null,
      []);
  }

  startLohs(config) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.NetHost_StartLohs_ParamsSpec,
      arc.mojom.NetHost_StartLohs_ResponseParamsSpec,
      [config]);
  }

  stopLohs() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.NetHost_StopLohs_ParamsSpec,
      null,
      []);
  }

  notifyAndroidWifiMulticastLockChange(is_held) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec,
      null,
      [is_held]);
  }

  notifySocketConnectionEvent(msg) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec,
      null,
      [msg]);
  }

  notifyARCVPNSocketConnectionEvent(msg) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec,
      null,
      [msg]);
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

arc.mojom.NetHostPtr = arc.mojom.NetHostRemote;
arc.mojom.NetHostRequest = arc.mojom.NetHostPendingReceiver;


// Interface: NetInstance
mojo.internal.Struct(
    arc.mojom.NetInstance_Init_ParamsSpec, 'arc.mojom.NetInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NetHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_Init_ResponseParamsSpec, 'arc.mojom.NetInstance_Init_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetInstance_ScanCompleted_ParamsSpec, 'arc.mojom.NetInstance_ScanCompleted_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec, 'arc.mojom.NetInstance_WifiEnabledStateChanged_Params', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec, 'arc.mojom.NetInstance_DisconnectAndroidVpn_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec, 'arc.mojom.NetInstance_ConfigureAndroidVpn_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec, 'arc.mojom.NetInstance_ActiveNetworksChanged_Params', [
      mojo.internal.StructField('network', 0, 0, mojo.internal.Array(arc.mojom.NetworkConfigurationSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec, 'arc.mojom.NetInstance_DnsResolutionTest_Params', [
      mojo.internal.StructField('transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec, 'arc.mojom.NetInstance_DnsResolutionTest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcDnsResolutionTestResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_HttpTest_ParamsSpec, 'arc.mojom.NetInstance_HttpTest_Params', [
      mojo.internal.StructField('transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_HttpTest_ResponseParamsSpec, 'arc.mojom.NetInstance_HttpTest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcHttpTestResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_PingTest_ParamsSpec, 'arc.mojom.NetInstance_PingTest_Params', [
      mojo.internal.StructField('transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ip_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_PingTest_ResponseParamsSpec, 'arc.mojom.NetInstance_PingTest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcPingTestResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_SetUpFlag_ParamsSpec, 'arc.mojom.NetInstance_SetUpFlag_Params', [
      mojo.internal.StructField('flag', 0, 0, arc.mojom.FlagSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

  init(host_remote) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.NetInstance_Init_ParamsSpec,
      arc.mojom.NetInstance_Init_ResponseParamsSpec,
      [host_remote]);
  }

  scanCompleted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.NetInstance_ScanCompleted_ParamsSpec,
      null,
      []);
  }

  wifiEnabledStateChanged(is_enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec,
      null,
      [is_enabled]);
  }

  disconnectAndroidVpn() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec,
      null,
      []);
  }

  configureAndroidVpn() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec,
      null,
      []);
  }

  activeNetworksChanged(network) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec,
      null,
      [network]);
  }

  dnsResolutionTest(transport_name, host_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec,
      arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec,
      [transport_name, host_name]);
  }

  httpTest(transport_name, url) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.NetInstance_HttpTest_ParamsSpec,
      arc.mojom.NetInstance_HttpTest_ResponseParamsSpec,
      [transport_name, url]);
  }

  pingTest(transport_name, ip_address) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.NetInstance_PingTest_ParamsSpec,
      arc.mojom.NetInstance_PingTest_ResponseParamsSpec,
      [transport_name, ip_address]);
  }

  setUpFlag(flag, value) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.NetInstance_SetUpFlag_ParamsSpec,
      null,
      [flag, value]);
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

arc.mojom.NetInstancePtr = arc.mojom.NetInstanceRemote;
arc.mojom.NetInstanceRequest = arc.mojom.NetInstancePendingReceiver;

