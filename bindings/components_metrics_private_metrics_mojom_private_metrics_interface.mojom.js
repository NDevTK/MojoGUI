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

// Struct: PrivateMetricsEntry
metrics.private_metrics.mojom.PrivateMetricsEntrySpec = {
  $: {
    structSpec: {
      name: 'metrics.private_metrics.mojom.PrivateMetricsEntry',
      packedSize: 56,
      fields: [
        { name: 'event_hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'content_hash', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'source_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'studies_of_interest', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'metrics', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'kDwa', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
