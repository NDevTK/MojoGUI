// Auto-generated MojoJS binding
// Source: chromium_src/components/origin_matcher/origin_matcher.mojom
// Module: origin_matcher.mojom

'use strict';

// Module namespace
var origin_matcher = origin_matcher || {};
origin_matcher.mojom = origin_matcher.mojom || {};


// Struct: SubdomainMatchingRule
origin_matcher.mojom.SubdomainMatchingRuleSpec = {
  $: {
    structSpec: {
      name: 'origin_matcher.mojom.SubdomainMatchingRule',
      packedSize: 32,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'optional_host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'optional_port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: OriginMatcherRule
origin_matcher.mojom.OriginMatcherRuleSpec = {
  $: {
    structSpec: {
      name: 'origin_matcher.mojom.OriginMatcherRule',
      packedSize: 16,
      fields: [
        { name: 'subdomain_matching_rule', packedOffset: 0, packedBitOffset: 0, type: origin_matcher.mojom.SubdomainMatchingRuleSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: OriginMatcher
origin_matcher.mojom.OriginMatcherSpec = {
  $: {
    structSpec: {
      name: 'origin_matcher.mojom.OriginMatcher',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(origin_matcher.mojom.OriginMatcherRuleSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
