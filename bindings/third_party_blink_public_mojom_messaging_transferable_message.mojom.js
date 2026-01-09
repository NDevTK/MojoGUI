// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/transferable_message.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: TransferableMessage
blink.mojom.TransferableMessageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TransferableMessage',
      packedSize: 72,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CloneableMessageSpec, nullable: false },
        { name: 'ports', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'stream_channels', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'array_buffer_contents_array', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'image_bitmap_contents_array', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_activation', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.UserActivationSnapshotSpec, nullable: true },
        { name: 'delegated_capability', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.DelegatedCapabilitySpec, nullable: false },
        { name: 'task_state_id', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.TaskAttributionIdSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
