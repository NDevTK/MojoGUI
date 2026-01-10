// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ct_log_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.LogTypeSpec = { $: mojo.internal.Enum() };
network.mojom.PreviousOperatorEntrySpec = { $: {} };
network.mojom.CTLogInfoSpec = { $: {} };

// Enum: LogType
network.mojom.LogType = {
  kUnspecified: 0,
  kRFC6962: 1,
  kStaticCTAPI: 2,
};

// Struct: PreviousOperatorEntry
mojo.internal.Struct(
    network.mojom.PreviousOperatorEntrySpec, 'network.mojom.PreviousOperatorEntry', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('end_time', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CTLogInfo
mojo.internal.Struct(
    network.mojom.CTLogInfoSpec, 'network.mojom.CTLogInfo', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.ByteStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 8, 0, mojo_base.mojom.ByteStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('disqualified_at', 24, 0, mojo_base.mojom.TimeSpec, null, true, 0, undefined),
      mojo.internal.StructField('mmd', 32, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('current_operator', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('previous_operators', 48, 0, mojo.internal.Array(network.mojom.PreviousOperatorEntrySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('kUnspecified', 56, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 72]]);
