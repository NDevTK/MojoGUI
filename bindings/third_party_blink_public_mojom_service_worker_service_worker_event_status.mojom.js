// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_event_status.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerEventStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.ServiceWorkerStartStatusSpec = { $: mojo.internal.Enum() };

// Enum: ServiceWorkerEventStatus
blink.mojom.ServiceWorkerEventStatus = {
  COMPLETED: 0,
  REJECTED: 1,
  ABORTED: 2,
  TIMEOUT: 3,
  MAX: 3,
};

// Enum: ServiceWorkerStartStatus
blink.mojom.ServiceWorkerStartStatus = {
  kNormalCompletion: 0,
  kAbruptCompletion: 1,
};
