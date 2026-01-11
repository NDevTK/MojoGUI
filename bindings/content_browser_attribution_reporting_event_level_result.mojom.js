// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/event_level_result.mojom
// Module: attribution_reporting.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};

attribution_reporting.mojom.EventLevelResultSpec = { $: mojo.internal.Enum() };

// Enum: EventLevelResult
attribution_reporting.mojom.EventLevelResult = {
  kSuccess: 0,
  kSuccessDroppedLowerPriority: 1,
  kInternalError: 2,
  kNoCapacityForConversionDestination: 3,
  kNoMatchingImpressions: 4,
  kDeduplicated: 5,
  kExcessiveAttributions: 6,
  kPriorityTooLow: 7,
  kNeverAttributedSource: 8,
  kExcessiveReportingOrigins: 9,
  kNoMatchingSourceFilterData: 10,
  kProhibitedByBrowserPolicy: 11,
  kNoMatchingConfigurations: 12,
  kExcessiveReports: 13,
  kFalselyAttributedSource: 14,
  kReportWindowPassed: 15,
  kNotRegistered: 16,
  kReportWindowNotStarted: 17,
  kNoMatchingTriggerData: 18,
};
