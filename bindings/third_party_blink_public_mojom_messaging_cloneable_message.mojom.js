// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/cloneable_message.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: CloneableMessage
blink.mojom.CloneableMessageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CloneableMessage',
      packedSize: 88,
      fields: [
        { name: 'encoded_message', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'blobs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sender_origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'stack_trace_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'stack_trace_debugger_id_first', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'stack_trace_debugger_id_second', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'stack_trace_should_pause', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sender_agent_cluster_id', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'locked_to_sender_agent_cluster', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'file_system_access_tokens', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
