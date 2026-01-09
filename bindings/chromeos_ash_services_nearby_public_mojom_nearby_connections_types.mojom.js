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
