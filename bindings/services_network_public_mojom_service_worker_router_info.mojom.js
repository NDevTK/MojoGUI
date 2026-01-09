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
