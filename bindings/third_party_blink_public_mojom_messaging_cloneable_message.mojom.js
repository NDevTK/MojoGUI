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

blink.mojom.CloneableMessageSpec = { $: {} };

// Struct: CloneableMessage
mojo.internal.Struct(
    blink.mojom.CloneableMessageSpec, 'blink.mojom.CloneableMessage', [
      mojo.internal.StructField('encoded_message', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('blobs', 16, 0, mojo.internal.Array(blink.mojom.SerializedBlobSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('sender_origin', 24, 0, url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('stack_trace_id', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stack_trace_debugger_id_first', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('stack_trace_debugger_id_second', 48, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('stack_trace_should_pause', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sender_agent_cluster_id', 56, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('locked_to_sender_agent_cluster', 72, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('file_system_access_tokens', 64, 0, mojo.internal.Array(mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), false), null, false, 0, undefined),
    ],
    [[0, 88]]);
