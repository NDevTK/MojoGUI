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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'creation_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
