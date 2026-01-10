// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/timing/resource_timing.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var url = url || {};

blink.mojom.CacheStateSpec = { $: mojo.internal.Enum() };
blink.mojom.ServerTimingInfoSpec = { $: {} };
blink.mojom.ResourceTimingInfoSpec = { $: {} };

// Enum: CacheState
blink.mojom.CacheState = {
  kNone: 0,
  kLocal: 1,
  kValidated: 2,
};

// Struct: ServerTimingInfo
mojo.internal.Struct(
    blink.mojom.ServerTimingInfoSpec, 'blink.mojom.ServerTimingInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ResourceTimingInfo
mojo.internal.Struct(
    blink.mojom.ResourceTimingInfoSpec, 'blink.mojom.ResourceTimingInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('start_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alpn_negotiated_protocol', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connection_info', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timing', 32, 0, network.mojom.LoadTimingInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('last_redirect_end_time', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_end', 48, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_state', 56, 0, blink.mojom.CacheStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encoded_body_size', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('decoded_body_size', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('server_timing', 80, 0, mojo.internal.Array(blink.mojom.ServerTimingInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('content_type', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_encoding', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('initiator_url', 104, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_router_info', 112, 0, network.mojom.ServiceWorkerRouterInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('service_worker_response_source', 120, 0, network.mojom.FetchResponseSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_status', 128, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('did_reuse_connection', 130, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_secure_transport', 130, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_timing_details', 130, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_negative_values', 130, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('render_blocking_status', 130, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);
