// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/timing/resource_timing.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: CacheState
blink.mojom.CacheState = {
  kNone: 0,
  kLocal: 1,
  kValidated: 2,
};

// Struct: ServerTimingInfo
blink.mojom.ServerTimingInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServerTimingInfo',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResourceTimingInfo
blink.mojom.ResourceTimingInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceTimingInfo',
      packedSize: 160,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'alpn_negotiated_protocol', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'connection_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'timing', packedOffset: 32, packedBitOffset: 0, type: network.mojom.LoadTimingInfoSpec, nullable: true },
        { name: 'last_redirect_end_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'response_end', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'cache_state', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.CacheStateSpec, nullable: false },
        { name: 'encoded_body_size', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'decoded_body_size', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'did_reuse_connection', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_secure_transport', packedOffset: 80, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_timing_details', packedOffset: 80, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_negative_values', packedOffset: 80, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'server_timing', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'render_blocking_status', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'response_status', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'content_type', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'content_encoding', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'initiator_url', packedOffset: 128, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'service_worker_router_info', packedOffset: 136, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterInfoSpec, nullable: true },
        { name: 'service_worker_response_source', packedOffset: 144, packedBitOffset: 0, type: network.mojom.FetchResponseSourceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
