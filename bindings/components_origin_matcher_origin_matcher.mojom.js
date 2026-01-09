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
      packedSize: 16,
      fields: [
        { name: 'optional_port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'subdomain_matching_rule', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
