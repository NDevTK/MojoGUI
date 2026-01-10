// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/load_timing_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.LoadTimingInfoConnectTimingSpec = { $: {} };
network.mojom.LoadTimingInfoSpec = { $: {} };

// Struct: LoadTimingInfoConnectTiming
mojo.internal.Struct(
    network.mojom.LoadTimingInfoConnectTimingSpec, 'network.mojom.LoadTimingInfoConnectTiming', [
      mojo.internal.StructField('domain_lookup_start', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('domain_lookup_end', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('connect_start', 16, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('connect_end', 24, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('ssl_start', 32, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('ssl_end', 40, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: LoadTimingInfo
mojo.internal.Struct(
    network.mojom.LoadTimingInfoSpec, 'network.mojom.LoadTimingInfo', [
      mojo.internal.StructField('socket_reused', 156, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('socket_log_id', 152, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('request_start_time', 0, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_start', 8, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('proxy_resolve_start', 16, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('proxy_resolve_end', 24, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('connect_timing', 32, 0, network.mojom.LoadTimingInfoConnectTimingSpec, null, false, 0, undefined),
      mojo.internal.StructField('send_start', 40, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('send_end', 48, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('receive_headers_start', 56, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('receive_headers_end', 64, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('receive_non_informational_headers_start', 72, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('first_early_hints_time', 80, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('push_start', 88, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('push_end', 96, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_start_time', 104, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_ready_time', 112, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_fetch_start', 120, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_respond_with_settled', 128, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_router_evaluation_start', 136, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_cache_lookup_start', 144, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 168]]);
