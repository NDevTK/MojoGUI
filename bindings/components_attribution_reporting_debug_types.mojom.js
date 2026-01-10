// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/debug_types.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};

attribution_reporting.mojom.DebugDataTypeSpec = { $: mojo.internal.Enum() };

// Enum: DebugDataType
attribution_reporting.mojom.DebugDataType = {
  kSourceDestinationLimit: 0,
  kSourceNoised: 1,
  kSourceStorageLimit: 2,
  kSourceSuccess: 3,
  kSourceUnknownError: 4,
  kSourceDestinationRateLimit: 5,
  kTriggerNoMatchingSource: 6,
  kTriggerNoMatchingFilterData: 8,
  kTriggerReportingOriginLimit: 9,
  kTriggerEventDeduplicated: 10,
  kTriggerEventNoMatchingConfigurations: 11,
  kTriggerEventNoise: 12,
  kTriggerEventLowPriority: 13,
  kTriggerEventExcessiveReports: 14,
  kTriggerEventStorageLimit: 15,
  kTriggerEventReportWindowPassed: 16,
  kTriggerAggregateDeduplicated: 17,
  kTriggerAggregateNoContributions: 18,
  kTriggerAggregateInsufficientBudget: 19,
  kTriggerAggregateStorageLimit: 20,
  kTriggerAggregateReportWindowPassed: 21,
  kTriggerAggregateExcessiveReports: 22,
  kTriggerUnknownError: 23,
  kOsSourceDelegated: 24,
  kOsTriggerDelegated: 25,
  kTriggerEventReportWindowNotStarted: 26,
  kTriggerEventNoMatchingTriggerData: 27,
  kHeaderParsingError: 28,
  kSourceReportingOriginPerSiteLimit: 29,
  kTriggerEventAttributionsPerSourceDestinationLimit: 30,
  kTriggerAggregateAttributionsPerSourceDestinationLimit: 31,
  kSourceChannelCapacityLimit: 32,
  kSourceTriggerStateCardinalityLimit: 33,
  kSourceDestinationGlobalRateLimit: 34,
  kSourceReportingOriginLimit: 35,
  kSourceDestinationPerDayRateLimit: 36,
  kSourceDestinationLimitReplaced: 37,
  kSourceScopesChannelCapacityLimit: 38,
  kSourceMaxEventStatesLimit: 39,
  kTriggerAggregateInsufficientNamedBudget: 40,
};
