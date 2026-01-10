// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/mutable_partial_network_traffic_annotation_tag.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.MutablePartialNetworkTrafficAnnotationTagSpec = { $: {} };

// Struct: MutablePartialNetworkTrafficAnnotationTag
mojo.internal.Struct(
    network.mojom.MutablePartialNetworkTrafficAnnotationTagSpec, 'network.mojom.MutablePartialNetworkTrafficAnnotationTag', [
      mojo.internal.StructField('unique_id_hash_code', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('completing_id_hash_code', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
