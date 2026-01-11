// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/store_source_result.mojom
// Module: attribution_reporting.mojom

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};

attribution_reporting.mojom.StoreSourceResultSpec = { $: mojo.internal.Enum() };

// Enum: StoreSourceResult
attribution_reporting.mojom.StoreSourceResult = {
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
  kExceedsMaxTriggerStateCardinality: 13,
  kDestinationPerDayReportingLimitReached: 14,
  kExceedsMaxScopesChannelCapacity: 15,
  kExceedsMaxEventStatesLimit: 16,
};
