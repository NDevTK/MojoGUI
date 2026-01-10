// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_router_rule.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var blink = blink || {};

blink.mojom.ServiceWorkerRouterRunningStatusEnumSpec = { $: mojo.internal.Enum() };
blink.mojom.ServiceWorkerRouterSourceSpec = { $: {} };
blink.mojom.ServiceWorkerRouterRunningStatusConditionSpec = { $: {} };
blink.mojom.ServiceWorkerRouterRequestConditionSpec = { $: {} };
blink.mojom.ServiceWorkerRouterOrConditionSpec = { $: {} };
blink.mojom.ServiceWorkerRouterNotConditionSpec = { $: {} };
blink.mojom.ServiceWorkerRouterConditionSpec = { $: {} };
blink.mojom.ServiceWorkerRouterNetworkSourceSpec = { $: {} };
blink.mojom.ServiceWorkerRouterRaceNetworkAndFetchEventSourceSpec = { $: {} };
blink.mojom.ServiceWorkerRouterFetchEventSourceSpec = { $: {} };
blink.mojom.ServiceWorkerRouterCacheSourceSpec = { $: {} };
blink.mojom.ServiceWorkerRouterRaceNetworkAndCacheSourceSpec = { $: {} };
blink.mojom.ServiceWorkerRouterRuleSpec = { $: {} };
blink.mojom.ServiceWorkerRouterRulesSpec = { $: {} };

// Enum: ServiceWorkerRouterRunningStatusEnum
blink.mojom.ServiceWorkerRouterRunningStatusEnum = {
  kRunning: 0,
  kNotRunning: 1,
};

// Union: ServiceWorkerRouterSource
mojo.internal.Union(
    blink.mojom.ServiceWorkerRouterSourceSpec, 'blink.mojom.ServiceWorkerRouterSource', {
      'network_source': {
        'ordinal': 0,
        'type': blink.mojom.ServiceWorkerRouterNetworkSourceSpec.$,
        'nullable': false,
      },
      'race_network_and_fetch_event_source': {
        'ordinal': 1,
        'type': blink.mojom.ServiceWorkerRouterRaceNetworkAndFetchEventSourceSpec.$,
        'nullable': false,
      },
      'fetch_event_source': {
        'ordinal': 2,
        'type': blink.mojom.ServiceWorkerRouterFetchEventSourceSpec.$,
        'nullable': false,
      },
      'cache_source': {
        'ordinal': 3,
        'type': blink.mojom.ServiceWorkerRouterCacheSourceSpec.$,
        'nullable': false,
      },
      'race_network_and_cache_source': {
        'ordinal': 4,
        'type': blink.mojom.ServiceWorkerRouterRaceNetworkAndCacheSourceSpec.$,
        'nullable': false,
      },
    });

// Struct: ServiceWorkerRouterRunningStatusCondition
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterRunningStatusConditionSpec, 'blink.mojom.ServiceWorkerRouterRunningStatusCondition', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerRouterRunningStatusEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceWorkerRouterRequestCondition
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterRequestConditionSpec, 'blink.mojom.ServiceWorkerRouterRequestCondition', [
      mojo.internal.StructField('method', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, network.mojom.RequestModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination', 16, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_mode', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_destination', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ServiceWorkerRouterOrCondition
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterOrConditionSpec, 'blink.mojom.ServiceWorkerRouterOrCondition', [
      mojo.internal.StructField('conditions', 0, 0, mojo.internal.Array(blink.mojom.ServiceWorkerRouterConditionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceWorkerRouterNotCondition
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterNotConditionSpec, 'blink.mojom.ServiceWorkerRouterNotCondition', [
      mojo.internal.StructField('condition', 0, 0, blink.mojom.ServiceWorkerRouterConditionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceWorkerRouterCondition
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterConditionSpec, 'blink.mojom.ServiceWorkerRouterCondition', [
      mojo.internal.StructField('url_pattern', 0, 0, blink.mojom.SafeUrlPatternSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('request', 8, 0, blink.mojom.ServiceWorkerRouterRequestConditionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('running_status', 16, 0, blink.mojom.ServiceWorkerRouterRunningStatusConditionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('or_condition', 24, 0, blink.mojom.ServiceWorkerRouterOrConditionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('not_condition', 32, 0, blink.mojom.ServiceWorkerRouterNotConditionSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ServiceWorkerRouterNetworkSource
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterNetworkSourceSpec, 'blink.mojom.ServiceWorkerRouterNetworkSource', [
    ],
    [[0, 8]]);

// Struct: ServiceWorkerRouterRaceNetworkAndFetchEventSource
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterRaceNetworkAndFetchEventSourceSpec, 'blink.mojom.ServiceWorkerRouterRaceNetworkAndFetchEventSource', [
    ],
    [[0, 8]]);

// Struct: ServiceWorkerRouterFetchEventSource
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterFetchEventSourceSpec, 'blink.mojom.ServiceWorkerRouterFetchEventSource', [
    ],
    [[0, 8]]);

// Struct: ServiceWorkerRouterCacheSource
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterCacheSourceSpec, 'blink.mojom.ServiceWorkerRouterCacheSource', [
      mojo.internal.StructField('cache_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceWorkerRouterRaceNetworkAndCacheSource
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterRaceNetworkAndCacheSourceSpec, 'blink.mojom.ServiceWorkerRouterRaceNetworkAndCacheSource', [
      mojo.internal.StructField('cache_source', 0, 0, blink.mojom.ServiceWorkerRouterCacheSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ServiceWorkerRouterRule
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterRuleSpec, 'blink.mojom.ServiceWorkerRouterRule', [
      mojo.internal.StructField('condition', 0, 0, blink.mojom.ServiceWorkerRouterConditionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sources', 8, 0, mojo.internal.Array(blink.mojom.ServiceWorkerRouterSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ServiceWorkerRouterRules
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterRulesSpec, 'blink.mojom.ServiceWorkerRouterRules', [
      mojo.internal.StructField('rules', 0, 0, mojo.internal.Array(blink.mojom.ServiceWorkerRouterRuleSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
