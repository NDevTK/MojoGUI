// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/timing/resource_timing.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Enum: CacheState
blink.mojom.mojom.CacheState = {
  kNone: 0,
  kLocal: 1,
  kValidated: 2,
};
blink.mojom.mojom.CacheStateSpec = { $: mojo.internal.Enum() };

// Struct: ServerTimingInfo
blink.mojom.mojom.ServerTimingInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServerTimingInfo',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ResourceTimingInfo
blink.mojom.mojom.ResourceTimingInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceTimingInfo',
      packedSize: 136,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'alpn_negotiated_protocol', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'connection_info', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'timing', packedOffset: 32, packedBitOffset: 0, type: network.mojom.LoadTimingInfoSpec, nullable: true, minVersion: 0 },
        { name: 'last_redirect_end_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'response_end', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'cache_state', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.CacheStateSpec, nullable: false, minVersion: 0 },
        { name: 'encoded_body_size', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'decoded_body_size', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'did_reuse_connection', packedOffset: 122, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_secure_transport', packedOffset: 122, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_timing_details', packedOffset: 122, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_negative_values', packedOffset: 122, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'server_timing', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ServerTimingInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'render_blocking_status', packedOffset: 122, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'response_status', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'content_type', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content_encoding', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'initiator_url', packedOffset: 96, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_router_info', packedOffset: 104, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterInfoSpec, nullable: true, minVersion: 0 },
        { name: 'service_worker_response_source', packedOffset: 116, packedBitOffset: 0, type: network.mojom.FetchResponseSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};
