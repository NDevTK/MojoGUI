// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/store_source_result.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Enum: StoreSourceResult
attribution_reporting.mojom.mojom.StoreSourceResult = {
  kSuccess: 0,
  kInternalError: 1,
  kInsufficientSourceCapacity: 2,
  kInsufficientUniqueDestinationCapacity: 3,
  kExcessiveReportingOrigins: 4,
  kProhibitedByBrowserPolicy: 5,
  kSuccessNoised: 6,
  kDestinationReportingLimitReached: 7,
  kDestinationGlobalLimitReached: 8,
  kDestinationBothLimitsReached: 9,
  kReportingOriginsPerSiteLimitReached: 10,
  kExceedsMaxChannelCapacity: 11,
  kExceedsMaxTriggerStateCardinality: 12,
  kDestinationPerDayReportingLimitReached: 13,
  kExceedsMaxScopesChannelCapacity: 14,
  kExceedsMaxEventStatesLimit: 15,
};
attribution_reporting.mojom.mojom.StoreSourceResultSpec = { $: mojo.internal.Enum() };
