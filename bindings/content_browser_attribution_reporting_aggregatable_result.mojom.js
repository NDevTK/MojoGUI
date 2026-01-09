// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/aggregatable_result.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Enum: AggregatableResult
attribution_reporting.mojom.AggregatableResult = {
  kSuccess: 0,
  kInternalError: 1,
  kNoCapacityForConversionDestination: 2,
  kNoMatchingImpressions: 3,
  kExcessiveAttributions: 4,
  kExcessiveReportingOrigins: 5,
  kNoHistograms: 6,
  kInsufficientBudget: 7,
  kNoMatchingSourceFilterData: 8,
  kNotRegistered: 9,
  kProhibitedByBrowserPolicy: 10,
  kDeduplicated: 11,
  kReportWindowPassed: 12,
  kExcessiveReports: 13,
  kInsufficientNamedBudget: 14,
};
