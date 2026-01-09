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
      packedSize: 40,
      fields: [
        { name: 'supported_protocol_alpns', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ech_config_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'target_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'trust_anchor_ids', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
