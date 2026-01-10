// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_isolation_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Struct: SharedDictionaryIsolationKey
network.mojom.SharedDictionaryIsolationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryIsolationKey',
      packedSize: 24,
      fields: [
        { name: 'frame_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'top_frame_site', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
