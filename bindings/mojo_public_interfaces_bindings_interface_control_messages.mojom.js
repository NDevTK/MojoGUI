// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/interfaces/bindings/interface_control_messages.mojom
// Module: mojo.interface_control

'use strict';

// Module namespace
var mojo = mojo || {};
mojo.interface_control = mojo.interface_control || {};

mojo.interface_control.RunInputSpec = { $: {} };
mojo.interface_control.RunOutputSpec = { $: {} };
mojo.interface_control.RunOrClosePipeInputSpec = { $: {} };
mojo.interface_control.RunMessageParamsSpec = { $: {} };
mojo.interface_control.RunResponseMessageParamsSpec = { $: {} };
mojo.interface_control.QueryVersionSpec = { $: {} };
mojo.interface_control.QueryVersionResultSpec = { $: {} };
mojo.interface_control.FlushForTestingSpec = { $: {} };
mojo.interface_control.RunOrClosePipeMessageParamsSpec = { $: {} };
mojo.interface_control.RequireVersionSpec = { $: {} };
mojo.interface_control.EnableIdleTrackingSpec = { $: {} };
mojo.interface_control.MessageAckSpec = { $: {} };
mojo.interface_control.NotifyIdleSpec = { $: {} };

mojo.interface_control.kRunMessageId = 0xFFFFFFFF;

mojo.interface_control.kRunOrClosePipeMessageId = 0xFFFFFFFE;

// Union: RunInput
mojo.internal.Union(
    mojo.interface_control.RunInputSpec, 'mojo.interface_control.RunInput', {
      'query_version': {
        'ordinal': 0,
        'type': mojo.interface_control.QueryVersionSpec.$,
        'nullable': false,
      },
      'flush_for_testing': {
        'ordinal': 1,
        'type': mojo.interface_control.FlushForTestingSpec.$,
        'nullable': false,
      },
    });

// Union: RunOutput
mojo.internal.Union(
    mojo.interface_control.RunOutputSpec, 'mojo.interface_control.RunOutput', {
      'query_version_result': {
        'ordinal': 0,
        'type': mojo.interface_control.QueryVersionResultSpec.$,
        'nullable': false,
      },
    });

// Union: RunOrClosePipeInput
mojo.internal.Union(
    mojo.interface_control.RunOrClosePipeInputSpec, 'mojo.interface_control.RunOrClosePipeInput', {
      'require_version': {
        'ordinal': 0,
        'type': mojo.interface_control.RequireVersionSpec.$,
        'nullable': false,
      },
      'enable_idle_tracking': {
        'ordinal': 1,
        'type': mojo.interface_control.EnableIdleTrackingSpec.$,
        'nullable': false,
      },
      'message_ack': {
        'ordinal': 2,
        'type': mojo.interface_control.MessageAckSpec.$,
        'nullable': false,
      },
      'notify_idle': {
        'ordinal': 3,
        'type': mojo.interface_control.NotifyIdleSpec.$,
        'nullable': false,
      },
    });

// Struct: RunMessageParams
mojo.internal.Struct(
    mojo.interface_control.RunMessageParamsSpec, 'mojo.interface_control.RunMessageParams', [
      mojo.internal.StructField('input', 0, 0, mojo.interface_control.RunInputSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RunResponseMessageParams
mojo.internal.Struct(
    mojo.interface_control.RunResponseMessageParamsSpec, 'mojo.interface_control.RunResponseMessageParams', [
      mojo.internal.StructField('output', 0, 0, mojo.interface_control.RunOutputSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: QueryVersion
mojo.internal.Struct(
    mojo.interface_control.QueryVersionSpec, 'mojo.interface_control.QueryVersion', [
    ],
    [[0, 8]]);

// Struct: QueryVersionResult
mojo.internal.Struct(
    mojo.interface_control.QueryVersionResultSpec, 'mojo.interface_control.QueryVersionResult', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FlushForTesting
mojo.internal.Struct(
    mojo.interface_control.FlushForTestingSpec, 'mojo.interface_control.FlushForTesting', [
    ],
    [[0, 8]]);

// Struct: RunOrClosePipeMessageParams
mojo.internal.Struct(
    mojo.interface_control.RunOrClosePipeMessageParamsSpec, 'mojo.interface_control.RunOrClosePipeMessageParams', [
      mojo.internal.StructField('input', 0, 0, mojo.interface_control.RunOrClosePipeInputSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RequireVersion
mojo.internal.Struct(
    mojo.interface_control.RequireVersionSpec, 'mojo.interface_control.RequireVersion', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EnableIdleTracking
mojo.internal.Struct(
    mojo.interface_control.EnableIdleTrackingSpec, 'mojo.interface_control.EnableIdleTracking', [
      mojo.internal.StructField('timeout_in_microseconds', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MessageAck
mojo.internal.Struct(
    mojo.interface_control.MessageAckSpec, 'mojo.interface_control.MessageAck', [
    ],
    [[0, 8]]);

// Struct: NotifyIdle
mojo.internal.Struct(
    mojo.interface_control.NotifyIdleSpec, 'mojo.interface_control.NotifyIdle', [
    ],
    [[0, 8]]);
