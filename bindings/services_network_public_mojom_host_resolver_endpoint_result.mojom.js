// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/host_resolver_endpoint_result.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};

network.mojom.HostResolverEndpointResultSpec = { $: {} };

// Struct: HostResolverEndpointResult
mojo.internal.Struct(
    network.mojom.HostResolverEndpointResultSpec, 'network.mojom.HostResolverEndpointResult', [
      mojo.internal.StructField('ip_endpoints', 0, 0, mojo.internal.Array(network.mojom.IPEndPointSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, network.mojom.ConnectionEndpointMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
