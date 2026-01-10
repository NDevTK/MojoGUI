// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/service_worker_router_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.ServiceWorkerRouterSourceTypeSpec = { $: mojo.internal.Enum() };
network.mojom.ServiceWorkerStatusSpec = { $: mojo.internal.Enum() };
network.mojom.ServiceWorkerRouterInfoSpec = { $: {} };

// Enum: ServiceWorkerRouterSourceType
network.mojom.ServiceWorkerRouterSourceType = {
  kNetwork: 0,
  kRaceNetworkAndFetchEvent: 1,
  kFetchEvent: 2,
  kCache: 3,
  kRaceNetworkAndCache: 4,
};

// Enum: ServiceWorkerStatus
network.mojom.ServiceWorkerStatus = {
  kRunning: 0,
  kStarting: 1,
  kStopping: 2,
  kStopped: 3,
  kWarmingUp: 4,
  kWarmedUp: 5,
};

// Struct: ServiceWorkerRouterInfo
mojo.internal.Struct(
    network.mojom.ServiceWorkerRouterInfoSpec, 'network.mojom.ServiceWorkerRouterInfo', [
      mojo.internal.StructField('matched_source_type', 0, 0, network.mojom.ServiceWorkerRouterSourceTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('actual_source_type', 8, 0, network.mojom.ServiceWorkerRouterSourceTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('route_rule_num', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('router_evaluation_time', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_lookup_time', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('evaluation_worker_status', 40, 0, network.mojom.ServiceWorkerStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('rule_id_matched_$value', 48, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'rule_id_matched_$flag', originalFieldName: 'rule_id_matched' }),
      mojo.internal.StructField('rule_id_matched_$flag', 52, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'rule_id_matched_$value', originalFieldName: 'rule_id_matched' }),
    ],
    [[0, 64]]);
