// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

network.mojom.ProxyRulesTypeSpec = { $: mojo.internal.Enum() };
network.mojom.ProxyOverrideRuleResultSpec = { $: mojo.internal.Enum() };
network.mojom.IpProtectionProxyBypassPolicySpec = { $: mojo.internal.Enum() };
network.mojom.ProxyHostMatchingRulesSpec = { $: {} };
network.mojom.ProxyListSpec = { $: {} };
network.mojom.ProxyRulesSpec = { $: {} };
network.mojom.DnsProbeConditionSpec = { $: {} };
network.mojom.ProxyOverrideRuleSpec = { $: {} };
network.mojom.ProxyConfigSpec = { $: {} };

// Enum: ProxyRulesType
network.mojom.ProxyRulesType = {
  EMPTY: 0,
  PROXY_LIST: 1,
  PROXY_LIST_PER_SCHEME: 2,
};

// Enum: ProxyOverrideRuleResult
network.mojom.ProxyOverrideRuleResult = {
  kNotFound: 0,
  kResolved: 1,
};

// Enum: IpProtectionProxyBypassPolicy
network.mojom.IpProtectionProxyBypassPolicy = {
  kNone: 0,
  kFirstPartyToTopLevelFrame: 1,
  kExclusionList: 2,
};

// Struct: ProxyHostMatchingRules
mojo.internal.Struct(
    network.mojom.ProxyHostMatchingRulesSpec, 'network.mojom.ProxyHostMatchingRules', [
      mojo.internal.StructField('rules', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProxyList
mojo.internal.Struct(
    network.mojom.ProxyListSpec, 'network.mojom.ProxyList', [
      mojo.internal.StructField('proxies', 0, 0, mojo.internal.Array(network.mojom.ProxyChainSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProxyRules
mojo.internal.Struct(
    network.mojom.ProxyRulesSpec, 'network.mojom.ProxyRules', [
      mojo.internal.StructField('bypass_rules', 0, 0, network.mojom.ProxyHostMatchingRulesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, network.mojom.ProxyRulesTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('single_proxies', 16, 0, network.mojom.ProxyListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proxies_for_http', 24, 0, network.mojom.ProxyListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proxies_for_https', 32, 0, network.mojom.ProxyListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proxies_for_ftp', 40, 0, network.mojom.ProxyListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fallback_proxies', 48, 0, network.mojom.ProxyListSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reverse_bypass', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: DnsProbeCondition
mojo.internal.Struct(
    network.mojom.DnsProbeConditionSpec, 'network.mojom.DnsProbeCondition', [
      mojo.internal.StructField('host', 0, 0, url.mojom.SchemeHostPortSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, network.mojom.ProxyOverrideRuleResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProxyOverrideRule
mojo.internal.Struct(
    network.mojom.ProxyOverrideRuleSpec, 'network.mojom.ProxyOverrideRule', [
      mojo.internal.StructField('destination_matchers', 0, 0, network.mojom.ProxyHostMatchingRulesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('exclude_destination_matchers', 8, 0, network.mojom.ProxyHostMatchingRulesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dns_conditions', 16, 0, mojo.internal.Array(network.mojom.DnsProbeConditionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('proxy_list', 24, 0, network.mojom.ProxyListSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProxyConfig
mojo.internal.Struct(
    network.mojom.ProxyConfigSpec, 'network.mojom.ProxyConfig', [
      mojo.internal.StructField('proxy_override_rules', 0, 0, mojo.internal.Array(network.mojom.ProxyOverrideRuleSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pac_url', 8, 0, mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proxy_rules', 16, 0, network.mojom.ProxyRulesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auto_detect', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('from_system', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pac_mandatory', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);
