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
        { name: 'bucket', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.Uint128Spec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'filtering_id_$flag', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'filtering_id_$value', originalFieldName: 'filtering_id' } },
        { name: 'filtering_id_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'filtering_id_$flag', originalFieldName: 'filtering_id' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
