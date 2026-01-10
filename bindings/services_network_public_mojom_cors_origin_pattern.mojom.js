// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cors_origin_pattern.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: CorsPortMatchMode
network.mojom.mojom.CorsPortMatchMode = {
  kAllowAnyPort: 0,
  kAllowOnlySpecifiedPort: 1,
};
network.mojom.mojom.CorsPortMatchModeSpec = { $: mojo.internal.Enum() };

// Enum: CorsDomainMatchMode
network.mojom.mojom.CorsDomainMatchMode = {
  kAllowSubdomains: 0,
  kAllowRegistrableDomains: 1,
  kDisallowSubdomains: 2,
};
network.mojom.mojom.CorsDomainMatchModeSpec = { $: mojo.internal.Enum() };

// Enum: CorsOriginAccessMatchPriority
network.mojom.mojom.CorsOriginAccessMatchPriority = {
  kNoMatchingOrigin: 0,
  kDefaultPriority: 1,
  kLowPriority: 2,
  kMediumPriority: 3,
  kHighPriority: 4,
  kMaxPriority: 5,
};
network.mojom.mojom.CorsOriginAccessMatchPrioritySpec = { $: mojo.internal.Enum() };

// Struct: CorsOriginPattern
network.mojom.mojom.CorsOriginPatternSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CorsOriginPattern',
      packedSize: 40,
      fields: [
        { name: 'protocol', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'domain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'domain_match_mode', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CorsDomainMatchModeSpec, nullable: false, minVersion: 0 },
        { name: 'port_match_mode', packedOffset: 20, packedBitOffset: 0, type: network.mojom.CorsPortMatchModeSpec, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 24, packedBitOffset: 0, type: network.mojom.CorsOriginAccessMatchPrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CorsOriginAccessPatterns
network.mojom.mojom.CorsOriginAccessPatternsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CorsOriginAccessPatterns',
      packedSize: 32,
      fields: [
        { name: 'source_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'allow_patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CorsOriginPatternSpec, false), nullable: false, minVersion: 0 },
        { name: 'block_patterns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CorsOriginPatternSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
