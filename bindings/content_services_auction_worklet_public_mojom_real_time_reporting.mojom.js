// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/real_time_reporting.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};


// Struct: RealTimeReportingContribution
auction_worklet.mojom.RealTimeReportingContributionSpec = {
  $: {
    structSpec: {
      name: 'auction_worklet.mojom.RealTimeReportingContribution',
      packedSize: 24,
      fields: [
        { name: 'priority_weight', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'bucket', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'latency_threshold', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
