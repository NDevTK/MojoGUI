// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/http_raw_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.HttpRawHeaderPairSpec = { $: {} };

// Struct: HttpRawHeaderPair
mojo.internal.Struct(
    network.mojom.HttpRawHeaderPairSpec, 'network.mojom.HttpRawHeaderPair', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
