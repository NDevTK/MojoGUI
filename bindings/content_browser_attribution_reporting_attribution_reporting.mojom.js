// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/attribution_reporting/attribution_reporting.mojom
// Module: attribution_reporting.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};

attribution_reporting.mojom.ReportTypeSpec = { $: mojo.internal.Enum() };
attribution_reporting.mojom.RegistrationTypeSpec = { $: mojo.internal.Enum() };
attribution_reporting.mojom.OsRegistrationResultSpec = { $: mojo.internal.Enum() };

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
  kInvalidRegistrationUrl: 2,
  kProhibitedByBrowserPolicy: 3,
  kRejectedByOs: 5,
};
