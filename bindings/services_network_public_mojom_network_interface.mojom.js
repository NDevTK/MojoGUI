// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_interface.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: NetworkInterface
network.mojom.NetworkInterfaceSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkInterface',
      packedSize: 64,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'friendly_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ConnectionTypeSpec, nullable: false },
        { name: 'address', packedOffset: 24, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false },
        { name: 'mac_address', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'interface_index', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'prefix_length', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'ip_address_attributes', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
