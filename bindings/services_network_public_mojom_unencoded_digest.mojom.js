// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/unencoded_digest.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: UnencodedDigestIssue
network.mojom.mojom.UnencodedDigestIssue = {
  kMalformedDictionary: 0,
  kUnknownAlgorithm: 1,
  kIncorrectDigestType: 2,
  kIncorrectDigestLength: 3,
};
network.mojom.mojom.UnencodedDigestIssueSpec = { $: mojo.internal.Enum() };

// Struct: UnencodedDigests
network.mojom.mojom.UnencodedDigestsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UnencodedDigests',
      packedSize: 24,
      fields: [
        { name: 'digests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.IntegrityMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'issues', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.UnencodedDigestIssueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
