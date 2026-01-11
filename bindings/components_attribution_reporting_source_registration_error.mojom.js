// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/source_registration_error.mojom
// Module: attribution_reporting.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};

attribution_reporting.mojom.SourceRegistrationErrorSpec = { $: mojo.internal.Enum() };

// Enum: SourceRegistrationError
attribution_reporting.mojom.SourceRegistrationError = {
  kInvalidJson: 0,
  kRootWrongType: 1,
  kDestinationMissing: 2,
  kDestinationWrongType: 3,
  kDestinationUntrustworthy: 4,
  kDestinationListUntrustworthy: 5,
  kFilterDataKeyTooLong: 6,
  kFilterDataKeyReserved: 7,
  kFilterDataDictInvalid: 8,
  kFilterDataListInvalid: 9,
  kFilterDataListValueInvalid: 10,
  kAggregationKeysKeyTooLong: 11,
  kAggregationKeysDictInvalid: 12,
  kAggregationKeysValueInvalid: 13,
  kSourceEventIdValueInvalid: 14,
  kPriorityValueInvalid: 15,
  kExpiryValueInvalid: 16,
  kEventReportWindowValueInvalid: 17,
  kAggregatableReportWindowValueInvalid: 18,
  kMaxEventLevelReportsValueInvalid: 19,
  kEventReportWindowsWrongType: 20,
  kEventReportWindowsEndTimesMissing: 21,
  kEventReportWindowsEndTimeDurationLTEStart: 22,
  kBothEventReportWindowFieldsFound: 23,
  kEventReportWindowsEndTimesListInvalid: 24,
  kEventReportWindowsStartTimeInvalid: 25,
  kEventReportWindowsEndTimeValueInvalid: 26,
  kTriggerDataMatchingValueInvalid: 27,
  kTriggerDataListInvalid: 31,
  kDuplicateTriggerData: 32,
  kExcessiveTriggerData: 34,
  kInvalidTriggerDataForMatchingMode: 36,
  kEventLevelEpsilonValueInvalid: 41,
  kDestinationLimitPriorityInvalid: 42,
  kAttributionScopeLimitInvalid: 43,
  kAttributionScopeLimitRequired: 44,
  kMaxEventStatesInvalid: 45,
  kAttributionScopesInvalid: 46,
  kAttributionScopesListInvalid: 47,
  kAttributionScopesListValueInvalid: 48,
  kAggregatableNamedBudgetsDictInvalid: 49,
  kAggregatableNamedBudgetsKeyTooLong: 50,
  kAggregatableNamedBudgetsValueInvalid: 51,
};
