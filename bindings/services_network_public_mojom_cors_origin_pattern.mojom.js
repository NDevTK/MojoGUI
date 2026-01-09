// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cors_origin_pattern.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: CorsPortMatchMode
network.mojom.CorsPortMatchMode = {
  kAllowAnyPort: 0,
  kAllowOnlySpecifiedPort: 1,
};

// Enum: CorsDomainMatchMode
network.mojom.CorsDomainMatchMode = {
  kAllowSubdomains: 0,
  kAllowRegistrableDomains: 1,
  kDisallowSubdomains: 2,
};

// Enum: CorsOriginAccessMatchPriority
network.mojom.CorsOriginAccessMatchPriority = {
  kNoMatchingOrigin: 0,
  kDefaultPriority: 1,
  kLowPriority: 2,
  kMediumPriority: 3,
  kHighPriority: 4,
  kMaxPriority: 5,
};

// Struct: CorsOriginPattern
network.mojom.CorsOriginPatternSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CorsOriginPattern',
      packedSize: 56,
      fields: [
        { name: 'protocol', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'domain', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'domain_match_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'port_match_mode', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'priority', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'port', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CorsOriginAccessPatterns
network.mojom.CorsOriginAccessPatternsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CorsOriginAccessPatterns',
      packedSize: 32,
      fields: [
        { name: 'source_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'allow_patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'block_patterns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
