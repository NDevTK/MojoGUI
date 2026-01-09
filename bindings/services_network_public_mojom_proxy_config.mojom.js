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
      packedSize: 16,
      fields: [
        { name: 'fallback_proxies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'proxy_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'proxy_rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
