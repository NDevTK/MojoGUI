// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/aggregation_service/aggregatable_report.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AggregatableReportHistogramContributionSpec = { $: {} };

// Struct: AggregatableReportHistogramContribution
mojo.internal.Struct(
    blink.mojom.AggregatableReportHistogramContributionSpec, 'blink.mojom.AggregatableReportHistogramContribution', [
      mojo.internal.StructField('bucket', 0, 0, mojo_base.mojom.Uint128Spec, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('filtering_id_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'filtering_id_$value', originalFieldName: 'filtering_id' }),
      mojo.internal.StructField('filtering_id_$value', 8, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'filtering_id_$flag', originalFieldName: 'filtering_id' }),
    ],
    [[0, 32]]);
