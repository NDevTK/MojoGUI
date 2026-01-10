// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/private_metrics/mojom/private_metrics_interface.mojom
// Module: metrics.private_metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.private_metrics = metrics.private_metrics || {};
metrics.private_metrics.mojom = metrics.private_metrics.mojom || {};


// Enum: Type
metrics.private_metrics.mojom.Type = {
  kDwa: 0,
  kDkm: 1,
};
metrics.private_metrics.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Struct: PrivateMetricsEntry
metrics.private_metrics.mojom.PrivateMetricsEntrySpec = {
  $: {
    structSpec: {
      name: 'metrics.private_metrics.mojom.PrivateMetricsEntry',
      packedSize: 64,
      fields: [
        { name: 'event_hash', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'content_hash_$flag', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'content_hash_$value', originalFieldName: 'content_hash' } },
        { name: 'content_hash_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'content_hash_$flag', originalFieldName: 'content_hash' } },
        { name: 'source_id_$flag', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'source_id_$value', originalFieldName: 'source_id' } },
        { name: 'source_id_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'source_id_$flag', originalFieldName: 'source_id' } },
        { name: 'studies_of_interest', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Bool, false), nullable: false, minVersion: 0 },
        { name: 'metrics', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'kDwa', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};
