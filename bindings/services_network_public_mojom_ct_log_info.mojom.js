// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ct_log_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: LogType
network.mojom.mojom.LogType = {
  kUnspecified: 0,
  kRFC6962: 1,
  kStaticCTAPI: 2,
};
network.mojom.mojom.LogTypeSpec = { $: mojo.internal.Enum() };

// Struct: PreviousOperatorEntry
network.mojom.mojom.PreviousOperatorEntrySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PreviousOperatorEntry',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CTLogInfo
network.mojom.mojom.CTLogInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CTLogInfo',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'disqualified_at', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'mmd', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'current_operator', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'previous_operators', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.PreviousOperatorEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'kUnspecified', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};
