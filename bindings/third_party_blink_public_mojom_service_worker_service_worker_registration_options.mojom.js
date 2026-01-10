// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration_options.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Enum: ServiceWorkerUpdateViaCache
blink.mojom.ServiceWorkerUpdateViaCache = {
  kImports: 0,
  kAll: 1,
  kNone: 2,
};
blink.mojom.ServiceWorkerUpdateViaCacheSpec = { $: mojo.internal.Enum() };

// Struct: ServiceWorkerRegistrationOptions
blink.mojom.ServiceWorkerRegistrationOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRegistrationOptions',
      packedSize: 24,
      fields: [
        { name: 'scope', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScriptTypeSpec, nullable: false, minVersion: 0 },
        { name: 'update_via_cache', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.ServiceWorkerUpdateViaCacheSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
