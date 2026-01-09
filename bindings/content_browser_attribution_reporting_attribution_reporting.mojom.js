// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/attribution_reporting.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Enum: ReportType
attribution_reporting.mojom.ReportType = {
  kEventLevel: 0,
  kAggregatableAttribution: 1,
  kNullAggregatable: 2,
};

// Enum: RegistrationType
attribution_reporting.mojom.RegistrationType = {
  kSource: 0,
  kTrigger: 1,
};

// Enum: OsRegistrationResult
attribution_reporting.mojom.OsRegistrationResult = {
  kPassedToOs: 0,
  kInvalidRegistrationUrl: 1,
  kProhibitedByBrowserPolicy: 2,
  kRejectedByOs: 3,
};
