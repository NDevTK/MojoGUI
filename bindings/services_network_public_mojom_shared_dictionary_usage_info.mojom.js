// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_usage_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: SharedDictionaryUsageInfo
network.mojom.SharedDictionaryUsageInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SharedDictionaryUsageInfo',
      packedSize: 24,
      fields: [
        { name: 'isolation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'total_size_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
