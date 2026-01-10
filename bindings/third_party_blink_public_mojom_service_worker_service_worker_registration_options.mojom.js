// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_registration_options.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ServiceWorkerUpdateViaCacheSpec = { $: mojo.internal.Enum() };
blink.mojom.ServiceWorkerRegistrationOptionsSpec = { $: {} };

// Enum: ServiceWorkerUpdateViaCache
blink.mojom.ServiceWorkerUpdateViaCache = {
  kImports: 0,
  kAll: 1,
  kNone: 2,
};

// Struct: ServiceWorkerRegistrationOptions
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRegistrationOptionsSpec, 'blink.mojom.ServiceWorkerRegistrationOptions', [
      mojo.internal.StructField('scope', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, blink.mojom.ScriptTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('update_via_cache', 16, 0, blink.mojom.ServiceWorkerUpdateViaCacheSpec.$, 0, false, 0, undefined),
    ],
    [[0, 32]]);
