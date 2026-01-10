// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/load_timing_internal_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: SessionSource
network.mojom.SessionSource = {
  kNew: 0,
  kExisting: 1,
};
network.mojom.SessionSourceSpec = { $: mojo.internal.Enum() };

// Enum: AdvertisedAltSvcState
network.mojom.AdvertisedAltSvcState = {
  kUnknown: 0,
  kQuicNotBroken: 1,
  kQuicBroken: 2,
};
network.mojom.AdvertisedAltSvcStateSpec = { $: mojo.internal.Enum() };

// Struct: LoadTimingInternalInfo
network.mojom.LoadTimingInternalInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LoadTimingInternalInfo',
      packedSize: 48,
      fields: [
        { name: 'create_stream_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'connected_callback_delay', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'initialize_stream_delay', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'session_source', packedOffset: 24, packedBitOffset: 0, type: network.mojom.SessionSourceSpec, nullable: true, minVersion: 0 },
        { name: 'advertised_alt_svc_state', packedOffset: 28, packedBitOffset: 0, type: network.mojom.AdvertisedAltSvcStateSpec, nullable: false, minVersion: 0 },
        { name: 'http_network_session_quic_enabled', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
