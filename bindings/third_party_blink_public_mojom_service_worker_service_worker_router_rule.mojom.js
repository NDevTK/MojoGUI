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
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'destination', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'conditions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'condition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'not_condition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'cache_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'cache_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
