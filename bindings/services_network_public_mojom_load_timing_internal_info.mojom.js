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

// Enum: AdvertisedAltSvcState
network.mojom.AdvertisedAltSvcState = {
  kUnknown: 0,
  kQuicNotBroken: 1,
  kQuicBroken: 2,
};

// Struct: LoadTimingInternalInfo
network.mojom.LoadTimingInternalInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LoadTimingInternalInfo',
      packedSize: 56,
      fields: [
        { name: 'create_stream_delay', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'connected_callback_delay', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'initialize_stream_delay', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'session_source', packedOffset: 32, packedBitOffset: 0, type: network.mojom.SessionSourceSpec, nullable: true },
        { name: 'advertised_alt_svc_state', packedOffset: 40, packedBitOffset: 0, type: network.mojom.AdvertisedAltSvcStateSpec, nullable: false },
        { name: 'http_network_session_quic_enabled', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
