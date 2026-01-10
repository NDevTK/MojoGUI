// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Enum: ServiceWorkerClientType
blink.mojom.ServiceWorkerClientType = {
  kWindow: 0,
  kDedicatedWorker: 1,
  kSharedWorker: 2,
  kAll: 3,
};
blink.mojom.ServiceWorkerClientTypeSpec = { $: mojo.internal.Enum() };

// Enum: ServiceWorkerClientLifecycleState
blink.mojom.ServiceWorkerClientLifecycleState = {
  kActive: 0,
  kFrozen: 1,
};
blink.mojom.ServiceWorkerClientLifecycleStateSpec = { $: mojo.internal.Enum() };

// Struct: ServiceWorkerClientQueryOptions
blink.mojom.ServiceWorkerClientQueryOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerClientQueryOptions',
      packedSize: 16,
      fields: [
        { name: 'include_uncontrolled', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'client_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ServiceWorkerClientInfo
blink.mojom.ServiceWorkerClientInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerClientInfo',
      packedSize: 56,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'frame_type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.RequestContextFrameTypeSpec, nullable: false, minVersion: 0 },
        { name: 'client_uuid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'client_type', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientTypeSpec, nullable: false, minVersion: 0 },
        { name: 'page_hidden', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_focused', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'lifecycle_state', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientLifecycleStateSpec, nullable: false, minVersion: 0 },
        { name: 'last_focus_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'creation_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
