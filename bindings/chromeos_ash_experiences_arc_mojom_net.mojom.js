// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/net.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var network = network || {};
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
        'type': arc.mojom.VisibleNetworkDetailsSpec.$,
        'nullable': false,
      },
      'configured': {
        'ordinal': 1,
        'type': arc.mojom.ConfiguredNetworkDetailsSpec.$,
        'nullable': false,
      },
    });

// Union: ArcProxyInfo
mojo.internal.Union(
    arc.mojom.ArcProxyInfoSpec, 'arc.mojom.ArcProxyInfo', {
      'manual_proxy': {
        'ordinal': 0,
        'type': arc.mojom.ManualProxyConfigSpec.$,
        'nullable': false,
      },
      'pac_url_proxy': {
        'ordinal': 1,
        'type': arc.mojom.PacUrlProxyConfigSpec.$,
        'nullable': false,
      },
    });

// Struct: VisibleNetworkDetails
mojo.internal.Struct(
    arc.mojom.VisibleNetworkDetailsSpec, 'arc.mojom.VisibleNetworkDetails', [
      mojo.internal.StructField('bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
      mojo.internal.StructField('eap', 40, 0, arc.mojom.EapCredentialsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('package_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('metered', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('method', 0, 0, arc.mojom.EapMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('phase2_method', 8, 0, arc.mojom.EapPhase2MethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anonymous_identity', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('identity', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('key_management', 40, 0, arc.mojom.KeyManagementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ca_certificate_pem', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('client_certificate_pem', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('client_certificate_key', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('subject_match', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('subject_alternative_name_match_list', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('domain_suffix_match_list', 88, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('tls_version_max', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('use_system_cas', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_proactive_key_caching', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_login_password', 104, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: IPConfiguration
mojo.internal.Struct(
    arc.mojom.IPConfigurationSpec, 'arc.mojom.IPConfiguration', [
      mojo.internal.StructField('gateway', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ip_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name_servers', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, arc.mojom.IPAddressTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routing_prefix', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: WiFi
mojo.internal.Struct(
    arc.mojom.WiFiSpec, 'arc.mojom.WiFi', [
      mojo.internal.StructField('bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hex_ssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 16, 0, arc.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fqdn', 40, 0, mojo.internal.String, null, true, 16, undefined),
      mojo.internal.StructField('is_passpoint', 48, 0, mojo.internal.Bool, false, false, 16, undefined),
      mojo.internal.StructField('rssi', 50, 0, mojo.internal.Int16, 0, false, 23, undefined),
    ],
    [[0, 48], [16, 64], [23, 64]]);

// Struct: NetworkConfiguration
mojo.internal.Struct(
    arc.mojom.NetworkConfigurationSpec, 'arc.mojom.NetworkConfiguration', [
      mojo.internal.StructField('connection_state', 0, 0, arc.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_ip_configs', 16, 0, mojo.internal.Array(arc.mojom.IPConfigurationSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('deprecated_mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('type', 32, 0, arc.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wifi', 40, 0, arc.mojom.WiFiSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('deprecated_tethering_client_state', 48, 0, arc.mojom.TetheringClientStateSpec.$, null, false, 8, undefined),
      mojo.internal.StructField('network_interface', 56, 0, mojo.internal.String, null, true, 10, undefined),
      mojo.internal.StructField('is_default_network', 64, 0, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('service_name', 72, 0, mojo.internal.String, null, true, 12, undefined),
      mojo.internal.StructField('host_ipv4_address', 80, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('host_ipv4_gateway', 88, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('host_ipv6_global_addresses', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('host_ipv6_gateway', 104, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('host_dns_addresses', 112, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('host_search_domains', 120, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 13, undefined),
      mojo.internal.StructField('arc_ipv4_address', 128, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arc_ipv4_gateway', 136, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('arc_network_interface', 144, 0, mojo.internal.String, null, true, 13, undefined),
      mojo.internal.StructField('host_mtu', 152, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('host_ipv4_prefix_length', 156, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('host_ipv6_prefix_length', 160, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('arc_ipv4_prefix_length', 164, 0, mojo.internal.Uint32, 0, false, 13, undefined),
      mojo.internal.StructField('is_metered', 168, 0, mojo.internal.Bool, false, false, 14, undefined),
      mojo.internal.StructField('include_routes', 176, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 15, undefined),
      mojo.internal.StructField('exclude_routes', 184, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 15, undefined),
      mojo.internal.StructField('dns_proxy_addresses', 192, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 19, undefined),
      mojo.internal.StructField('link_speed', 200, 0, arc.mojom.LinkSpeedSpec.$, null, true, 28, undefined),
    ],
    [[0, 56], [8, 64], [10, 72], [11, 80], [12, 88], [13, 176], [14, 184], [15, 200], [19, 208], [28, 216]]);

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
      mojo.internal.StructField('bssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('guid', 32, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('hexssid', 40, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('details', 48, 0, arc.mojom.NetworkDetailsSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('eap', 56, 0, arc.mojom.EapCredentialsSpec.$, null, true, 16, undefined),
      mojo.internal.StructField('metered_override', 64, 0, arc.mojom.MeteredOverrideSpec.$, null, false, 20, undefined),
      mojo.internal.StructField('http_proxy', 72, 0, arc.mojom.ArcProxyInfoSpec.$, null, true, 20, undefined),
      mojo.internal.StructField('static_ipv4_config', 80, 0, arc.mojom.StaticIpv4ConfigurationSpec.$, null, true, 20, undefined),
      mojo.internal.StructField('domains', 88, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 20, undefined),
      mojo.internal.StructField('dns_servers', 96, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 20, undefined),
      mojo.internal.StructField('bssid_allowlist', 104, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 26, undefined),
    ],
    [[0, 40], [1, 48], [2, 64], [16, 72], [20, 112], [26, 120]]);

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
      mojo.internal.StructField('pac_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManualProxyConfig
mojo.internal.Struct(
    arc.mojom.ManualProxyConfigSpec, 'arc.mojom.ManualProxyConfig', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('exclusion_list', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetNetworksResponseType
mojo.internal.Struct(
    arc.mojom.GetNetworksResponseTypeSpec, 'arc.mojom.GetNetworksResponseType', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('networks', 8, 0, mojo.internal.Array(arc.mojom.NetworkConfigurationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AndroidVpnConfiguration
mojo.internal.Struct(
    arc.mojom.AndroidVpnConfigurationSpec, 'arc.mojom.AndroidVpnConfiguration', [
      mojo.internal.StructField('app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ipv4_gateway', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('split_include', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('split_exclude', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('nameservers', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('domains', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('tunnel_chrome_traffic', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('http_proxy', 72, 0, arc.mojom.ArcProxyInfoSpec.$, null, true, 21, undefined),
      mojo.internal.StructField('mtu', 80, 0, mojo.internal.Int32, 0, false, 38, undefined),
    ],
    [[0, 80], [21, 88], [38, 96]]);

// Struct: ArcDnsResolutionTestResult
mojo.internal.Struct(
    arc.mojom.ArcDnsResolutionTestResultSpec, 'arc.mojom.ArcDnsResolutionTestResult', [
      mojo.internal.StructField('duration_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('response_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_successful', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcHttpTestResult
mojo.internal.Struct(
    arc.mojom.ArcHttpTestResultSpec, 'arc.mojom.ArcHttpTestResult', [
      mojo.internal.StructField('response_header_fields', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('status_code', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_successful', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ArcPingTestResult
mojo.internal.Struct(
    arc.mojom.ArcPingTestResultSpec, 'arc.mojom.ArcPingTestResult', [
      mojo.internal.StructField('duration_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('is_successful', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LohsConfig
mojo.internal.Struct(
    arc.mojom.LohsConfigSpec, 'arc.mojom.LohsConfig', [
      mojo.internal.StructField('band', 0, 0, arc.mojom.WifiBandSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('security_type', 8, 0, arc.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hexssid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('passphrase', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

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
      mojo.internal.StructField('src_addr', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dst_addr', 8, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proto', 16, 0, arc.mojom.IpProtocolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event', 24, 0, arc.mojom.SocketEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('app_category', 32, 0, arc.mojom.AppCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('qos_category', 40, 0, arc.mojom.QosCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('src_port', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('dst_port', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: NetHost
mojo.internal.Struct(
    arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec, 'arc.mojom.NetHost_GetWifiEnabledState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec, 'arc.mojom.NetHost_GetWifiEnabledState_ResponseParams', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartScan_ParamsSpec, 'arc.mojom.NetHost_StartScan_Params', [
    ],
    [[0, 8]]);

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
      mojo.internal.StructField('cfg', 0, 0, arc.mojom.WifiConfigurationSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec, 'arc.mojom.NetHost_UpdateWifiNetwork_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cfg', 8, 0, arc.mojom.WifiConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec, 'arc.mojom.NetHost_UpdateWifiNetwork_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartConnect_ParamsSpec, 'arc.mojom.NetHost_StartConnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartConnect_ResponseParamsSpec, 'arc.mojom.NetHost_StartConnect_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartDisconnect_ParamsSpec, 'arc.mojom.NetHost_StartDisconnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec, 'arc.mojom.NetHost_StartDisconnect_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.NetworkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_GetNetworks_ParamsSpec, 'arc.mojom.NetHost_GetNetworks_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.GetNetworksRequestTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_GetNetworks_ResponseParamsSpec, 'arc.mojom.NetHost_GetNetworks_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.GetNetworksResponseTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnConnected_Params', [
      mojo.internal.StructField('cfg', 0, 0, arc.mojom.AndroidVpnConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnUpdated_Params', [
      mojo.internal.StructField('cfg', 0, 0, arc.mojom.AndroidVpnConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec, 'arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec, 'arc.mojom.NetHost_AndroidVpnDisconnected_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec, 'arc.mojom.NetHost_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('vpnPackage', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lockdown', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec, 'arc.mojom.NetHost_RequestPasspointAppApproval_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.PasspointApprovalRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec, 'arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, arc.mojom.PasspointApprovalResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec, 'arc.mojom.NetHost_AddPasspointCredentials_Params', [
      mojo.internal.StructField('credentials', 0, 0, arc.mojom.PasspointCredentialsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec, 'arc.mojom.NetHost_RemovePasspointCredentials_Params', [
      mojo.internal.StructField('properties', 0, 0, arc.mojom.PasspointRemovalPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec, 'arc.mojom.NetHost_DisconnectHostVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartLohs_ParamsSpec, 'arc.mojom.NetHost_StartLohs_Params', [
      mojo.internal.StructField('config', 0, 0, arc.mojom.LohsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StartLohs_ResponseParamsSpec, 'arc.mojom.NetHost_StartLohs_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.LohsStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_StopLohs_ParamsSpec, 'arc.mojom.NetHost_StopLohs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec, 'arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_Params', [
      mojo.internal.StructField('is_held', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec, 'arc.mojom.NetHost_NotifySocketConnectionEvent_Params', [
      mojo.internal.StructField('msg', 0, 0, arc.mojom.SocketConnectionEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec, 'arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_Params', [
      mojo.internal.StructField('msg', 0, 0, arc.mojom.SocketConnectionEventSpec.$, null, false, 0, undefined),
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
      [],
      false);
  }

  startScan() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.NetHost_StartScan_ParamsSpec,
      null,
      [],
      false);
  }

  setWifiEnabledState(is_enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec,
      arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec,
      [is_enabled],
      false);
  }

  createNetwork(cfg) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.NetHost_CreateNetwork_ParamsSpec,
      arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec,
      [cfg],
      false);
  }

  forgetNetwork(guid) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.NetHost_ForgetNetwork_ParamsSpec,
      arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec,
      [guid],
      false);
  }

  updateWifiNetwork(guid, cfg) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec,
      arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec,
      [guid, cfg],
      false);
  }

  startConnect(guid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.NetHost_StartConnect_ParamsSpec,
      arc.mojom.NetHost_StartConnect_ResponseParamsSpec,
      [guid],
      false);
  }

  startDisconnect(guid) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.NetHost_StartDisconnect_ParamsSpec,
      arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec,
      [guid],
      false);
  }

  getNetworks(type) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.NetHost_GetNetworks_ParamsSpec,
      arc.mojom.NetHost_GetNetworks_ResponseParamsSpec,
      [type],
      false);
  }

  androidVpnConnected(cfg) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec,
      null,
      [cfg],
      false);
  }

  androidVpnUpdated(cfg) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec,
      null,
      [cfg],
      false);
  }

  dEPRECATED_AndroidVpnStateChanged(state) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  androidVpnDisconnected() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec,
      null,
      [],
      false);
  }

  setAlwaysOnVpn(vpnPackage, lockdown) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec,
      null,
      [vpnPackage, lockdown],
      false);
  }

  requestPasspointAppApproval(request) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec,
      arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec,
      [request],
      false);
  }

  addPasspointCredentials(credentials) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec,
      null,
      [credentials],
      false);
  }

  removePasspointCredentials(properties) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec,
      null,
      [properties],
      false);
  }

  disconnectHostVpn() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec,
      null,
      [],
      false);
  }

  startLohs(config) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.NetHost_StartLohs_ParamsSpec,
      arc.mojom.NetHost_StartLohs_ResponseParamsSpec,
      [config],
      false);
  }

  stopLohs() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.NetHost_StopLohs_ParamsSpec,
      null,
      [],
      false);
  }

  notifyAndroidWifiMulticastLockChange(is_held) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec,
      null,
      [is_held],
      false);
  }

  notifySocketConnectionEvent(msg) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec,
      null,
      [msg],
      false);
  }

  notifyARCVPNSocketConnectionEvent(msg) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec,
      null,
      [msg],
      false);
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

arc.mojom.NetHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
    this.ordinalMap.set(4, 2); // Default ordinal 4 -> Index 2
    this.ordinalMap.set(5, 3); // Default ordinal 5 -> Index 3
    this.ordinalMap.set(6, 4); // Default ordinal 6 -> Index 4
    this.ordinalMap.set(20, 5); // Default ordinal 20 -> Index 5
    this.ordinalMap.set(7, 6); // Default ordinal 7 -> Index 6
    this.ordinalMap.set(8, 7); // Default ordinal 8 -> Index 7
    this.ordinalMap.set(10, 8); // Default ordinal 10 -> Index 8
    this.ordinalMap.set(11, 9); // Default ordinal 11 -> Index 9
    this.ordinalMap.set(25, 10); // Default ordinal 25 -> Index 10
    this.ordinalMap.set(12, 11); // Default ordinal 12 -> Index 11
    this.ordinalMap.set(26, 12); // Default ordinal 26 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(21, 14); // Default ordinal 21 -> Index 14
    this.ordinalMap.set(14, 15); // Default ordinal 14 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(22, 20); // Default ordinal 22 -> Index 20
    this.ordinalMap.set(23, 21); // Default ordinal 23 -> Index 21
    this.ordinalMap.set(24, 22); // Default ordinal 24 -> Index 22
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetWifiEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWifiEnabledState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_StartScan_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartScan (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetWifiEnabledState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWifiEnabledState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_CreateNetwork_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNetwork (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ForgetNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_ForgetNetwork_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForgetNetwork (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateWifiNetwork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateWifiNetwork (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartConnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_StartConnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartConnect (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: StartDisconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_StartDisconnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDisconnect (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetNetworks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_GetNetworks_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworks (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AndroidVpnConnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AndroidVpnConnected (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AndroidVpnUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AndroidVpnUpdated (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DEPRECATED_AndroidVpnStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_AndroidVpnStateChanged (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: AndroidVpnDisconnected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AndroidVpnDisconnected (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetAlwaysOnVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAlwaysOnVpn (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RequestPasspointAppApproval
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPasspointAppApproval (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: AddPasspointCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPasspointCredentials (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RemovePasspointCredentials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemovePasspointCredentials (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: DisconnectHostVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectHostVpn (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: StartLohs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_StartLohs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartLohs (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: StopLohs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_StopLohs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopLohs (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: NotifyAndroidWifiMulticastLockChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyAndroidWifiMulticastLockChange (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: NotifySocketConnectionEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifySocketConnectionEvent (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: NotifyARCVPNSocketConnectionEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyARCVPNSocketConnectionEvent (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getWifiEnabledState');
          const result = this.impl.getWifiEnabledState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_StartScan_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startScan');
          const result = this.impl.startScan();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setWifiEnabledState');
          const result = this.impl.setWifiEnabledState(params.is_enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_CreateNetwork_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createNetwork');
          const result = this.impl.createNetwork(params.cfg);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_ForgetNetwork_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forgetNetwork');
          const result = this.impl.forgetNetwork(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateWifiNetwork');
          const result = this.impl.updateWifiNetwork(params.guid, params.cfg);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_StartConnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startConnect');
          const result = this.impl.startConnect(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_StartConnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_StartDisconnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDisconnect');
          const result = this.impl.startDisconnect(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_GetNetworks_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNetworks');
          const result = this.impl.getNetworks(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_GetNetworks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.androidVpnConnected');
          const result = this.impl.androidVpnConnected(params.cfg);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.androidVpnUpdated');
          const result = this.impl.androidVpnUpdated(params.cfg);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_AndroidVpnStateChanged');
          const result = this.impl.dEPRECATED_AndroidVpnStateChanged(params.state);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.androidVpnDisconnected');
          const result = this.impl.androidVpnDisconnected();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysOnVpn');
          const result = this.impl.setAlwaysOnVpn(params.vpnPackage, params.lockdown);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPasspointAppApproval');
          const result = this.impl.requestPasspointAppApproval(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addPasspointCredentials');
          const result = this.impl.addPasspointCredentials(params.credentials);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removePasspointCredentials');
          const result = this.impl.removePasspointCredentials(params.properties);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disconnectHostVpn');
          const result = this.impl.disconnectHostVpn();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_StartLohs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startLohs');
          const result = this.impl.startLohs(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetHost_StartLohs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_StopLohs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopLohs');
          const result = this.impl.stopLohs();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyAndroidWifiMulticastLockChange');
          const result = this.impl.notifyAndroidWifiMulticastLockChange(params.is_held);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifySocketConnectionEvent');
          const result = this.impl.notifySocketConnectionEvent(params.msg);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyARCVPNSocketConnectionEvent');
          const result = this.impl.notifyARCVPNSocketConnectionEvent(params.msg);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.NetHostReceiver = arc.mojom.NetHostReceiver;

arc.mojom.NetHostPtr = arc.mojom.NetHostRemote;
arc.mojom.NetHostRequest = arc.mojom.NetHostPendingReceiver;


// Interface: NetInstance
mojo.internal.Struct(
    arc.mojom.NetInstance_Init_ParamsSpec, 'arc.mojom.NetInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NetHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_Init_ResponseParamsSpec, 'arc.mojom.NetInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_ScanCompleted_ParamsSpec, 'arc.mojom.NetInstance_ScanCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec, 'arc.mojom.NetInstance_WifiEnabledStateChanged_Params', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec, 'arc.mojom.NetInstance_DisconnectAndroidVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec, 'arc.mojom.NetInstance_ConfigureAndroidVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec, 'arc.mojom.NetInstance_ActiveNetworksChanged_Params', [
      mojo.internal.StructField('network', 0, 0, mojo.internal.Array(arc.mojom.NetworkConfigurationSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcDnsResolutionTestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_HttpTest_ParamsSpec, 'arc.mojom.NetInstance_HttpTest_Params', [
      mojo.internal.StructField('transport_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_HttpTest_ResponseParamsSpec, 'arc.mojom.NetInstance_HttpTest_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcHttpTestResultSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcPingTestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NetInstance_SetUpFlag_ParamsSpec, 'arc.mojom.NetInstance_SetUpFlag_Params', [
      mojo.internal.StructField('flag', 0, 0, arc.mojom.FlagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [host_remote],
      false);
  }

  scanCompleted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.NetInstance_ScanCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  wifiEnabledStateChanged(is_enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec,
      null,
      [is_enabled],
      false);
  }

  disconnectAndroidVpn() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec,
      null,
      [],
      false);
  }

  configureAndroidVpn() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec,
      null,
      [],
      false);
  }

  activeNetworksChanged(network) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec,
      null,
      [network],
      false);
  }

  dnsResolutionTest(transport_name, host_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec,
      arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec,
      [transport_name, host_name],
      false);
  }

  httpTest(transport_name, url) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.NetInstance_HttpTest_ParamsSpec,
      arc.mojom.NetInstance_HttpTest_ResponseParamsSpec,
      [transport_name, url],
      false);
  }

  pingTest(transport_name, ip_address) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.NetInstance_PingTest_ParamsSpec,
      arc.mojom.NetInstance_PingTest_ResponseParamsSpec,
      [transport_name, ip_address],
      false);
  }

  setUpFlag(flag, value) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.NetInstance_SetUpFlag_ParamsSpec,
      null,
      [flag, value],
      false);
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

arc.mojom.NetInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(6, 0); // Default ordinal 6 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(3, 2); // Default ordinal 3 -> Index 2
    this.ordinalMap.set(4, 3); // Default ordinal 4 -> Index 3
    this.ordinalMap.set(5, 4); // Default ordinal 5 -> Index 4
    this.ordinalMap.set(7, 5); // Default ordinal 7 -> Index 5
    this.ordinalMap.set(8, 6); // Default ordinal 8 -> Index 6
    this.ordinalMap.set(9, 7); // Default ordinal 9 -> Index 7
    this.ordinalMap.set(10, 8); // Default ordinal 10 -> Index 8
    this.ordinalMap.set(11, 9); // Default ordinal 11 -> Index 9
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ScanCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_ScanCompleted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScanCompleted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: WifiEnabledStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WifiEnabledStateChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DisconnectAndroidVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectAndroidVpn (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ConfigureAndroidVpn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureAndroidVpn (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ActiveNetworksChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActiveNetworksChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DnsResolutionTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DnsResolutionTest (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: HttpTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_HttpTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HttpTest (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: PingTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_PingTest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PingTest (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetUpFlag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NetInstance_SetUpFlag_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpFlag (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_ScanCompleted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.scanCompleted');
          const result = this.impl.scanCompleted();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.wifiEnabledStateChanged');
          const result = this.impl.wifiEnabledStateChanged(params.is_enabled);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disconnectAndroidVpn');
          const result = this.impl.disconnectAndroidVpn();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.configureAndroidVpn');
          const result = this.impl.configureAndroidVpn();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.activeNetworksChanged');
          const result = this.impl.activeNetworksChanged(params.network);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dnsResolutionTest');
          const result = this.impl.dnsResolutionTest(params.transport_name, params.host_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_HttpTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.httpTest');
          const result = this.impl.httpTest(params.transport_name, params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetInstance_HttpTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_PingTest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.pingTest');
          const result = this.impl.pingTest(params.transport_name, params.ip_address);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NetInstance_PingTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NetInstance_SetUpFlag_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUpFlag');
          const result = this.impl.setUpFlag(params.flag, params.value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.NetInstanceReceiver = arc.mojom.NetInstanceReceiver;

arc.mojom.NetInstancePtr = arc.mojom.NetInstanceRemote;
arc.mojom.NetInstanceRequest = arc.mojom.NetInstancePendingReceiver;

