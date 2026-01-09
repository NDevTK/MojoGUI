// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/mutable_network_traffic_annotation_tag.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: MutableNetworkTrafficAnnotationTag
network.mojom.MutableNetworkTrafficAnnotationTagSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.MutableNetworkTrafficAnnotationTag',
      packedSize: 16,
      fields: [
        { name: 'unique_id_hash_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
