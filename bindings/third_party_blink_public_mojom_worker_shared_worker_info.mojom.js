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
      packedSize: 16,
      fields: [
        { name: 'extended_lifetime', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
