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
      packedSize: 16,
      fields: [
        { name: 'kDwa', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
