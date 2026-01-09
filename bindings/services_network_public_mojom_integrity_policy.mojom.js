// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/integrity_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: Destination
network.mojom.Destination = {
  kScript: 0,
};

// Enum: Source
network.mojom.Source = {
  kInline: 0,
};

// Struct: IntegrityPolicy
network.mojom.IntegrityPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IntegrityPolicy',
      packedSize: 16,
      fields: [
        { name: 'kScript', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
