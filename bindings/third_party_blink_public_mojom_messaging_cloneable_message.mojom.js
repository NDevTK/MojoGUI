// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/messaging/cloneable_message.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};


// Struct: CloneableMessage
blink.mojom.mojom.CloneableMessageSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CloneableMessage',
      packedSize: 88,
      fields: [
        { name: 'encoded_message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
        { name: 'blobs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SerializedBlobSpec, false), nullable: false, minVersion: 0 },
        { name: 'sender_origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'stack_trace_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'stack_trace_debugger_id_first', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'stack_trace_debugger_id_second', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'stack_trace_should_pause', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sender_agent_cluster_id', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'locked_to_sender_agent_cluster', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'file_system_access_tokens', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};
