// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/address_list.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.AddressListSpec = { $: {} };

// Struct: AddressList
mojo.internal.Struct(
    network.mojom.AddressListSpec, 'network.mojom.AddressList', [
      mojo.internal.StructField('addresses', 0, 0, mojo.internal.Array(network.mojom.IPEndPointSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('dns_aliases', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
