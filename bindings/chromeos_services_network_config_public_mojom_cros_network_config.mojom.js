// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_config/public/mojom/cros_network_config.mojom
// Module: chromeos.network_config.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_config = chromeos.network_config || {};
chromeos.network_config.mojom = chromeos.network_config.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
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
        'type': chromeos.network_config.mojom.CellularStatePropertiesSpec.$,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.EthernetStatePropertiesSpec.$,
        'nullable': false,
      },
      'tether': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.TetherStatePropertiesSpec.$,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.VPNStatePropertiesSpec.$,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 4,
        'type': chromeos.network_config.mojom.WiFiStatePropertiesSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkTypeManagedProperties
mojo.internal.Union(
    chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeManagedProperties', {
      'cellular': {
        'ordinal': 0,
        'type': chromeos.network_config.mojom.ManagedCellularPropertiesSpec.$,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.ManagedEthernetPropertiesSpec.$,
        'nullable': false,
      },
      'tether': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.TetherStatePropertiesSpec.$,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.ManagedVPNPropertiesSpec.$,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 4,
        'type': chromeos.network_config.mojom.ManagedWiFiPropertiesSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkTypeConfigProperties
mojo.internal.Union(
    chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec, 'chromeos.network_config.mojom.NetworkTypeConfigProperties', {
      'cellular': {
        'ordinal': 0,
        'type': chromeos.network_config.mojom.CellularConfigPropertiesSpec.$,
        'nullable': false,
      },
      'ethernet': {
        'ordinal': 1,
        'type': chromeos.network_config.mojom.EthernetConfigPropertiesSpec.$,
        'nullable': false,
      },
      'vpn': {
        'ordinal': 2,
        'type': chromeos.network_config.mojom.VPNConfigPropertiesSpec.$,
        'nullable': false,
      },
      'wifi': {
        'ordinal': 3,
        'type': chromeos.network_config.mojom.WiFiConfigPropertiesSpec.$,
        'nullable': false,
      },
    });

// Struct: SIMLockStatus
mojo.internal.Struct(
    chromeos.network_config.mojom.SIMLockStatusSpec, 'chromeos.network_config.mojom.SIMLockStatus', [
      mojo.internal.StructField('lock_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('retries_left', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('lock_enabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SIMInfo
mojo.internal.Struct(
    chromeos.network_config.mojom.SIMInfoSpec, 'chromeos.network_config.mojom.SIMInfo', [
      mojo.internal.StructField('eid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('iccid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('slot_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_primary', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CellularStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.CellularStatePropertiesSpec, 'chromeos.network_config.mojom.CellularStateProperties', [
      mojo.internal.StructField('iccid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('eid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activation_state', 16, 0, chromeos.network_config.mojom.ActivationStateTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('network_technology', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sim_lock_type', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_operator', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_portal', 48, 0, chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('signal_strength', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('roaming', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_lock_enabled', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_locked', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_nick_name', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EthernetStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.EthernetStatePropertiesSpec, 'chromeos.network_config.mojom.EthernetStateProperties', [
      mojo.internal.StructField('authentication', 0, 0, chromeos.network_config.mojom.AuthenticationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TetherStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.TetherStatePropertiesSpec, 'chromeos.network_config.mojom.TetherStateProperties', [
      mojo.internal.StructField('carrier', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('battery_percentage', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_connected_to_host', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VPNStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.VPNStatePropertiesSpec, 'chromeos.network_config.mojom.VPNStateProperties', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('provider_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('provider_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WiFiStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WiFiStatePropertiesSpec, 'chromeos.network_config.mojom.WiFiStateProperties', [
      mojo.internal.StructField('bssid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('hex_ssid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('security', 16, 0, chromeos.network_config.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ssid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('passpoint_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('visible', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: NetworkStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkStatePropertiesSpec, 'chromeos.network_config.mojom.NetworkStateProperties', [
      mojo.internal.StructField('connection_state', 0, 0, chromeos.network_config.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_state', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('guid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('portal_state', 32, 0, chromeos.network_config.mojom.PortalStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('portal_probe_url', 40, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('proxy_mode', 48, 0, chromeos.network_config.mojom.ProxyModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 56, 0, chromeos.network_config.mojom.OncSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type_state', 72, 0, chromeos.network_config.mojom.NetworkTypeStatePropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('connectable', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connect_requested', 84, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prohibited_by_policy', 84, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: DeviceStateProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.DeviceStatePropertiesSpec, 'chromeos.network_config.mojom.DeviceStateProperties', [
      mojo.internal.StructField('ipv4_address', 0, 0, network.mojom.IPAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ipv6_address', 8, 0, network.mojom.IPAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('imei', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sim_lock_status', 32, 0, chromeos.network_config.mojom.SIMLockStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sim_infos', 40, 0, mojo.internal.Array(chromeos.network_config.mojom.SIMInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('inhibit_reason', 48, 0, chromeos.network_config.mojom.InhibitReasonSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('device_state', 56, 0, chromeos.network_config.mojom.DeviceStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serial', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('scanning', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sim_absent', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('managed_network_available', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_carrier_locked', 80, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_flashing', 80, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: NetworkFilter
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkFilterSpec, 'chromeos.network_config.mojom.NetworkFilter', [
      mojo.internal.StructField('filter', 0, 0, chromeos.network_config.mojom.FilterTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_type', 8, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('limit', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ApnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ApnPropertiesSpec, 'chromeos.network_config.mojom.ApnProperties', [
      mojo.internal.StructField('access_point_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('authentication', 16, 0, chromeos.network_config.mojom.ApnAuthenticationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('localized_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('password', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('username', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('attach', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('state', 72, 0, chromeos.network_config.mojom.ApnStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ip_type', 80, 0, chromeos.network_config.mojom.ApnIpTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('apn_types', 88, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 96, 0, chromeos.network_config.mojom.ApnSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 112]]);

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
      mojo.internal.StructField('type', 48, 0, chromeos.network_config.mojom.IPConfigTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_proxy_auto_discovery_url', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('routing_prefix', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

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
      mojo.internal.StructField('policy_source', 0, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('active_value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('policy_value', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedInt32
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedInt32Spec, 'chromeos.network_config.mojom.ManagedInt32', [
      mojo.internal.StructField('policy_source', 0, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('active_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedString
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedStringSpec, 'chromeos.network_config.mojom.ManagedString', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedStringList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedStringListSpec, 'chromeos.network_config.mojom.ManagedStringList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedApnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedApnPropertiesSpec, 'chromeos.network_config.mojom.ManagedApnProperties', [
      mojo.internal.StructField('access_point_name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('authentication', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('language', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('localized_name', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('username', 48, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('attach', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ManagedApnList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedApnListSpec, 'chromeos.network_config.mojom.ManagedApnList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIssuerSubjectPattern
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec, 'chromeos.network_config.mojom.ManagedIssuerSubjectPattern', [
      mojo.internal.StructField('common_name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('locality', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('organization', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('organizational_unit', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCertificatePattern
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedCertificatePatternSpec, 'chromeos.network_config.mojom.ManagedCertificatePattern', [
      mojo.internal.StructField('enrollment_uri', 0, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('issuer', 8, 0, chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('issuer_ca_ref', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subject', 24, 0, chromeos.network_config.mojom.ManagedIssuerSubjectPatternSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedEAPProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedEAPPropertiesSpec, 'chromeos.network_config.mojom.ManagedEAPProperties', [
      mojo.internal.StructField('anonymous_identity', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 8, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('domain_suffix_match', 48, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('identity', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('inner', 64, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('outer', 72, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 80, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 88, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 96, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 104, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subject_alt_name_match', 112, 0, chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subject_match', 120, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tls_version_max', 128, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('use_proactive_key_caching', 136, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('use_system_cas', 144, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
    ],
    [[0, 160]]);

// Struct: ManagedSubjectAltNameMatchList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedSubjectAltNameMatchListSpec, 'chromeos.network_config.mojom.ManagedSubjectAltNameMatchList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedIPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPConfigProperties', [
      mojo.internal.StructField('gateway', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ip_address', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name_servers', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('routing_prefix', 24, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 32, 0, chromeos.network_config.mojom.IPConfigTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_proxy_auto_discovery_url', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ManagedIPSecProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedIPSecPropertiesSpec, 'chromeos.network_config.mojom.ManagedIPSecProperties', [
      mojo.internal.StructField('authentication_type', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 8, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('eap', 48, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('group', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ike_version', 64, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('local_identity', 72, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('psk', 80, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_identity', 88, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 96, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 104, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 112, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
    ],
    [[0, 128]]);

// Struct: ManagedL2TPProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedL2TPPropertiesSpec, 'chromeos.network_config.mojom.ManagedL2TPProperties', [
      mojo.internal.StructField('lcp_echo_disabled', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 16, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('username', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxyLocation
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedProxyLocationSpec, 'chromeos.network_config.mojom.ManagedProxyLocation', [
      mojo.internal.StructField('host', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedManualProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedManualProxySettingsSpec, 'chromeos.network_config.mojom.ManagedManualProxySettings', [
      mojo.internal.StructField('http_proxy', 0, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('secure_http_proxy', 8, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ftp_proxy', 16, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('socks', 24, 0, chromeos.network_config.mojom.ManagedProxyLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedProxySettingsSpec, 'chromeos.network_config.mojom.ManagedProxySettings', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('manual', 8, 0, chromeos.network_config.mojom.ManagedManualProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('exclude_domains', 16, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pac', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedVerifyX509Properties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec, 'chromeos.network_config.mojom.ManagedVerifyX509Properties', [
      mojo.internal.StructField('name', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedOpenVPNProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedOpenVPNProperties', [
      mojo.internal.StructField('auth', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auth_retry', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auth_no_cache', 16, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cipher', 24, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pkcs11_id', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_pattern', 40, 0, chromeos.network_config.mojom.ManagedCertificatePatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_provisioning_profile_id', 48, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_ref', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('client_cert_type', 64, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('compression_algorithm', 72, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('extra_hosts', 80, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ignore_default_route', 88, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('key_direction', 96, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ns_cert_type', 104, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 112, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('port', 120, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('proto', 128, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('push_peer_info', 136, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_eku', 144, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_ku', 152, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_cert_tls', 160, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reneg_sec', 168, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 176, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 184, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 192, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_cert_ref', 200, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('server_poll_timeout', 208, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('shaper', 216, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('static_challenge', 224, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tls_auth_contents', 232, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tls_remote', 240, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tls_version_min', 248, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('user_authentication_type', 256, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('username', 264, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('verb', 272, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('verify_hash', 280, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('verify_x509', 288, 0, chromeos.network_config.mojom.ManagedVerifyX509PropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 304]]);

// Struct: ManagedWireGuardPeerList
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWireGuardPeerListSpec, 'chromeos.network_config.mojom.ManagedWireGuardPeerList', [
      mojo.internal.StructField('active_value', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_source', 8, 0, chromeos.network_config.mojom.PolicySourceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('policy_value', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedWireGuardProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec, 'chromeos.network_config.mojom.ManagedWireGuardProperties', [
      mojo.internal.StructField('ip_addresses', 0, 0, chromeos.network_config.mojom.ManagedStringListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('private_key', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('public_key', 16, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('peers', 24, 0, chromeos.network_config.mojom.ManagedWireGuardPeerListSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManagedCellularProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedCellularPropertiesSpec, 'chromeos.network_config.mojom.ManagedCellularProperties', [
      mojo.internal.StructField('activation_state', 0, 0, chromeos.network_config.mojom.ActivationStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_roaming', 8, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allow_text_messages', 16, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('apn_list', 24, 0, chromeos.network_config.mojom.ManagedApnListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auto_connect', 32, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('custom_apn_list', 40, 0, mojo.internal.Array(chromeos.network_config.mojom.ApnPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('eid', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('esn', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('family', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('firmware_revision', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('found_networks', 80, 0, mojo.internal.Array(chromeos.network_config.mojom.FoundNetworkPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('hardware_revision', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('home_provider', 96, 0, chromeos.network_config.mojom.CellularProviderPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('iccid', 104, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('imei', 112, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('last_good_apn', 120, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connected_apn', 128, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer', 136, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mdn', 144, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('meid', 152, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('min', 160, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('model_id', 168, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('network_technology', 176, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sim_lock_type', 184, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_portal', 192, 0, chromeos.network_config.mojom.PaymentPortalPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('roaming_state', 200, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('selected_apn', 208, 0, chromeos.network_config.mojom.ManagedApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('serving_operator', 216, 0, chromeos.network_config.mojom.CellularProviderPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('signal_strength', 224, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sim_locked', 228, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('support_network_scan', 228, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 240]]);

// Struct: ManagedEthernetProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedEthernetPropertiesSpec, 'chromeos.network_config.mojom.ManagedEthernetProperties', [
      mojo.internal.StructField('authentication', 0, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('eap', 8, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedVPNProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedVPNPropertiesSpec, 'chromeos.network_config.mojom.ManagedVPNProperties', [
      mojo.internal.StructField('auto_connect', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('host', 8, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ip_sec', 16, 0, chromeos.network_config.mojom.ManagedIPSecPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('l2tp', 24, 0, chromeos.network_config.mojom.ManagedL2TPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('open_vpn', 32, 0, chromeos.network_config.mojom.ManagedOpenVPNPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wireguard', 40, 0, chromeos.network_config.mojom.ManagedWireGuardPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('provider_id', 48, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('provider_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 64, 0, chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ManagedWiFiProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedWiFiPropertiesSpec, 'chromeos.network_config.mojom.ManagedWiFiProperties', [
      mojo.internal.StructField('allow_gateway_arp_polling', 0, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auto_connect', 8, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap', 24, 0, chromeos.network_config.mojom.ManagedEAPPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frequency_list', 32, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('hex_ssid', 40, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 48, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('passphrase', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ssid', 64, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('security', 72, 0, chromeos.network_config.mojom.SecurityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('passpoint_id', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('passpoint_match_type', 88, 0, chromeos.network_config.mojom.MatchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frequency', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_syncable', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_configured_by_active_user', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: UInt32Value
mojo.internal.Struct(
    chromeos.network_config.mojom.UInt32ValueSpec, 'chromeos.network_config.mojom.UInt32Value', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TrafficCounterProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.TrafficCounterPropertiesSpec, 'chromeos.network_config.mojom.TrafficCounterProperties', [
      mojo.internal.StructField('last_reset_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('friendly_date', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('user_specified_reset_day', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('auto_reset', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManagedProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ManagedPropertiesSpec, 'chromeos.network_config.mojom.ManagedProperties', [
      mojo.internal.StructField('connection_state', 0, 0, chromeos.network_config.mojom.ConnectionStateTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, chromeos.network_config.mojom.OncSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_state', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('guid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ip_address_config_type', 32, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ip_configs', 40, 0, mojo.internal.Array(chromeos.network_config.mojom.IPConfigPropertiesSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('metered', 48, 0, chromeos.network_config.mojom.ManagedBooleanSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 56, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name_servers_config_type', 64, 0, chromeos.network_config.mojom.ManagedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 72, 0, chromeos.network_config.mojom.ManagedInt32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('proxy_settings', 80, 0, chromeos.network_config.mojom.ManagedProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('portal_state', 88, 0, chromeos.network_config.mojom.PortalStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('static_ip_config', 96, 0, chromeos.network_config.mojom.ManagedIPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('saved_ip_config', 104, 0, chromeos.network_config.mojom.IPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 112, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type_properties', 120, 0, chromeos.network_config.mojom.NetworkTypeManagedPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_counter_properties', 128, 0, chromeos.network_config.mojom.TrafficCounterPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connectable', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 152]]);

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
      mojo.internal.StructField('value', 0, 0, chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('http_proxy', 0, 0, chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('secure_http_proxy', 8, 0, chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ftp_proxy', 16, 0, chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('socks', 24, 0, chromeos.network_config.mojom.ProxyLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProxySettings
mojo.internal.Struct(
    chromeos.network_config.mojom.ProxySettingsSpec, 'chromeos.network_config.mojom.ProxySettings', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manual', 8, 0, chromeos.network_config.mojom.ManualProxySettingsSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('server_ca_pems', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('subject_alt_name_match', 72, 0, mojo.internal.Array(chromeos.network_config.mojom.SubjectAltNameSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('subject_match', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('eap', 24, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('group', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('local_identity', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('psk', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('remote_identity', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('server_ca_pems', 64, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('ike_version', 80, 0, mojo.internal.Int32, 1, false, 0, undefined),
      mojo.internal.StructField('save_credentials', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: L2TPConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.L2TPConfigPropertiesSpec, 'chromeos.network_config.mojom.L2TPConfigProperties', [
      mojo.internal.StructField('password', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('username', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('lcp_echo_disabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('save_credentials', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('server_ca_pems', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('server_ca_refs', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('username', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('user_authentication_type', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('save_credentials', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WireGuardConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WireGuardConfigPropertiesSpec, 'chromeos.network_config.mojom.WireGuardConfigProperties', [
      mojo.internal.StructField('ip_addresses', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('private_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('peers', 16, 0, mojo.internal.Array(chromeos.network_config.mojom.WireGuardPeerPropertiesSpec.$, false), null, true, 0, undefined),
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
      mojo.internal.StructField('apn', 0, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('roaming', 8, 0, chromeos.network_config.mojom.RoamingPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('text_message_allow_state', 16, 0, chromeos.network_config.mojom.TextMessagesAllowStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EthernetConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.EthernetConfigPropertiesSpec, 'chromeos.network_config.mojom.EthernetConfigProperties', [
      mojo.internal.StructField('authentication', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('eap', 8, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VPNConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.VPNConfigPropertiesSpec, 'chromeos.network_config.mojom.VPNConfigProperties', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_sec', 8, 0, chromeos.network_config.mojom.IPSecConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('l2tp', 16, 0, chromeos.network_config.mojom.L2TPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('open_vpn', 24, 0, chromeos.network_config.mojom.OpenVPNConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wireguard', 32, 0, chromeos.network_config.mojom.WireGuardConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 40, 0, chromeos.network_config.mojom.VpnTypeConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WiFiConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.WiFiConfigPropertiesSpec, 'chromeos.network_config.mojom.WiFiConfigProperties', [
      mojo.internal.StructField('eap', 0, 0, chromeos.network_config.mojom.EAPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('passphrase', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ssid', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('security', 24, 0, chromeos.network_config.mojom.SecurityTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('hidden_ssid', 32, 0, chromeos.network_config.mojom.HiddenSsidModeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ConfigProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.ConfigPropertiesSpec, 'chromeos.network_config.mojom.ConfigProperties', [
      mojo.internal.StructField('auto_connect', 0, 0, chromeos.network_config.mojom.AutoConnectConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ip_address_config_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('metered', 24, 0, chromeos.network_config.mojom.MeteredConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name_servers_config_type', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('priority', 48, 0, chromeos.network_config.mojom.PriorityConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('proxy_settings', 56, 0, chromeos.network_config.mojom.ProxySettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('static_ip_config', 64, 0, chromeos.network_config.mojom.IPConfigPropertiesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type_config', 72, 0, chromeos.network_config.mojom.NetworkTypeConfigPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 88]]);

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
      mojo.internal.StructField('blocked_hex_ssids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('allow_text_messages', 8, 0, chromeos.network_config.mojom.SuppressionTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('allow_apn_modification', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('allow_cellular_sim_lock', 16, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('allow_cellular_hotspot', 16, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_cellular_networks', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_networks_to_autoconnect', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_wifi_networks_to_connect', 16, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_only_policy_wifi_networks_to_connect_if_available', 16, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dns_queries_monitored', 16, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_xdr_events_enabled', 17, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('recommended_values_are_ephemeral', 17, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_created_network_configurations_are_ephemeral', 17, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VpnProvider
mojo.internal.Struct(
    chromeos.network_config.mojom.VpnProviderSpec, 'chromeos.network_config.mojom.VpnProvider', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.VpnTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('provider_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('provider_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_launch_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: NetworkCertificate
mojo.internal.Struct(
    chromeos.network_config.mojom.NetworkCertificateSpec, 'chromeos.network_config.mojom.NetworkCertificate', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.CertificateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hash', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('issued_by', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('issued_to', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pem_or_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('available_for_network_auth', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hardware_backed', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('device_wide', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AlwaysOnVpnProperties
mojo.internal.Struct(
    chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec, 'chromeos.network_config.mojom.AlwaysOnVpnProperties', [
      mojo.internal.StructField('mode', 0, 0, chromeos.network_config.mojom.AlwaysOnVpnModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_guid', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TrafficCounter
mojo.internal.Struct(
    chromeos.network_config.mojom.TrafficCounterSpec, 'chromeos.network_config.mojom.TrafficCounter', [
      mojo.internal.StructField('source', 0, 0, chromeos.network_config.mojom.TrafficCounterSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rx_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('tx_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CrosNetworkConfig
mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.network_config.mojom.CrosNetworkConfigObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_Params', [
      mojo.internal.StructField('filter', 0, 0, chromeos.network_config.mojom.NetworkFilterSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.DeviceStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.ManagedPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, chromeos.network_config.mojom.ConfigPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_Params', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.ConfigPropertiesSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_Params', [
      mojo.internal.StructField('state', 0, 0, chromeos.network_config.mojom.CellularSimStateSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.GlobalPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.network_config.mojom.StartConnectResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
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
      mojo.internal.StructField('providers', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.VpnProviderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParams', [
      mojo.internal.StructField('providers', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.VpnProviderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParams', [
      mojo.internal.StructField('server_cas', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkCertificateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('user_certs', 8, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkCertificateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_Params', [
      mojo.internal.StructField('properties', 0, 0, chromeos.network_config.mojom.AlwaysOnVpnPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_Params', [
    ],
    [[0, 8]]);

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
      mojo.internal.StructField('traffic_counters', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.TrafficCounterSpec.$, false), null, false, 0, undefined),
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
      mojo.internal.StructField('day', 8, 0, chromeos.network_config.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('apn', 8, 0, chromeos.network_config.mojom.ApnPropertiesSpec.$, null, false, 0, undefined),
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
      [observer],
      false);
  }

  getNetworkState(guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec,
      [guid],
      false);
  }

  getNetworkStateList(filter) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec,
      [filter],
      false);
  }

  getDeviceStateList() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec,
      [],
      false);
  }

  getManagedProperties(guid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec,
      [guid],
      false);
  }

  setProperties(guid, properties) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec,
      [guid, properties],
      false);
  }

  configureNetwork(properties, shared) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec,
      [properties, shared],
      false);
  }

  forgetNetwork(guid) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec,
      [guid],
      false);
  }

  setNetworkTypeEnabledState(type, enabled) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec,
      [type, enabled],
      false);
  }

  setCellularSimState(state) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec,
      [state],
      false);
  }

  selectCellularMobileNetwork(guid, network_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec,
      [guid, network_id],
      false);
  }

  requestNetworkScan(type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec,
      null,
      [type],
      false);
  }

  getGlobalPolicy() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec,
      [],
      false);
  }

  startConnect(guid) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec,
      [guid],
      false);
  }

  startDisconnect(guid) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec,
      [guid],
      false);
  }

  setVpnProviders(providers) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec,
      null,
      [providers],
      false);
  }

  getVpnProviders() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec,
      [],
      false);
  }

  getNetworkCertificates() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysOnVpn() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysOnVpn(properties) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec,
      null,
      [properties],
      false);
  }

  getSupportedVpnTypes() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec,
      [],
      false);
  }

  requestTrafficCounters(guid) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec,
      [guid],
      false);
  }

  resetTrafficCounters(guid) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec,
      null,
      [guid],
      false);
  }

  setTrafficCountersResetDay(guid, day) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec,
      [guid, day],
      false);
  }

  createCustomApn(network_guid, apn) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec,
      [network_guid, apn],
      false);
  }

  createExclusivelyEnabledCustomApn(network_guid, apn) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec,
      chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec,
      [network_guid, apn],
      false);
  }

  removeCustomApn(network_guid, apn_id) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec,
      null,
      [network_guid, apn_id],
      false);
  }

  modifyCustomApn(network_guid, apn) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec,
      null,
      [network_guid, apn],
      false);
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

chromeos.network_config.mojom.CrosNetworkConfigReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: AddObserver
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetNetworkState
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: GetNetworkStateList
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkStateList (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: GetDeviceStateList
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceStateList (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: GetManagedProperties
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetManagedProperties (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: SetProperties
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProperties (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: ConfigureNetwork
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureNetwork (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: ForgetNetwork
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForgetNetwork (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: SetNetworkTypeEnabledState
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNetworkTypeEnabledState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: SetCellularSimState
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCellularSimState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: SelectCellularMobileNetwork
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectCellularMobileNetwork (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: RequestNetworkScan
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestNetworkScan (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: GetGlobalPolicy
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGlobalPolicy (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: StartConnect
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartConnect (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: StartDisconnect
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDisconnect (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: SetVpnProviders
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVpnProviders (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 16: GetVpnProviders
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVpnProviders (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 17: GetNetworkCertificates
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNetworkCertificates (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 18: GetAlwaysOnVpn
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAlwaysOnVpn (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 19: SetAlwaysOnVpn
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAlwaysOnVpn (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 20: GetSupportedVpnTypes
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSupportedVpnTypes (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 21: RequestTrafficCounters
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTrafficCounters (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 22: ResetTrafficCounters
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetTrafficCounters (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 23: SetTrafficCountersResetDay
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTrafficCountersResetDay (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 24: CreateCustomApn
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCustomApn (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 25: CreateExclusivelyEnabledCustomApn
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateExclusivelyEnabledCustomApn (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 26: RemoveCustomApn
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveCustomApn (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 27: ModifyCustomApn
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ModifyCustomApn (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNetworkState');
          const result = this.impl.getNetworkState(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNetworkStateList');
          const result = this.impl.getNetworkStateList(params.filter);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkStateList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDeviceStateList');
          const result = this.impl.getDeviceStateList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetDeviceStateList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getManagedProperties');
          const result = this.impl.getManagedProperties(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetManagedProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setProperties');
          const result = this.impl.setProperties(params.guid, params.properties);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SetProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.configureNetwork');
          const result = this.impl.configureNetwork(params.properties, params.shared);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_ConfigureNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forgetNetwork');
          const result = this.impl.forgetNetwork(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_ForgetNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setNetworkTypeEnabledState');
          const result = this.impl.setNetworkTypeEnabledState(params.type, params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SetNetworkTypeEnabledState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCellularSimState');
          const result = this.impl.setCellularSimState(params.state);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SetCellularSimState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.selectCellularMobileNetwork');
          const result = this.impl.selectCellularMobileNetwork(params.guid, params.network_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SelectCellularMobileNetwork_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_RequestNetworkScan_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestNetworkScan');
          const result = this.impl.requestNetworkScan(params.type);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getGlobalPolicy');
          const result = this.impl.getGlobalPolicy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetGlobalPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startConnect');
          const result = this.impl.startConnect(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_StartConnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDisconnect');
          const result = this.impl.startDisconnect(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_StartDisconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetVpnProviders_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVpnProviders');
          const result = this.impl.setVpnProviders(params.providers);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getVpnProviders');
          const result = this.impl.getVpnProviders();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetVpnProviders_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNetworkCertificates');
          const result = this.impl.getNetworkCertificates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetNetworkCertificates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysOnVpn');
          const result = this.impl.getAlwaysOnVpn();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetAlwaysOnVpn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetAlwaysOnVpn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysOnVpn');
          const result = this.impl.setAlwaysOnVpn(params.properties);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSupportedVpnTypes');
          const result = this.impl.getSupportedVpnTypes();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_GetSupportedVpnTypes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestTrafficCounters');
          const result = this.impl.requestTrafficCounters(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_RequestTrafficCounters_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_ResetTrafficCounters_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetTrafficCounters');
          const result = this.impl.resetTrafficCounters(params.guid);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTrafficCountersResetDay');
          const result = this.impl.setTrafficCountersResetDay(params.guid, params.day);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_SetTrafficCountersResetDay_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createCustomApn');
          const result = this.impl.createCustomApn(params.network_guid, params.apn);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_CreateCustomApn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createExclusivelyEnabledCustomApn');
          const result = this.impl.createExclusivelyEnabledCustomApn(params.network_guid, params.apn);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_config.mojom.CrosNetworkConfig_CreateExclusivelyEnabledCustomApn_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_RemoveCustomApn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeCustomApn');
          const result = this.impl.removeCustomApn(params.network_guid, params.apn_id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfig_ModifyCustomApn_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.modifyCustomApn');
          const result = this.impl.modifyCustomApn(params.network_guid, params.apn);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.network_config.mojom.CrosNetworkConfigReceiver = chromeos.network_config.mojom.CrosNetworkConfigReceiver;

chromeos.network_config.mojom.CrosNetworkConfigPtr = chromeos.network_config.mojom.CrosNetworkConfigRemote;
chromeos.network_config.mojom.CrosNetworkConfigRequest = chromeos.network_config.mojom.CrosNetworkConfigPendingReceiver;


// Interface: CrosNetworkConfigObserver
mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_Params', [
      mojo.internal.StructField('network', 0, 0, chromeos.network_config.mojom.NetworkStatePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec, 'chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_Params', [
    ],
    [[0, 8]]);

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
      [networks],
      false);
  }

  onNetworkStateChanged(network) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec,
      null,
      [network],
      false);
  }

  onNetworkStateListChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onDeviceStateListChanged() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onVpnProvidersChanged() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNetworkCertificatesChanged() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onPoliciesApplied(userhash) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec,
      null,
      [userhash],
      false);
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

chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: OnActiveNetworksChanged
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnActiveNetworksChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnNetworkStateChanged
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnNetworkStateListChanged
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkStateListChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnDeviceStateListChanged
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceStateListChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: OnVpnProvidersChanged
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVpnProvidersChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: OnNetworkCertificatesChanged
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkCertificatesChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: OnPoliciesApplied
        try {
             decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPoliciesApplied (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnActiveNetworksChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onActiveNetworksChanged');
          const result = this.impl.onActiveNetworksChanged(params.networks);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateChanged');
          const result = this.impl.onNetworkStateChanged(params.network);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkStateListChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNetworkStateListChanged');
          const result = this.impl.onNetworkStateListChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnDeviceStateListChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDeviceStateListChanged');
          const result = this.impl.onDeviceStateListChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnVpnProvidersChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onVpnProvidersChanged');
          const result = this.impl.onVpnProvidersChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnNetworkCertificatesChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNetworkCertificatesChanged');
          const result = this.impl.onNetworkCertificatesChanged();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.network_config.mojom.CrosNetworkConfigObserver_OnPoliciesApplied_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPoliciesApplied');
          const result = this.impl.onPoliciesApplied(params.userhash);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver = chromeos.network_config.mojom.CrosNetworkConfigObserverReceiver;

chromeos.network_config.mojom.CrosNetworkConfigObserverPtr = chromeos.network_config.mojom.CrosNetworkConfigObserverRemote;
chromeos.network_config.mojom.CrosNetworkConfigObserverRequest = chromeos.network_config.mojom.CrosNetworkConfigObserverPendingReceiver;

