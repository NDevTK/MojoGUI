// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/load_timing_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: LoadTimingInfoConnectTiming
network.mojom.LoadTimingInfoConnectTimingSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LoadTimingInfoConnectTiming',
      packedSize: 16,
      fields: [
        { name: 'ssl_end', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LoadTimingInfo
network.mojom.LoadTimingInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LoadTimingInfo',
      packedSize: 16,
      fields: [
        { name: 'service_worker_cache_lookup_start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
