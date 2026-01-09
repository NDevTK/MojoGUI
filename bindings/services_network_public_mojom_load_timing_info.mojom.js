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
      packedSize: 56,
      fields: [
        { name: 'domain_lookup_start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'domain_lookup_end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'connect_start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'connect_end', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ssl_start', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ssl_end', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 176,
      fields: [
        { name: 'request_start_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_start', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'proxy_resolve_start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'proxy_resolve_end', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'connect_timing', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'send_start', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'send_end', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receive_headers_start', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receive_headers_end', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'receive_non_informational_headers_start', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'first_early_hints_time', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'push_start', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'push_end', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_start_time', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_ready_time', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_fetch_start', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_respond_with_settled', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_router_evaluation_start', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_cache_lookup_start', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'socket_log_id', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'socket_reused', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
