// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/service_worker_router_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: ServiceWorkerRouterSourceType
network.mojom.mojom.ServiceWorkerRouterSourceType = {
  kNetwork: 0,
  kRaceNetworkAndFetchEvent: 1,
  kFetchEvent: 2,
  kCache: 3,
  kRaceNetworkAndCache: 4,
};
network.mojom.mojom.ServiceWorkerRouterSourceTypeSpec = { $: mojo.internal.Enum() };

// Enum: ServiceWorkerStatus
network.mojom.mojom.ServiceWorkerStatus = {
  kRunning: 0,
  kStarting: 1,
  kStopping: 2,
  kStopped: 3,
  kWarmingUp: 4,
  kWarmedUp: 5,
};
network.mojom.mojom.ServiceWorkerStatusSpec = { $: mojo.internal.Enum() };

// Struct: ServiceWorkerRouterInfo
network.mojom.mojom.ServiceWorkerRouterInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ServiceWorkerRouterInfo',
      packedSize: 56,
      fields: [
        { name: 'rule_id_matched_$flag', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'rule_id_matched_$value', originalFieldName: 'rule_id_matched' } },
        { name: 'rule_id_matched_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'rule_id_matched_$flag', originalFieldName: 'rule_id_matched' } },
        { name: 'matched_source_type', packedOffset: 28, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterSourceTypeSpec, nullable: true, minVersion: 0 },
        { name: 'actual_source_type', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ServiceWorkerRouterSourceTypeSpec, nullable: true, minVersion: 0 },
        { name: 'route_rule_num', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'router_evaluation_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'cache_lookup_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'evaluation_worker_status', packedOffset: 36, packedBitOffset: 0, type: network.mojom.ServiceWorkerStatusSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
