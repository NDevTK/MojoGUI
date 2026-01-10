// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_health_types.mojom
// Module: chromeos.network_health.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_health = chromeos.network_health || {};
chromeos.network_health.mojom = chromeos.network_health.mojom || {};
var chromeos = chromeos || {};
var services = services || {};
var url = url || {};

chromeos.network_health.mojom.NetworkStateSpec = { $: mojo.internal.Enum() };
chromeos.network_health.mojom.UInt32ValueSpec = { $: {} };
chromeos.network_health.mojom.SignalStrengthStatsSpec = { $: {} };
chromeos.network_health.mojom.NetworkSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthStateSpec = { $: {} };

// Enum: NetworkState
chromeos.network_health.mojom.NetworkState = {
  kUninitialized: 0,
  kDisabled: 1,
  kProhibited: 2,
  kNotConnected: 3,
  kConnecting: 4,
  kPortal: 5,
  kConnected: 6,
  kOnline: 7,
};

// Struct: UInt32Value
mojo.internal.Struct(
    chromeos.network_health.mojom.UInt32ValueSpec, 'chromeos.network_health.mojom.UInt32Value', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SignalStrengthStats
mojo.internal.Struct(
    chromeos.network_health.mojom.SignalStrengthStatsSpec, 'chromeos.network_health.mojom.SignalStrengthStats', [
      mojo.internal.StructField('average', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('deviation', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('samples', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Network
mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkSpec, 'chromeos.network_health.mojom.Network', [
      mojo.internal.StructField('type', 0, 0, chromeos.network_config.mojom.NetworkTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('state', 4, 0, chromeos.network_health.mojom.NetworkStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mac_address', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('signal_strength', 32, 0, chromeos.network_health.mojom.UInt32ValueSpec, null, true, 0, undefined),
      mojo.internal.StructField('ipv4_address', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('ipv6_addresses', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('portal_state', 56, 0, chromeos.network_config.mojom.PortalStateSpec, 0, false, 0, undefined),
      mojo.internal.StructField('signal_strength_stats', 64, 0, chromeos.network_health.mojom.SignalStrengthStatsSpec, null, true, 1, undefined),
      mojo.internal.StructField('portal_probe_url', 72, 0, url.mojom.UrlSpec, null, true, 3, undefined),
    ],
    [[0, 72], [1, 80], [3, 88]]);

// Struct: NetworkHealthState
mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthStateSpec, 'chromeos.network_health.mojom.NetworkHealthState', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
