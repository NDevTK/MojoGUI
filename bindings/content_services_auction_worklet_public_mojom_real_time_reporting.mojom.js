// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/real_time_reporting.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Struct: RealTimeReportingContribution
auction_worklet.mojom.mojom.RealTimeReportingContributionSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.RealTimeReportingContribution',
      packedSize: 32,
      fields: [
        { name: 'bucket', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'priority_weight', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'latency_threshold_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'latency_threshold_$value', originalFieldName: 'latency_threshold' } },
        { name: 'latency_threshold_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'latency_threshold_$flag', originalFieldName: 'latency_threshold' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
