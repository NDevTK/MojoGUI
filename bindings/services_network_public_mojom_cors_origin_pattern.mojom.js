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
      packedSize: 16,
      fields: [
        { name: 'priority', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'block_patterns', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
