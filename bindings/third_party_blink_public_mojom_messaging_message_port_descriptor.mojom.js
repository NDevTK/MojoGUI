// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/message_port_descriptor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: MessagePortDescriptor
blink.mojom.MessagePortDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MessagePortDescriptor',
      packedSize: 32,
      fields: [
        { name: 'pipe_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'sequence_number', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
