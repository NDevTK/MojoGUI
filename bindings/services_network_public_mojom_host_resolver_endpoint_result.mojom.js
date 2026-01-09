// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/host_resolver_endpoint_result.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: HostResolverEndpointResult
network.mojom.HostResolverEndpointResultSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HostResolverEndpointResult',
      packedSize: 24,
      fields: [
        { name: 'ip_endpoints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
