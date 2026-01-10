// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/process_aggregatable_debug_report_result.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Enum: ProcessAggregatableDebugReportResult
attribution_reporting.mojom.ProcessAggregatableDebugReportResult = {
  kSuccess: 0,
  kNoDebugData: 1,
  kInsufficientBudget: 2,
  kExcessiveReports: 3,
  kGlobalRateLimitReached: 4,
  kReportingSiteRateLimitReached: 5,
  kBothRateLimitsReached: 6,
  kInternalError: 7,
};
attribution_reporting.mojom.ProcessAggregatableDebugReportResultSpec = { $: mojo.internal.Enum() };
