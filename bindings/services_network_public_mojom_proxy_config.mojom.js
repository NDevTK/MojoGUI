// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_config.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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
network.mojom.ProxyHostMatchingRulesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyHostMatchingRules',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProxyList
network.mojom.ProxyListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyList',
      packedSize: 16,
      fields: [
        { name: 'proxies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProxyRules
network.mojom.ProxyRulesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyRules',
      packedSize: 72,
      fields: [
        { name: 'bypass_rules', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false },
        { name: 'reverse_bypass', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ProxyRulesTypeSpec, nullable: false },
        { name: 'single_proxies', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'proxies_for_http', packedOffset: 40, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'proxies_for_https', packedOffset: 48, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'proxies_for_ftp', packedOffset: 56, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'fallback_proxies', packedOffset: 64, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DnsProbeCondition
network.mojom.DnsProbeConditionSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DnsProbeCondition',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: url.mojom.SchemeHostPortSpec, nullable: false },
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ProxyOverrideRuleResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProxyOverrideRule
network.mojom.ProxyOverrideRuleSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyOverrideRule',
      packedSize: 40,
      fields: [
        { name: 'destination_matchers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false },
        { name: 'exclude_destination_matchers', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false },
        { name: 'dns_conditions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'proxy_list', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProxyConfig
network.mojom.ProxyConfigSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyConfig',
      packedSize: 48,
      fields: [
        { name: 'proxy_override_rules', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'auto_detect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'from_system', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'pac_url', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.BigStringSpec, nullable: false },
        { name: 'pac_mandatory', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'proxy_rules', packedOffset: 40, packedBitOffset: 0, type: network.mojom.ProxyRulesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
