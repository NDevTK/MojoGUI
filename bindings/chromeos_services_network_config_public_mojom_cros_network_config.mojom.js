// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_config/public/mojom/cros_network_config.mojom
// Module: chromeos.network_config.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_config = chromeos.network_config || {};
chromeos.network_config.mojom = chromeos.network_config.mojom || {};
var chromeos = chromeos || {};
var services = services || {};
var services = services || {};
var url = url || {};

chromeos.network_config.mojom.ActivationStateTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.AuthenticationTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.HiddenSsidModeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ProxyModeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.SecurityTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.MatchTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.VpnTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.FilterTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.StartConnectResultSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.CertificateTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.InhibitReasonSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.AlwaysOnVpnModeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnStateSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnAuthenticationTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnIpTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.ApnSourceSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.TypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.SuppressionTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.TrafficCounterSourceSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec = { $: {} };
chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.SIMLockStatusSpec = { $: {} };
chromeos.network_config.mojom.SIMInfoSpec = { $: {} };
chromeos.network_config.mojom.CellularStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.EthernetStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.TetherStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.VPNStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.WiFiStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.NetworkStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.DeviceStatePropertiesSpec = { $: {} };
chromeos.network_config.mojom.NetworkFilterSpec = { $: {} };
chromeos.network_config.mojom.ApnPropertiesSpec = { $: {} };
chromeos.network_config.mojom.RoamingPropertiesSpec = { $: {} };
chromeos.network_config.mojom.CellularProviderPropertiesSpec = { $: {} };
chromeos.network_config.mojom.FoundNetworkPropertiesSpec = { $: {} };
chromeos.network_config.mojom.IPConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.PaymentPortalPropertiesSpec = { $: {} };
chromeos.network_config.mojom.WireGuardPeerPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedBooleanSpec = { $: {} };
chromeos.network_config.mojom.ManagedInt32Spec = { $: {} };
chromeos.network_config.mojom.ManagedStringSpec = { $: {} };
chromeos.network_config.mojom.ManagedStringListSpec = { $: {} };
chromeos.network_config.mojom.ManagedApnPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedApnListSpec = { $: {} };
chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec = { $: {} };
chromeos.network_config.mojom.ManagedCertificatePatternSpec = { $: {} };
chromeos.network_config.mojom.ManagedEAPPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec = { $: {} };
chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedIPSecPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedL2TPPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedProxyLocationSpec = { $: {} };
chromeos.network_config.mojom.ManagedManualProxySettingsSpec = { $: {} };
chromeos.network_config.mojom.ManagedProxySettingsSpec = { $: {} };
chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedWireGuardPeerListSpec = { $: {} };
chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedCellularPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedEthernetPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedVPNPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedWiFiPropertiesSpec = { $: {} };
chromeos.network_config.mojom.UInt32ValueSpec = { $: {} };
chromeos.network_config.mojom.TrafficCounterPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ManagedPropertiesSpec = { $: {} };
chromeos.network_config.mojom.AutoConnectConfigSpec = { $: {} };
chromeos.network_config.mojom.MeteredConfigSpec = { $: {} };
chromeos.network_config.mojom.PriorityConfigSpec = { $: {} };
chromeos.network_config.mojom.VpnTypeConfigSpec = { $: {} };
chromeos.network_config.mojom.ProxyLocationSpec = { $: {} };
chromeos.network_config.mojom.ManualProxySettingsSpec = { $: {} };
chromeos.network_config.mojom.ProxySettingsSpec = { $: {} };
chromeos.network_config.mojom.EAPConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.SubjectAltNameSpec = { $: {} };
chromeos.network_config.mojom.IPSecConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.L2TPConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.WireGuardConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.TextMessagesAllowStateSpec = { $: {} };
chromeos.network_config.mojom.CellularConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.EthernetConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.VPNConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.WiFiConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.ConfigPropertiesSpec = { $: {} };
chromeos.network_config.mojom.CellularSimStateSpec = { $: {} };
chromeos.network_config.mojom.GlobalPolicySpec = { $: {} };
chromeos.network_config.mojom.VpnProviderSpec = { $: {} };
chromeos.network_config.mojom.NetworkCertificateSpec = { $: {} };
chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec = { $: {} };
chromeos.network_config.mojom.TrafficCounterSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig = {};
chromeos.network_config.mojom.CrosNetworkConfig.$interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfig';
chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver = {};
chromeos.network_config.mojom.CrosNetworkConfigObserver.$interfaceName = 'chromeos.network_config.mojom.CrosNetworkConfigObserver';
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec = { $: {} };
chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec = { $: {} };

