// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_connections_types.mojom
// Module: nearby.connections.mojom

'use strict';

// Module namespace
var nearby = nearby || {};
nearby.connections = nearby.connections || {};
nearby.connections.mojom = nearby.connections.mojom || {};
var bluetooth = bluetooth || {};
var mojo_base = mojo_base || {};

nearby.connections.mojom.StatusSpec = { $: mojo.internal.Enum() };
nearby.connections.mojom.StrategySpec = { $: mojo.internal.Enum() };
nearby.connections.mojom.PayloadStatusSpec = { $: mojo.internal.Enum() };
nearby.connections.mojom.BandwidthQualitySpec = { $: mojo.internal.Enum() };
nearby.connections.mojom.MediumSpec = { $: mojo.internal.Enum() };
nearby.connections.mojom.LogSeveritySpec = { $: mojo.internal.Enum() };
nearby.connections.mojom.AuthenticationStatusSpec = { $: mojo.internal.Enum() };
nearby.connections.mojom.PayloadContentSpec = { $: {} };
nearby.connections.mojom.ConnectionInfoSpec = { $: {} };
nearby.connections.mojom.DiscoveredEndpointInfoSpec = { $: {} };
nearby.connections.mojom.MediumSelectionSpec = { $: {} };
nearby.connections.mojom.AdvertisingOptionsSpec = { $: {} };
nearby.connections.mojom.DiscoveryOptionsSpec = { $: {} };
nearby.connections.mojom.ConnectionOptionsSpec = { $: {} };
nearby.connections.mojom.BytesPayloadSpec = { $: {} };
nearby.connections.mojom.FilePayloadSpec = { $: {} };
nearby.connections.mojom.PayloadSpec = { $: {} };
nearby.connections.mojom.PayloadTransferUpdateSpec = { $: {} };
nearby.connections.mojom.InitialConnectionInfoV3Spec = { $: {} };
nearby.connections.mojom.BandwidthInfoSpec = { $: {} };

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
  kVerbose: -1,
  kInfo: 0,
  kWarning: 1,
  kError: 2,
  kFatal: 3,
};

// Enum: AuthenticationStatus
nearby.connections.mojom.AuthenticationStatus = {
  kUnknown: 0,
  kSuccess: 1,
  kFailure: 2,
};

// Union: PayloadContent
mojo.internal.Union(
    nearby.connections.mojom.PayloadContentSpec, 'nearby.connections.mojom.PayloadContent', {
      'bytes': {
        'ordinal': 0,
        'type': nearby.connections.mojom.BytesPayloadSpec.$,
        'nullable': false,
      },
      'file': {
        'ordinal': 1,
        'type': nearby.connections.mojom.FilePayloadSpec.$,
        'nullable': false,
      },
    });

// Struct: ConnectionInfo
mojo.internal.Struct(
    nearby.connections.mojom.ConnectionInfoSpec, 'nearby.connections.mojom.ConnectionInfo', [
      mojo.internal.StructField('authentication_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('raw_authentication_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('endpoint_info', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('is_incoming_connection', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DiscoveredEndpointInfo
mojo.internal.Struct(
    nearby.connections.mojom.DiscoveredEndpointInfoSpec, 'nearby.connections.mojom.DiscoveredEndpointInfo', [
      mojo.internal.StructField('endpoint_info', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('service_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediumSelection
mojo.internal.Struct(
    nearby.connections.mojom.MediumSelectionSpec, 'nearby.connections.mojom.MediumSelection', [
      mojo.internal.StructField('bluetooth', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ble', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('web_rtc', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wifi_lan', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wifi_direct', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AdvertisingOptions
mojo.internal.Struct(
    nearby.connections.mojom.AdvertisingOptionsSpec, 'nearby.connections.mojom.AdvertisingOptions', [
      mojo.internal.StructField('strategy', 0, 0, nearby.connections.mojom.StrategySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_mediums', 8, 0, nearby.connections.mojom.MediumSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fast_advertisement_service_uuid', 16, 0, bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('auto_upgrade_bandwidth', 24, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enforce_topology_constraints', 24, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enable_bluetooth_listening', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_webrtc_listening', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DiscoveryOptions
mojo.internal.Struct(
    nearby.connections.mojom.DiscoveryOptionsSpec, 'nearby.connections.mojom.DiscoveryOptions', [
      mojo.internal.StructField('strategy', 0, 0, nearby.connections.mojom.StrategySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_mediums', 8, 0, nearby.connections.mojom.MediumSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fast_advertisement_service_uuid', 16, 0, bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_out_of_band_connection', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ConnectionOptions
mojo.internal.Struct(
    nearby.connections.mojom.ConnectionOptionsSpec, 'nearby.connections.mojom.ConnectionOptions', [
      mojo.internal.StructField('allowed_mediums', 0, 0, nearby.connections.mojom.MediumSelectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_bluetooth_mac_address', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('keep_alive_interval', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('keep_alive_timeout', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BytesPayload
mojo.internal.Struct(
    nearby.connections.mojom.BytesPayloadSpec, 'nearby.connections.mojom.BytesPayload', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FilePayload
mojo.internal.Struct(
    nearby.connections.mojom.FilePayloadSpec, 'nearby.connections.mojom.FilePayload', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Payload
mojo.internal.Struct(
    nearby.connections.mojom.PayloadSpec, 'nearby.connections.mojom.Payload', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('content', 8, 0, nearby.connections.mojom.PayloadContentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PayloadTransferUpdate
mojo.internal.Struct(
    nearby.connections.mojom.PayloadTransferUpdateSpec, 'nearby.connections.mojom.PayloadTransferUpdate', [
      mojo.internal.StructField('payload_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, nearby.connections.mojom.PayloadStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('bytes_transferred', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InitialConnectionInfoV3
mojo.internal.Struct(
    nearby.connections.mojom.InitialConnectionInfoV3Spec, 'nearby.connections.mojom.InitialConnectionInfoV3', [
      mojo.internal.StructField('authentication_digits', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('raw_authentication_token', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('authentication_status', 16, 0, nearby.connections.mojom.AuthenticationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_incoming_connection', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BandwidthInfo
mojo.internal.Struct(
    nearby.connections.mojom.BandwidthInfoSpec, 'nearby.connections.mojom.BandwidthInfo', [
      mojo.internal.StructField('quality', 0, 0, nearby.connections.mojom.BandwidthQualitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('medium', 8, 0, nearby.connections.mojom.MediumSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
