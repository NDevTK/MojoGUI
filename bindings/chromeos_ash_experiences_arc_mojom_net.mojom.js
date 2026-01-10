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
arc.mojom.NetworkResultSpec = { $: mojo.internal.Enum() };

// Enum: GetNetworksRequestType
arc.mojom.GetNetworksRequestType = {
  CONFIGURED_ONLY: 0,
  VISIBLE_ONLY: 1,
};
arc.mojom.GetNetworksRequestTypeSpec = { $: mojo.internal.Enum() };

// Enum: ConnectionStateType
arc.mojom.ConnectionStateType = {
  CONNECTED: 0,
  CONNECTING: 1,
  NOT_CONNECTED: 2,
  PORTAL: 3,
  ONLINE: 4,
};
arc.mojom.ConnectionStateTypeSpec = { $: mojo.internal.Enum() };

// Enum: EapMethod
arc.mojom.EapMethod = {
  kNone: 0,
  kLeap: 1,
  kPeap: 2,
  kTls: 3,
  kTtls: 4,
};
arc.mojom.EapMethodSpec = { $: mojo.internal.Enum() };

// Enum: EapPhase2Method
arc.mojom.EapPhase2Method = {
  kNone: 0,
  kPap: 1,
  kMschap: 2,
  kMschapv2: 3,
};
arc.mojom.EapPhase2MethodSpec = { $: mojo.internal.Enum() };

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
arc.mojom.KeyManagementSpec = { $: mojo.internal.Enum() };

// Enum: IPAddressType
arc.mojom.IPAddressType = {
  IPV4: 0,
  IPV6: 1,
};
arc.mojom.IPAddressTypeSpec = { $: mojo.internal.Enum() };

// Enum: TetheringClientState
arc.mojom.TetheringClientState = {
  CONFIRMED: 0,
  NOT_DETECTED: 1,
  SUSPECTED: 2,
};
arc.mojom.TetheringClientStateSpec = { $: mojo.internal.Enum() };

// Enum: NetworkType
arc.mojom.NetworkType = {
  CELLULAR: 0,
  ETHERNET: 1,
  VPN: 2,
  WIFI: 3,
};
arc.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };

// Enum: MeteredOverride
arc.mojom.MeteredOverride = {
  kMetered: 0,
  kNotmetered: 1,
};
arc.mojom.MeteredOverrideSpec = { $: mojo.internal.Enum() };

// Enum: Flag
arc.mojom.Flag = {
  DEPRECATED_ENABLE_ARC_HOST_VPN: 0,
};
arc.mojom.FlagSpec = { $: mojo.internal.Enum() };

// Enum: WifiBand
arc.mojom.WifiBand = {
  k2Ghz: 0,
  k5Ghz: 1,
  k6Ghz: 2,
  k60Ghz: 3,
};
arc.mojom.WifiBandSpec = { $: mojo.internal.Enum() };

// Enum: LohsStatus
arc.mojom.LohsStatus = {
  kSuccess: 0,
  kErrorGeneric: 1,
  kErrorIncompatibleMode: 2,
  kErrorTetheringDisallowed: 3,
};
arc.mojom.LohsStatusSpec = { $: mojo.internal.Enum() };

// Enum: IpProtocol
arc.mojom.IpProtocol = {
  kTcp: 0,
  kUdp: 1,
};
arc.mojom.IpProtocolSpec = { $: mojo.internal.Enum() };

// Enum: SocketEvent
arc.mojom.SocketEvent = {
  kOpen: 0,
  kClose: 1,
};
arc.mojom.SocketEventSpec = { $: mojo.internal.Enum() };

// Enum: QosCategory
arc.mojom.QosCategory = {
  kRealtimeInteractive: 0,
  kMultimediaConferencing: 1,
};
arc.mojom.QosCategorySpec = { $: mojo.internal.Enum() };