chromeos.network_config.mojom.kMaxNumCustomApns = 10;

chromeos.network_config.mojom.kNoLimit = 0;

chromeos.network_config.mojom.kNoRoutingPrefix = 0;

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

// Union: NetworkTypeStateProperties
mojo.internal.Union(
    chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeStateProperties', {
      'cellular': {
        'ordinal': 0,
        'type': chromeos.network_config.mojom.CellularStatePropertiesSpec,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.EthernetStatePropertiesSpec,
        'nullable': false,
      },
      'tether': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.TetherStatePropertiesSpec,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.VPNStatePropertiesSpec,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 4,
        'type': chromeos.network_config.mojom.WiFiStatePropertiesSpec,
        'nullable': false,
      },
    });

// Union: NetworkTypeManagedProperties
mojo.internal.Union(
    chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeManagedProperties', {
      'cellular': {
        'ordinal': 0,
        'type': chromeos.network_config.mojom.ManagedCellularPropertiesSpec,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.ManagedEthernetPropertiesSpec,
        'nullable': false,
      },
      'tether': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.TetherStatePropertiesSpec,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.ManagedVPNPropertiesSpec,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 4,
        'type': chromeos.network_config.mojom.ManagedWiFiPropertiesSpec,
        'nullable': false,
      },
    });

// Union: NetworkTypeConfigProperties
mojo.internal.Union(
    chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeConfigProperties', {
      'cellular': {
        'ordinal': 0,
        'type': chromeos.network_config.mojom.CellularConfigPropertiesSpec,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.EthernetConfigPropertiesSpec,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.VPNConfigPropertiesSpec,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.WiFiConfigPropertiesSpec,
        'nullable': false,
      },
    });

