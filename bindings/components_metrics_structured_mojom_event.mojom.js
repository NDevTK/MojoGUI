// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/structured/mojom/event.mojom
// Module: metrics.structured.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.structured = metrics.structured || {};
metrics.structured.structured.mojom = metrics.structured.structured.mojom || {};


// Union: MetricValue
metrics.structured.structured.mojom.mojom.MetricValueSpec = { $: mojo.internal.Union(
    'metrics.structured.mojom.MetricValue', {
      'hmac_value': {
        'ordinal': 0,
        'type': mojo.internal.String,
      }},
      'long_value': {
        'ordinal': 1,
        'type': mojo.internal.Int64,
      }},
      'int_value': {
        'ordinal': 2,
        'type': mojo.internal.Int32,
      }},
      'double_value': {
        'ordinal': 3,
        'type': mojo.internal.Double,
      }},
      'raw_str_value': {
        'ordinal': 4,
        'type': mojo.internal.String,
      }},
      'bool_value': {
        'ordinal': 5,
        'type': mojo.internal.Bool,
      }},
    })
};

// Struct: Event
metrics.structured.structured.mojom.mojom.EventSpec = {
  $: {
    structSpec: {
      name: 'metrics.structured.mojom.Event',
      packedSize: 48,
      fields: [
        { name: 'project_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'metrics', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, metrics.structured.mojom.MetricValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'system_uptime', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 1 },
        { name: 'is_event_sequence', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 48}]
    }
  }
};
