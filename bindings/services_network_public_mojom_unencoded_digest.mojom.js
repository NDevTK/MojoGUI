// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/unencoded_digest.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.UnencodedDigestIssueSpec = { $: mojo.internal.Enum() };
network.mojom.UnencodedDigestsSpec = { $: {} };

// Enum: UnencodedDigestIssue
network.mojom.UnencodedDigestIssue = {
  kMalformedDictionary: 0,
  kUnknownAlgorithm: 1,
  kIncorrectDigestType: 2,
  kIncorrectDigestLength: 3,
};

// Struct: UnencodedDigests
mojo.internal.Struct(
    network.mojom.UnencodedDigestsSpec, 'network.mojom.UnencodedDigests', [
      mojo.internal.StructField('digests', 0, 0, mojo.internal.Array(network.mojom.IntegrityMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('issues', 8, 0, mojo.internal.Array(network.mojom.UnencodedDigestIssueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