// Struct: SIMLockStatus
mojo.internal.Struct(
    chromeos.network_config.mojom.SIMLockStatusSpec, 'chromeos.network_config.mojom.SIMLockStatus', [
      mojo.internal.StructField('lock_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lock_enabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('retries_left', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SIMInfo
mojo.internal.Struct(
    chromeos.network_config.mojom.SIMInfoSpec, 'chromeos.network_config.mojom.SIMInfo', [
      mojo.internal.StructField('slot_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('iccid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_primary', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CellularStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularStatePropertiesSpec, 'chromeos.network_config.mojom.CellularStateProperties', [
      mojo.internal.StructField('iccid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('eid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activation_state', 48, 0, chromeos.network_config.mojom.ActivationStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('network_technology', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('roaming', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sim_lock_enabled', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_locked', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_lock_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('has_nick_name', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('network_operator', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_portal', 40, 0, chromeos.network_config.mojom.PaymentPortalPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EthernetStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.EthernetStatePropertiesSpec, 'chromeos.network_config.mojom.EthernetStateProperties', [
      mojo.internal.StructField('authentication', 0, 0, chromeos.network_config.mojom.AuthenticationTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TetherStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.TetherStatePropertiesSpec, 'chromeos.network_config.mojom.TetherStateProperties', [
      mojo.internal.StructField('battery_percentage', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('carrier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('has_connected_to_host', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VPNStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.VPNStatePropertiesSpec, 'chromeos.network_config.mojom.VPNStateProperties', [
      mojo.internal.StructField('type', 16, 0, chromeos.network_config.mojom.VpnTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('provider_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('provider_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WiFiStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WiFiStatePropertiesSpec, 'chromeos.network_config.mojom.WiFiStateProperties', [
      mojo.internal.StructField('bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('hex_ssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 36, 0, chromeos.network_config.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('ssid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('visible', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('passpoint_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: NetworkStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkStateProperties', [
      mojo.internal.StructField('connectable', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connect_requested', 72, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connection_state', 48, 0, chromeos.network_config.mojom.ConnectionStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_state', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('guid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('portal_state', 52, 0, chromeos.network_config.mojom.PortalStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('portal_probe_url', 40, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('priority', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('proxy_mode', 60, 0, chromeos.network_config.mojom.ProxyModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('prohibited_by_policy', 72, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('source', 64, 0, chromeos.network_config.mojom.OncSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 68, 0, chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('type_state', 0, 0, chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: DeviceStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.DeviceStatePropertiesSpec, 'chromeos.network_config.mojom.DeviceStateProperties', [
      mojo.internal.StructField('ipv4_address', 0, 0, network.mojom.IPAddressSpec, null, true, 0, undefined),
      mojo.internal.StructField('ipv6_address', 8, 0, network.mojom.IPAddressSpec, null, true, 0, undefined),
      mojo.internal.StructField('imei', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('scanning', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_lock_status', 32, 0, chromeos.network_config.mojom.SIMLockStatusSpec, null, true, 0, undefined),
      mojo.internal.StructField('sim_infos', 40, 0, mojo.internal.Array(chromeos.network_config.mojom.SIMInfoSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('inhibit_reason', 56, 0, chromeos.network_config.mojom.InhibitReasonSpec, null, false, 0, undefined),
      mojo.internal.StructField('sim_absent', 68, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('device_state', 60, 0, chromeos.network_config.mojom.DeviceStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('managed_network_available', 68, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('serial', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_carrier_locked', 68, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_flashing', 68, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: NetworkFilter
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkFilterSpec, 'chromeos.network_config.mojom.NetworkFilter', [
      mojo.internal.StructField('filter', 0, 0, chromeos.network_config.mojom.FilterTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('network_type', 4, 0, chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('limit', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ApnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ApnPropertiesSpec, 'chromeos.network_config.mojom.ApnProperties', [
      mojo.internal.StructField('access_point_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('authentication', 72, 0, chromeos.network_config.mojom.ApnAuthenticationTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('language', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('localized_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('username', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('attach', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('state', 76, 0, chromeos.network_config.mojom.ApnStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('ip_type', 80, 0, chromeos.network_config.mojom.ApnIpTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('apn_types', 64, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnTypeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 84, 0, chromeos.network_config.mojom.ApnSourceSpec, null, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: RoamingProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.RoamingPropertiesSpec, 'chromeos.network_config.mojom.RoamingProperties', [
      mojo.internal.StructField('allow_roaming', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CellularProviderProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularProviderPropertiesSpec, 'chromeos.network_config.mojom.CellularProviderProperties', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('country', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FoundNetworkProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.FoundNetworkPropertiesSpec, 'chromeos.network_config.mojom.FoundNetworkProperties', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('technology', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('short_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('long_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: IPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.IPConfigPropertiesSpec, 'chromeos.network_config.mojom.IPConfigProperties', [
      mojo.internal.StructField('gateway', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_address', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('excluded_routes', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('included_routes', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('name_servers', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('search_domains', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('routing_prefix', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('type', 60, 0, chromeos.network_config.mojom.IPConfigTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('web_proxy_auto_discovery_url', 48, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: PaymentPortalProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.PaymentPortalPropertiesSpec, 'chromeos.network_config.mojom.PaymentPortalProperties', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('post_data', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WireGuardPeerProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, 'chromeos.network_config.mojom.WireGuardPeerProperties', [
      mojo.internal.StructField('public_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('preshared_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allowed_ips', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('endpoint', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('persistent_keepalive_interval', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ManagedBoolean
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedBooleanSpec, 'chromeos.network_config.mojom.ManagedBoolean', [
      mojo.internal.StructField('active_value', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('policy_source', 0, 0, chromeos.network_config.mojom.PolicySourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('policy_value', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManagedInt32
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedInt32Spec, 'chromeos.network_config.mojom.ManagedInt32', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('policy_source', 4, 0, chromeos.network_config.mojom.PolicySourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('policy_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedString
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedStringSpec, 'chromeos.network_config.mojom.ManagedString', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 16, 0, chromeos.network_config.mojom.PolicySourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('policy_value', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedStringList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedStringListSpec, 'chromeos.network_config.mojom.ManagedStringList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 16, 0, chromeos.network_config.mojom.PolicySourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('policy_value', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedApnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedApnPropertiesSpec, 'chromeos.network_config.mojom.ManagedApnProperties', [
      mojo.internal.StructField('access_point_name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('authentication', 8, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('language', 16, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('localized_name', 24, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('name', 32, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('password', 40, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('username', 48, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('attach', 56, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ManagedApnList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedApnListSpec, 'chromeos.network_config.mojom.ManagedApnList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 16, 0, chromeos.network_config.mojom.PolicySourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('policy_value', 8, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIssuerSubjectPattern
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, 'chromeos.network_config.mojom.ManagedIssuerSubjectPattern', [
      mojo.internal.StructField('common_name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('locality', 8, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('organization', 16, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('organizational_unit', 24, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCertificatePattern
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedCertificatePatternSpec, 'chromeos.network_config.mojom.ManagedCertificatePattern', [
      mojo.internal.StructField('enrollment_uri', 0, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('issuer', 8, 0, chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, null, true, 0, undefined),
      mojo.internal.StructField('issuer_ca_ref', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('subject', 24, 0, chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedEAPProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedEAPPropertiesSpec, 'chromeos.network_config.mojom.ManagedEAPProperties', [
      mojo.internal.StructField('anonymous_identity', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 8, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 16, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 24, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 32, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 40, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('domain_suffix_match', 48, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('identity', 56, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('inner', 64, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('outer', 72, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('password', 80, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 88, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 96, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 104, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('subject_alt_name_match', 112, 0, chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec, null, true, 0, undefined),
      mojo.internal.StructField('subject_match', 120, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('tls_version_max', 128, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('use_proactive_key_caching', 136, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('use_system_cas', 144, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
    ],
    [[0, 160]]);

// Struct: ManagedSubjectAltNameMatchList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec, 'chromeos.network_config.mojom.ManagedSubjectAltNameMatchList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 16, 0, chromeos.network_config.mojom.PolicySourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('policy_value', 8, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPConfigProperties', [
      mojo.internal.StructField('gateway', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('ip_address', 8, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('name_servers', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('routing_prefix', 24, 0, chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('type', 40, 0, chromeos.network_config.mojom.IPConfigTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('web_proxy_auto_discovery_url', 32, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ManagedIPSecProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIPSecPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPSecProperties', [
      mojo.internal.StructField('authentication_type', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 8, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 16, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 24, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 32, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 40, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('eap', 48, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('group', 56, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('ike_version', 64, 0, chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('local_identity', 72, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('psk', 80, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('remote_identity', 88, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 96, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 104, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 112, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
    ],
    [[0, 128]]);

// Struct: ManagedL2TPProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedL2TPPropertiesSpec, 'chromeos.network_config.mojom.ManagedL2TPProperties', [
      mojo.internal.StructField('lcp_echo_disabled', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('password', 8, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 16, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('username', 24, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxyLocation
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedProxyLocationSpec, 'chromeos.network_config.mojom.ManagedProxyLocation', [
      mojo.internal.StructField('host', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, chromeos.network_config.mojom.ManagedInt32Spec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedManualProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedManualProxySettingsSpec, 'chromeos.network_config.mojom.ManagedManualProxySettings', [
      mojo.internal.StructField('http_proxy', 0, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('secure_http_proxy', 8, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('ftp_proxy', 16, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('socks', 24, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedProxySettingsSpec, 'chromeos.network_config.mojom.ManagedProxySettings', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('manual', 8, 0, chromeos.network_config.mojom.ManagedManualProxySettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('exclude_domains', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('pac', 24, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedVerifyX509Properties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec, 'chromeos.network_config.mojom.ManagedVerifyX509Properties', [
      mojo.internal.StructField('name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('type', 8, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedOpenVPNProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedOpenVPNProperties', [
      mojo.internal.StructField('auth', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('auth_retry', 8, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('auth_no_cache', 16, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('cipher', 24, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 32, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 40, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 48, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 56, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 64, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('compression_algorithm', 72, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('extra_hosts', 80, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('ignore_default_route', 88, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('key_direction', 96, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('ns_cert_type', 104, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('password', 112, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('port', 120, 0, chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('proto', 128, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('push_peer_info', 136, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_eku', 144, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_ku', 152, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_tls', 160, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('reneg_sec', 168, 0, chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 176, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 184, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 192, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('server_cert_ref', 200, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('server_poll_timeout', 208, 0, chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('shaper', 216, 0, chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('static_challenge', 224, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('tls_auth_contents', 232, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('tls_remote', 240, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('tls_version_min', 248, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('user_authentication_type', 256, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('username', 264, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('verb', 272, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('verify_hash', 280, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('verify_x509', 288, 0, chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 304]]);

// Struct: ManagedWireGuardPeerList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWireGuardPeerListSpec, 'chromeos.network_config.mojom.ManagedWireGuardPeerList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 16, 0, chromeos.network_config.mojom.PolicySourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('policy_value', 8, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedWireGuardProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec, 'chromeos.network_config.mojom.ManagedWireGuardProperties', [
      mojo.internal.StructField('ip_addresses', 0, 0, chromeos.network_config.mojom.ManagedStringListSpec, null, true, 0, undefined),
      mojo.internal.StructField('private_key', 8, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('public_key', 16, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('peers', 24, 0, chromeos.network_config.mojom.ManagedWireGuardPeerListSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCellularProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedCellularPropertiesSpec, 'chromeos.network_config.mojom.ManagedCellularProperties', [
      mojo.internal.StructField('activation_state', 216, 0, chromeos.network_config.mojom.ActivationStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('sim_locked', 224, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_roaming', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('allow_text_messages', 8, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('apn_list', 16, 0, chromeos.network_config.mojom.ManagedApnListSpec, null, true, 0, undefined),
      mojo.internal.StructField('auto_connect', 24, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('custom_apn_list', 32, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('eid', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('esn', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('family', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('firmware_revision', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('found_networks', 72, 0, mojo.internal.Array(chromeos.network_config.mojom.FoundNetworkPropertiesSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('hardware_revision', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('home_provider', 88, 0, chromeos.network_config.mojom.CellularProviderPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('iccid', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('imei', 104, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('last_good_apn', 112, 0, chromeos.network_config.mojom.ApnPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('connected_apn', 120, 0, chromeos.network_config.mojom.ApnPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer', 128, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mdn', 136, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('meid', 144, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('min', 152, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('model_id', 160, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('network_technology', 168, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sim_lock_type', 176, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_portal', 184, 0, chromeos.network_config.mojom.PaymentPortalPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('roaming_state', 192, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('selected_apn', 200, 0, chromeos.network_config.mojom.ManagedApnPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('serving_operator', 208, 0, chromeos.network_config.mojom.CellularProviderPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('signal_strength', 220, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('support_network_scan', 224, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 240]]);

// Struct: ManagedEthernetProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedEthernetPropertiesSpec, 'chromeos.network_config.mojom.ManagedEthernetProperties', [
      mojo.internal.StructField('authentication', 0, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('eap', 8, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedVPNProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedVPNProperties', [
      mojo.internal.StructField('auto_connect', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('host', 8, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('ip_sec', 16, 0, chromeos.network_config.mojom.ManagedIPSecPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('l2tp', 24, 0, chromeos.network_config.mojom.ManagedL2TPPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('open_vpn', 32, 0, chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('wireguard', 40, 0, chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('provider_id', 48, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('provider_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, chromeos.network_config.mojom.VpnTypeSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ManagedWiFiProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWiFiPropertiesSpec, 'chromeos.network_config.mojom.ManagedWiFiProperties', [
      mojo.internal.StructField('allow_gateway_arp_polling', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('auto_connect', 8, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('bssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap', 24, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('frequency', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frequency_list', 32, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('hex_ssid', 40, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 48, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('passphrase', 56, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('ssid', 64, 0, chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('security', 84, 0, chromeos.network_config.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_syncable', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_configured_by_active_user', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('passpoint_id', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('passpoint_match_type', 92, 0, chromeos.network_config.mojom.MatchTypeSpec, null, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: UInt32Value
mojo.internal.Struct(
    chromeos.network_config.mojom.UInt32ValueSpec, 'chromeos.network_config.mojom.UInt32Value', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrafficCounterProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.TrafficCounterPropertiesSpec, 'chromeos.network_config.mojom.TrafficCounterProperties', [
      mojo.internal.StructField('last_reset_time', 0, 0, mojo_base.mojom.TimeSpec, null, true, 0, undefined),
      mojo.internal.StructField('friendly_date', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('auto_reset', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_specified_reset_day', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedPropertiesSpec, 'chromeos.network_config.mojom.ManagedProperties', [
      mojo.internal.StructField('connection_state', 112, 0, chromeos.network_config.mojom.ConnectionStateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('source', 116, 0, chromeos.network_config.mojom.OncSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('connectable', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_state', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('guid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ip_address_config_type', 32, 0, chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('ip_configs', 40, 0, mojo.internal.Array(chromeos.network_config.mojom.IPConfigPropertiesSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('metered', 48, 0, chromeos.network_config.mojom.ManagedBooleanSpec, null, true, 0, undefined),
      mojo.internal.StructField('name', 56, 0, chromeos.network_config.mojom.ManagedStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('name_servers_config_type', 64, 0, chromeos.network_config.mojom.ManagedStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('priority', 72, 0, chromeos.network_config.mojom.ManagedInt32Spec, null, true, 0, undefined),
      mojo.internal.StructField('proxy_settings', 80, 0, chromeos.network_config.mojom.ManagedProxySettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('portal_state', 120, 0, chromeos.network_config.mojom.PortalStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('static_ip_config', 88, 0, chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('saved_ip_config', 96, 0, chromeos.network_config.mojom.IPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('type', 124, 0, chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('type_properties', 0, 0, chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec, null, false, 0, undefined),
      mojo.internal.StructField('traffic_counter_properties', 104, 0, chromeos.network_config.mojom.TrafficCounterPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 144]]);

// Struct: AutoConnectConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.AutoConnectConfigSpec, 'chromeos.network_config.mojom.AutoConnectConfig', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MeteredConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.MeteredConfigSpec, 'chromeos.network_config.mojom.MeteredConfig', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PriorityConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.PriorityConfigSpec, 'chromeos.network_config.mojom.PriorityConfig', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VpnTypeConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.VpnTypeConfigSpec, 'chromeos.network_config.mojom.VpnTypeConfig', [
      mojo.internal.StructField('value', 0, 0, chromeos.network_config.mojom.VpnTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProxyLocation
mojo.internal.Struct(
    chromeos.network_config.mojom.ProxyLocationSpec, 'chromeos.network_config.mojom.ProxyLocation', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManualProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ManualProxySettingsSpec, 'chromeos.network_config.mojom.ManualProxySettings', [
      mojo.internal.StructField('http_proxy', 0, 0, chromeos.network_config.mojom.ProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('secure_http_proxy', 8, 0, chromeos.network_config.mojom.ProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('ftp_proxy', 16, 0, chromeos.network_config.mojom.ProxyLocationSpec, null, true, 0, undefined),
      mojo.internal.StructField('socks', 24, 0, chromeos.network_config.mojom.ProxyLocationSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ProxySettingsSpec, 'chromeos.network_config.mojom.ProxySettings', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manual', 8, 0, chromeos.network_config.mojom.ManualProxySettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('exclude_domains', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('pac', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: EAPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.EAPConfigPropertiesSpec, 'chromeos.network_config.mojom.EAPConfigProperties', [
      mojo.internal.StructField('anonymous_identity', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('domain_suffix_match', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('identity', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('inner', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('outer', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('subject_alt_name_match', 72, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('subject_match', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('use_system_cas', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: SubjectAltName
mojo.internal.Struct(
    chromeos.network_config.mojom.SubjectAltNameSpec, 'chromeos.network_config.mojom.SubjectAltName', [
      mojo.internal.StructField('kEmail', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IPSecConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.IPSecConfigPropertiesSpec, 'chromeos.network_config.mojom.IPSecConfigProperties', [
      mojo.internal.StructField('authentication_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap', 24, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('group', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ike_version', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('local_identity', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('psk', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('remote_identity', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: L2TPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.L2TPConfigPropertiesSpec, 'chromeos.network_config.mojom.L2TPConfigProperties', [
      mojo.internal.StructField('lcp_echo_disabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('username', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OpenVPNConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec, 'chromeos.network_config.mojom.OpenVPNConfigProperties', [
      mojo.internal.StructField('client_cert_pkcs11_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('extra_hosts', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('otp', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('username', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('user_authentication_type', 64, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WireGuardConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WireGuardConfigPropertiesSpec, 'chromeos.network_config.mojom.WireGuardConfigProperties', [
      mojo.internal.StructField('ip_addresses', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('private_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('peers', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TextMessagesAllowState
mojo.internal.Struct(
    chromeos.network_config.mojom.TextMessagesAllowStateSpec, 'chromeos.network_config.mojom.TextMessagesAllowState', [
      mojo.internal.StructField('allow_text_messages', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CellularConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularConfigPropertiesSpec, 'chromeos.network_config.mojom.CellularConfigProperties', [
      mojo.internal.StructField('apn', 0, 0, chromeos.network_config.mojom.ApnPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('roaming', 8, 0, chromeos.network_config.mojom.RoamingPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('text_message_allow_state', 16, 0, chromeos.network_config.mojom.TextMessagesAllowStateSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EthernetConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.EthernetConfigPropertiesSpec, 'chromeos.network_config.mojom.EthernetConfigProperties', [
      mojo.internal.StructField('authentication', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap', 8, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VPNConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.VPNConfigPropertiesSpec, 'chromeos.network_config.mojom.VPNConfigProperties', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_sec', 8, 0, chromeos.network_config.mojom.IPSecConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('l2tp', 16, 0, chromeos.network_config.mojom.L2TPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('open_vpn', 24, 0, chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('wireguard', 32, 0, chromeos.network_config.mojom.WireGuardConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('type', 40, 0, chromeos.network_config.mojom.VpnTypeConfigSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WiFiConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WiFiConfigPropertiesSpec, 'chromeos.network_config.mojom.WiFiConfigProperties', [
      mojo.internal.StructField('eap', 0, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('passphrase', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('security', 24, 0, chromeos.network_config.mojom.SecurityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 28, 0, chromeos.network_config.mojom.HiddenSsidModeSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ConfigPropertiesSpec, 'chromeos.network_config.mojom.ConfigProperties', [
      mojo.internal.StructField('auto_connect', 16, 0, chromeos.network_config.mojom.AutoConnectConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('guid', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_address_config_type', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('metered', 40, 0, chromeos.network_config.mojom.MeteredConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('name', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name_servers_config_type', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('priority', 64, 0, chromeos.network_config.mojom.PriorityConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('proxy_settings', 72, 0, chromeos.network_config.mojom.ProxySettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('static_ip_config', 80, 0, chromeos.network_config.mojom.IPConfigPropertiesSpec, null, true, 0, undefined),
      mojo.internal.StructField('type_config', 0, 0, chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: CellularSimState
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularSimStateSpec, 'chromeos.network_config.mojom.CellularSimState', [
      mojo.internal.StructField('current_pin_or_puk', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_pin', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('require_pin', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GlobalPolicy
mojo.internal.Struct(
    chromeos.network_config.mojom.GlobalPolicySpec, 'chromeos.network_config.mojom.GlobalPolicy', [
      mojo.internal.StructField('allow_apn_modification', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cellular_sim_lock', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cellular_hotspot', 12, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_cellular_networks', 12, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_networks_to_autoconnect', 12, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_wifi_networks_to_connect', 12, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_wifi_networks_to_connect_if_available', 12, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dns_queries_monitored', 12, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_xdr_events_enabled', 13, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('blocked_hex_ssids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('recommended_values_are_ephemeral', 13, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_created_network_configurations_are_ephemeral', 13, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_text_messages', 8, 0, chromeos.network_config.mojom.SuppressionTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VpnProvider
mojo.internal.Struct(
    chromeos.network_config.mojom.VpnProviderSpec, 'chromeos.network_config.mojom.VpnProvider', [
      mojo.internal.StructField('type', 32, 0, chromeos.network_config.mojom.VpnTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('provider_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('provider_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_launch_time', 24, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: NetworkCertificate
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkCertificateSpec, 'chromeos.network_config.mojom.NetworkCertificate', [
      mojo.internal.StructField('type', 32, 0, chromeos.network_config.mojom.CertificateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('hash', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('issued_by', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('issued_to', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pem_or_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('available_for_network_auth', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hardware_backed', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('device_wide', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AlwaysOnVpnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, 'chromeos.network_config.mojom.AlwaysOnVpnProperties', [
      mojo.internal.StructField('mode', 8, 0, chromeos.network_config.mojom.AlwaysOnVpnModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TrafficCounter
mojo.internal.Struct(
    chromeos.network_config.mojom.TrafficCounterSpec, 'chromeos.network_config.mojom.TrafficCounter', [
      mojo.internal.StructField('source', 16, 0, chromeos.network_config.mojom.TrafficCounterSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('rx_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('tx_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CrosNetworkConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.network_config.mojom.CrosNetworkConfigObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.NetworkStatePropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_Params', [
      mojo.internal.StructField('filter', 0, 0, chromeos.network_config.mojom.NetworkFilterSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkStatePropertiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.DeviceStatePropertiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.ManagedPropertiesSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, chromeos.network_config.mojom.ConfigPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParams', [
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_Params', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.ConfigPropertiesSpec, null, false, 0, undefined),
      mojo.internal.StructField('shared', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParams', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_Params', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_Params', [
      mojo.internal.StructField('state', 0, 0, chromeos.network_config.mojom.CellularSimStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_Params', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.GlobalPolicySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParams', [
      mojo.internal.StructField('result', 8, 0, chromeos.network_config.mojom.StartConnectResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_Params', [
      mojo.internal.StructField('providers', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.VpnProviderSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParams', [
      mojo.internal.StructField('providers', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.VpnProviderSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParams', [
      mojo.internal.StructField('server_cas', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkCertificateSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('user_certs', 8, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkCertificateSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParams', [
      mojo.internal.StructField('vpn_types', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParams', [
      mojo.internal.StructField('traffic_counters', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.TrafficCounterSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('day', 8, 0, chromeos.network_config.mojom.UInt32ValueSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_Params', [
      mojo.internal.StructField('network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_Params', [
      mojo.internal.StructField('network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_Params', [
      mojo.internal.StructField('network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apn_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_Params', [
      mojo.internal.StructField('network_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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

chromeos.network_config.mojom.CrosNetworkConfigPtr = chromeos.network_config.mojom.CrosNetworkConfigRemote;
chromeos.network_config.mojom.CrosNetworkConfigRequest = chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver;


// Interface: CrosNetworkConfigObserver
mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkStatePropertiesSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_Params', [
      mojo.internal.StructField('network', 0, 0, chromeos.network_config.mojom.NetworkStatePropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_Params', [
      mojo.internal.StructField('userhash', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

chromeos.network_config.mojom.CrosNetworkConfigObserverPtr = chromeos.network_config.mojom.CrosNetworkConfigObserverRemote;
chromeos.network_config.mojom.CrosNetworkConfigObserverRequest = chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver;

