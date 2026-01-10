// Auto-generated MojoJS binding
// Source: chromium_src/components/origin_matcher/origin_matcher.mojom
// Module: origin_matcher.mojom

'use strict';

// Module namespace
var origin_matcher = origin_matcher || {};
origin_matcher.mojom = origin_matcher.mojom || {};

origin_matcher.mojom.SubdomainMatchingRuleSpec = { $: {} };
origin_matcher.mojom.OriginMatcherRuleSpec = { $: {} };
origin_matcher.mojom.OriginMatcherSpec = { $: {} };

// Struct: SubdomainMatchingRule
mojo.internal.Struct(
    origin_matcher.mojom.SubdomainMatchingRuleSpec, 'origin_matcher.mojom.SubdomainMatchingRule', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('optional_host', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('optional_port', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OriginMatcherRule
mojo.internal.Struct(
    origin_matcher.mojom.OriginMatcherRuleSpec, 'origin_matcher.mojom.OriginMatcherRule', [
      mojo.internal.StructField('subdomain_matching_rule', 0, 0, origin_matcher.mojom.SubdomainMatchingRuleSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OriginMatcher
mojo.internal.Struct(
    origin_matcher.mojom.OriginMatcherSpec, 'origin_matcher.mojom.OriginMatcher', [
      mojo.internal.StructField('rules', 0, 0, mojo.internal.Array(origin_matcher.mojom.OriginMatcherRuleSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
