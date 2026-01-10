// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/structured/mojom/event.mojom
// Module: metrics.structured.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.structured = metrics.structured || {};
metrics.structured.mojom = metrics.structured.mojom || {};

metrics.structured.mojom.MetricValueSpec = { $: {} };
metrics.structured.mojom.EventSpec = { $: {} };

// Union: MetricValue
mojo.internal.Union(
    metrics.structured.mojom.MetricValueSpec, 'metrics.structured.mojom.MetricValue', {
      'hmac_value': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'long_value': {
        'ordinal': 1,
        'type': mojo.internal.Int64,
        'nullable': false,
      },
      'int_value': {
        'ordinal': 2,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'double_value': {
        'ordinal': 3,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'raw_str_value': {
        'ordinal': 4,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'bool_value': {
        'ordinal': 5,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Struct: Event
mojo.internal.Struct(
    metrics.structured.mojom.EventSpec, 'metrics.structured.mojom.Event', [
      mojo.internal.StructField('project_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('metrics', 16, 0, mojo.internal.Map(mojo.internal.String, metrics.structured.mojom.MetricValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('system_uptime', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('is_event_sequence', 32, 0, mojo.internal.Bool, false, false, 1, undefined),
    ],
    [[0, 32], [1, 48]]);
