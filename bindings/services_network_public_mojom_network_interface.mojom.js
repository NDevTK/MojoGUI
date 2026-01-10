// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_interface.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.NetworkInterfaceSpec = { $: {} };

// Struct: NetworkInterface
mojo.internal.Struct(
    network.mojom.NetworkInterfaceSpec, 'network.mojom.NetworkInterface', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('friendly_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, network.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('address', 24, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mac_address', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('interface_index', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('prefix_length', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ip_address_attributes', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);
