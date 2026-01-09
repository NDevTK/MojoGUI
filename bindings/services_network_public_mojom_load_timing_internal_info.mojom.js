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
      packedSize: 16,
      fields: [
        { name: 'http_network_session_quic_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
