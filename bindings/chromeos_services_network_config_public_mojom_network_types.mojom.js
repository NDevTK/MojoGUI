// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_config/public/mojom/network_types.mojom
// Module: chromeos.network_config.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_config = chromeos.network_config || {};
chromeos.network_config.network_config.mojom = chromeos.network_config.network_config.mojom || {};


// Enum: ConnectionStateType
chromeos.network_config.network_config.mojom.mojom.ConnectionStateType = {
  kOnline: 0,
  kConnected: 1,
  kPortal: 2,
  kConnecting: 3,
  kNotConnected: 4,
};
chromeos.network_config.network_config.mojom.mojom.ConnectionStateTypeSpec = { $: mojo.internal.Enum() };

// Enum: DeviceStateType
chromeos.network_config.network_config.mojom.mojom.DeviceStateType = {
  kUninitialized: 0,
  kDisabled: 1,
  kDisabling: 2,
  kEnabling: 3,
  kEnabled: 4,
  kProhibited: 5,
  kUnavailable: 6,
};
chromeos.network_config.network_config.mojom.mojom.DeviceStateTypeSpec = { $: mojo.internal.Enum() };

// Enum: IPConfigType
chromeos.network_config.network_config.mojom.mojom.IPConfigType = {
  kIPv4: 0,
  kIPv6: 1,
};
chromeos.network_config.network_config.mojom.mojom.IPConfigTypeSpec = { $: mojo.internal.Enum() };

// Enum: NetworkType
chromeos.network_config.network_config.mojom.mojom.NetworkType = {
  kAll: 0,
  kCellular: 1,
  kEthernet: 2,
  kMobile: 3,
  kTether: 4,
  kVPN: 5,
  kWireless: 6,
  kWiFi: 7,
};
chromeos.network_config.network_config.mojom.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };

// Enum: OncSource
chromeos.network_config.network_config.mojom.mojom.OncSource = {
  kNone: 0,
  kUser: 1,
  kDevice: 2,
  kUserPolicy: 3,
  kDevicePolicy: 4,
};
chromeos.network_config.network_config.mojom.mojom.OncSourceSpec = { $: mojo.internal.Enum() };

// Enum: PolicySource
chromeos.network_config.network_config.mojom.mojom.PolicySource = {
  kNone: 0,
  kUserPolicyEnforced: 1,
  kDevicePolicyEnforced: 2,
  kUserPolicyRecommended: 3,
  kDevicePolicyRecommended: 4,
  kActiveExtension: 5,
};
chromeos.network_config.network_config.mojom.mojom.PolicySourceSpec = { $: mojo.internal.Enum() };

// Enum: PortalState
chromeos.network_config.network_config.mojom.mojom.PortalState = {
  kUnknown: 0,
  kOnline: 1,
  kPortalSuspected: 2,
  kPortal: 3,
  kDeprecatedProxyAuthRequired: 4,
  kNoInternet: 5,
};
chromeos.network_config.network_config.mojom.mojom.PortalStateSpec = { $: mojo.internal.Enum() };
