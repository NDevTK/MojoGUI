// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_connections_types.mojom
// Module: nearby.connections.mojom

'use strict';

// Module namespace
var nearby = nearby || {};
nearby.connections = nearby.connections || {};
nearby.connections.mojom = nearby.connections.mojom || {};


// Enum: Status
nearby.connections.mojom.Status = {
  kSuccess: 0,
  kError: 1,
  kOutOfOrderApiCall: 2,
  kAlreadyHaveActiveStrategy: 3,
  kAlreadyAdvertising: 4,
  kAlreadyDiscovering: 5,
  kEndpointIOError: 6,
  kEndpointUnknown: 7,
  kConnectionRejected: 8,
  kAlreadyConnectedToEndpoint: 9,
  kNotConnectedToEndpoint: 10,
  kBluetoothError: 11,
  kBleError: 12,
  kWifiLanError: 13,
  kPayloadUnknown: 14,
  kAlreadyListening: 15,
  kReset: 16,
  kTimeout: 17,
  kUnknown: 18,
  kNextValue: 19,
};
nearby.connections.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Enum: Strategy
nearby.connections.mojom.Strategy = {
  kP2pCluster: 0,
  kP2pStar: 1,
  kP2pPointToPoint: 2,
};
nearby.connections.mojom.StrategySpec = { $: mojo.internal.Enum() };

// Enum: PayloadStatus
nearby.connections.mojom.PayloadStatus = {
  kSuccess: 0,
  kFailure: 1,
  kInProgress: 2,
  kCanceled: 3,
};
nearby.connections.mojom.PayloadStatusSpec = { $: mojo.internal.Enum() };

// Enum: BandwidthQuality
nearby.connections.mojom.BandwidthQuality = {
  kUnknown: 0,
  kLow: 1,
  kMedium: 2,
  kHigh: 3,
};
nearby.connections.mojom.BandwidthQualitySpec = { $: mojo.internal.Enum() };

// Enum: Medium
nearby.connections.mojom.Medium = {
  kUnknown: 0,
  kMdns: 1,
  kBluetooth: 2,
  kWifiHotspot: 3,
  kBle: 4,
  kWifiLan: 5,
  kWifiAware: 6,
  kNfc: 7,
  kWifiDirect: 8,
  kWebRtc: 9,
  kBleL2Cap: 10,
  kUsb: 11,
  kWebRtcNonCellular: 12,
  kAwdl: 13,
};
nearby.connections.mojom.MediumSpec = { $: mojo.internal.Enum() };

// Enum: LogSeverity
nearby.connections.mojom.LogSeverity = {
  kVerbose: 0,
  kInfo: 1,
  kWarning: 2,
  kError: 3,
  kFatal: 4,
};
nearby.connections.mojom.LogSeveritySpec = { $: mojo.internal.Enum() };

// Enum: AuthenticationStatus
nearby.connections.mojom.AuthenticationStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kFailure: 2,
};
nearby.connections.mojom.AuthenticationStatusSpec = { $: mojo.internal.Enum() };

// Union: PayloadContent
nearby.connections.mojom.PayloadContentSpec = { $: mojo.internal.Union(
    'nearby.connections.mojom.PayloadContent', {
      'bytes': {
        'ordinal': 0,
        'type': nearby.connections.mojom.BytesPayloadSpec,
      }},
      'file': {
        'ordinal': 1,
        'type': nearby.connections.mojom.FilePayloadSpec,
      }},
    })
};

// Struct: ConnectionInfo
nearby.connections.mojom.ConnectionInfoSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionInfo',
      packedSize: 40,
      fields: [
        { name: 'authentication_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'raw_authentication_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'endpoint_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'is_incoming_connection', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DiscoveredEndpointInfo
nearby.connections.mojom.DiscoveredEndpointInfoSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.DiscoveredEndpointInfo',
      packedSize: 24,
      fields: [
        { name: 'endpoint_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'service_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MediumSelection
nearby.connections.mojom.MediumSelectionSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.MediumSelection',
      packedSize: 16,
      fields: [
        { name: 'bluetooth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ble', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'web_rtc', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wifi_lan', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wifi_direct', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AdvertisingOptions
nearby.connections.mojom.AdvertisingOptionsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.AdvertisingOptions',
      packedSize: 32,
      fields: [
        { name: 'strategy', packedOffset: 0, packedBitOffset: 0, type: nearby.connections.mojom.StrategySpec, nullable: false, minVersion: 0 },
        { name: 'allowed_mediums', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.MediumSelectionSpec, nullable: false, minVersion: 0 },
        { name: 'auto_upgrade_bandwidth', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enforce_topology_constraints', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_bluetooth_listening', packedOffset: 4, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_webrtc_listening', packedOffset: 4, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fast_advertisement_service_uuid', packedOffset: 16, packedBitOffset: 0, type: bluetooth.mojom.UUIDSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DiscoveryOptions
nearby.connections.mojom.DiscoveryOptionsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.DiscoveryOptions',
      packedSize: 32,
      fields: [
        { name: 'strategy', packedOffset: 0, packedBitOffset: 0, type: nearby.connections.mojom.StrategySpec, nullable: false, minVersion: 0 },
        { name: 'allowed_mediums', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.MediumSelectionSpec, nullable: false, minVersion: 0 },
        { name: 'fast_advertisement_service_uuid', packedOffset: 16, packedBitOffset: 0, type: bluetooth.mojom.UUIDSpec, nullable: true, minVersion: 0 },
        { name: 'is_out_of_band_connection', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ConnectionOptions
nearby.connections.mojom.ConnectionOptionsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionOptions',
      packedSize: 40,
      fields: [
        { name: 'allowed_mediums', packedOffset: 0, packedBitOffset: 0, type: nearby.connections.mojom.MediumSelectionSpec, nullable: false, minVersion: 0 },
        { name: 'remote_bluetooth_mac_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
        { name: 'keep_alive_interval', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'keep_alive_timeout', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: BytesPayload
nearby.connections.mojom.BytesPayloadSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.BytesPayload',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FilePayload
nearby.connections.mojom.FilePayloadSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.FilePayload',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Payload
nearby.connections.mojom.PayloadSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.Payload',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'content', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.PayloadContentSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PayloadTransferUpdate
nearby.connections.mojom.PayloadTransferUpdateSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.PayloadTransferUpdate',
      packedSize: 40,
      fields: [
        { name: 'payload_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby.connections.mojom.PayloadStatusSpec, nullable: false, minVersion: 0 },
        { name: 'total_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'bytes_transferred', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: InitialConnectionInfoV3
nearby.connections.mojom.InitialConnectionInfoV3Spec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.InitialConnectionInfoV3',
      packedSize: 32,
      fields: [
        { name: 'authentication_digits', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'raw_authentication_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_incoming_connection', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'authentication_status', packedOffset: 20, packedBitOffset: 0, type: nearby.connections.mojom.AuthenticationStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BandwidthInfo
nearby.connections.mojom.BandwidthInfoSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.BandwidthInfo',
      packedSize: 16,
      fields: [
        { name: 'quality', packedOffset: 0, packedBitOffset: 0, type: nearby.connections.mojom.BandwidthQualitySpec, nullable: false, minVersion: 0 },
        { name: 'medium', packedOffset: 4, packedBitOffset: 0, type: nearby.connections.mojom.MediumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
