// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/unencoded_digest.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: UnencodedDigestIssue
network.mojom.UnencodedDigestIssue = {
  kMalformedDictionary: 0,
  kUnknownAlgorithm: 1,
  kIncorrectDigestType: 2,
  kIncorrectDigestLength: 3,
};

// Struct: UnencodedDigests
network.mojom.UnencodedDigestsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.UnencodedDigests',
      packedSize: 16,
      fields: [
        { name: 'issues', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