// Union: NetworkDetails
arc.mojom.NetworkDetailsSpec = { $: mojo.internal.Union(
    'arc.mojom.NetworkDetails', {
      'visible': {
        'ordinal': 0,
        'type': arc.mojom.VisibleNetworkDetailsSpec,
      }},
      'configured': {
        'ordinal': 1,
        'type': arc.mojom.ConfiguredNetworkDetailsSpec,
      }},
    })
};

// Union: ArcProxyInfo
arc.mojom.ArcProxyInfoSpec = { $: mojo.internal.Union(
    'arc.mojom.ArcProxyInfo', {
      'manual_proxy': {
        'ordinal': 0,
        'type': arc.mojom.ManualProxyConfigSpec,
      }},
      'pac_url_proxy': {
        'ordinal': 1,
        'type': arc.mojom.PacUrlProxyConfigSpec,
      }},
    })
};

// Struct: VisibleNetworkDetails
arc.mojom.VisibleNetworkDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VisibleNetworkDetails',
      packedSize: 24,
      fields: [
        { name: 'frequency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'signal_strength', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bssid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ConfiguredNetworkDetails
arc.mojom.ConfiguredNetworkDetailsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ConfiguredNetworkDetails',
      packedSize: 32,
      fields: [
        { name: 'passphrase', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'autoconnect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bssid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 33 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 33, packedSize: 32}]
    }
  }
};

// Struct: PasspointCredentials
arc.mojom.PasspointCredentialsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PasspointCredentials',
      packedSize: 88,
      fields: [
        { name: 'domains', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'realm', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'home_ois', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'required_home_ois', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'roaming_consortium_ois', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'eap', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.EapCredentialsSpec, nullable: false, minVersion: 0 },
        { name: 'metered', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'package_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'friendly_name', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 22 },
        { name: 'subscription_expiration_time_ms', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 22 },
      ],
      versions: [{version: 0, packedSize: 72}, {version: 22, packedSize: 88}]
    }
  }
};

