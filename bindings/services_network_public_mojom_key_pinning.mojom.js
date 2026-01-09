// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/key_pinning.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: PinSet
network.mojom.PinSetSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PinSet',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'static_spki_hashes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'bad_static_spki_hashes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PinSetInfo
network.mojom.PinSetInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PinSetInfo',
      packedSize: 32,
      fields: [
        { name: 'hostname', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'pinset_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'include_subdomains', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PinList
network.mojom.PinListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PinList',
      packedSize: 24,
      fields: [
        { name: 'pinsets', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'host_pins', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
