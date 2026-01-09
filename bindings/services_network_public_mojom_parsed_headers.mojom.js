// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/parsed_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: OriginAgentClusterValue
network.mojom.OriginAgentClusterValue = {
  kAbsent: 0,
  kTrue: 1,
  kFalse: 2,
};

// Struct: ParsedHeaders
network.mojom.ParsedHeadersSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ParsedHeaders',
      packedSize: 16,
      fields: [
        { name: 'allow_cross_origin_event_reporting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
