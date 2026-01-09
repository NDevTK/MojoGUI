// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/aggregation_service/aggregatable_report.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: AggregatableReportHistogramContribution
blink.mojom.AggregatableReportHistogramContributionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AggregatableReportHistogramContribution',
      packedSize: 32,
      fields: [
        { name: 'bucket', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'filtering_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
