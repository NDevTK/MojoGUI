// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerStateSpec = { $: mojo.internal.Enum() };

// Enum: ServiceWorkerState
blink.mojom.ServiceWorkerState = {
  kParsed: 0,
  kInstalling: 1,
  kInstalled: 2,
  kActivating: 3,
  kActivated: 4,
  kRedundant: 5,
};
