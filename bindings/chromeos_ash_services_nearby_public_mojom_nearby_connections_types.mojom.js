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

// Enum: Strategy
nearby.connections.mojom.Strategy = {
  kP2pCluster: 0,
  kP2pStar: 1,
  kP2pPointToPoint: 2,
};

// Enum: PayloadStatus
nearby.connections.mojom.PayloadStatus = {
  kSuccess: 0,
  kFailure: 1,
  kInProgress: 2,
  kCanceled: 3,
};

// Enum: BandwidthQuality
nearby.connections.mojom.BandwidthQuality = {
  kUnknown: 0,
  kLow: 1,
  kMedium: 2,
  kHigh: 3,
};

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

// Enum: LogSeverity
nearby.connections.mojom.LogSeverity = {
  kVerbose: 0,
  kInfo: 1,
  kWarning: 2,
  kError: 3,
  kFatal: 4,
};

// Enum: AuthenticationStatus
nearby.connections.mojom.AuthenticationStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kFailure: 2,
};

// Struct: ConnectionInfo
nearby.connections.mojom.ConnectionInfoSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionInfo',
      packedSize: 16,
      fields: [
        { name: 'is_incoming_connection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DiscoveredEndpointInfo
nearby.connections.mojom.DiscoveredEndpointInfoSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.DiscoveredEndpointInfo',
      packedSize: 16,
      fields: [
        { name: 'service_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'wifi_direct', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdvertisingOptions
nearby.connections.mojom.AdvertisingOptionsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.AdvertisingOptions',
      packedSize: 16,
      fields: [
        { name: 'fast_advertisement_service_uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DiscoveryOptions
nearby.connections.mojom.DiscoveryOptionsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.DiscoveryOptions',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ConnectionOptions
nearby.connections.mojom.ConnectionOptionsSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.ConnectionOptions',
      packedSize: 16,
      fields: [
        { name: 'keep_alive_timeout', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Payload
nearby.connections.mojom.PayloadSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.Payload',
      packedSize: 16,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PayloadTransferUpdate
nearby.connections.mojom.PayloadTransferUpdateSpec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.PayloadTransferUpdate',
      packedSize: 16,
      fields: [
        { name: 'bytes_transferred', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InitialConnectionInfoV3
nearby.connections.mojom.InitialConnectionInfoV3Spec = {
  $: {
    structSpec: {
      name: 'nearby.connections.mojom.InitialConnectionInfoV3',
      packedSize: 16,
      fields: [
        { name: 'authentication_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'medium', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
