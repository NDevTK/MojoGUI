// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/private_metrics/mojom/private_metrics_interface.mojom
// Module: metrics.private_metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.private_metrics = metrics.private_metrics || {};
metrics.private_metrics.mojom = metrics.private_metrics.mojom || {};

metrics.private_metrics.mojom.TypeSpec = { $: mojo.internal.Enum() };
metrics.private_metrics.mojom.PrivateMetricsEntrySpec = { $: {} };

// Enum: Type
metrics.private_metrics.mojom.Type = {
  kDwa: 0,
  kDkm: 1,
};

// Struct: PrivateMetricsEntry
mojo.internal.Struct(
    metrics.private_metrics.mojom.PrivateMetricsEntrySpec, 'metrics.private_metrics.mojom.PrivateMetricsEntry', [
      mojo.internal.StructField('event_hash', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('content_hash_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_hash_$value', originalFieldName: 'content_hash' }),
      mojo.internal.StructField('content_hash_$value', 16, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_hash_$flag', originalFieldName: 'content_hash' }),
      mojo.internal.StructField('source_id_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'source_id_$value', originalFieldName: 'source_id' }),
      mojo.internal.StructField('source_id_$value', 32, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'source_id_$flag', originalFieldName: 'source_id' }),
      mojo.internal.StructField('studies_of_interest', 40, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('metrics', 48, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('kDwa', 56, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 72]]);
