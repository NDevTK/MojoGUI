// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/mailbox.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: Mailbox
gpu.mojom.mojom.MailboxSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.Mailbox',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