// Struct: PasspointRemovalProperties
arc.mojom.PasspointRemovalPropertiesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PasspointRemovalProperties',
      packedSize: 24,
      fields: [
        { name: 'fqdn', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: EapCredentials
arc.mojom.EapCredentialsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.EapCredentials',
      packedSize: 104,
      fields: [
        { name: 'method', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.EapMethodSpec, nullable: false, minVersion: 0 },
        { name: 'phase2_method', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.EapPhase2MethodSpec, nullable: false, minVersion: 0 },
        { name: 'anonymous_identity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'identity', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'password', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'key_management', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.KeyManagementSpec, nullable: false, minVersion: 0 },
        { name: 'ca_certificate_pem', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'client_certificate_pem', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'client_certificate_key', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'subject_match', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'subject_alternative_name_match_list', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'domain_suffix_match_list', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'tls_version_max', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'use_system_cas', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_proactive_key_caching', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_login_password', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: IPConfiguration
arc.mojom.IPConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IPConfiguration',
      packedSize: 40,
      fields: [
        { name: 'gateway', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'ip_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name_servers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'routing_prefix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 28, packedBitOffset: 0, type: arc.mojom.IPAddressTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: WiFi
arc.mojom.WiFiSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WiFi',
      packedSize: 48,
      fields: [
        { name: 'bssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'frequency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'hex_ssid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'hidden_ssid', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'security', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.SecurityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'signal_strength', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_passpoint', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 16 },
        { name: 'fqdn', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 16 },
        { name: 'rssi', packedOffset: 14, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 23 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 16, packedSize: 48}, {version: 23, packedSize: 48}]
    }
  }
};

// Struct: NetworkConfiguration
arc.mojom.NetworkConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetworkConfiguration',
      packedSize: 192,
      fields: [
        { name: 'connection_state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ConnectionStateTypeSpec, nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'deprecated_ip_configs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.IPConfigurationSpec, false), nullable: true, minVersion: 0 },
        { name: 'deprecated_mac_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.NetworkTypeSpec, nullable: false, minVersion: 0 },
        { name: 'wifi', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.WiFiSpec, nullable: true, minVersion: 0 },
        { name: 'deprecated_tethering_client_state', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.TetheringClientStateSpec, nullable: false, minVersion: 8 },
        { name: 'network_interface', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 10 },
        { name: 'is_default_network', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 11 },
        { name: 'service_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 12 },
        { name: 'host_mtu', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 13 },
        { name: 'host_ipv4_prefix_length', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 13 },
        { name: 'host_ipv4_address', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 13 },
        { name: 'host_ipv4_gateway', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 13 },
        { name: 'host_ipv6_prefix_length', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 13 },
        { name: 'host_ipv6_global_addresses', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 13 },
        { name: 'host_ipv6_gateway', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 13 },
        { name: 'host_dns_addresses', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 13 },
        { name: 'host_search_domains', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 13 },
        { name: 'arc_ipv4_prefix_length', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 13 },
        { name: 'arc_ipv4_address', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 13 },
        { name: 'arc_ipv4_gateway', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 13 },
        { name: 'arc_network_interface', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 13 },
        { name: 'is_metered', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 14 },
        { name: 'include_routes', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 15 },
        { name: 'exclude_routes', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 15 },
        { name: 'dns_proxy_addresses', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 19 },
        { name: 'link_speed', packedOffset: 176, packedBitOffset: 0, type: arc.mojom.LinkSpeedSpec, nullable: true, minVersion: 28 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 8, packedSize: 56}, {version: 10, packedSize: 64}, {version: 11, packedSize: 64}, {version: 12, packedSize: 72}, {version: 13, packedSize: 160}, {version: 14, packedSize: 160}, {version: 15, packedSize: 176}, {version: 19, packedSize: 184}, {version: 28, packedSize: 192}]
    }
  }
};

// Struct: LinkSpeed
arc.mojom.LinkSpeedSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LinkSpeed',
      packedSize: 16,
      fields: [
        { name: 'uplink_speed_kbps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'downlink_speed_kbps', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: WifiConfiguration
arc.mojom.WifiConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.WifiConfiguration',
      packedSize: 136,
      fields: [
        { name: 'ssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'frequency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'signal_strength', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bssid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'security', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'hexssid', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
        { name: 'details', packedOffset: 48, packedBitOffset: 0, type: arc.mojom.NetworkDetailsSpec, nullable: true, minVersion: 2 },
        { name: 'eap', packedOffset: 64, packedBitOffset: 0, type: arc.mojom.EapCredentialsSpec, nullable: true, minVersion: 16 },
        { name: 'metered_override', packedOffset: 72, packedBitOffset: 0, type: arc.mojom.MeteredOverrideSpec, nullable: false, minVersion: 20 },
        { name: 'http_proxy', packedOffset: 80, packedBitOffset: 0, type: arc.mojom.ArcProxyInfoSpec, nullable: true, minVersion: 20 },
        { name: 'static_ipv4_config', packedOffset: 96, packedBitOffset: 0, type: arc.mojom.StaticIpv4ConfigurationSpec, nullable: true, minVersion: 20 },
        { name: 'domains', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 20 },
        { name: 'dns_servers', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 20 },
        { name: 'bssid_allowlist', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 26 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 1, packedSize: 48}, {version: 2, packedSize: 72}, {version: 16, packedSize: 80}, {version: 20, packedSize: 128}, {version: 26, packedSize: 136}]
    }
  }
};

// Struct: StaticIpv4Configuration
arc.mojom.StaticIpv4ConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.StaticIpv4Configuration',
      packedSize: 32,
      fields: [
        { name: 'ipv4_addr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'gateway_ipv4_addr', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'prefix_length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PacUrlProxyConfig
arc.mojom.PacUrlProxyConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PacUrlProxyConfig',
      packedSize: 16,
      fields: [
        { name: 'pac_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManualProxyConfig
arc.mojom.ManualProxyConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ManualProxyConfig',
      packedSize: 32,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'exclusion_list', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NetworkResultSpec, nullable: false, minVersion: 0 },
        { name: 'networks', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.NetworkConfigurationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AndroidVpnConfiguration
arc.mojom.AndroidVpnConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AndroidVpnConfiguration',
      packedSize: 96,
      fields: [
        { name: 'app_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'tunnel_chrome_traffic', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ipv4_gateway', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'split_include', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'split_exclude', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'nameservers', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'domains', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'http_proxy', packedOffset: 72, packedBitOffset: 0, type: arc.mojom.ArcProxyInfoSpec, nullable: true, minVersion: 21 },
        { name: 'mtu', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 38 },
      ],
      versions: [{version: 0, packedSize: 80}, {version: 21, packedSize: 96}, {version: 38, packedSize: 96}]
    }
  }
};

// Struct: ArcDnsResolutionTestResult
arc.mojom.ArcDnsResolutionTestResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcDnsResolutionTestResult',
      packedSize: 24,
      fields: [
        { name: 'is_successful', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'response_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'duration_ms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ArcHttpTestResult
arc.mojom.ArcHttpTestResultSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcHttpTestResult',
      packedSize: 32,
      fields: [
        { name: 'is_successful', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'status_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'response_header_fields', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'duration_ms', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'is_successful', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'duration_ms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LohsConfig
arc.mojom.LohsConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LohsConfig',
      packedSize: 32,
      fields: [
        { name: 'band', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.WifiBandSpec, nullable: false, minVersion: 0 },
        { name: 'security_type', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.SecurityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'hexssid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'passphrase', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PasspointApprovalRequest
arc.mojom.PasspointApprovalRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PasspointApprovalRequest',
      packedSize: 40,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'friendly_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 31 },
        { name: 'subscription_expiration_time_ms', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 31 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 31, packedSize: 40}]
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
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SocketConnectionEvent
arc.mojom.SocketConnectionEventSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.SocketConnectionEvent',
      packedSize: 48,
      fields: [
        { name: 'src_addr', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false, minVersion: 0 },
        { name: 'dst_addr', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false, minVersion: 0 },
        { name: 'src_port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'dst_port', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'proto', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.IpProtocolSpec, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 28, packedBitOffset: 0, type: arc.mojom.SocketEventSpec, nullable: false, minVersion: 0 },
        { name: 'app_category', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.AppCategorySpec, nullable: false, minVersion: 0 },
        { name: 'qos_category', packedOffset: 36, packedBitOffset: 0, type: arc.mojom.QosCategorySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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

// ParamsSpec for GetWifiEnabledState
arc.mojom.NetHost_GetWifiEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.GetWifiEnabledState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.NetHost_GetWifiEnabledState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.GetWifiEnabledState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartScan
arc.mojom.NetHost_StartScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.StartScan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetWifiEnabledState
arc.mojom.NetHost_SetWifiEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.SetWifiEnabledState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NetHost_SetWifiEnabledState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.SetWifiEnabledState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateNetwork
arc.mojom.NetHost_CreateNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.CreateNetwork_Params',
      packedSize: 16,
      fields: [
        { name: 'cfg', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.WifiConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NetHost_CreateNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.CreateNetwork_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForgetNetwork
arc.mojom.NetHost_ForgetNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.ForgetNetwork_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NetHost_ForgetNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.ForgetNetwork_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NetworkResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateWifiNetwork
arc.mojom.NetHost_UpdateWifiNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.UpdateWifiNetwork_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cfg', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.WifiConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.NetHost_UpdateWifiNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.UpdateWifiNetwork_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NetworkResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartConnect
arc.mojom.NetHost_StartConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.StartConnect_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NetHost_StartConnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.StartConnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NetworkResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartDisconnect
arc.mojom.NetHost_StartDisconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.StartDisconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NetHost_StartDisconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.StartDisconnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NetworkResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNetworks
arc.mojom.NetHost_GetNetworks_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.GetNetworks_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.GetNetworksRequestTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NetHost_GetNetworks_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.GetNetworks_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.GetNetworksResponseTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AndroidVpnConnected
arc.mojom.NetHost_AndroidVpnConnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.AndroidVpnConnected_Params',
      packedSize: 16,
      fields: [
        { name: 'cfg', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AndroidVpnConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AndroidVpnUpdated
arc.mojom.NetHost_AndroidVpnUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.AndroidVpnUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'cfg', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AndroidVpnConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DEPRECATED_AndroidVpnStateChanged
arc.mojom.NetHost_DEPRECATED_AndroidVpnStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.DEPRECATED_AndroidVpnStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ConnectionStateTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AndroidVpnDisconnected
arc.mojom.NetHost_AndroidVpnDisconnected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.AndroidVpnDisconnected_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetAlwaysOnVpn
arc.mojom.NetHost_SetAlwaysOnVpn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.SetAlwaysOnVpn_Params',
      packedSize: 24,
      fields: [
        { name: 'vpnPackage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'lockdown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestPasspointAppApproval
arc.mojom.NetHost_RequestPasspointAppApproval_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.RequestPasspointAppApproval_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PasspointApprovalRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NetHost_RequestPasspointAppApproval_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.RequestPasspointAppApproval_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PasspointApprovalResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddPasspointCredentials
arc.mojom.NetHost_AddPasspointCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.AddPasspointCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PasspointCredentialsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemovePasspointCredentials
arc.mojom.NetHost_RemovePasspointCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.RemovePasspointCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PasspointRemovalPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisconnectHostVpn
arc.mojom.NetHost_DisconnectHostVpn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.DisconnectHostVpn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartLohs
arc.mojom.NetHost_StartLohs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.StartLohs_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.LohsConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NetHost_StartLohs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.StartLohs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.LohsStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopLohs
arc.mojom.NetHost_StopLohs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.StopLohs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifyAndroidWifiMulticastLockChange
arc.mojom.NetHost_NotifyAndroidWifiMulticastLockChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.NotifyAndroidWifiMulticastLockChange_Params',
      packedSize: 16,
      fields: [
        { name: 'is_held', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifySocketConnectionEvent
arc.mojom.NetHost_NotifySocketConnectionEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.NotifySocketConnectionEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'msg', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SocketConnectionEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyARCVPNSocketConnectionEvent
arc.mojom.NetHost_NotifyARCVPNSocketConnectionEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetHost.NotifyARCVPNSocketConnectionEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'msg', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SocketConnectionEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
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

  init(host_remote) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.NetInstance_Init_ParamsSpec,
      null,
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

// ParamsSpec for Init
arc.mojom.NetInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ScanCompleted
arc.mojom.NetInstance_ScanCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.ScanCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for WifiEnabledStateChanged
arc.mojom.NetInstance_WifiEnabledStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.WifiEnabledStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisconnectAndroidVpn
arc.mojom.NetInstance_DisconnectAndroidVpn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.DisconnectAndroidVpn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ConfigureAndroidVpn
arc.mojom.NetInstance_ConfigureAndroidVpn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.ConfigureAndroidVpn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ActiveNetworksChanged
arc.mojom.NetInstance_ActiveNetworksChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.ActiveNetworksChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'network', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.NetworkConfigurationSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DnsResolutionTest
arc.mojom.NetInstance_DnsResolutionTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.DnsResolutionTest_Params',
      packedSize: 24,
      fields: [
        { name: 'transport_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'host_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.NetInstance_DnsResolutionTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.DnsResolutionTest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcDnsResolutionTestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HttpTest
arc.mojom.NetInstance_HttpTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.HttpTest_Params',
      packedSize: 24,
      fields: [
        { name: 'transport_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.NetInstance_HttpTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.HttpTest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcHttpTestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PingTest
arc.mojom.NetInstance_PingTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.PingTest_Params',
      packedSize: 24,
      fields: [
        { name: 'transport_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'ip_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.NetInstance_PingTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.PingTest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcPingTestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUpFlag
arc.mojom.NetInstance_SetUpFlag_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NetInstance.SetUpFlag_Params',
      packedSize: 16,
      fields: [
        { name: 'flag', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FlagSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.NetInstancePtr = arc.mojom.NetInstanceRemote;
arc.mojom.NetInstanceRequest = arc.mojom.NetInstancePendingReceiver;

