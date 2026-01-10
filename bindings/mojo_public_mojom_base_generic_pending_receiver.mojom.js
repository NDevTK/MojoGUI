// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/generic_pending_receiver.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: GenericPendingReceiver
mojo_base.mojom.mojom.GenericPendingReceiverSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.GenericPendingReceiver',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiving_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
