// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/early_hints.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: EarlyHints
network.mojom.EarlyHintsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EarlyHints',
      packedSize: 32,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ParsedHeadersSpec, nullable: false },
        { name: 'referrer_policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ReferrerPolicySpec, nullable: false },
        { name: 'ip_address_space', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
