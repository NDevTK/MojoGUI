// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/transferable_message.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.TransferableMessageSpec = { $: {} };

// Struct: TransferableMessage
mojo.internal.Struct(
    blink.mojom.TransferableMessageSpec, 'blink.mojom.TransferableMessage', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.CloneableMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ports', 8, 0, mojo.internal.Array(blink.mojom.MessagePortDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('stream_channels', 16, 0, mojo.internal.Array(blink.mojom.MessagePortDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('array_buffer_contents_array', 24, 0, mojo.internal.Array(blink.mojom.SerializedArrayBufferContentsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('image_bitmap_contents_array', 32, 0, mojo.internal.Array(blink.mojom.SerializedStaticBitmapImageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('user_activation', 40, 0, blink.mojom.UserActivationSnapshotSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('delegated_capability', 48, 0, blink.mojom.DelegatedCapabilitySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('task_state_id', 56, 0, blink.mojom.TaskAttributionIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);
