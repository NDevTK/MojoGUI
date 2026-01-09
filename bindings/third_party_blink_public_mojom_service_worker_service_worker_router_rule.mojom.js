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

// Struct: ServiceWorkerRouterRunningStatusCondition
blink.mojom.ServiceWorkerRouterRunningStatusConditionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterRunningStatusCondition',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRunningStatusEnumSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ServiceWorkerRouterRequestCondition
blink.mojom.ServiceWorkerRouterRequestConditionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterRequestCondition',
      packedSize: 48,
      fields: [
        { name: 'method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'has_mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'mode', packedOffset: 24, packedBitOffset: 0, type: network.mojom.RequestModeSpec, nullable: false },
        { name: 'has_destination', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'destination', packedOffset: 40, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'conditions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'condition', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterConditionSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'url_pattern', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SafeUrlPatternSpec, nullable: true },
        { name: 'request', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRequestConditionSpec, nullable: true },
        { name: 'running_status', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRunningStatusConditionSpec, nullable: true },
        { name: 'or_condition', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterOrConditionSpec, nullable: true },
        { name: 'not_condition', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterNotConditionSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'cache_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'cache_source', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterCacheSourceSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'condition', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterConditionSpec, nullable: false },
        { name: 'sources', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'rules', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
