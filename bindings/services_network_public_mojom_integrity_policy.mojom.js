// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/integrity_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: Destination
network.mojom.mojom.Destination = {
  kScript: 0,
};
network.mojom.mojom.DestinationSpec = { $: mojo.internal.Enum() };

// Enum: Source
network.mojom.mojom.Source = {
  kInline: 0,
};
network.mojom.mojom.SourceSpec = { $: mojo.internal.Enum() };

// Struct: IntegrityPolicy
network.mojom.mojom.IntegrityPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IntegrityPolicy',
      packedSize: 16,
      fields: [
        { name: 'kScript', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
