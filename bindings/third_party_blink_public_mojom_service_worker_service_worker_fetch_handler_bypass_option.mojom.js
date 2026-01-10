// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_fetch_handler_bypass_option.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ServiceWorkerFetchHandlerBypassOption
blink.mojom.mojom.ServiceWorkerFetchHandlerBypassOption = {
  kDefault: 0,
  kBypassOnlyIfServiceWorkerNotStarted: 1,
  kRaceNetworkRequest: 2,
  kRaceNetworkRequestHoldback: 3,
  kAutoPreload: 4,
  kSyntheticResponse: 5,
  kSyntheticResponseDryRunMode: 6,
};
blink.mojom.mojom.ServiceWorkerFetchHandlerBypassOptionSpec = { $: mojo.internal.Enum() };
