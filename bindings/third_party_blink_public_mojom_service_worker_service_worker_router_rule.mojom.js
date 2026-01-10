// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_router_rule.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ServiceWorkerRouterRunningStatusEnum
blink.mojom.ServiceWorkerRouterRunningStatusEnum = {
  kRunning: 0,
  kNotRunning: 1,
};
blink.mojom.ServiceWorkerRouterRunningStatusEnumSpec = { $: mojo.internal.Enum() };

// Union: ServiceWorkerRouterSource
blink.mojom.ServiceWorkerRouterSourceSpec = { $: mojo.internal.Union(
    'blink.mojom.ServiceWorkerRouterSource', {
      'network_source': {
        'ordinal': 0,
        'type': blink.mojom.ServiceWorkerRouterNetworkSourceSpec,
      }},
      'race_network_and_fetch_event_source': {
        'ordinal': 1,
        'type': blink.mojom.ServiceWorkerRouterRaceNetworkAndFetchEventSourceSpec,
      }},
      'fetch_event_source': {
        'ordinal': 2,
        'type': blink.mojom.ServiceWorkerRouterFetchEventSourceSpec,
      }},
      'cache_source': {
        'ordinal': 3,
        'type': blink.mojom.ServiceWorkerRouterCacheSourceSpec,
      }},
      'race_network_and_cache_source': {
        'ordinal': 4,
        'type': blink.mojom.ServiceWorkerRouterRaceNetworkAndCacheSourceSpec,
      }},
    })
};

// Struct: ServiceWorkerRouterRunningStatusCondition
blink.mojom.ServiceWorkerRouterRunningStatusConditionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterRunningStatusCondition',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRunningStatusEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ServiceWorkerRouterRequestCondition
blink.mojom.ServiceWorkerRouterRequestConditionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterRequestCondition',
      packedSize: 32,
      fields: [
        { name: 'method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'has_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 12, packedBitOffset: 0, type: network.mojom.RequestModeSpec, nullable: false, minVersion: 0 },
        { name: 'has_destination', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 16, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ServiceWorkerRouterOrCondition
blink.mojom.ServiceWorkerRouterOrConditionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterOrCondition',
      packedSize: 16,
      fields: [
        { name: 'conditions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ServiceWorkerRouterConditionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ServiceWorkerRouterNotCondition
blink.mojom.ServiceWorkerRouterNotConditionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterNotCondition',
      packedSize: 16,
      fields: [
        { name: 'condition', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterConditionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ServiceWorkerRouterCondition
blink.mojom.ServiceWorkerRouterConditionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterCondition',
      packedSize: 48,
      fields: [
        { name: 'url_pattern', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SafeUrlPatternSpec, nullable: true, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRequestConditionSpec, nullable: true, minVersion: 0 },
        { name: 'running_status', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRunningStatusConditionSpec, nullable: true, minVersion: 0 },
        { name: 'or_condition', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterOrConditionSpec, nullable: true, minVersion: 0 },
        { name: 'not_condition', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterNotConditionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ServiceWorkerRouterNetworkSource
blink.mojom.ServiceWorkerRouterNetworkSourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterNetworkSource',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ServiceWorkerRouterRaceNetworkAndFetchEventSource
blink.mojom.ServiceWorkerRouterRaceNetworkAndFetchEventSourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterRaceNetworkAndFetchEventSource',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ServiceWorkerRouterFetchEventSource
blink.mojom.ServiceWorkerRouterFetchEventSourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterFetchEventSource',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ServiceWorkerRouterCacheSource
blink.mojom.ServiceWorkerRouterCacheSourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterCacheSource',
      packedSize: 16,
      fields: [
        { name: 'cache_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ServiceWorkerRouterRaceNetworkAndCacheSource
blink.mojom.ServiceWorkerRouterRaceNetworkAndCacheSourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterRaceNetworkAndCacheSource',
      packedSize: 16,
      fields: [
        { name: 'cache_source', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterCacheSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ServiceWorkerRouterRule
blink.mojom.ServiceWorkerRouterRuleSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterRule',
      packedSize: 24,
      fields: [
        { name: 'condition', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterConditionSpec, nullable: false, minVersion: 0 },
        { name: 'sources', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ServiceWorkerRouterSourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ServiceWorkerRouterRules
blink.mojom.ServiceWorkerRouterRulesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterRules',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ServiceWorkerRouterRuleSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
