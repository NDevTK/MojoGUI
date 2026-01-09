// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/trigger_registration_error.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Enum: TriggerRegistrationError
attribution_reporting.mojom.TriggerRegistrationError = {
  kInvalidJson: 0,
  kRootWrongType: 1,
  kFiltersWrongType: 2,
  kFiltersValueInvalid: 3,
  kFiltersLookbackWindowValueInvalid: 4,
  kFiltersUsingReservedKey: 5,
  kFiltersListValueInvalid: 6,
  kFiltersListLookbackWindowValueInvalid: 7,
  kFiltersListUsingReservedKey: 8,
  kAggregatableValuesWrongType: 9,
  kAggregatableValuesKeyTooLong: 10,
  kAggregatableValuesListValuesFieldMissing: 11,
  kAggregatableValuesValueInvalid: 12,
  kAggregatableValuesListKeyTooLong: 13,
  kAggregatableValuesListValueInvalid: 14,
  kAggregatableTriggerDataWrongType: 15,
  kAggregatableTriggerDataKeyPieceMissing: 16,
  kAggregatableTriggerDataSourceKeysInvalid: 17,
  kAggregatableTriggerDataKeyPieceInvalid: 18,
  kEventTriggerDataWrongType: 19,
  kEventTriggerDataValueInvalid: 20,
  kEventPriorityValueInvalid: 21,
  kEventDedupKeyValueInvalid: 22,
  kAggregationCoordinatorValueInvalid: 23,
  kAggregatableDedupKeyValueInvalid: 24,
  kAggregatableDedupKeyWrongType: 25,
  kAggregatableSourceRegistrationTimeValueInvalid: 26,
  kTriggerContextIdInvalidValue: 27,
  kTriggerContextIdInvalidSourceRegistrationTimeConfig: 28,
  kAggregatableFilteringIdMaxBytesInvalidValue: 29,
  kAggregatableFilteringIdsMaxBytesInvalidSourceRegistrationTimeConfig: 30,
  kAttributionScopesInvalid: 31,
  kAttributionScopesValueInvalid: 32,
  kAggregatableNamedBudgetWrongType: 33,
  kAggregatableNamedBudgetNameInvalid: 34,
};
attribution_reporting.mojom.TriggerRegistrationErrorSpec = { $: mojo.internal.Enum() };
