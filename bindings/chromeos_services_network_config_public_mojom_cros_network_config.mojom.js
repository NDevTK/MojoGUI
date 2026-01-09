// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_config/public/mojom/cros_network_config.mojom
// Module: chromeos.network_config.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_config = chromeos.network_config || {};
chromeos.network_config.mojom = chromeos.network_config.mojom || {};


// Enum: ActivationStateType
chromeos.network_config.mojom.ActivationStateType = {
  kUnknown: 0,
  kNotActivated: 1,
  kActivating: 2,
  kPartiallyActivated: 3,
  kActivated: 4,
  kNoService: 5,
};

// Enum: AuthenticationType
chromeos.network_config.mojom.AuthenticationType = {
  kNone: 0,
  k8021x: 1,
};

// Enum: HiddenSsidMode
chromeos.network_config.mojom.HiddenSsidMode = {
  kAutomatic: 0,
  kDisabled: 1,
  kEnabled: 2,
};

// Enum: ProxyMode
chromeos.network_config.mojom.ProxyMode = {
  kDirect: 0,
  kAutoDetect: 1,
  kPacScript: 2,
  kFixedServers: 3,
  kSystem: 4,
};

// Enum: SecurityType
chromeos.network_config.mojom.SecurityType = {
  kNone: 0,
  kWep8021x: 1,
  kWepPsk: 2,
  kWpaEap: 3,
  kWpaPsk: 4,
};

// Enum: MatchType
chromeos.network_config.mojom.MatchType = {
  kNoMatch: 0,
  kHome: 1,
  kRoaming: 2,
  kUnknown: 3,
};

// Enum: VpnType
chromeos.network_config.mojom.VpnType = {
  kIKEv2: 0,
  kL2TPIPsec: 1,
  kOpenVPN: 2,
  kWireGuard: 3,
  kExtension: 4,
  kArc: 5,
};

// Enum: FilterType
chromeos.network_config.mojom.FilterType = {
  kActive: 0,
  kVisible: 1,
  kConfigured: 2,
  kAll: 3,
};

// Enum: StartConnectResult
chromeos.network_config.mojom.StartConnectResult = {
  kSuccess: 0,
  kInvalidGuid: 1,
  kInvalidState: 2,
  kCanceled: 3,
  kNotConfigured: 4,
  kBlocked: 5,
  kUnknown: 6,
};

// Enum: CertificateType
chromeos.network_config.mojom.CertificateType = {
  kServerCA: 0,
  kUserCert: 1,
};

// Enum: InhibitReason
chromeos.network_config.mojom.InhibitReason = {
  kNotInhibited: 0,
  kInstallingProfile: 1,
  kRenamingProfile: 2,
  kRemovingProfile: 3,
  kConnectingToProfile: 4,
  kRefreshingProfileList: 5,
  kResettingEuiccMemory: 6,
  kDisablingProfile: 7,
  kRequestingAvailableProfiles: 8,
};

// Enum: AlwaysOnVpnMode
chromeos.network_config.mojom.AlwaysOnVpnMode = {
  kOff: 0,
  kBestEffort: 1,
  kStrict: 2,
};

// Enum: ApnState
chromeos.network_config.mojom.ApnState = {
  kEnabled: 0,
  kDisabled: 1,
};

// Enum: ApnAuthenticationType
chromeos.network_config.mojom.ApnAuthenticationType = {
  kAutomatic: 0,
  kPap: 1,
  kChap: 2,
};

// Enum: ApnIpType
chromeos.network_config.mojom.ApnIpType = {
  kAutomatic: 0,
  kIpv4: 1,
  kIpv6: 2,
  kIpv4Ipv6: 3,
};

// Enum: ApnType
chromeos.network_config.mojom.ApnType = {
  kDefault: 0,
  kAttach: 1,
  kTether: 2,
};

// Enum: ApnSource
chromeos.network_config.mojom.ApnSource = {
  kModem: 0,
  kModb: 1,
  kUi: 2,
};

// Enum: Type
chromeos.network_config.mojom.Type = {
  kEmail: 0,
  kDns: 1,
  kUri: 2,
};

// Enum: SuppressionType
chromeos.network_config.mojom.SuppressionType = {
  kUnset: 0,
  kAllow: 1,
  kSuppress: 2,
};

// Enum: TrafficCounterSource
chromeos.network_config.mojom.TrafficCounterSource = {
  kUnknown: 0,
  kChrome: 1,
  kUser: 2,
  kArc: 3,
  kCrosvm: 4,
  kPluginvm: 5,
  kUpdateEngine: 6,
  kVpn: 7,
  kSystem: 8,
};

