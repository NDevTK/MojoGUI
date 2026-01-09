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
