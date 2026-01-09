// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_endpoint_metadata.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: ConnectionEndpointMetadata
network.mojom.ConnectionEndpointMetadataSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ConnectionEndpointMetadata',
      packedSize: 16,
      fields: [
        { name: 'trust_anchor_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
