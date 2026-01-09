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
      packedSize: 16,
      fields: [
        { name: 'bad_static_spki_hashes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'include_subdomains', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'host_pins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
