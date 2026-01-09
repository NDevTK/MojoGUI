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
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'proxies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'bypass_rules', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyRulesTypeSpec, nullable: false },
        { name: 'single_proxies', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'proxies_for_http', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'proxies_for_https', packedOffset: 32, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'proxies_for_ftp', packedOffset: 40, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'fallback_proxies', packedOffset: 48, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
        { name: 'reverse_bypass', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: url.mojom.SchemeHostPortSpec, nullable: false },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyOverrideRuleResultSpec, nullable: false },
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
        { name: 'destination_matchers', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false },
        { name: 'exclude_destination_matchers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ProxyHostMatchingRulesSpec, nullable: false },
        { name: 'dns_conditions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'proxy_list', packedOffset: 24, packedBitOffset: 0, type: network.mojom.ProxyListSpec, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'proxy_override_rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'pac_url', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigStringSpec, nullable: false },
        { name: 'proxy_rules', packedOffset: 16, packedBitOffset: 0, type: network.mojom.ProxyRulesSpec, nullable: false },
        { name: 'auto_detect', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'from_system', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'pac_mandatory', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
