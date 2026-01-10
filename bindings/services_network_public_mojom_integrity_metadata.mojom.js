// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/integrity_metadata.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: IntegrityMetadata
network.mojom.IntegrityMetadataSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IntegrityMetadata',
      packedSize: 24,
      fields: [
        { name: 'algorithm', packedOffset: 8, packedBitOffset: 0, type: network.mojom.IntegrityAlgorithmSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
