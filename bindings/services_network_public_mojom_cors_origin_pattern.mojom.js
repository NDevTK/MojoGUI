// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cors_origin_pattern.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.CorsPortMatchModeSpec = { $: mojo.internal.Enum() };
network.mojom.CorsDomainMatchModeSpec = { $: mojo.internal.Enum() };
network.mojom.CorsOriginAccessMatchPrioritySpec = { $: mojo.internal.Enum() };
network.mojom.CorsOriginPatternSpec = { $: {} };
network.mojom.CorsOriginAccessPatternsSpec = { $: {} };

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
mojo.internal.Struct(
    network.mojom.CorsOriginPatternSpec, 'network.mojom.CorsOriginPattern', [
      mojo.internal.StructField('protocol', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 28, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('domain_match_mode', 16, 0, network.mojom.CorsDomainMatchModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('port_match_mode', 20, 0, network.mojom.CorsPortMatchModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('priority', 24, 0, network.mojom.CorsOriginAccessMatchPrioritySpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CorsOriginAccessPatterns
mojo.internal.Struct(
    network.mojom.CorsOriginAccessPatternsSpec, 'network.mojom.CorsOriginAccessPatterns', [
      mojo.internal.StructField('source_origin', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('allow_patterns', 8, 0, mojo.internal.Array(network.mojom.CorsOriginPatternSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('block_patterns', 16, 0, mojo.internal.Array(network.mojom.CorsOriginPatternSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
