// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ip_endpoint.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.IPEndPointSpec = { $: {} };

// Struct: IPEndPoint
mojo.internal.Struct(
    network.mojom.IPEndPointSpec, 'network.mojom.IPEndPoint', [
      mojo.internal.StructField('address', 0, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);
