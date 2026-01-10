// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_interface.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: NetworkInterface
network.mojom.mojom.NetworkInterfaceSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NetworkInterface',
      packedSize: 56,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'friendly_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'interface_index', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 36, packedBitOffset: 0, type: network.mojom.ConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'address', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false, minVersion: 0 },
        { name: 'prefix_length', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'ip_address_attributes', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'mac_address', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
