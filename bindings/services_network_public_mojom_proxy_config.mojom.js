// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: ProxyRulesType
network.mojom.mojom.ProxyRulesType = {
  EMPTY: 0,
  PROXY_LIST: 1,
  PROXY_LIST_PER_SCHEME: 2,
};
network.mojom.mojom.ProxyRulesTypeSpec = { $: mojo.internal.Enum() };

// Enum: ProxyOverrideRuleResult
network.mojom.mojom.ProxyOverrideRuleResult = {
  kNotFound: 0,
  kResolved: 1,
};
network.mojom.mojom.ProxyOverrideRuleResultSpec = { $: mojo.internal.Enum() };

// Enum: IpProtectionProxyBypassPolicy
network.mojom.mojom.IpProtectionProxyBypassPolicy = {
  kNone: 0,
  kFirstPartyToTopLevelFrame: 1,
  kExclusionList: 2,
};
network.mojom.mojom.IpProtectionProxyBypassPolicySpec = { $: mojo.internal.Enum() };

// Struct: ProxyHostMatchingRules
network.mojom.mojom.ProxyHostMatchingRulesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyHostMatchingRules',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProxyList
network.mojom.mojom.ProxyListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyList',
      packedSize: 16,
      fields: [
        { name: 'proxies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ProxyChainSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProxyRules
network.mojom.mojom.ProxyRulesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyRules',
      packedSize: 64,
      fields: [
        { name: 'bypass_rules', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false, minVersion: 0 },
        { name: 'reverse_bypass', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 48, packedBitOffset: 0, type: network.mojom.ProxyRulesTypeSpec, nullable: false, minVersion: 0 },
        { name: 'single_proxies', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false, minVersion: 0 },
        { name: 'proxies_for_http', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false, minVersion: 0 },
        { name: 'proxies_for_https', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false, minVersion: 0 },
        { name: 'proxies_for_ftp', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false, minVersion: 0 },
        { name: 'fallback_proxies', packedOffset: 40, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: DnsProbeCondition
network.mojom.mojom.DnsProbeConditionSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DnsProbeCondition',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: url.mojom.SchemeHostPortSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyOverrideRuleResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProxyOverrideRule
network.mojom.mojom.ProxyOverrideRuleSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyOverrideRule',
      packedSize: 40,
      fields: [
        { name: 'destination_matchers', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false, minVersion: 0 },
        { name: 'exclude_destination_matchers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false, minVersion: 0 },
        { name: 'dns_conditions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.DnsProbeConditionSpec, false), nullable: false, minVersion: 0 },
        { name: 'proxy_list', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ProxyConfig
network.mojom.mojom.ProxyConfigSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfig',
      packedSize: 40,
      fields: [
        { name: 'proxy_override_rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ProxyOverrideRuleSpec, false), nullable: false, minVersion: 0 },
        { name: 'auto_detect', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'from_system', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pac_url', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigStringSpec, nullable: false, minVersion: 0 },
        { name: 'pac_mandatory', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'proxy_rules', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ProxyRulesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
