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
        { name: 'bucket', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'filtering_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: true },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
