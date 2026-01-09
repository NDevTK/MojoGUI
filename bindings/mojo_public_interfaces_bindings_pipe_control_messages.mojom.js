// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/interfaces/bindings/pipe_control_messages.mojom
// Module: mojo.pipe_control

'use strict';

// Module namespace
var mojo = mojo || {};
mojo.pipe_control = mojo.pipe_control || {};


// Struct: RunOrClosePipeMessageParams
mojo.pipe_control.RunOrClosePipeMessageParamsSpec = {
  $: {
    structSpec: {
      name: 'mojo.pipe_control.RunOrClosePipeMessageParams',
      packedSize: 16,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DisconnectReason
mojo.pipe_control.DisconnectReasonSpec = {
  $: {
    structSpec: {
      name: 'mojo.pipe_control.DisconnectReason',
      packedSize: 24,
      fields: [
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'custom_reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PeerAssociatedEndpointClosedEvent
mojo.pipe_control.PeerAssociatedEndpointClosedEventSpec = {
  $: {
    structSpec: {
      name: 'mojo.pipe_control.PeerAssociatedEndpointClosedEvent',
      packedSize: 24,
      fields: [
        { name: 'disconnect_reason', packedOffset: 0, packedBitOffset: 0, type: mojo.pipe_control.DisconnectReasonSpec, nullable: true },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PauseUntilFlushCompletes
mojo.pipe_control.PauseUntilFlushCompletesSpec = {
  $: {
    structSpec: {
      name: 'mojo.pipe_control.PauseUntilFlushCompletes',
      packedSize: 16,
      fields: [
        { name: 'flush_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FlushAsync
mojo.pipe_control.FlushAsyncSpec = {
  $: {
    structSpec: {
      name: 'mojo.pipe_control.FlushAsync',
      packedSize: 16,
      fields: [
        { name: 'flusher_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
