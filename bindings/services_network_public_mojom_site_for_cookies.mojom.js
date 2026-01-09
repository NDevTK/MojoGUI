// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/site_for_cookies.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: SiteForCookies
network.mojom.SiteForCookiesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SiteForCookies',
      packedSize: 24,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'schemefully_same', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
