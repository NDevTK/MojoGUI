// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/mutable_partial_network_traffic_annotation_tag.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: MutablePartialNetworkTrafficAnnotationTag
network.mojom.mojom.MutablePartialNetworkTrafficAnnotationTagSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MutablePartialNetworkTrafficAnnotationTag',
      packedSize: 16,
      fields: [
        { name: 'unique_id_hash_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'completing_id_hash_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
