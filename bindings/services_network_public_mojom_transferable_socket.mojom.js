// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/transferable_socket.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: TransferableSocket
network.mojom.mojom.TransferableSocketSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TransferableSocket',
      packedSize: 16,
      fields: [
        { name: 'protocol_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TransferableSocket
network.mojom.mojom.TransferableSocketSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TransferableSocket',
      packedSize: 16,
      fields: [
        { name: 'socket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
