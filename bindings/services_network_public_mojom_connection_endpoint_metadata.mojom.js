// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/connection_endpoint_metadata.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.ConnectionEndpointMetadataSpec = { $: {} };

// Struct: ConnectionEndpointMetadata
mojo.internal.Struct(
    network.mojom.ConnectionEndpointMetadataSpec, 'network.mojom.ConnectionEndpointMetadata', [
      mojo.internal.StructField('supported_protocol_alpns', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('ech_config_list', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('target_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('trust_anchor_ids', 24, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 40]]);
