// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/hash_value.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.SHA256HashValueSpec = { $: {} };

// Struct: SHA256HashValue
mojo.internal.Struct(
    network.mojom.SHA256HashValueSpec, 'network.mojom.SHA256HashValue', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
