// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/key_pinning.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: PinSet
network.mojom.mojom.PinSetSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PinSet',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'static_spki_hashes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SHA256HashValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'bad_static_spki_hashes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.SHA256HashValueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PinSetInfo
network.mojom.mojom.PinSetInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PinSetInfo',
      packedSize: 32,
      fields: [
        { name: 'hostname', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pinset_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'include_subdomains', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PinList
network.mojom.mojom.PinListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PinList',
      packedSize: 24,
      fields: [
        { name: 'pinsets', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.PinSetSpec, false), nullable: false, minVersion: 0 },
        { name: 'host_pins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.PinSetInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
