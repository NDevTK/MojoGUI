// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/message_port_descriptor.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.MessagePortDescriptorSpec = { $: {} };

// Struct: MessagePortDescriptor
mojo.internal.Struct(
    blink.mojom.MessagePortDescriptorSpec, 'blink.mojom.MessagePortDescriptor', [
      mojo.internal.StructField('pipe_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('sequence_number', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);
