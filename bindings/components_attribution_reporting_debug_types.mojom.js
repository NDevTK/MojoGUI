// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/debug_types.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Enum: DebugDataType
attribution_reporting.mojom.mojom.DebugDataType = {
  kSourceDestinationLimit: 0,
  kSourceNoised: 1,
  kSourceStorageLimit: 2,
  kSourceSuccess: 3,
  kSourceUnknownError: 4,
  kSourceDestinationRateLimit: 5,
  kTriggerNoMatchingSource: 6,
  kTriggerNoMatchingFilterData: 7,
  kTriggerReportingOriginLimit: 8,
  kTriggerEventDeduplicated: 9,
  kTriggerEventNoMatchingConfigurations: 10,
  kTriggerEventNoise: 11,
  kTriggerEventLowPriority: 12,
  kTriggerEventExcessiveReports: 13,
  kTriggerEventStorageLimit: 14,
  kTriggerEventReportWindowPassed: 15,
  kTriggerAggregateDeduplicated: 16,
  kTriggerAggregateNoContributions: 17,
  kTriggerAggregateInsufficientBudget: 18,
  kTriggerAggregateStorageLimit: 19,
  kTriggerAggregateReportWindowPassed: 20,
  kTriggerAggregateExcessiveReports: 21,
  kTriggerUnknownError: 22,
  kOsSourceDelegated: 23,
  kOsTriggerDelegated: 24,
  kTriggerEventReportWindowNotStarted: 25,
  kTriggerEventNoMatchingTriggerData: 26,
  kHeaderParsingError: 27,
  kSourceReportingOriginPerSiteLimit: 28,
  kTriggerEventAttributionsPerSourceDestinationLimit: 29,
  kTriggerAggregateAttributionsPerSourceDestinationLimit: 30,
  kSourceChannelCapacityLimit: 31,
  kSourceTriggerStateCardinalityLimit: 32,
  kSourceDestinationGlobalRateLimit: 33,
  kSourceReportingOriginLimit: 34,
  kSourceDestinationPerDayRateLimit: 35,
  kSourceDestinationLimitReplaced: 36,
  kSourceScopesChannelCapacityLimit: 37,
  kSourceMaxEventStatesLimit: 38,
  kTriggerAggregateInsufficientNamedBudget: 39,
};
attribution_reporting.mojom.mojom.DebugDataTypeSpec = { $: mojo.internal.Enum() };
