// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/renderer_eviction_reason.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.RendererEvictionReasonSpec = { $: mojo.internal.Enum() };

// Enum: RendererEvictionReason
blink.mojom.RendererEvictionReason = {
  kJavaScriptExecution: 0,
  kNetworkRequestDatapipeDrainedAsBytesConsumer: 1,
  kNetworkRequestRedirected: 2,
  kNetworkRequestTimeout: 3,
  kNetworkExceedsBufferLimit: 4,
  kBroadcastChannelOnMessage: 5,
  kSharedWorkerMessage: 6,
};
