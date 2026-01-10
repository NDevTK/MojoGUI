// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/request_priority.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: RequestPriority
network.mojom.mojom.RequestPriority = {
  kThrottled: 0,
  kIdle: 1,
  kLowest: 2,
  kLow: 3,
  kMedium: 4,
  kHighest: 5,
};
network.mojom.mojom.RequestPrioritySpec = { $: mojo.internal.Enum() };

// Enum: FetchPriorityAttribute
network.mojom.mojom.FetchPriorityAttribute = {
  kLow: 0,
  kAuto: 1,
  kHigh: 2,
};
network.mojom.mojom.FetchPriorityAttributeSpec = { $: mojo.internal.Enum() };
