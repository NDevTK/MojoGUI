// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
blink.mojom.ServiceWorkerClientQueryOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerClientQueryOptions',
      packedSize: 24,
      fields: [
        { name: 'include_uncontrolled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'client_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ServiceWorkerClientInfo
blink.mojom.ServiceWorkerClientInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerClientInfo',
      packedSize: 72,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'frame_type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RequestContextFrameTypeSpec, nullable: false },
        { name: 'client_uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'client_type', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientTypeSpec, nullable: false },
        { name: 'page_hidden', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_focused', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'lifecycle_state', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ServiceWorkerClientLifecycleStateSpec, nullable: false },
        { name: 'last_focus_time', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'creation_time', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
