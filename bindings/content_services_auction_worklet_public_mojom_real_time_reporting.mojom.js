// Auto-generated MojoJS binding
// Source: chromium_src/content/services/auction_worklet/public/mojom/real_time_reporting.mojom
// Module: auction_worklet.mojom

'use strict';

// Module namespace
var auction_worklet = auction_worklet || {};
auction_worklet.mojom = auction_worklet.mojom || {};

auction_worklet.mojom.RealTimeReportingContributionSpec = { $: {} };

// Struct: RealTimeReportingContribution
mojo.internal.Struct(
    auction_worklet.mojom.RealTimeReportingContributionSpec, 'auction_worklet.mojom.RealTimeReportingContribution', [
      mojo.internal.StructField('bucket', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('priority_weight', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('latency_threshold_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'latency_threshold_$value', originalFieldName: 'latency_threshold' }),
      mojo.internal.StructField('latency_threshold_$value', 20, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'latency_threshold_$flag', originalFieldName: 'latency_threshold' }),
    ],
    [[0, 32]]);
