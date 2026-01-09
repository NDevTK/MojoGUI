// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SharedWorkerSameSiteCookies
blink.mojom.SharedWorkerSameSiteCookies = {
  kAll: 0,
  kNone: 1,
};

// Struct: SharedWorkerInfo
blink.mojom.SharedWorkerInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerInfo',
      packedSize: 56,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'content_security_policies', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'outside_fetch_client_settings_object', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'same_site_cookies', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SharedWorkerSameSiteCookiesSpec, nullable: false },
        { name: 'extended_lifetime', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
