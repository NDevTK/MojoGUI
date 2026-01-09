// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/conversions/conversions.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: Impression
blink.mojom.Impression = class {
  constructor(values = {}) {
    this.is_empty_attribution_src_tag = values.is_empty_attribution_src_tag !== undefined ? values.is_empty_attribution_src_tag : false;
  }
};

// Interface: AttributionHost
blink.mojom.AttributionHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AttributionHost';
  }

  registerDataHost(data_host, registration_eligibility, is_for_background_requests, reporting_origins) {
    // Method: RegisterDataHost
    // Call: RegisterDataHost(data_host, registration_eligibility, is_for_background_requests, reporting_origins)
  }

  registerNavigationDataHost(data_host, attribution_src_token) {
    // Method: RegisterNavigationDataHost
    // Call: RegisterNavigationDataHost(data_host, attribution_src_token)
  }

  notifyNavigationWithBackgroundRegistrationsWillStart(attribution_src_token, expected_registrations) {
    // Method: NotifyNavigationWithBackgroundRegistrationsWillStart
    // Call: NotifyNavigationWithBackgroundRegistrationsWillStart(attribution_src_token, expected_registrations)
  }

};

blink.mojom.AttributionHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
