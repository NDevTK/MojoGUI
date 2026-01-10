// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/referrer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Struct: Referrer
blink.mojom.ReferrerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Referrer',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ReferrerPolicySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
