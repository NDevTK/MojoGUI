// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/url.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};


url.mojom.kMaxURLChars = 2097152;

// Struct: Url
url.mojom.UrlSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.Url',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
