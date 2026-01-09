// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration_options.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ServiceWorkerUpdateViaCache
blink.mojom.ServiceWorkerUpdateViaCache = {
  kImports: 0,
  kAll: 1,
  kNone: 2,
};

// Struct: ServiceWorkerRegistrationOptions
blink.mojom.ServiceWorkerRegistrationOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationOptions',
      packedSize: 32,
      fields: [
        { name: 'scope', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'update_via_cache', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
