// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ct_log_info.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: LogType
network.mojom.LogType = {
  kUnspecified: 0,
  kRFC6962: 1,
  kStaticCTAPI: 2,
};

// Struct: PreviousOperatorEntry
network.mojom.PreviousOperatorEntrySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.PreviousOperatorEntry',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'end_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CTLogInfo
network.mojom.CTLogInfoSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CTLogInfo',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'public_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'disqualified_at', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'mmd', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'current_operator', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'previous_operators', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'kUnspecified', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
