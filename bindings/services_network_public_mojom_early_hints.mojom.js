// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/early_hints.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: EarlyHints
network.mojom.mojom.EarlyHintsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EarlyHints',
      packedSize: 24,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ParsedHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'referrer_policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ReferrerPolicySpec, nullable: false, minVersion: 0 },
        { name: 'ip_address_space', packedOffset: 12, packedBitOffset: 0, type: network.mojom.IPAddressSpaceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
