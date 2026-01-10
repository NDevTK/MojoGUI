// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/attribution.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.AttributionSupportSpec = { $: mojo.internal.Enum() };
network.mojom.AttributionReportingEligibilitySpec = { $: mojo.internal.Enum() };

// Enum: AttributionSupport
network.mojom.AttributionSupport = {
  kWeb: 0,
  kWebAndOs: 1,
  kOs: 2,
  kNone: 3,
  kUnset: 4,
};

// Enum: AttributionReportingEligibility
network.mojom.AttributionReportingEligibility = {
  kUnset: 0,
  kEmpty: 1,
  kEventSource: 2,
  kNavigationSource: 3,
  kTrigger: 4,
  kEventSourceOrTrigger: 5,
};
