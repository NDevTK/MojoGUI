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

// Struct: UInt32Value
chromeos.network_health.mojom.UInt32ValueSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.UInt32Value',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'samples', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'average', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'deviation', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Network
chromeos.network_health.mojom.NetworkSpec = {
  $: {
    structSpec: {
      name: 'chromeos.network_health.mojom.Network',
      packedSize: 80,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'guid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mac_address', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'signal_strength', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'ipv4_address', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ipv6_addresses', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'portal_state', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
