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
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CloneableMessageSpec, nullable: false, minVersion: 0 },
        { name: 'ports', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.MessagePortDescriptorSpec, false), nullable: false, minVersion: 0 },
        { name: 'stream_channels', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.MessagePortDescriptorSpec, false), nullable: false, minVersion: 0 },
        { name: 'array_buffer_contents_array', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SerializedArrayBufferContentsSpec, false), nullable: false, minVersion: 0 },
        { name: 'image_bitmap_contents_array', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SerializedStaticBitmapImageSpec, false), nullable: false, minVersion: 0 },
        { name: 'user_activation', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.UserActivationSnapshotSpec, nullable: true, minVersion: 0 },
        { name: 'delegated_capability', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.DelegatedCapabilitySpec, nullable: false, minVersion: 0 },
        { name: 'task_state_id', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.TaskAttributionIdSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};
