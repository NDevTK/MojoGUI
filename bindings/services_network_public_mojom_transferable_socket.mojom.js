// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/transferable_socket.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.TransferableSocketSpec = { $: {} };
network.mojom.TransferableSocketSpec = { $: {} };

// Struct: TransferableSocket
mojo.internal.Struct(
    network.mojom.TransferableSocketSpec, 'network.mojom.TransferableSocket', [
      mojo.internal.StructField('protocol_info', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TransferableSocket
mojo.internal.Struct(
    network.mojom.TransferableSocketSpec, 'network.mojom.TransferableSocket', [
      mojo.internal.StructField('socket', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);