// Struct: SIMLockStatus
chromeos.network_config.mojom.SIMLockStatusSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.SIMLockStatus',
      packedSize: 32,
      fields: [
        { name: 'lock_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'retries_left', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'lock_enabled', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SIMInfo
chromeos.network_config.mojom.SIMInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.SIMInfo',
      packedSize: 40,
      fields: [
        { name: 'eid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'iccid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'slot_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_primary', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CellularStateProperties
chromeos.network_config.mojom.CellularStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CellularStateProperties',
      packedSize: 80,
      fields: [
        { name: 'iccid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'eid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'activation_state', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ActivationStateTypeSpec, nullable: false },
        { name: 'network_technology', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sim_lock_type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'network_operator', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payment_portal', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.PaymentPortalPropertiesSpec, nullable: true },
        { name: 'signal_strength', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'roaming', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sim_lock_enabled', packedOffset: 60, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'sim_locked', packedOffset: 60, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'has_nick_name', packedOffset: 60, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EthernetStateProperties
chromeos.network_config.mojom.EthernetStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.EthernetStateProperties',
      packedSize: 16,
      fields: [
        { name: 'authentication', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.AuthenticationTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TetherStateProperties
chromeos.network_config.mojom.TetherStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.TetherStateProperties',
      packedSize: 32,
      fields: [
        { name: 'carrier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'battery_percentage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'signal_strength', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'has_connected_to_host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VPNStateProperties
chromeos.network_config.mojom.VPNStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.VPNStateProperties',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.VpnTypeSpec, nullable: false },
        { name: 'provider_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'provider_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WiFiStateProperties
chromeos.network_config.mojom.WiFiStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.WiFiStateProperties',
      packedSize: 64,
      fields: [
        { name: 'bssid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'hex_ssid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'security', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.SecurityTypeSpec, nullable: false },
        { name: 'ssid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'passpoint_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'frequency', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'signal_strength', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'visible', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'hidden_ssid', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkStateProperties
chromeos.network_config.mojom.NetworkStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.NetworkStateProperties',
      packedSize: 104,
      fields: [
        { name: 'connection_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'guid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'portal_state', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'portal_probe_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'proxy_mode', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.ProxyModeSpec, nullable: false },
        { name: 'source', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type_state', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'priority', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'connectable', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'connect_requested', packedOffset: 84, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'prohibited_by_policy', packedOffset: 84, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceStateProperties
chromeos.network_config.mojom.DeviceStatePropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.DeviceStateProperties',
      packedSize: 96,
      fields: [
        { name: 'ipv4_address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: true },
        { name: 'ipv6_address', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: true },
        { name: 'imei', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mac_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'sim_lock_status', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.SIMLockStatusSpec, nullable: true },
        { name: 'sim_infos', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'inhibit_reason', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.InhibitReasonSpec, nullable: false },
        { name: 'device_state', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'serial', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'scanning', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sim_absent', packedOffset: 80, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'managed_network_available', packedOffset: 80, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_carrier_locked', packedOffset: 80, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_flashing', packedOffset: 80, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkFilter
chromeos.network_config.mojom.NetworkFilterSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.NetworkFilter',
      packedSize: 32,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.FilterTypeSpec, nullable: false },
        { name: 'network_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'limit', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ApnProperties
chromeos.network_config.mojom.ApnPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ApnProperties',
      packedSize: 112,
      fields: [
        { name: 'access_point_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'authentication', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnAuthenticationTypeSpec, nullable: false },
        { name: 'language', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'localized_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'password', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'username', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'attach', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'state', packedOffset: 72, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnStateSpec, nullable: false },
        { name: 'ip_type', packedOffset: 80, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnIpTypeSpec, nullable: false },
        { name: 'apn_types', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'source', packedOffset: 96, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnSourceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RoamingProperties
chromeos.network_config.mojom.RoamingPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.RoamingProperties',
      packedSize: 16,
      fields: [
        { name: 'allow_roaming', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CellularProviderProperties
chromeos.network_config.mojom.CellularProviderPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CellularProviderProperties',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'country', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FoundNetworkProperties
chromeos.network_config.mojom.FoundNetworkPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.FoundNetworkProperties',
      packedSize: 48,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'network_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'technology', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'short_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'long_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IPConfigProperties
chromeos.network_config.mojom.IPConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.IPConfigProperties',
      packedSize: 80,
      fields: [
        { name: 'gateway', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ip_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'excluded_routes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'included_routes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'name_servers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'search_domains', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'type', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'web_proxy_auto_discovery_url', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'routing_prefix', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentPortalProperties
chromeos.network_config.mojom.PaymentPortalPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.PaymentPortalProperties',
      packedSize: 32,
      fields: [
        { name: 'method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'post_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WireGuardPeerProperties
chromeos.network_config.mojom.WireGuardPeerPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.WireGuardPeerProperties',
      packedSize: 48,
      fields: [
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'preshared_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allowed_ips', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'endpoint', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'persistent_keepalive_interval', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedBoolean
chromeos.network_config.mojom.ManagedBooleanSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedBoolean',
      packedSize: 24,
      fields: [
        { name: 'policy_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'active_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'policy_value', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedInt32
chromeos.network_config.mojom.ManagedInt32Spec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedInt32',
      packedSize: 24,
      fields: [
        { name: 'policy_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'active_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'policy_value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedString
chromeos.network_config.mojom.ManagedStringSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedString',
      packedSize: 32,
      fields: [
        { name: 'active_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'policy_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'policy_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedStringList
chromeos.network_config.mojom.ManagedStringListSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedStringList',
      packedSize: 32,
      fields: [
        { name: 'active_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'policy_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'policy_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedApnProperties
chromeos.network_config.mojom.ManagedApnPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedApnProperties',
      packedSize: 72,
      fields: [
        { name: 'access_point_name', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: false },
        { name: 'authentication', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'language', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'localized_name', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'name', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'password', packedOffset: 40, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'username', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'attach', packedOffset: 56, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedApnList
chromeos.network_config.mojom.ManagedApnListSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedApnList',
      packedSize: 32,
      fields: [
        { name: 'active_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'policy_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'policy_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedIssuerSubjectPattern
chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedIssuerSubjectPattern',
      packedSize: 40,
      fields: [
        { name: 'common_name', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'locality', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'organization', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'organizational_unit', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedCertificatePattern
chromeos.network_config.mojom.ManagedCertificatePatternSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedCertificatePattern',
      packedSize: 40,
      fields: [
        { name: 'enrollment_uri', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'issuer', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, nullable: true },
        { name: 'issuer_ca_ref', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'subject', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedEAPProperties
chromeos.network_config.mojom.ManagedEAPPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedEAPProperties',
      packedSize: 160,
      fields: [
        { name: 'anonymous_identity', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_pattern', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedCertificatePatternSpec, nullable: true },
        { name: 'client_cert_pkcs11_id', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_provisioning_profile_id', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_ref', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_type', packedOffset: 40, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'domain_suffix_match', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'identity', packedOffset: 56, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'inner', packedOffset: 64, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'outer', packedOffset: 72, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'password', packedOffset: 80, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'save_credentials', packedOffset: 88, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'server_ca_pems', packedOffset: 96, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'server_ca_refs', packedOffset: 104, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'subject_alt_name_match', packedOffset: 112, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec, nullable: true },
        { name: 'subject_match', packedOffset: 120, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'tls_version_max', packedOffset: 128, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'use_proactive_key_caching', packedOffset: 136, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'use_system_cas', packedOffset: 144, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedSubjectAltNameMatchList
chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedSubjectAltNameMatchList',
      packedSize: 32,
      fields: [
        { name: 'active_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'policy_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'policy_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedIPConfigProperties
chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedIPConfigProperties',
      packedSize: 56,
      fields: [
        { name: 'gateway', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'ip_address', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'name_servers', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'routing_prefix', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedInt32Spec, nullable: true },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'web_proxy_auto_discovery_url', packedOffset: 40, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedIPSecProperties
chromeos.network_config.mojom.ManagedIPSecPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedIPSecProperties',
      packedSize: 128,
      fields: [
        { name: 'authentication_type', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: false },
        { name: 'client_cert_pattern', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedCertificatePatternSpec, nullable: true },
        { name: 'client_cert_pkcs11_id', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_provisioning_profile_id', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_ref', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_type', packedOffset: 40, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'eap', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedEAPPropertiesSpec, nullable: true },
        { name: 'group', packedOffset: 56, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'ike_version', packedOffset: 64, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedInt32Spec, nullable: true },
        { name: 'local_identity', packedOffset: 72, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'psk', packedOffset: 80, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'remote_identity', packedOffset: 88, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'save_credentials', packedOffset: 96, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'server_ca_pems', packedOffset: 104, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'server_ca_refs', packedOffset: 112, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedL2TPProperties
chromeos.network_config.mojom.ManagedL2TPPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedL2TPProperties',
      packedSize: 40,
      fields: [
        { name: 'lcp_echo_disabled', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'password', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'save_credentials', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'username', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedProxyLocation
chromeos.network_config.mojom.ManagedProxyLocationSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedProxyLocation',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: false },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedInt32Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedManualProxySettings
chromeos.network_config.mojom.ManagedManualProxySettingsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedManualProxySettings',
      packedSize: 40,
      fields: [
        { name: 'http_proxy', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedProxyLocationSpec, nullable: true },
        { name: 'secure_http_proxy', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedProxyLocationSpec, nullable: true },
        { name: 'ftp_proxy', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedProxyLocationSpec, nullable: true },
        { name: 'socks', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedProxyLocationSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedProxySettings
chromeos.network_config.mojom.ManagedProxySettingsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedProxySettings',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: false },
        { name: 'manual', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedManualProxySettingsSpec, nullable: true },
        { name: 'exclude_domains', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'pac', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedVerifyX509Properties
chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedVerifyX509Properties',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedOpenVPNProperties
chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedOpenVPNProperties',
      packedSize: 304,
      fields: [
        { name: 'auth', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'auth_retry', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'auth_no_cache', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'cipher', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_pkcs11_id', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_pattern', packedOffset: 40, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedCertificatePatternSpec, nullable: true },
        { name: 'client_cert_provisioning_profile_id', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_ref', packedOffset: 56, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'client_cert_type', packedOffset: 64, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'compression_algorithm', packedOffset: 72, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'extra_hosts', packedOffset: 80, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'ignore_default_route', packedOffset: 88, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'key_direction', packedOffset: 96, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'ns_cert_type', packedOffset: 104, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'password', packedOffset: 112, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'port', packedOffset: 120, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedInt32Spec, nullable: true },
        { name: 'proto', packedOffset: 128, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'push_peer_info', packedOffset: 136, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'remote_cert_eku', packedOffset: 144, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'remote_cert_ku', packedOffset: 152, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'remote_cert_tls', packedOffset: 160, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'reneg_sec', packedOffset: 168, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedInt32Spec, nullable: true },
        { name: 'save_credentials', packedOffset: 176, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'server_ca_pems', packedOffset: 184, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'server_ca_refs', packedOffset: 192, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'server_cert_ref', packedOffset: 200, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'server_poll_timeout', packedOffset: 208, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedInt32Spec, nullable: true },
        { name: 'shaper', packedOffset: 216, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedInt32Spec, nullable: true },
        { name: 'static_challenge', packedOffset: 224, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'tls_auth_contents', packedOffset: 232, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'tls_remote', packedOffset: 240, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'tls_version_min', packedOffset: 248, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'user_authentication_type', packedOffset: 256, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'username', packedOffset: 264, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'verb', packedOffset: 272, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'verify_hash', packedOffset: 280, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'verify_x509', packedOffset: 288, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedWireGuardPeerList
chromeos.network_config.mojom.ManagedWireGuardPeerListSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedWireGuardPeerList',
      packedSize: 32,
      fields: [
        { name: 'active_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'policy_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'policy_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedWireGuardProperties
chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedWireGuardProperties',
      packedSize: 40,
      fields: [
        { name: 'ip_addresses', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringListSpec, nullable: true },
        { name: 'private_key', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'public_key', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'peers', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedWireGuardPeerListSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedCellularProperties
chromeos.network_config.mojom.ManagedCellularPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedCellularProperties',
      packedSize: 248,
      fields: [
        { name: 'activation_state', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ActivationStateTypeSpec, nullable: false },
        { name: 'allow_roaming', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'allow_text_messages', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'apn_list', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedApnListSpec, nullable: true },
        { name: 'auto_connect', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'custom_apn_list', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'eid', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'esn', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'family', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'firmware_revision', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'found_networks', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'hardware_revision', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'home_provider', packedOffset: 96, packedBitOffset: 0, type: chromeos.network_config.mojom.CellularProviderPropertiesSpec, nullable: true },
        { name: 'iccid', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'imei', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'last_good_apn', packedOffset: 120, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnPropertiesSpec, nullable: true },
        { name: 'connected_apn', packedOffset: 128, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnPropertiesSpec, nullable: true },
        { name: 'manufacturer', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mdn', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'meid', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'min', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'model_id', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'network_technology', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'sim_lock_type', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payment_portal', packedOffset: 192, packedBitOffset: 0, type: chromeos.network_config.mojom.PaymentPortalPropertiesSpec, nullable: true },
        { name: 'roaming_state', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selected_apn', packedOffset: 208, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedApnPropertiesSpec, nullable: true },
        { name: 'serving_operator', packedOffset: 216, packedBitOffset: 0, type: chromeos.network_config.mojom.CellularProviderPropertiesSpec, nullable: true },
        { name: 'signal_strength', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'sim_locked', packedOffset: 228, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'support_network_scan', packedOffset: 228, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedEthernetProperties
chromeos.network_config.mojom.ManagedEthernetPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedEthernetProperties',
      packedSize: 24,
      fields: [
        { name: 'authentication', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'eap', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedEAPPropertiesSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedVPNProperties
chromeos.network_config.mojom.ManagedVPNPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedVPNProperties',
      packedSize: 80,
      fields: [
        { name: 'auto_connect', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'ip_sec', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedIPSecPropertiesSpec, nullable: true },
        { name: 'l2tp', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedL2TPPropertiesSpec, nullable: true },
        { name: 'open_vpn', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec, nullable: true },
        { name: 'wireguard', packedOffset: 40, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec, nullable: true },
        { name: 'provider_id', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'provider_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 64, packedBitOffset: 0, type: chromeos.network_config.mojom.VpnTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedWiFiProperties
chromeos.network_config.mojom.ManagedWiFiPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedWiFiProperties',
      packedSize: 120,
      fields: [
        { name: 'allow_gateway_arp_polling', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'auto_connect', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'bssid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'eap', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedEAPPropertiesSpec, nullable: true },
        { name: 'frequency_list', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'hex_ssid', packedOffset: 40, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'hidden_ssid', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'passphrase', packedOffset: 56, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'ssid', packedOffset: 64, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: false },
        { name: 'security', packedOffset: 72, packedBitOffset: 0, type: chromeos.network_config.mojom.SecurityTypeSpec, nullable: false },
        { name: 'passpoint_id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'passpoint_match_type', packedOffset: 88, packedBitOffset: 0, type: chromeos.network_config.mojom.MatchTypeSpec, nullable: false },
        { name: 'frequency', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'signal_strength', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_syncable', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_configured_by_active_user', packedOffset: 104, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UInt32Value
chromeos.network_config.mojom.UInt32ValueSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.UInt32Value',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TrafficCounterProperties
chromeos.network_config.mojom.TrafficCounterPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.TrafficCounterProperties',
      packedSize: 40,
      fields: [
        { name: 'last_reset_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'friendly_date', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'user_specified_reset_day', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'auto_reset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManagedProperties
chromeos.network_config.mojom.ManagedPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManagedProperties',
      packedSize: 152,
      fields: [
        { name: 'connection_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'guid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'ip_address_config_type', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: false },
        { name: 'ip_configs', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'metered', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedBooleanSpec, nullable: true },
        { name: 'name', packedOffset: 56, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: true },
        { name: 'name_servers_config_type', packedOffset: 64, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedStringSpec, nullable: false },
        { name: 'priority', packedOffset: 72, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedInt32Spec, nullable: true },
        { name: 'proxy_settings', packedOffset: 80, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedProxySettingsSpec, nullable: true },
        { name: 'portal_state', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'static_ip_config', packedOffset: 96, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec, nullable: true },
        { name: 'saved_ip_config', packedOffset: 104, packedBitOffset: 0, type: chromeos.network_config.mojom.IPConfigPropertiesSpec, nullable: true },
        { name: 'type', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type_properties', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'traffic_counter_properties', packedOffset: 128, packedBitOffset: 0, type: chromeos.network_config.mojom.TrafficCounterPropertiesSpec, nullable: true },
        { name: 'connectable', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AutoConnectConfig
chromeos.network_config.mojom.AutoConnectConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.AutoConnectConfig',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MeteredConfig
chromeos.network_config.mojom.MeteredConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.MeteredConfig',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PriorityConfig
chromeos.network_config.mojom.PriorityConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.PriorityConfig',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VpnTypeConfig
chromeos.network_config.mojom.VpnTypeConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.VpnTypeConfig',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.VpnTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProxyLocation
chromeos.network_config.mojom.ProxyLocationSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ProxyLocation',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManualProxySettings
chromeos.network_config.mojom.ManualProxySettingsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ManualProxySettings',
      packedSize: 40,
      fields: [
        { name: 'http_proxy', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ProxyLocationSpec, nullable: true },
        { name: 'secure_http_proxy', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ProxyLocationSpec, nullable: true },
        { name: 'ftp_proxy', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.ProxyLocationSpec, nullable: true },
        { name: 'socks', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.ProxyLocationSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProxySettings
chromeos.network_config.mojom.ProxySettingsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ProxySettings',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'manual', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ManualProxySettingsSpec, nullable: true },
        { name: 'exclude_domains', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'pac', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EAPConfigProperties
chromeos.network_config.mojom.EAPConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.EAPConfigProperties',
      packedSize: 104,
      fields: [
        { name: 'anonymous_identity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_cert_pkcs11_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_cert_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'domain_suffix_match', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'identity', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'inner', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'outer', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'password', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'server_ca_pems', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'subject_alt_name_match', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'subject_match', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'save_credentials', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'use_system_cas', packedOffset: 88, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SubjectAltName
chromeos.network_config.mojom.SubjectAltNameSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.SubjectAltName',
      packedSize: 16,
      fields: [
        { name: 'kEmail', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IPSecConfigProperties
chromeos.network_config.mojom.IPSecConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.IPSecConfigProperties',
      packedSize: 104,
      fields: [
        { name: 'authentication_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'client_cert_pkcs11_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_cert_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'eap', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.EAPConfigPropertiesSpec, nullable: true },
        { name: 'group', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'local_identity', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'psk', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'remote_identity', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'server_ca_pems', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'server_ca_refs', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'ike_version', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'save_credentials', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: L2TPConfigProperties
chromeos.network_config.mojom.L2TPConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.L2TPConfigProperties',
      packedSize: 32,
      fields: [
        { name: 'password', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'username', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'lcp_echo_disabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'save_credentials', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OpenVPNConfigProperties
chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.OpenVPNConfigProperties',
      packedSize: 88,
      fields: [
        { name: 'client_cert_pkcs11_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_cert_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'extra_hosts', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'otp', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'password', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'server_ca_pems', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'server_ca_refs', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'username', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'user_authentication_type', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'save_credentials', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WireGuardConfigProperties
chromeos.network_config.mojom.WireGuardConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.WireGuardConfigProperties',
      packedSize: 32,
      fields: [
        { name: 'ip_addresses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'private_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'peers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextMessagesAllowState
chromeos.network_config.mojom.TextMessagesAllowStateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.TextMessagesAllowState',
      packedSize: 16,
      fields: [
        { name: 'allow_text_messages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CellularConfigProperties
chromeos.network_config.mojom.CellularConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CellularConfigProperties',
      packedSize: 32,
      fields: [
        { name: 'apn', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnPropertiesSpec, nullable: true },
        { name: 'roaming', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.RoamingPropertiesSpec, nullable: true },
        { name: 'text_message_allow_state', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.TextMessagesAllowStateSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EthernetConfigProperties
chromeos.network_config.mojom.EthernetConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.EthernetConfigProperties',
      packedSize: 24,
      fields: [
        { name: 'authentication', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'eap', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.EAPConfigPropertiesSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VPNConfigProperties
chromeos.network_config.mojom.VPNConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.VPNConfigProperties',
      packedSize: 56,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ip_sec', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.IPSecConfigPropertiesSpec, nullable: true },
        { name: 'l2tp', packedOffset: 16, packedBitOffset: 0, type: chromeos.network_config.mojom.L2TPConfigPropertiesSpec, nullable: true },
        { name: 'open_vpn', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec, nullable: true },
        { name: 'wireguard', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.WireGuardConfigPropertiesSpec, nullable: true },
        { name: 'type', packedOffset: 40, packedBitOffset: 0, type: chromeos.network_config.mojom.VpnTypeConfigSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WiFiConfigProperties
chromeos.network_config.mojom.WiFiConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.WiFiConfigProperties',
      packedSize: 48,
      fields: [
        { name: 'eap', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.EAPConfigPropertiesSpec, nullable: true },
        { name: 'passphrase', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ssid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'security', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.SecurityTypeSpec, nullable: false },
        { name: 'hidden_ssid', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_config.mojom.HiddenSsidModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConfigProperties
chromeos.network_config.mojom.ConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.ConfigProperties',
      packedSize: 88,
      fields: [
        { name: 'auto_connect', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.AutoConnectConfigSpec, nullable: true },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ip_address_config_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'metered', packedOffset: 24, packedBitOffset: 0, type: chromeos.network_config.mojom.MeteredConfigSpec, nullable: true },
        { name: 'name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'name_servers_config_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'priority', packedOffset: 48, packedBitOffset: 0, type: chromeos.network_config.mojom.PriorityConfigSpec, nullable: true },
        { name: 'proxy_settings', packedOffset: 56, packedBitOffset: 0, type: chromeos.network_config.mojom.ProxySettingsSpec, nullable: true },
        { name: 'static_ip_config', packedOffset: 64, packedBitOffset: 0, type: chromeos.network_config.mojom.IPConfigPropertiesSpec, nullable: true },
        { name: 'type_config', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CellularSimState
chromeos.network_config.mojom.CellularSimStateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CellularSimState',
      packedSize: 32,
      fields: [
        { name: 'current_pin_or_puk', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'new_pin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'require_pin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GlobalPolicy
chromeos.network_config.mojom.GlobalPolicySpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.GlobalPolicy',
      packedSize: 32,
      fields: [
        { name: 'blocked_hex_ssids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'allow_text_messages', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.SuppressionTypeSpec, nullable: false },
        { name: 'allow_apn_modification', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_cellular_sim_lock', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_cellular_hotspot', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_only_policy_cellular_networks', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_only_policy_networks_to_autoconnect', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_only_policy_wifi_networks_to_connect', packedOffset: 16, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_only_policy_wifi_networks_to_connect_if_available', packedOffset: 16, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'dns_queries_monitored', packedOffset: 16, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'report_xdr_events_enabled', packedOffset: 16, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'recommended_values_are_ephemeral', packedOffset: 16, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'user_created_network_configurations_are_ephemeral', packedOffset: 16, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VpnProvider
chromeos.network_config.mojom.VpnProviderSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.VpnProvider',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.VpnTypeSpec, nullable: false },
        { name: 'provider_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'provider_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'app_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'last_launch_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NetworkCertificate
chromeos.network_config.mojom.NetworkCertificateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.NetworkCertificate',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.CertificateTypeSpec, nullable: false },
        { name: 'hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'issued_by', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'issued_to', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'pem_or_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'available_for_network_auth', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'hardware_backed', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'device_wide', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AlwaysOnVpnProperties
chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.AlwaysOnVpnProperties',
      packedSize: 24,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.AlwaysOnVpnModeSpec, nullable: false },
        { name: 'service_guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TrafficCounter
chromeos.network_config.mojom.TrafficCounterSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.TrafficCounter',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.TrafficCounterSourceSpec, nullable: false },
        { name: 'rx_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'tx_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CrosNetworkConfig
chromeos.network_config.mojom.CrosNetworkConfig = {};

chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_config.mojom.CrosNetworkConfigRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfig';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver,
      handle);
    this.$ = new chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_config.mojom.CrosNetworkConfigRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  getNetworkState(guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec,
      [guid]);
  }

  getNetworkStateList(filter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec,
      [filter]);
  }

  getDeviceStateList() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec,
      []);
  }

  getManagedProperties(guid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec,
      [guid]);
  }

  setProperties(guid, properties) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec,
      [guid, properties]);
  }

  configureNetwork(properties, shared) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec,
      [properties, shared]);
  }

  forgetNetwork(guid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec,
      [guid]);
  }

  setNetworkTypeEnabledState(type, enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec,
      [type, enabled]);
  }

  setCellularSimState(state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec,
      [state]);
  }

  selectCellularMobileNetwork(guid, network_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec,
      [guid, network_id]);
  }

  requestNetworkScan(type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec,
      null,
      [type]);
  }

  getGlobalPolicy() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec,
      []);
  }

  startConnect(guid) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec,
      [guid]);
  }

  startDisconnect(guid) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec,
      [guid]);
  }

  setVpnProviders(providers) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec,
      null,
      [providers]);
  }

  getVpnProviders() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec,
      []);
  }

  getNetworkCertificates() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec,
      []);
  }

  getAlwaysOnVpn() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec,
      []);
  }

  setAlwaysOnVpn(properties) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec,
      null,
      [properties]);
  }

  getSupportedVpnTypes() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec,
      []);
  }

  requestTrafficCounters(guid) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec,
      [guid]);
  }

  resetTrafficCounters(guid) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec,
      null,
      [guid]);
  }

  setTrafficCountersResetDay(guid, day) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec,
      [guid, day]);
  }

  createCustomApn(network_guid, apn) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec,
      [network_guid, apn]);
  }

  createExclusivelyEnabledCustomApn(network_guid, apn) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec,
      [network_guid, apn]);
  }

  removeCustomApn(network_guid, apn_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec,
      null,
      [network_guid, apn_id]);
  }

  modifyCustomApn(network_guid, apn) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec,
      null,
      [network_guid, apn]);
  }

};

chromeos.network_config.mojom.CrosNetworkConfig.getRemote = function() {
  let remote = new chromeos.network_config.mojom.CrosNetworkConfigRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfig',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNetworkState
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkState_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.NetworkStatePropertiesSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNetworkStateList
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkStateList_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.NetworkFilterSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkStateList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDeviceStateList
chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetDeviceStateList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetDeviceStateList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetManagedProperties
chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetManagedProperties_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetManagedProperties_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ManagedPropertiesSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetProperties
chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetProperties_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ConfigPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetProperties_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConfigureNetwork
chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ConfigureNetwork_Params',
      packedSize: 24,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.ConfigPropertiesSpec, nullable: false },
        { name: 'shared', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ConfigureNetwork_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'error_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForgetNetwork
chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ForgetNetwork_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ForgetNetwork_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetNetworkTypeEnabledState
chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetNetworkTypeEnabledState_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetNetworkTypeEnabledState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCellularSimState
chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetCellularSimState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.CellularSimStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetCellularSimState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectCellularMobileNetwork
chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SelectCellularMobileNetwork_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'network_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SelectCellularMobileNetwork_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestNetworkScan
chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.RequestNetworkScan_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetGlobalPolicy
chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetGlobalPolicy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetGlobalPolicy_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.GlobalPolicySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartConnect
chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.StartConnect_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.StartConnect_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.StartConnectResultSpec, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDisconnect
chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.StartDisconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.StartDisconnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetVpnProviders
chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetVpnProviders_Params',
      packedSize: 16,
      fields: [
        { name: 'providers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVpnProviders
chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetVpnProviders_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetVpnProviders_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'providers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetNetworkCertificates
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkCertificates_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetNetworkCertificates_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'server_cas', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_certs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAlwaysOnVpn
chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetAlwaysOnVpn_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetAlwaysOnVpn_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAlwaysOnVpn
chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetAlwaysOnVpn_Params',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSupportedVpnTypes
chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetSupportedVpnTypes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.GetSupportedVpnTypes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'vpn_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestTrafficCounters
chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.RequestTrafficCounters_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.RequestTrafficCounters_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'traffic_counters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetTrafficCounters
chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ResetTrafficCounters_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTrafficCountersResetDay
chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetTrafficCountersResetDay_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'day', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.UInt32ValueSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.SetTrafficCountersResetDay_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateCustomApn
chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.CreateCustomApn_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'apn', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.CreateCustomApn_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateExclusivelyEnabledCustomApn
chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.CreateExclusivelyEnabledCustomApn_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'apn', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.CreateExclusivelyEnabledCustomApn_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveCustomApn
chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.RemoveCustomApn_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'apn_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ModifyCustomApn
chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfig.ModifyCustomApn_Params',
      packedSize: 24,
      fields: [
        { name: 'network_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'apn', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ApnPropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.network_config.mojom.CrosNetworkConfigPtr = chromeos.network_config.mojom.CrosNetworkConfigRemote;
chromeos.network_config.mojom.CrosNetworkConfigRequest = chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver;


// Interface: CrosNetworkConfigObserver
chromeos.network_config.mojom.CrosNetworkConfigObserver = {};

chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_config.mojom.CrosNetworkConfigObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver,
      handle);
    this.$ = new chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.network_config.mojom.CrosNetworkConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onActiveNetworksChanged(networks) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec,
      null,
      [networks]);
  }

  onNetworkStateChanged(network) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [network]);
  }

  onNetworkStateListChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec,
      null,
      []);
  }

  onDeviceStateListChanged() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec,
      null,
      []);
  }

  onVpnProvidersChanged() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec,
      null,
      []);
  }

  onNetworkCertificatesChanged() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec,
      null,
      []);
  }

  onPoliciesApplied(userhash) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec,
      null,
      [userhash]);
  }

};

chromeos.network_config.mojom.CrosNetworkConfigObserver.getRemote = function() {
  let remote = new chromeos.network_config.mojom.CrosNetworkConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_config.mojom.CrosNetworkConfigObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnActiveNetworksChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnActiveNetworksChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkStateChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnNetworkStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'network', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.NetworkStatePropertiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkStateListChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnNetworkStateListChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceStateListChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnDeviceStateListChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnVpnProvidersChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnVpnProvidersChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNetworkCertificatesChanged
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnNetworkCertificatesChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPoliciesApplied
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_config.mojom.CrosNetworkConfigObserver.OnPoliciesApplied_Params',
      packedSize: 16,
      fields: [
        { name: 'userhash', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.network_config.mojom.CrosNetworkConfigObserverPtr = chromeos.network_config.mojom.CrosNetworkConfigObserverRemote;
chromeos.network_config.mojom.CrosNetworkConfigObserverRequest = chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver;

