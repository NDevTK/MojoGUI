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
      packedSize: 16,
      fields: [
        { name: 'end_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
