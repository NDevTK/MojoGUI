// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/interfaces/bindings/pipe_control_messages.mojom
// Module: mojo.pipe_control

'use strict';

// Module namespace
var mojo = mojo || {};
mojo.pipe_control = mojo.pipe_control || {};

mojo.pipe_control.RunOrClosePipeInputSpec = { $: {} };
mojo.pipe_control.RunOrClosePipeMessageParamsSpec = { $: {} };
mojo.pipe_control.DisconnectReasonSpec = { $: {} };
mojo.pipe_control.PeerAssociatedEndpointClosedEventSpec = { $: {} };
mojo.pipe_control.PauseUntilFlushCompletesSpec = { $: {} };
mojo.pipe_control.FlushAsyncSpec = { $: {} };

mojo.pipe_control.kRunOrClosePipeMessageId = 0xFFFFFFFE;

// Union: RunOrClosePipeInput
mojo.internal.Union(
    mojo.pipe_control.RunOrClosePipeInputSpec, 'mojo.pipe_control.RunOrClosePipeInput', {
      'peer_associated_endpoint_closed_event': {
        'ordinal': 0,
        'type': mojo.pipe_control.PeerAssociatedEndpointClosedEventSpec.$,
        'nullable': false,
      },
      'pause_until_flush_completes': {
        'ordinal': 1,
        'type': mojo.pipe_control.PauseUntilFlushCompletesSpec.$,
        'nullable': false,
      },
      'flush_async': {
        'ordinal': 2,
        'type': mojo.pipe_control.FlushAsyncSpec.$,
        'nullable': false,
      },
    });

// Struct: RunOrClosePipeMessageParams
mojo.internal.Struct(
    mojo.pipe_control.RunOrClosePipeMessageParamsSpec, 'mojo.pipe_control.RunOrClosePipeMessageParams', [
      mojo.internal.StructField('input', 0, 0, mojo.pipe_control.RunOrClosePipeInputSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DisconnectReason
mojo.internal.Struct(
    mojo.pipe_control.DisconnectReasonSpec, 'mojo.pipe_control.DisconnectReason', [
      mojo.internal.StructField('description', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('custom_reason', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PeerAssociatedEndpointClosedEvent
mojo.internal.Struct(
    mojo.pipe_control.PeerAssociatedEndpointClosedEventSpec, 'mojo.pipe_control.PeerAssociatedEndpointClosedEvent', [
      mojo.internal.StructField('disconnect_reason', 0, 0, mojo.pipe_control.DisconnectReasonSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PauseUntilFlushCompletes
mojo.internal.Struct(
    mojo.pipe_control.PauseUntilFlushCompletesSpec, 'mojo.pipe_control.PauseUntilFlushCompletes', [
      mojo.internal.StructField('flush_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FlushAsync
mojo.internal.Struct(
    mojo.pipe_control.FlushAsyncSpec, 'mojo.pipe_control.FlushAsync', [
      mojo.internal.StructField('flusher_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
