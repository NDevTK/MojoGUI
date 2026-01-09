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
        { name: 'site', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false },
        { name: 'schemefully_same', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
