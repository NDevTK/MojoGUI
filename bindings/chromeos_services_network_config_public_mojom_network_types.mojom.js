// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_config/public/mojom/network_types.mojom
// Module: chromeos.network_config.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_config = chromeos.network_config || {};
chromeos.network_config.mojom = chromeos.network_config.mojom || {};

chromeos.network_config.mojom.ConnectionStateTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.DeviceStateTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.IPConfigTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.OncSourceSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.PolicySourceSpec = { $: mojo.internal.Enum() };
chromeos.network_config.mojom.PortalStateSpec = { $: mojo.internal.Enum() };

// Enum: ConnectionStateType
chromeos.network_config.mojom.ConnectionStateType = {
  kOnline: 0,
  kConnected: 1,
  kPortal: 2,
  kConnecting: 3,
  kNotConnected: 4,
};

// Enum: DeviceStateType
chromeos.network_config.mojom.DeviceStateType = {
  kUninitialized: 0,
  kDisabled: 1,
  kDisabling: 2,
  kEnabling: 3,
  kEnabled: 4,
  kProhibited: 5,
  kUnavailable: 6,
};

// Enum: IPConfigType
chromeos.network_config.mojom.IPConfigType = {
  kIPv4: 0,
  kIPv6: 1,
};

// Enum: NetworkType
chromeos.network_config.mojom.NetworkType = {
  kAll: 0,
  kCellular: 1,
  kEthernet: 2,
  kMobile: 3,
  kTether: 4,
  kVPN: 5,
  kWireless: 6,
  kWiFi: 7,
};

// Enum: OncSource
chromeos.network_config.mojom.OncSource = {
  kNone: 0,
  kUser: 1,
  kDevice: 2,
  kUserPolicy: 3,
  kDevicePolicy: 4,
};

// Enum: PolicySource
chromeos.network_config.mojom.PolicySource = {
  kNone: 0,
  kUserPolicyEnforced: 1,
  kDevicePolicyEnforced: 2,
  kUserPolicyRecommended: 3,
  kDevicePolicyRecommended: 4,
  kActiveExtension: 5,
};

// Enum: PortalState
chromeos.network_config.mojom.PortalState = {
  kUnknown: 0,
  kOnline: 1,
  kPortalSuspected: 2,
  kPortal: 3,
  kDeprecatedProxyAuthRequired: 4,
  kNoInternet: 5,
};
