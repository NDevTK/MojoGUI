// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_embedded_worker_status.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerEmbeddedWorkerStatusSpec = { $: mojo.internal.Enum() };

// Enum: ServiceWorkerEmbeddedWorkerStatus
blink.mojom.ServiceWorkerEmbeddedWorkerStatus = {
  kStopped: 0,
  kStarting: 1,
  kRunning: 2,
  kStopping: 3,
};
