// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_health_types.mojom
// Module: chromeos.network_health.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.network_health = chromeos.network_health || {};
chromeos.network_health.mojom = chromeos.network_health.mojom || {};


// Enum: NetworkState
chromeos.network_health.mojom.NetworkState = {
  kDisabled: 0,
  kProhibited: 1,
  kNotConnected: 2,
  kConnecting: 3,
  kPortal: 4,
  kConnected: 5,
  kOnline: 6,
};
chromeos.network_health.mojom.NetworkStateSpec = { $: mojo.internal.Enum() };

// Struct: UInt32Value
chromeos.network_health.mojom.UInt32ValueSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.UInt32Value',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SignalStrengthStats
chromeos.network_health.mojom.SignalStrengthStatsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.SignalStrengthStats',
      packedSize: 24,
      fields: [
        { name: 'average', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'deviation', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'samples', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Network
chromeos.network_health.mojom.NetworkSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.Network',
      packedSize: 88,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: chromeos.network_config.mojom.NetworkTypeSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 4, packedBitOffset: 0, type: chromeos.network_health.mojom.NetworkStateSpec, nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'mac_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'signal_strength', packedOffset: 32, packedBitOffset: 0, type: chromeos.network_health.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'ipv4_address', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'ipv6_addresses', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'portal_state', packedOffset: 56, packedBitOffset: 0, type: chromeos.network_config.mojom.PortalStateSpec, nullable: false, minVersion: 0 },
        { name: 'signal_strength_stats', packedOffset: 64, packedBitOffset: 0, type: chromeos.network_health.mojom.SignalStrengthStatsSpec, nullable: true, minVersion: 1 },
        { name: 'portal_probe_url', packedOffset: 72, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 72}, {version: 1, packedSize: 80}, {version: 3, packedSize: 88}]
    }
  }
};

// Struct: NetworkHealthState
chromeos.network_health.mojom.NetworkHealthStateSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.NetworkHealthState',
      packedSize: 16,
      fields: [
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
