// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/source_registration_error.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


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
  kTriggerDataListInvalid: 28,
  kDuplicateTriggerData: 29,
  kExcessiveTriggerData: 30,
  kInvalidTriggerDataForMatchingMode: 31,
  kEventLevelEpsilonValueInvalid: 32,
  kDestinationLimitPriorityInvalid: 33,
  kAttributionScopeLimitInvalid: 34,
  kAttributionScopeLimitRequired: 35,
  kMaxEventStatesInvalid: 36,
  kAttributionScopesInvalid: 37,
  kAttributionScopesListInvalid: 38,
  kAttributionScopesListValueInvalid: 39,
  kAggregatableNamedBudgetsDictInvalid: 40,
  kAggregatableNamedBudgetsKeyTooLong: 41,
  kAggregatableNamedBudgetsValueInvalid: 42,
};
attribution_reporting.mojom.SourceRegistrationErrorSpec = { $: mojo.internal.Enum() };
