// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_isolation_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: SharedDictionaryIsolationKey
network.mojom.SharedDictionaryIsolationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryIsolationKey',
      packedSize: 16,
      fields: [
        { name: 'top_frame_site', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
