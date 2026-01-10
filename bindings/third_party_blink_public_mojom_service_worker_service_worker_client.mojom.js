// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};

blink.mojom.ServiceWorkerClientTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.ServiceWorkerClientLifecycleStateSpec = { $: mojo.internal.Enum() };
blink.mojom.ServiceWorkerClientQueryOptionsSpec = { $: {} };
blink.mojom.ServiceWorkerClientInfoSpec = { $: {} };

// Enum: ServiceWorkerClientType
blink.mojom.ServiceWorkerClientType = {
  kWindow: 0,
  kDedicatedWorker: 1,
  kSharedWorker: 2,
  kAll: 3,
};

// Enum: ServiceWorkerClientLifecycleState
blink.mojom.ServiceWorkerClientLifecycleState = {
  kActive: 0,
  kFrozen: 1,
};

// Struct: ServiceWorkerClientQueryOptions
mojo.internal.Struct(
    blink.mojom.ServiceWorkerClientQueryOptionsSpec, 'blink.mojom.ServiceWorkerClientQueryOptions', [
      mojo.internal.StructField('client_type', 0, 0, blink.mojom.ServiceWorkerClientTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('include_uncontrolled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ServiceWorkerClientInfo
mojo.internal.Struct(
    blink.mojom.ServiceWorkerClientInfoSpec, 'blink.mojom.ServiceWorkerClientInfo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_type', 8, 0, blink.mojom.RequestContextFrameTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('client_uuid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('client_type', 24, 0, blink.mojom.ServiceWorkerClientTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lifecycle_state', 32, 0, blink.mojom.ServiceWorkerClientLifecycleStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('last_focus_time', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 48, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_hidden', 56, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('is_focused', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);
