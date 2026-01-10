// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/schemeful_site.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Struct: SchemefulSite
network.mojom.SchemefulSiteSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SchemefulSite',
      packedSize: 16,
      fields: [
        { name: 'site_as_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
