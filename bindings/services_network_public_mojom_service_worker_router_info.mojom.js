// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/service_worker_router_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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
network.mojom.ServiceWorkerRouterInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ServiceWorkerRouterInfo',
      packedSize: 64,
      fields: [
        { name: 'matched_source_type', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterSourceTypeSpec, nullable: true },
        { name: 'actual_source_type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterSourceTypeSpec, nullable: true },
        { name: 'route_rule_num', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'router_evaluation_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'cache_lookup_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'evaluation_worker_status', packedOffset: 40, packedBitOffset: 0, type: network.mojom.ServiceWorkerStatusSpec, nullable: true },
        { name: 'rule_id_matched', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
