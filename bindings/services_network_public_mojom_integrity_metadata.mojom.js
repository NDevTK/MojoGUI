// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/integrity_metadata.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.IntegrityMetadataSpec = { $: {} };

// Struct: IntegrityMetadata
mojo.internal.Struct(
    network.mojom.IntegrityMetadataSpec, 'network.mojom.IntegrityMetadata', [
      mojo.internal.StructField('algorithm', 0, 0, network.mojom.IntegrityAlgorithmSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
