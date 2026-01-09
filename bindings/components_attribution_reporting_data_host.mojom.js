// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/data_host.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Enum: DataAvailableCallsite
attribution_reporting.mojom.DataAvailableCallsite = {
  kBlink: 0,
  kBrowser: 1,
};

// Interface: DataHost
attribution_reporting.mojom.DataHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'attribution_reporting.mojom.DataHost';
  }

  sourceDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    // Method: SourceDataAvailable
    // Call: SourceDataAvailable(reporting_origin, data, was_fetched_via_service_worker)
  }

  triggerDataAvailable(reporting_origin, data, was_fetched_via_service_worker) {
    // Method: TriggerDataAvailable
    // Call: TriggerDataAvailable(reporting_origin, data, was_fetched_via_service_worker)
  }

  osSourceDataAvailable(registration, was_fetched_via_service_worker) {
    // Method: OsSourceDataAvailable
    // Call: OsSourceDataAvailable(registration, was_fetched_via_service_worker)
  }

  osTriggerDataAvailable(registration, was_fetched_via_service_worker) {
    // Method: OsTriggerDataAvailable
    // Call: OsTriggerDataAvailable(registration, was_fetched_via_service_worker)
  }

  reportRegistrationHeaderError(reporting_origin, error) {
    // Method: ReportRegistrationHeaderError
    // Call: ReportRegistrationHeaderError(reporting_origin, error)
  }

};

attribution_reporting.mojom.DataHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
